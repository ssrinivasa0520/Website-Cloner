(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{fDUc:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),c=t("YKUD"),i=t("KQm4"),a=t("q1tI"),u=t("PGlZ"),o=t("vIJm"),d=t.n(o);function l(){var e=Object(a.useRef)(),n=Object(u.c)({threshold:.5}),t=n.ref,c=n.inView,o=Object(a.useState)(!0),l=o[0],h=o[1],s=Object(a.useCallback)((function(e){w.current=e,t(e)}),[t]),v=Object(a.useRef)({total:3,height:90,speed:.25}),f=Object(a.useRef)(null),w=Object(a.useRef)(null),j=Object(a.useRef)(null),g=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:90,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.25;v.current={total:n,height:t,speed:r};var c=v.current.total+2;j.current=null===(e=Object(i.a)(Array(c)))||void 0===e?void 0:e.map((function(e,n){return[(n-1)*window.innerWidth/v.current.total,0,n*v.current.height,v.current.speed]}))},b=function(e,n){return(n-e)/2+e},_=function(){var n;if(!v.current)return!1;var t=f.current,r=t.canvas.height;t.clearRect(0,0,t.canvas.width,t.canvas.height),j.current=null===(n=j.current)||void 0===n?void 0:n.map((function(n){return[n[0],v.current.height/2*Math.cos(n[2]/20)+r/(2*e.current),n[2]+n[3],n[3]]})),t.fillStyle="#0373FF",t.beginPath(),t.moveTo(0,t.canvas.height);for(var c=0;c<v.current.total+1;)t.quadraticCurveTo(j.current[c][0],j.current[c][1],b(j.current[c][0],j.current[c+1][0]),b(j.current[c][1],j.current[c+1][1])),c++;t.lineTo(j.current[j.current.length-1][0],j.current[j.current.length-1][1]),t.lineTo(window.innerWidth,t.canvas.height),t.closePath(),t.fill()};function m(){if(v.current){var n,t=w.current.getBoundingClientRect(),r=t.width,c=t.height;if(w.current.width!==r*e.current)return r<512||r<512&&r<720?g(2):r>720&&r<1440?g(3):r>1440&&g(4),w.current.width=r*e.current,w.current.height=c*e.current,f.current.scale(e.current,e.current),j.current=null===(n=j.current)||void 0===n?void 0:n.map((function(e,n){var t=Object(i.a)(e);return t[0]=(n-1)*window.innerWidth/v.current.total,t})),!0}}return Object(a.useEffect)((function(){e.current=devicePixelRatio;var n=w.current;f.current=n.getContext("2d"),w.current.width=window.innerWidth*e.current,w.current.height=window.innerHeight/2*e.current,f.current.scale(e.current,e.current),window.innerWidth<720?g(2):window.innerWidth>720&&window.innerWidth<1440?g(3):window.innerWidth>1440&&g(4)}),[f]),Object(a.useEffect)((function(){return window.addEventListener("resize",m),function(){window.removeEventListener("resize",m)}}),[]),Object(a.useEffect)((function(){_(),setTimeout((function(){h(!1)}),3e3)}),[]),Object(a.useEffect)((function(){var e;return!l&&c?function n(){_(),e=requestAnimationFrame(n)}():c||cancelAnimationFrame(e),function(){cancelAnimationFrame(e)}}),[l,c]),Object(r.jsx)("canvas",{className:d.a.wave,ref:s,children:Object(r.jsx)("p",{children:"A subtle wave animation"})})}n.default=function(e){var n=Object(c.b)().canContext;return Object(r.jsxs)("div",{className:[d.a.waveContainer,n?d.a.loaded:""].join(" "),"aria-hidden":"true",children:[Object(r.jsx)(l,{}),Object(r.jsx)("div",{className:d.a.colorfill,style:{height:"".concat(e.height,"px")}}),Object(r.jsx)("div",{className:d.a.gradient,style:{height:"".concat(e.height,"px")}})]})}},vIJm:function(e,n,t){e.exports={waveContainer:"wave_waveContainer__34Tm8",loaded:"wave_loaded__23Deh",fadeInUp:"wave_fadeInUp__1sKpm",wave:"wave_wave__6ZZAI",colorfill:"wave_colorfill__1nAjX",fadeIn:"wave_fadeIn__1JkYX",gradient:"wave_gradient__31zJw"}}}]);