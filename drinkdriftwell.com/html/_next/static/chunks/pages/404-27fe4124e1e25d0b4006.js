_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"97Is":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t("uNx/")}])},IEug:function(e,n,t){e.exports={error:"error_error__1bdz_",fadeIn:"error_fadeIn__3kE2I",statusCode:"error_statusCode__1sSAT",button:"error_button__2fd6U"}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),u=t("nOHt"),s=t("vNVm"),i={};function f(e,n,t,r){if((0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(o?"%"+o:"")]=!0}}var l=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",l=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,h=e.replace,_=e.shallow,b=e.scroll,w=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var y=c.Children.only(v),E=y&&"object"===typeof y&&y.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),m=r(g,2),j=m[0],I=m[1],N=c.default.useCallback((function(e){j(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,j]);(0,c.useEffect)((function(){var e=I&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof w?w:t&&t.locale,o=i[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(t,d,p,{locale:r})}),[p,d,I,w,n,t]);var x={ref:N,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:s}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,h,_,b,w)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),f(t,d,p,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(x.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof w?w:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(y,x)};n.default=l},"uNx/":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t("nKUr"),o=t("YFqc"),c=t.n(o),a=t("IEug"),u=t.n(a);function s(){return Object(r.jsx)("div",{className:u.a.error,children:Object(r.jsxs)("div",{className:u.a.container,children:[Object(r.jsx)("h1",{children:"Looks like we need a little more wind-down."}),Object(r.jsx)("p",{children:Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:u.a.button,children:"return home"})})})]})})}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,o=(0,c.useRef)(),i=(0,c.useState)(!1),f=r(i,2),l=f[0],d=f[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||l||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,l]);return(0,c.useEffect)((function(){u||l||(0,a.default)((function(){return d(!0)}))}),[l]),[p,l]};var c=t("q1tI"),a=o(t("0G5g")),u="undefined"!==typeof IntersectionObserver;var s=new Map}},[["97Is",1,0,2]]]);