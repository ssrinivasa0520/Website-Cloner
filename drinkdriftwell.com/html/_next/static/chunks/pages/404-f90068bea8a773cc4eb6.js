_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"97Is":function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r("uNx/")}])},IEug:function(e,n,r){e.exports={error:"error_error__1bdz_",fadeIn:"error_fadeIn__3kE2I",statusCode:"error_statusCode__1sSAT",button:"error_button__2fd6U"}},YFqc:function(e,n,r){e.exports=r("cTJO")},cTJO:function(e,n,r){"use strict";var t=r("J4zp"),o=r("284h");n.__esModule=!0,n.default=void 0;var a=o(r("q1tI")),c=r("elyg"),u=r("nOHt"),i=r("vNVm"),s={};function l(e,n,r,t){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,r=(0,u.useRouter)(),o=r&&r.pathname||"/",f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),r=t(n,2),a=r[0],u=r[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,_=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var w=a.Children.only(v),g=w&&"object"===typeof w&&w.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),E=t(y,2),I=E[0],j=E[1],L=a.default.useCallback((function(e){I(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,I]);(0,a.useEffect)((function(){var e=j&&n&&(0,c.isLocalURL)(d),t="undefined"!==typeof m?m:r&&r.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&l(r,d,p,{locale:t})}),[p,d,j,m,n,r]);var N={ref:L,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==u&&(u=t.indexOf("#")<0),n[o?"replace":"push"](r,t,{shallow:a,locale:i,scroll:u}))}(e,r,d,p,h,_,b,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),l(r,d,p,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var k="undefined"!==typeof m?m:r&&r.locale,x=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(p,k,r&&r.locales,r&&r.domainLocales);N.href=x||(0,c.addBasePath)((0,c.addLocale)(p,k,r&&r.defaultLocale))}return a.default.cloneElement(w,N)};n.default=f},"uNx/":function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return i}));var t=r("nKUr"),o=r("YFqc"),a=r.n(o),c=r("IEug"),u=r.n(c);function i(){return Object(t.jsx)("div",{className:u.a.error,children:Object(t.jsxs)("div",{className:u.a.container,children:[Object(t.jsx)("h1",{children:"Looks like we need a little more wind-down."}),Object(t.jsx)("p",{children:Object(t.jsx)(a.a,{href:"/",children:Object(t.jsx)("a",{className:u.a.button,children:"return home"})})})]})})}},vNVm:function(e,n,r){"use strict";var t=r("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,i=(0,o.useRef)(),s=(0,o.useState)(!1),l=t(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=u.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return u.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,c=t.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r("q1tI"),a=r("0G5g"),c="undefined"!==typeof IntersectionObserver;var u=new Map}},[["97Is",0,2,1]]]);