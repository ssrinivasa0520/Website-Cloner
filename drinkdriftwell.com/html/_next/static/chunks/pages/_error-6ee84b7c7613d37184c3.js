_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"1HF/":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return t("Y0NT")}])},IEug:function(e,r,t){e.exports={error:"error_error__1bdz_",fadeIn:"error_fadeIn__3kE2I",statusCode:"error_statusCode__1sSAT",button:"error_button__2fd6U"}},Y0NT:function(e,r,t){"use strict";t.r(r);var n=t("nKUr"),o=t("YFqc"),c=t.n(o),a=t("IEug"),s=t.n(a);function u(e){var r=e.statusCode;return Object(n.jsx)("div",{className:s.a.error,children:Object(n.jsxs)("div",{className:s.a.container,children:[Object(n.jsx)("h1",{children:"Looks like we need a little more wind-down."}),Object(n.jsx)("p",{className:s.a.statusCode,children:Object(n.jsx)("small",{children:r?"An error ".concat(r," occurred on server"):"An error occurred on client"})}),Object(n.jsx)("p",{children:Object(n.jsx)(c.a,{href:"/",children:Object(n.jsx)("a",{className:s.a.button,children:"return home"})})})]})})}u.getInitialProps=function(e){var r=e.res,t=e.err;return{statusCode:r?r.statusCode:t?t.statusCode:404}},r.default=u},YFqc:function(e,r,t){e.exports=t("cTJO")},cTJO:function(e,r,t){"use strict";var n=t("J4zp"),o=t("284h");r.__esModule=!0,r.default=void 0;var c=o(t("q1tI")),a=t("elyg"),s=t("nOHt"),u=t("vNVm"),i={};function l(e,r,t,n){if((0,a.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[r+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var r=!1!==e.prefetch,t=(0,s.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var r=(0,a.resolveHref)(o,e.href,!0),t=n(r,2),c=t[0],s=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):s||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,_=e.shallow,b=e.scroll,w=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var m=c.Children.only(v),y=m&&"object"===typeof m&&m.ref,g=(0,u.useIntersection)({rootMargin:"200px"}),j=n(g,2),E=j[0],N=j[1],O=c.default.useCallback((function(e){E(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,E]);(0,c.useEffect)((function(){var e=N&&r&&(0,a.isLocalURL)(d),n="undefined"!==typeof w?w:t&&t.locale,o=i[d+"%"+p+(n?"%"+n:"")];e&&!o&&l(t,d,p,{locale:n})}),[p,d,N,w,r,t]);var C={ref:O,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,c,s,u){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),r[o?"replace":"push"](t,n,{shallow:c,locale:u}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,h,_,b,w)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};return(e.passHref||"a"===m.type&&!("href"in m.props))&&(C.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof w?w:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(m,C)};r.default=f},vNVm:function(e,r,t){"use strict";var n=t("J4zp"),o=t("TqRt");r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!s,o=(0,c.useRef)(),i=(0,c.useState)(!1),l=n(i,2),f=l[0],d=l[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=u.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return u.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,c=n.observer,a=n.elements;return a.set(e,r),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return(0,c.useEffect)((function(){s||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var c=t("q1tI"),a=o(t("0G5g")),s="undefined"!==typeof IntersectionObserver;var u=new Map}},[["1HF/",1,0,2]]]);