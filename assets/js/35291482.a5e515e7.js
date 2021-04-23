(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},184:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/TOM-c88886f32dc3559614cf30146e4c6c99.png"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(118)),o={slug:"/Introduction",title:"React Native Boilerplate \ud83d\udc19"},c={unversionedId:"Introduction/1_RNBoilerplate",id:"Introduction/1_RNBoilerplate",isDocsHomePage:!1,title:"React Native Boilerplate \ud83d\udc19",description:"This project is a React Native boilerplate that can be used to kick-start a mobile application.",source:"@site/docs/1_Introduction/1_1_RNBoilerplate.md",sourceDirName:"1_Introduction",slug:"/Introduction",permalink:"/react-native-boilerplate/docs/Introduction",editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs/docs/1_Introduction/1_1_RNBoilerplate.md",version:"current",sidebarPosition:1,frontMatter:{slug:"/Introduction",title:"React Native Boilerplate \ud83d\udc19"},sidebar:"tutorialSidebar",next:{title:"Installation \ud83d\udcbf",permalink:"/react-native-boilerplate/docs/Installation"}},l=[{value:"Architecture \ud83e\uddf1",id:"architecture-\ud83e\uddf1",children:[]},{value:"Content \ud83e\uddf3",id:"content-\ud83e\uddf3",children:[]},{value:"Directory layout \ud83d\uddc2\ufe0f",id:"directory-layout-\ufe0f",children:[]},{value:"Updates \ud83d\udd50",id:"updates-",children:[]}],s={toc:l};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{align:"center"},Object(i.b)("img",{width:"300",height:"300",src:a(184).default})),Object(i.b)("p",null,"This project is a ",Object(i.b)("a",{parentName:"p",href:"https://facebook.github.io/react-native/"},"React Native")," boilerplate that can be used to kick-start a mobile application."),Object(i.b)("p",null,"The boilerplate provides ",Object(i.b)("strong",{parentName:"p"},"an architecture optimized for building solid cross-platform mobile applications")," through separation of concerns between the UI and business logic.\nWe made this full documentation so that each piece of code that lands in your application can be understood and used."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Don't forget !!")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives \ud83c\udf08 \u2600\ufe0f"))),Object(i.b)("h2",{id:"architecture-\ud83e\uddf1"},"Architecture \ud83e\uddf1"),Object(i.b)("p",null,"The driving goal of the architecture of the boilerplate is separation of concerns and using React Native at its best."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Using modern Javascript"),"\nSo many javascript features are indispensable now like hooks, functional component and really cool dependencies.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Presentational components are separated from containers"),"."),Object(i.b)("p",{parentName:"li"},"  Presentational components are small components that are concerned with ",Object(i.b)("em",{parentName:"p"},"how things look"),".\nContainers usually define whole application screens and are concerned with ",Object(i.b)("em",{parentName:"p"},"how things work"),": they include presentational components and wire everything together."),Object(i.b)("p",{parentName:"li"},"  If you are interested you can ",Object(i.b)("a",{parentName:"p",href:"https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"},"read more about it here"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"State is managed using global ",Object(i.b)("a",{parentName:"strong",href:"https://redux.js.org/"},"Redux")," stores"),"."),Object(i.b)("p",{parentName:"li"},'  When applications grow, sharing state and its changes can become very hard. Questions like "How can I access this data?" or "When did this change?" are common, just like passing data around components just to be able to use it in nested components.'),Object(i.b)("p",{parentName:"li"},"  With Redux, state is shared using global ",Object(i.b)("em",{parentName:"p"},"stores"),", and changes are predictable: ",Object(i.b)("em",{parentName:"p"},"actions")," are applied by ",Object(i.b)("em",{parentName:"p"},"reducers")," to the state. While the pattern can be a bit much for small projects, the clear separation of responsibilities and predictability helps with bigger applications."),Object(i.b)("p",{parentName:"li"},"  If you are interested you can ",Object(i.b)("a",{parentName:"p",href:"https://redux.js.org/introduction/motivation"},"read more about it here"),".\n"))),Object(i.b)("h2",{id:"content-\ud83e\uddf3"},"Content \ud83e\uddf3"),Object(i.b)("p",null,"The boilerplate contains:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("a",{parentName:"li",href:"https://facebook.github.io/react-native/"},"React Native")," (v",Object(i.b)("strong",{parentName:"li"},"0.64.0"),') application (in "',Object(i.b)("a",{parentName:"li",href:"https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md"},"ejected"),'" mode to allow using dependencies that rely on native code)'),Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("a",{parentName:"li",href:"#directory-layout"},"clear directory layout")," to provide a base architecture for your application"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://redux.js.org/"},"Redux")," (v",Object(i.b)("strong",{parentName:"li"},"4.0.5"),") to help manage state"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/rt2zz/redux-persist"},"Redux Persist")," (v",Object(i.b)("strong",{parentName:"li"},"6.0.0"),") to persist the Redux state"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://reactnavigation.org/"},"React Navigation")," (v",Object(i.b)("strong",{parentName:"li"},"5"),") to handle routing and navigation in the app, with a splash screen setup by default"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/infinitered/reduxsauce"},"redux toolkit")," (v",Object(i.b)("strong",{parentName:"li"},"1.5.0"),") to make redux easier"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/axios/axios"},"axios")," (v",Object(i.b)("strong",{parentName:"li"},"0.21.1"),") to make API calls"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://prettier.io/"},"prettier")," and ",Object(i.b)("a",{parentName:"li",href:"https://eslint.org/"},"eslint")," preconfigured for React Native"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://fbflipper.com/"},"react-native-flipper")," (v",Object(i.b)("strong",{parentName:"li"},"0.75.1"),") to debug react-native and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/jk-gan/redux-flipper"},"redux-flipper")," (v",Object(i.b)("strong",{parentName:"li"},"1.4.2"),") to debug redux")),Object(i.b)("p",null,"The boilerplate includes an example (displaying fake user data) from UI components to the business logic. The example is easy to remove so that it doesn't get in the way."),Object(i.b)("h2",{id:"directory-layout-\ufe0f"},"Directory layout \ud83d\uddc2\ufe0f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Assets"),": assets (image, audio files, ...) used by the application"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Components"),": presentational components"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Config"),": configuration of the application"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Containers"),": container components, i.e. the application's screens"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Navigators"),": react navigation navigators "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Services"),": application services, e.g. API clients"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Stores"),": redux ",Object(i.b)("a",{parentName:"li",href:"https://redux.js.org/basics"},"actions, reducers and stores")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Translations"),": application strings, you can add languages files and be able to translate your app strings"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"src/Theme"),": base styles for the application")),Object(i.b)("h2",{id:"updates-"},"Updates \ud83d\udd50"),Object(i.b)("p",null,"The boilerplate will follow new React-Native releases as soon as libraries and tools used here are compatible."))}p.isMDXComponent=!0}}]);