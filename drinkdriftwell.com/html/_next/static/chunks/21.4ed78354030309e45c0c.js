(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"d+zG":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("nKUr"),c=n("rePB"),o=n("ODXe"),i=n("Womt"),a=n("q1tI"),u=n("MHn+"),s=n("QA/Y"),j=n("2H6Y"),b=n("W+P2");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(){return Object(r.jsx)(r.Fragment,{})}function O(e){var t=e.background,n=void 0!==t&&t,r=Object(u.h)(),c=r.gl,j=r.scene,b=Object(u.g)(s.a,[["px.hdr","nx.hdr","py.hdr","ny.hdr","pz.hdr","nz.hdr"]],(function(e){e.setDataType(i.UnsignedByteType),e.setPath("/hdri/")})),p=Object(o.a)(b,1)[0];return Object(a.useEffect)((function(){var e=new i.PMREMGenerator(c);e.compileEquirectangularShader();var t=e.fromCubemap(p);return p.dispose(),e.dispose(),n&&(j.background=t.texture),j.environment=t.texture,function(){return j.environment=j.background=null}}),[p]),null}function d(e){var t=Object(a.useRef)(),n=Object(u.h)().setDefaultCamera;return Object(a.useEffect)((function(){n(t.current)}),[]),Object(u.f)((function(){return t.current.updateMatrixWorld()})),Object(r.jsx)("perspectiveCamera",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({ref:t},e))}function l(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=window.devicePixelRatio}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(u.a,{concurrent:!0,pixelRatio:t.current,onCreated:function(e){var t=e.gl;t.toneMapping=i.ACESFilmicToneMapping,t.outputEncoding=i.sRGBEncoding},children:[Object(r.jsx)(d,{position:[0,-2.5,60],fov:60,zoom:2}),Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)(f,{}),children:[Object(r.jsx)("ambientLight",{intensity:1,color:16777215}),Object(r.jsx)("rectAreaLight",{intensity:.75,position:[0,25,120],width:100,height:200,onUpdate:function(e){return e.lookAt(new i.Vector3(0,-10,0))}}),Object(r.jsx)("rectAreaLight",{intensity:.8,position:[0,30,20],width:200,height:200,onUpdate:function(e){return e.lookAt(new i.Vector3(0,-10,0))}}),Object(r.jsx)(O,{}),Object(r.jsx)(b.a,{position:[0,-2,0],scale:[7,7,7],rotation:[0,Math.radians(-180),0],scrollPercentage:e.scrollPercentage,initRotation:e.initRotation})]})]})})}j.a.init(),Math.radians=function(e){return e*Math.PI/180}}}]);