_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"1HF/":function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("Y0NT")}])},IEug:function(e,r,n){e.exports={error:"error_error__1bdz_",fadeIn:"error_fadeIn__3kE2I",statusCode:"error_statusCode__1sSAT",button:"error_button__2fd6U"}},Y0NT:function(e,r,n){"use strict";n.r(r);var t=n("nKUr"),o=n("YFqc"),a=n.n(o),c=n("IEug"),s=n.n(c);function u(e){var r=e.statusCode;return Object(t.jsx)("div",{className:s.a.error,children:Object(t.jsxs)("div",{className:s.a.container,children:[Object(t.jsx)("h1",{children:"Looks like we need a little more wind-down."}),Object(t.jsx)("p",{className:s.a.statusCode,children:Object(t.jsx)("small",{children:r?"An error ".concat(r," occurred on server"):"An error occurred on client"})}),Object(t.jsx)("p",{children:Object(t.jsx)(a.a,{href:"/",children:Object(t.jsx)("a",{className:s.a.button,children:"return home"})})})]})})}u.getInitialProps=function(e){var r=e.res,n=e.err;return{statusCode:r?r.statusCode:n?n.statusCode:404}},r.default=u},YFqc:function(e,r,n){e.exports=n("cTJO")},cTJO:function(e,r,n){"use strict";var t=n("J4zp"),o=n("284h");r.__esModule=!0,r.default=void 0;var a=o(n("q1tI")),c=n("elyg"),s=n("nOHt"),u=n("vNVm"),i={};function l(e,r,n,t){if(e&&(0,c.isLocalURL)(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;i[r+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var r=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var r=(0,c.resolveHref)(o,e.href,!0),n=t(r,2),a=n[0],s=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):s||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,_=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),w=g&&"object"===typeof g&&g.ref,y=(0,u.useIntersection)({rootMargin:"200px"}),j=t(y,2),E=j[0],C=j[1],I=a.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);(0,a.useEffect)((function(){var e=C&&r&&(0,c.isLocalURL)(d),t="undefined"!==typeof m?m:n&&n.locale,o=i[d+"%"+p+(t?"%"+t:"")];e&&!o&&l(n,d,p,{locale:t})}),[p,d,C,m,r,n]);var N={ref:I,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,a,s,u){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=t.indexOf("#")<0),r[o?"replace":"push"](n,t,{shallow:a,locale:u,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,d,p,h,_,b,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var L="undefined"!==typeof m?m:n&&n.locale,O=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(p,L,n&&n.locales,n&&n.domainLocales);N.href=O||(0,c.addBasePath)((0,c.addLocale)(p,L,n&&n.defaultLocale))}return a.default.cloneElement(g,N)};r.default=f},vNVm:function(e,r,n){"use strict";var t=n("J4zp");r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!c,u=(0,o.useRef)(),i=(0,o.useState)(!1),l=t(i,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=s.get(r);if(n)return n;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return s.set(r,n={id:r,observer:o,elements:t}),n}(n),o=t.id,a=t.observer,c=t.elements;return c.set(e,r),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[n,r,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("q1tI"),a=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var s=new Map}},[["1HF/",1,0,2]]]);