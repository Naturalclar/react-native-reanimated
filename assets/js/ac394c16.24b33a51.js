"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[1327],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9601:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o={id:"useAnimatedScrollHandler",title:"useAnimatedScrollHandler",sidebar_label:"useAnimatedScrollHandler"},i=void 0,s={unversionedId:"api/useAnimatedScrollHandler",id:"version-2.3.0-alpha.1/api/useAnimatedScrollHandler",isDocsHomePage:!1,title:"useAnimatedScrollHandler",description:"This is a convenience hook that returns an event handler reference which can be used with React Native's scrollable components.",source:"@site/versioned_docs/version-2.3.0-alpha.1/api/useAnimatedScrollHandler.md",sourceDirName:"api",slug:"/api/useAnimatedScrollHandler",permalink:"/react-native-reanimated/docs/2.3.0-alpha.1/api/useAnimatedScrollHandler",version:"2.3.0-alpha.1",frontMatter:{id:"useAnimatedScrollHandler",title:"useAnimatedScrollHandler",sidebar_label:"useAnimatedScrollHandler"},sidebar:"version-2.3.0-alpha.1/docs",previous:{title:"useDerivedValue",permalink:"/react-native-reanimated/docs/2.3.0-alpha.1/api/useDerivedValue"},next:{title:"useAnimatedGestureHandler",permalink:"/react-native-reanimated/docs/2.3.0-alpha.1/api/useAnimatedGestureHandler"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],d={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is a convenience hook that returns an event handler reference which can be used with React Native's scrollable components."),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"scrollhandlerorhandlersobject-object-with-worklets"},(0,l.kt)("inlineCode",{parentName:"h4"},"scrollHandlerOrHandlersObject")," ","[object with worklets]"),(0,l.kt)("p",null,"Object containing any of the following keys: ",(0,l.kt)("inlineCode",{parentName:"p"},"onScroll"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"onBeginDrag"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"onEndDrag"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"onMomentumBegin"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"onMomentumEnd"),".\nThe values in the object should be individual worklets.\nEach of the worklet will be triggered when the corresponding event is dispatched on the connected Scrollable component."),(0,l.kt)("p",null,"Each of the event worklets will receive the following parameters when called:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"event")," ","[object]"," - event object carrying the information about the scroll.\nThe payload can differ depending on the type of the event (",(0,l.kt)("inlineCode",{parentName:"p"},"onScroll"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"onBeginDrag"),", etc.).\nPlease consult ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/scrollview"},"React Native's ScrollView documentation")," to learn about scroll event structure.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"context")," ","[object]"," - plain JS object that can be used to store some state.\nThis object will persist in between scroll event occurrences and you can read and write any data to it.\nWhen there are several event handlers provided in a form of an object of worklets, the ",(0,l.kt)("inlineCode",{parentName:"p"},"context")," object will be shared in between the worklets allowing them to communicate with each other."))),(0,l.kt)("h4",{id:"dependencies-array"},(0,l.kt)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),(0,l.kt)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{11}","{11}":!0},"const App = () => {\n  const [state, setState] = useState(0);\n  const sv = useSharedValue(0);\n\n  const handler = useAnimatedScrollHandler(\n    {\n      onEndDrag: (e) => {\n        sv.value = state;\n      },\n    },\n    dependencies\n  );\n  //...\n  return <></>\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in any of the callbacks' bodies or any values from their closure(variables from outer scope used in worklet),"),(0,l.kt)("li",{parentName:"ul"},"empty array(",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if any of the callbacks' bodies changes,"),(0,l.kt)("li",{parentName:"ul"},"array of values(",(0,l.kt)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in any of the callbacks bodies or in any values from the given array.")),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("p",null,"The hook returns a handler object that can be hooked into a scrollable container.\nNote that in order for the handler to be properly triggered, you should use containers that are wrapped with ",(0,l.kt)("inlineCode",{parentName:"p"},"Animated")," (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"Animated.ScrollView")," and not just ",(0,l.kt)("inlineCode",{parentName:"p"},"ScrollView"),").\nThe handler should be passed under ",(0,l.kt)("inlineCode",{parentName:"p"},"onScroll")," parameter regardless of whether it is configured to receive only scroll or also momentum or drag events."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"In the below example we define a scroll handler by passing a single worklet handler.\nThe worklet handler is triggered for each of the scroll events dispatched to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Animated.ScrollView")," component to which we attach the handler."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10-12,29}","{10-12,29}":!0},"import Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  useAnimatedScrollHandler,\n} from 'react-native-reanimated';\n\nfunction ScrollExample() {\n  const translationY = useSharedValue(0);\n\n  const scrollHandler = useAnimatedScrollHandler((event) => {\n    translationY.value = event.contentOffset.y;\n  });\n\n  const stylez = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateY: translationY.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, stylez]} />\n      <Animated.ScrollView\n        style={styles.scroll}\n        onScroll={scrollHandler}\n        scrollEventThrottle={16}>\n        <Content />\n      </Animated.ScrollView>\n    </View>\n  );\n}\n")),(0,l.kt)("p",null,"If we are interested in receiving drag or momentum events instead of passing a single worklet object we can pass an object of worklets.\nBelow for convenience, we only show how the ",(0,l.kt)("inlineCode",{parentName:"p"},"scrollHandler")," should be defined in such a case.\nThe place where we attach handler to a scrollable component remains unchanged regardless of the event types we want to receive:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const isScrolling = useSharedValue(false);\n\nconst scrollHandler = useAnimatedScrollHandler({\n  onScroll: (event) => {\n    translationY.value = event.contentOffset.y;\n  },\n  onBeginDrag: (e) => {\n    isScrolling.value = true;\n  },\n  onEndDrag: (e) => {\n    isScrolling.value = false;\n  },\n});\n")))}u.isMDXComponent=!0}}]);