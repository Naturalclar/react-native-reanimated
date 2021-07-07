import { defineAnimation } from './util';
import { Animation, AnimationCallback, Timestamp } from './commonTypes';
import { Platform } from 'react-native';

interface DecayConfig {
  deceleration?: number;
  velocityFactor?: number;
  clamp?: number[];
  velocity?: number;
}

export function withDecay(
  userConfig: DecayConfig,
  callback?: AnimationCallback
): Animation {
  'worklet';

  return defineAnimation(0, () => {
    'worklet';
    const config: DecayConfig = {
      deceleration: 0.998,
      velocityFactor: Platform.OS !== 'web' ? 1 : 1000,
    };
    if (userConfig) {
      Object.keys(userConfig).forEach((key) => (config[key] = userConfig[key]));
    }

    const VELOCITY_EPS = Platform.OS !== 'web' ? 1 : 1 / 20;
    const SLOPE_FACTOR = 0.1;

    function decay(animation: Animation, now: number): boolean {
      const {
        lastTimestamp,
        startTimestamp,
        initialVelocity,
        current,
        velocity,
      } = animation;

      const deltaTime = Math.min(now - lastTimestamp, 64);
      const v =
        velocity *
        Math.exp(
          -(1 - config.deceleration) * (now - startTimestamp) * SLOPE_FACTOR
        );
      animation.current =
        current + (v * config.velocityFactor * deltaTime) / 1000; // /1000 because time is in ms not in s
      animation.velocity = v;
      animation.lastTimestamp = now;

      if (config.clamp) {
        if (initialVelocity < 0 && animation.current <= config.clamp[0]) {
          animation.current = config.clamp[0];
          return true;
        } else if (
          initialVelocity > 0 &&
          animation.current >= config.clamp[1]
        ) {
          animation.current = config.clamp[1];
          return true;
        }
      }

      if (Math.abs(v) < VELOCITY_EPS) {
        return true;
      }
    }

    function validateConfig(): void {
      if (config.clamp) {
        if (Array.isArray(config.clamp)) {
          if (config.clamp.length !== 2) {
            console.error(
              `clamp array must contain 2 items but is given ${config.clamp.length}`
            );
          }
        } else {
          console.error(
            `config.clamp must be an array but is ${typeof config.clamp}`
          );
        }
      }
      if (config.velocityFactor <= 0) {
        console.error(
          `config.velocityFactor must be greather then 0 but is ${config.velocityFactor}`
        );
      }
    }

    function onStart(
      animation: Animation,
      value: number,
      now: Timestamp
    ): void {
      animation.current = value;
      animation.lastTimestamp = now;
      animation.startTimestamp = now;
      animation.initialVelocity = config.velocity;
      validateConfig();
    }

    return {
      onFrame: decay,
      onStart,
      velocity: config.velocity || 0,
      callback,
    };
  });
}