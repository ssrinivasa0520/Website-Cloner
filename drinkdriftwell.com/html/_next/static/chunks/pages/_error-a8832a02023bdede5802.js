_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"1HF/":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return t("Y0NT")}])},IEug:function(e,r,t){e.exports={error:"error_error__1bdz_",fadeIn:"error_fadeIn__3kE2I",statusCode:"error_statusCode__1sSAT",button:"error_button__2fd6U"}},Y0NT:function(e,r,t){"use strict";t.r(r);var n=t("nKUr"),o=t("YFqc"),a=t.n(o),c=t("IEug"),s=t.n(c);function u(e){var r=e.statusCode;return Object(n.jsx)("div",{className:s.a.error,children:Object(n.jsxs)("div",{className:s.a.container,children:[Object(n.jsx)("h1",{children:"Oops! We had an error loading that page."}),Object(n.jsx)("p",{className:s.a.statusCode,children:Object(n.jsx)("small",{children:r?"An error ".concat(r," occurred on server"):"An error occurred on client"})}),Object(n.jsx)("p",{children:Object(n.jsx)(a.a,{href:"/",children:Object(n.jsx)("a",{className:s.a.button,children:"return home"})})})]})})}u.getInitialProps=function(e){var r=e.res,t=e.err;return{statusCode:r?r.statusCode:t?t.statusCode:404}},r.default=u},YFqc:function(e,r,t){e.exports=t("cTJO")},cTJO:function(e,r,t){"use strict";var n=t("J4zp"),o=t("284h");r.__esModule=!0,r.default=void 0;var a=o(t("q1tI")),c=t("elyg"),s=t("nOHt"),u=t("vNVm"),i={};function l(e,r,t,n){if((0,c.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[r+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var r=!1!==e.prefetch,t=(0,s.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var r=(0,c.resolveHref)(o,e.href,!0),t=n(r,2),a=t[0],s=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):s||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,_=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=a.Children.only(v),j=y&&"object"===typeof y&&y.ref,m=(0,u.useIntersection)({rootMargin:"200px"}),w=n(m,2),E=w[0],N=w[1],O=a.default.useCallback((function(e){E(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,E]);(0,a.useEffect)((function(){var e=N&&r&&(0,c.isLocalURL)(d),n="undefined"!==typeof g?g:t&&t.locale,o=i[d+"%"+p+(n?"%"+n:"")];e&&!o&&l(t,d,p,{locale:n})}),[p,d,N,g,r,t]);var C={ref:O,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,s,u){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),r[o?"replace":"push"](t,n,{shallow:a,locale:u}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,h,_,b,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(C.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof g?g:t&&t.locale,t&&t.defaultLocale))),a.default.cloneElement(y,C)};r.default=f},vNVm:function(e,r,t){"use strict";var n=t("J4zp"),o=t("TqRt");r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!s,o=(0,a.useRef)(),i=(0,a.useState)(!1),l=n(i,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=u.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return u.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,c=n.elements;return c.set(e,r),a.observe(e),function(){a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return(0,a.useEffect)((function(){s||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=t("q1tI"),c=o(t("0G5g")),s="undefined"!==typeof IntersectionObserver;var u=new Map}},[["1HF/",1,0,2]]]);