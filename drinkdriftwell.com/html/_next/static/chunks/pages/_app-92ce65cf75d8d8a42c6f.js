_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"03A+":function(t,e,n){var o=n("JTzB"),r=n("ExA7"),c=Object.prototype,i=c.hasOwnProperty,u=c.propertyIsEnumerable,s=o(function(){return arguments}())?o:function(t){return r(t)&&i.call(t,"callee")&&!u.call(t,"callee")};t.exports=s},"1TCz":function(t,e,n){"use strict";n.r(e);var o=n("nKUr"),r=n("rePB"),c=n("w1+e"),i=n("q1tI"),u=n("Qns6"),s=n.n(u);function a(){var t=Object(c.b)(),e=t.soundContext,n=t.setSoundContext,r=Object(i.useState)(!1),u=r[0],a=r[1];Object(i.useEffect)((function(){return setTimeout((function(){a(!0)}),3250),function(){}}),[]);var d=function(){return Object(o.jsxs)("svg",{viewBox:"0 0 100 100",className:s.a.muted,children:[Object(o.jsx)("title",{children:"Mute audio"}),Object(o.jsx)("path",{d:"M49.75 14.11a3.587 3.587 0 00-3.92.78L24.95 35.76H3.6c-1.98 0-3.6 1.61-3.6 3.6v21.28c0 1.98 1.61 3.6 3.6 3.6h21.36l20.88 20.88c.69.69 1.61 1.06 2.54 1.06.46 0 .93-.09 1.38-.28a3.581 3.581 0 002.22-3.32V17.43a3.595 3.595 0 00-2.23-3.32zM84.87 50l10.47-10.47a2.764 2.764 0 10-3.91-3.91L80.96 46.09 70.49 35.62a2.764 2.764 0 10-3.91 3.91L77.04 50 66.58 60.47a2.764 2.764 0 001.96 4.72c.71 0 1.42-.27 1.96-.81l10.47-10.47 10.47 10.47c.54.54 1.25.81 1.96.81s1.42-.27 1.96-.81a2.764 2.764 0 000-3.91L84.87 50z"})]})},f=function(){return Object(o.jsxs)("svg",{viewBox:"0 0 100 100",className:s.a.playing,children:[Object(o.jsx)("title",{children:"Play audio"}),Object(o.jsx)("path",{d:"M50.13 13.83a3.62 3.62 0 00-3.95.79L25.15 35.65H3.62c-2 0-3.62 1.63-3.62 3.62v21.45c0 2 1.63 3.62 3.62 3.62h21.52l21.04 21.04a3.603 3.603 0 003.95.78 3.615 3.615 0 002.24-3.35V17.18c0-1.47-.88-2.79-2.24-3.35zM71.1 38.8a2.79 2.79 0 00-3.59 4.27 9.048 9.048 0 010 13.86 2.79 2.79 0 00-.34 3.93c.55.66 1.34.99 2.14.99.63 0 1.27-.21 1.79-.65 3.32-2.79 5.22-6.87 5.22-11.2s-1.9-8.42-5.22-11.2z"}),Object(o.jsx)("path",{d:"M78.71 29.73A2.79 2.79 0 0075.12 34a20.86 20.86 0 017.46 16c0 6.26-2.77 12.13-7.6 16.12a2.792 2.792 0 00-.38 3.93c.55.67 1.35 1.01 2.15 1.01.62 0 1.25-.21 1.77-.64A26.388 26.388 0 0088.15 50c.01-7.84-3.43-15.23-9.44-20.27z"}),Object(o.jsx)("path",{d:"M86.32 20.66a2.79 2.79 0 00-3.59 4.27A32.67 32.67 0 0194.42 50c0 9.8-4.34 19.01-11.91 25.25a2.792 2.792 0 00-.38 3.93c.55.67 1.35 1.01 2.15 1.01.62 0 1.25-.21 1.77-.64C94.92 72.24 100 61.47 100 50c0-11.34-4.99-22.04-13.68-29.34z"})]})};return Object(o.jsx)(o.Fragment,{children:u&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{className:s.a.toggle,onClick:function(){n(!e)},"aria-label":e?"Allow sound effects":"Mute sound effects",children:e?Object(o.jsx)(f,{}):Object(o.jsx)(d,{})})})})}var d=n("fTpD"),f=n.n(d);function l(){var t,e=Object(c.b)(),n=e.soundContext,u=e.soundEffect,s=e.setSoundEffect,a=Object(i.useRef)(),d=(t={},Object(r.a)(t,"bowls",["UI_TibetanBowl_1","UI_TibetanBowl_2","UI_TibetanBowl_3","UI_TibetanBowl_4","UI_TibetanBowl_5","UI_TibetanBowl_6"]),Object(r.a)(t,"rainsticks",["UI_RAIN_STICK_1","UI_RAIN_STICK_2"]),Object(r.a)(t,"river",["UI_RIVER_1","UI_RIVER_2","UI_RIVER_3"]),t);return Object(i.useEffect)((function(){n&&u[0]&&(a.current.pause(),a.current.currentTime=0,a.current.play())}),[u]),Object(o.jsx)(o.Fragment,{children:u[0]&&n&&Object(o.jsx)("audio",{style:{display:"none"},ref:a,src:"/sounds/".concat(f()(d[u[0]]),".mp3"),preload:"auto",onEnded:function(){s([])}})})}n("lfCk"),n("H/sG"),n("CcXQ"),n("pRI8"),n("5iDs");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=function(t){var e=t.Component,n=t.pageProps;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(c.a,{children:[Object(o.jsx)(e,p({},n)),Object(o.jsx)(a,{}),Object(o.jsx)(l,{})]}),Object(o.jsxs)("div",{hidden:!0,children:[Object(o.jsx)("span",{id:"new-window-0",children:"Opens in a new window"}),Object(o.jsx)("span",{id:"new-window-1",children:"Opens an external site"}),Object(o.jsx)("span",{id:"new-window-2",children:"Opens an external site in a new window"})]})]})}},"5iDs":function(t,e,n){},"6sVZ":function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},"7GkX":function(t,e,n){var o=n("b80T"),r=n("A90E"),c=n("MMmD");t.exports=function(t){return c(t)?o(t):r(t)}},"98ov":function(t,e,n){var o=n("VhX2"),r=n("P/G1");t.exports=function(t){return o(r(t))}},A90E:function(t,e,n){var o=n("6sVZ"),r=n("V6Ve"),c=Object.prototype.hasOwnProperty;t.exports=function(t){if(!o(t))return r(t);var e=[];for(var n in Object(t))c.call(t,n)&&"constructor"!=n&&e.push(n);return e}},AP2z:function(t,e,n){var o=n("nmnc"),r=Object.prototype,c=r.hasOwnProperty,i=r.toString,u=o?o.toStringTag:void 0;t.exports=function(t){var e=c.call(t,u),n=t[u];try{t[u]=void 0;var o=!0}catch(s){}var r=i.call(t);return o&&(e?t[u]=n:delete t[u]),r}},B8du:function(t,e){t.exports=function(){return!1}},CcXQ:function(t,e,n){},DSRE:function(t,e,n){(function(t){var o=n("Kz5y"),r=n("B8du"),c=e&&!e.nodeType&&e,i=c&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===c?o.Buffer:void 0,s=(u?u.isBuffer:void 0)||r;t.exports=s}).call(this,n("LY0y")(t))},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},"H/sG":function(t,e,n){},JTzB:function(t,e,n){var o=n("NykK"),r=n("ExA7");t.exports=function(t){return r(t)&&"[object Arguments]"==o(t)}},JmpY:function(t,e,n){var o=n("eUgh");t.exports=function(t,e){return o(e,(function(e){return t[e]}))}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var o=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,c=o||r||Function("return this")();t.exports=c},LY0y:function(t,e){(function(e){t.exports=function(){var t={880:function(t){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}},n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={exports:{}},c=!0;try{t[e](r,r.exports,o),c=!1}finally{c&&delete n[e]}return r.exports}return o.ab=e+"/",o(880)}()}).call(this,"/")},MMmD:function(t,e,n){var o=n("lSCD"),r=n("shjB");t.exports=function(t){return null!=t&&r(t.length)&&!o(t)}},NykK:function(t,e,n){var o=n("nmnc"),r=n("AP2z"),c=n("KfNM"),i=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?r(t):c(t)}},"P/G1":function(t,e,n){var o=n("JmpY"),r=n("7GkX");t.exports=function(t){return null==t?[]:o(t,r(t))}},Qns6:function(t,e,n){t.exports={toggle:"soundToggle_toggle__88rCZ",fadeIn:"soundToggle_fadeIn__23-oJ",playing:"soundToggle_playing__18P-M",muted:"soundToggle_muted__2q4ul"}},"UNi/":function(t,e){t.exports=function(t,e){for(var n=-1,o=Array(t);++n<t;)o[n]=e(n);return o}},V6Ve:function(t,e,n){var o=n("kekF")(Object.keys,Object);t.exports=o},VhX2:function(t,e,n){var o=n("vlbB");t.exports=function(t){var e=t.length;return e?t[o(0,e-1)]:void 0}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("ntbh"))},Z0cm:function(t,e){var n=Array.isArray;t.exports=n},b80T:function(t,e,n){var o=n("UNi/"),r=n("03A+"),c=n("Z0cm"),i=n("DSRE"),u=n("wJg7"),s=n("c6wG"),a=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=c(t),d=!n&&r(t),f=!n&&!d&&i(t),l=!n&&!d&&!f&&s(t),b=n||d||f||l,p=b?o(t.length,String):[],v=p.length;for(var j in t)!e&&!a.call(t,j)||b&&("length"==j||f&&("offset"==j||"parent"==j)||l&&("buffer"==j||"byteLength"==j||"byteOffset"==j)||u(j,v))||p.push(j);return p}},c6wG:function(t,e,n){var o=n("dD9F"),r=n("sEf8"),c=n("mdPL"),i=c&&c.isTypedArray,u=i?r(i):o;t.exports=u},dD9F:function(t,e,n){var o=n("NykK"),r=n("shjB"),c=n("ExA7"),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return c(t)&&r(t.length)&&!!i[o(t)]}},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,o=null==t?0:t.length,r=Array(o);++n<o;)r[n]=e(t[n],n,t);return r}},fTpD:function(t,e,n){var o=n("VhX2"),r=n("98ov"),c=n("Z0cm");t.exports=function(t){return(c(t)?o:r)(t)}},kekF:function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},lSCD:function(t,e,n){var o=n("NykK"),r=n("GoyQ");t.exports=function(t){if(!r(t))return!1;var e=o(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},lfCk:function(t,e,n){!function(){"use strict";function t(t){var e=!0,n=!1,o=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function i(t){var e=t.type,n=t.tagName;return!("INPUT"!==n||!r[e]||t.readOnly)||"TEXTAREA"===n&&!t.readOnly||!!t.isContentEditable}function u(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function s(t){t.hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added"))}function a(n){n.metaKey||n.altKey||n.ctrlKey||(c(t.activeElement)&&u(t.activeElement),e=!0)}function d(t){e=!1}function f(t){c(t.target)&&(e||i(t.target))&&u(t.target)}function l(t){c(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),s(t.target))}function b(t){"hidden"===document.visibilityState&&(n&&(e=!0),p())}function p(){document.addEventListener("mousemove",j),document.addEventListener("mousedown",j),document.addEventListener("mouseup",j),document.addEventListener("pointermove",j),document.addEventListener("pointerdown",j),document.addEventListener("pointerup",j),document.addEventListener("touchmove",j),document.addEventListener("touchstart",j),document.addEventListener("touchend",j)}function v(){document.removeEventListener("mousemove",j),document.removeEventListener("mousedown",j),document.removeEventListener("mouseup",j),document.removeEventListener("pointermove",j),document.removeEventListener("pointerdown",j),document.removeEventListener("pointerup",j),document.removeEventListener("touchmove",j),document.removeEventListener("touchstart",j),document.removeEventListener("touchend",j)}function j(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,v())}document.addEventListener("keydown",a,!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",b,!0),p(),t.addEventListener("focus",f,!0),t.addEventListener("blur",l,!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!==typeof window&&"undefined"!==typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!==typeof document&&t(document)}()},mdPL:function(t,e,n){(function(t){var o=n("WFqU"),r=e&&!e.nodeType&&e,c=r&&"object"==typeof t&&t&&!t.nodeType&&t,i=c&&c.exports===r&&o.process,u=function(){try{var t=c&&c.require&&c.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(e){}}();t.exports=u}).call(this,n("LY0y")(t))},nmnc:function(t,e,n){var o=n("Kz5y").Symbol;t.exports=o},ntbh:function(t,e){(function(e){t.exports=function(){var t={149:function(t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"===typeof window&&(e=window)}t.exports=e}},n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={exports:{}},c=!0;try{t[e](r,r.exports,o),c=!1}finally{c&&delete n[e]}return r.exports}return o.ab=e+"/",o(149)}()}).call(this,"/")},pRI8:function(t,e,n){},rePB:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},sEf8:function(t,e){t.exports=function(t){return function(e){return t(e)}}},shjB:function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},vlbB:function(t,e){var n=Math.floor,o=Math.random;t.exports=function(t,e){return t+n(o()*(e-t+1))}},"w1+e":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u}));var o=n("nKUr"),r=n("q1tI"),c=Object(r.createContext)(),i=function(){var t=Object(r.useContext)(c);if(void 0===t)throw new Error("useSoundContext must be used within a SoundProvider");return t},u=function(t){var e=t.children,n=Object(r.useState)(!1),i=n[0],u=n[1],s=Object(r.useState)([]),a={soundContext:i,setSoundContext:u,soundEffect:s[0],setSoundEffect:s[1]};return Object(o.jsx)(c.Provider,{value:a,children:e})}},wJg7:function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==o||"symbol"!=o&&n.test(t))&&t>-1&&t%1==0&&t<e}}},[[0,0,2,1]]]);