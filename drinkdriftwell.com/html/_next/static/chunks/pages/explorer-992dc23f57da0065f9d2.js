_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"5ruE":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return O}));var r=e("rePB"),o=e("ODXe"),i=e("nKUr"),c=e("Womt"),u=e("q1tI"),a=e("MHn+"),f=e("57c0"),l=e("QA/Y"),s=e("2H6Y"),p=e("W+P2");function b(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function d(t){var n=t.background,e=void 0!==n&&n,r=Object(a.h)(),i=r.gl,f=r.scene,s=Object(a.g)(l.a,[["px.hdr","nx.hdr","py.hdr","ny.hdr","pz.hdr","nz.hdr"]],(function(t){t.setDataType(c.UnsignedByteType),t.setPath("/hdri/")})),p=Object(o.a)(s,1)[0];return Object(u.useEffect)((function(){var t=new c.PMREMGenerator(i);t.compileEquirectangularShader();var n=t.fromCubemap(p);return p.dispose(),t.dispose(),e&&(f.background=n.texture),f.environment=n.texture,function(){return f.environment=f.background=null}}),[p]),null}function y(t){var n=Object(u.useRef)(),e=Object(a.h)().setDefaultCamera;return Object(u.useEffect)((function(){e(n.current)}),[]),Object(a.f)((function(){return n.current.updateMatrixWorld()})),Object(i.jsx)("perspectiveCamera",function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?b(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({ref:n},t))}function O(){var t=Object(u.useState)(),n=t[0],e=t[1];return Object(u.useEffect)((function(){e(window.devicePixelRatio)}),[]),Object(i.jsx)("div",{style:{width:"100vw",height:"100vh"},children:Object(i.jsxs)(a.a,{concurrent:!0,pixelRatio:n,onCreated:function(t){var n=t.gl;n.toneMapping=c.ACESFilmicToneMapping,n.outputEncoding=c.sRGBEncoding},children:[Object(i.jsx)(y,{position:[0,-2.5,75],fov:50,zoom:2}),Object(i.jsxs)(u.Suspense,{fallback:null,children:[Object(i.jsx)("ambientLight",{intensity:1,color:16777215}),Object(i.jsx)("rectAreaLight",{intensity:1.25,position:[0,50,40],width:250,height:150,onUpdate:function(t){return t.lookAt(new c.Vector3(0,-20,0))}}),Object(i.jsx)(d,{}),Object(i.jsx)(p.a,{position:[0,0,0],scale:[5,5,5],rotation:[0,0,0],scrollPercentage:0,initRotation:{y:Math.PI,z:0}})]}),Object(i.jsx)(f.a,{})]})})}s.a.init()},BsWD:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("a3WO");function o(t,n){if(t){if("string"===typeof t)return Object(r.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(t,n):void 0}}},JX7q:function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return r}))},KQm4:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("a3WO");var o=e("BsWD");function i(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},ODXe:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("BsWD");function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}}(t,n)||Object(r.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},YuTi:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},a3WO:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,"a",(function(){return r}))},mrSG:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return i})),e.d(n,"d",(function(){return c})),e.d(n,"g",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"e",(function(){return f})),e.d(n,"f",(function(){return l}));var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function o(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var i=function(){return(i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function c(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}function u(t){var n="function"===typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,n){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),c=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return c}function f(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(a(arguments[n]));return t}function l(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var i=arguments[n],c=0,u=i.length;c<u;c++,o++)r[o]=i[c];return r}},rePB:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))},sAjj:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explorer",function(){return e("5ruE")}])},wx14:function(t,n,e){"use strict";function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}e.d(n,"a",(function(){return r}))},yLpj:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},zLVn:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(n,"a",(function(){return r}))}},[["sAjj",1,0,5,4,9,2,10]]]);