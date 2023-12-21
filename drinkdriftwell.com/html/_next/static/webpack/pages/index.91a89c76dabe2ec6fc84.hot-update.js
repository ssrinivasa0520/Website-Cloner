webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading/index.js\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/fetcher */ \"./lib/fetcher.js\");\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/queries */ \"./lib/queries.js\");\n/* harmony import */ var _contexts_canContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/canContext */ \"./contexts/canContext.js\");\n/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Head */ \"./components/Head/index.js\");\n/* harmony import */ var _components_Modules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Modules */ \"./components/Modules/index.js\");\n/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Topbar */ \"./components/Topbar/index.js\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Logo */ \"./components/Logo/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var _react_three_drei_useGLTF__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @react-three/drei/useGLTF */ \"./node_modules/@react-three/drei/useGLTF.js\");\n/* harmony import */ var _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/homepage.module.scss */ \"./styles/homepage.module.scss\");\n/* harmony import */ var _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_15__);\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n // Data fetching\n\n\n\n\n\n\n// canContext global state with useContext\n // Page components\n\n\n\n\n\n // Dynamic imports\n\nvar ScrollingCan = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/Can/ScrollingContainer */ \"./components/Can/ScrollingContainer.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/Can/ScrollingContainer */ \"./components/Can/ScrollingContainer.js\")];\n    },\n    modules: [\"../components/Can/ScrollingContainer\"]\n  }\n});\n_c2 = ScrollingCan;\nvar CanFallback = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/Can/Fallback */ \"./components/Can/Fallback.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/Can/Fallback */ \"./components/Can/Fallback.js\")];\n    },\n    modules: [\"../components/Can/Fallback\"]\n  }\n});\n_c4 = CanFallback;\nvar Wave = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c5 = function _c5() {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Wave */ \"./components/Wave/index.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/Wave */ \"./components/Wave/index.js\")];\n    },\n    modules: [\"../components/Wave\"]\n  }\n}); // Preload can model\n\n_c6 = Wave;\n\n_react_three_drei_useGLTF__WEBPACK_IMPORTED_MODULE_14__[\"useGLTF\"].preload(\"/model/driftwell.glb\"); // Homepage styles\n\n\nvar __N_SSG = true;\nfunction Product(props) {\n  _s();\n\n  // Data fetching: SWR with server side initial data\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_lib_queries__WEBPACK_IMPORTED_MODULE_7__[\"MENU_QUERY\"], _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    initialData: props.menuData\n  }),\n      menuData = _useSWR.data;\n\n  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_lib_queries__WEBPACK_IMPORTED_MODULE_7__[\"FOOTER_QUERY\"], _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    initialData: props.footerData\n  }),\n      footerData = _useSWR2.data;\n\n  var _useSWR3 = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_lib_queries__WEBPACK_IMPORTED_MODULE_7__[\"PRODUCT_QUERY\"], _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    initialData: props.pageData\n  }),\n      pageData = _useSWR3.data,\n      pageDataError = _useSWR3.error;\n\n  var mainRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var introRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      introHeight = _useState[0],\n      setIntroHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      hasResizeSupport = _useState2[0],\n      setHasResizeSupport = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      menuOpen = _useState3[0],\n      setMenuOpen = _useState3[1];\n\n  var toggleMenu = function toggleMenu() {\n    setMenuOpen(!menuOpen);\n  }; // Get index/location of the Flavors carousel\n  // Using the Flavors carousel index we'll break the data up in to\n  // two parts, introData and bodyData\n\n\n  var flavorsIndex = pageData.allProducts.edges[0].node.body.findIndex(function (item, index) {\n    return item.primary.usid === \"flavors\";\n  }); // Split page content into two arrays so we can wrap\n  // a div around the intro modules for use with the wave\n  // and can render\n\n  var introData = pageData && pageData.allProducts.edges[0].node.body.slice(0, flavorsIndex);\n  var bodyData = pageData && pageData.allProducts.edges[0].node.body.slice(flavorsIndex);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (\"scrollRestoration\" in window.history) {\n      // Back off, browser, I got this...\n      history.scrollRestoration = \"manual\";\n      window.scrollTo(0, 0);\n    }\n  }, []); // Calculate intro section height\n  // Pass to Wave component\n\n  var calcIntroHeight = function calcIntroHeight() {\n    setIntroHeight(introRef.current.getBoundingClientRect().height);\n  }; // Recalculate intro section height\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (pageData) {\n      calcIntroHeight();\n      window.addEventListener(\"resize\", calcIntroHeight);\n    }\n\n    return function () {\n      window.removeEventListener(\"resize\", calcIntroHeight);\n    };\n  }, [pageData]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Check ResizeObserver support\n    // Fix for iOS Safari 13 and below\n    window.ResizeObserver ? setHasResizeSupport(true) : setHasResizeSupport(false);\n  }, []); // Display 404 error page - with temp fix for iOS Safari 12/13\n\n  if (pageDataError && !pageDataError.message.includes(\"Access-Control-Allow-Headers\")) return __jsx(next_error__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 12\n    }\n  }); // Display loader while waiting pageData\n\n  if (!pageData) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 25\n    }\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, pageData && __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    title: pageData.allProducts.edges[0].node.meta_title,\n    description: pageData.allProducts.edges[0].node.meta_description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 9\n    }\n  }), menuData && __jsx(_components_Topbar__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    menuData: menuData.allMenus.edges[0].node,\n    toggleMenuParent: function toggleMenuParent(state) {\n      return toggleMenu(state);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  }), pageData && __jsx(_contexts_canContext__WEBPACK_IMPORTED_MODULE_8__[\"CanProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 9\n    }\n  }, __jsx(\"main\", {\n    ref: mainRef,\n    role: \"main\",\n    \"aria-hidden\": menuOpen.toString(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.introContainer,\n    ref: introRef,\n    tabIndex: \"-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Modules__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    pageData: introData,\n    pageId: \"productpage\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.fadeOut,\n    \"aria-hidden\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.fadeOutDark,\n    \"aria-hidden\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.waveBottom,\n    \"aria-hidden\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 15\n    }\n  }, __jsx(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0, 0, 1920, 1032\",\n    width: \"100%\",\n    height: \"100%\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 17\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 19\n    }\n  }, \"Wave color fill\"), __jsx(\"defs\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 19\n    }\n  }, __jsx(\"clipPath\", {\n    id: \"a\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 21\n    }\n  }, __jsx(\"path\", {\n    transform: \"translate(0 8503)\",\n    fill: \"#fff\",\n    stroke: \"#707070\",\n    d: \"M0 0h1920v1032H0z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 23\n    }\n  }))), __jsx(\"g\", {\n    transform: \"translate(0 -8503)\",\n    clipPath: \"url(#a)\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 19\n    }\n  }, __jsx(\"path\", {\n    d: \"M519.136 9182.929c958.227 459.348 1862.565-238.646 1862.565 60.855 0 845.409-829.326 1530.749-1852.351 1530.749s-1852.349-685.34-1852.349-1530.749c0-439.224 223.853-835.242 582.422-1114.394 0 0 188.853-134.734 290.1-42.257s363.4 805.194 969.609 1095.795\",\n    fill: \"#050f63\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 21\n    }\n  })))), __jsx(Wave, {\n    height: introHeight,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 15\n    }\n  }), hasResizeSupport && __jsx(ScrollingCan, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 36\n    }\n  }), !hasResizeSupport && __jsx(CanFallback, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 37\n    }\n  })), __jsx(\"div\", {\n    className: _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.bodyContainer,\n    tabIndex: \"-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Modules__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    pageData: bodyData,\n    pageId: \"productpage\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 15\n    }\n  })), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 13\n    }\n  }))), footerData && __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_13__[\"default\"], Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, footerData.allFooters.edges[0].node, {\n    ariaHidden: menuOpen.toString(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Product, \"jE94GomooJx8CUCFMpVm7WJWWlk=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c7 = Product;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"ScrollingCan$dynamic\");\n$RefreshReg$(_c2, \"ScrollingCan\");\n$RefreshReg$(_c3, \"CanFallback$dynamic\");\n$RefreshReg$(_c4, \"CanFallback\");\n$RefreshReg$(_c5, \"Wave$dynamic\");\n$RefreshReg$(_c6, \"Wave\");\n$RefreshReg$(_c7, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJTY3JvbGxpbmdDYW4iLCJkeW5hbWljIiwiQ2FuRmFsbGJhY2siLCJXYXZlIiwidXNlR0xURiIsInByZWxvYWQiLCJQcm9kdWN0IiwicHJvcHMiLCJ1c2VTV1IiLCJNRU5VX1FVRVJZIiwiZmV0Y2hlciIsImluaXRpYWxEYXRhIiwibWVudURhdGEiLCJkYXRhIiwiRk9PVEVSX1FVRVJZIiwiZm9vdGVyRGF0YSIsIlBST0RVQ1RfUVVFUlkiLCJwYWdlRGF0YSIsInBhZ2VEYXRhRXJyb3IiLCJlcnJvciIsIm1haW5SZWYiLCJ1c2VSZWYiLCJpbnRyb1JlZiIsInVzZVN0YXRlIiwiaW50cm9IZWlnaHQiLCJzZXRJbnRyb0hlaWdodCIsImhhc1Jlc2l6ZVN1cHBvcnQiLCJzZXRIYXNSZXNpemVTdXBwb3J0IiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInRvZ2dsZU1lbnUiLCJmbGF2b3JzSW5kZXgiLCJhbGxQcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsImJvZHkiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaW5kZXgiLCJwcmltYXJ5IiwidXNpZCIsImludHJvRGF0YSIsInNsaWNlIiwiYm9keURhdGEiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJoaXN0b3J5Iiwic2Nyb2xsUmVzdG9yYXRpb24iLCJzY3JvbGxUbyIsImNhbGNJbnRyb0hlaWdodCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJlc2l6ZU9ic2VydmVyIiwibWVzc2FnZSIsImluY2x1ZGVzIiwibWV0YV90aXRsZSIsIm1ldGFfZGVzY3JpcHRpb24iLCJhbGxNZW51cyIsInN0YXRlIiwidG9TdHJpbmciLCJzdHlsZXMiLCJpbnRyb0NvbnRhaW5lciIsImZhZGVPdXQiLCJmYWRlT3V0RGFyayIsIndhdmVCb3R0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LE8iLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG4vLyBEYXRhIGZldGNoaW5nXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwibmV4dC9lcnJvclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL2xpYi9mZXRjaGVyXCI7XG5pbXBvcnQgeyBNRU5VX1FVRVJZLCBQUk9EVUNUX1FVRVJZLCBGT09URVJfUVVFUlkgfSBmcm9tIFwiLi4vbGliL3F1ZXJpZXNcIjtcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuLy8gY2FuQ29udGV4dCBnbG9iYWwgc3RhdGUgd2l0aCB1c2VDb250ZXh0XG5pbXBvcnQgeyBDYW5Qcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9jYW5Db250ZXh0XCI7XG5cbi8vIFBhZ2UgY29tcG9uZW50c1xuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZFwiO1xuaW1wb3J0IE1vZHVsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kdWxlc1wiO1xuaW1wb3J0IFRvcGJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub3BiYXJcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ29cIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbi8vIER5bmFtaWMgaW1wb3J0c1xuY29uc3QgU2Nyb2xsaW5nQ2FuID0gZHluYW1pYygoKSA9PlxuICBpbXBvcnQoXCIuLi9jb21wb25lbnRzL0Nhbi9TY3JvbGxpbmdDb250YWluZXJcIilcbik7XG5jb25zdCBDYW5GYWxsYmFjayA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9DYW4vRmFsbGJhY2tcIikpO1xuY29uc3QgV2F2ZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9XYXZlXCIpKTtcblxuLy8gUHJlbG9hZCBjYW4gbW9kZWxcbmltcG9ydCB7IHVzZUdMVEYgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWkvdXNlR0xURlwiO1xudXNlR0xURi5wcmVsb2FkKFwiL21vZGVsL2RyaWZ0d2VsbC5nbGJcIik7XG5cbi8vIEhvbWVwYWdlIHN0eWxlc1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QocHJvcHMpIHtcbiAgLy8gRGF0YSBmZXRjaGluZzogU1dSIHdpdGggc2VydmVyIHNpZGUgaW5pdGlhbCBkYXRhXG4gIGNvbnN0IHsgZGF0YTogbWVudURhdGEgfSA9IHVzZVNXUihNRU5VX1FVRVJZLCBmZXRjaGVyLCB7XG4gICAgaW5pdGlhbERhdGE6IHByb3BzLm1lbnVEYXRhLFxuICB9KTtcblxuICBjb25zdCB7IGRhdGE6IGZvb3RlckRhdGEgfSA9IHVzZVNXUihGT09URVJfUVVFUlksIGZldGNoZXIsIHtcbiAgICBpbml0aWFsRGF0YTogcHJvcHMuZm9vdGVyRGF0YSxcbiAgfSk7XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdlRGF0YSwgZXJyb3I6IHBhZ2VEYXRhRXJyb3IgfSA9IHVzZVNXUihcbiAgICBQUk9EVUNUX1FVRVJZLFxuICAgIGZldGNoZXIsXG4gICAge1xuICAgICAgaW5pdGlhbERhdGE6IHByb3BzLnBhZ2VEYXRhLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBtYWluUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGludHJvUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW2ludHJvSGVpZ2h0LCBzZXRJbnRyb0hlaWdodF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2hhc1Jlc2l6ZVN1cHBvcnQsIHNldEhhc1Jlc2l6ZVN1cHBvcnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TWVudU9wZW4oIW1lbnVPcGVuKTtcbiAgfTtcblxuICAvLyBHZXQgaW5kZXgvbG9jYXRpb24gb2YgdGhlIEZsYXZvcnMgY2Fyb3VzZWxcbiAgLy8gVXNpbmcgdGhlIEZsYXZvcnMgY2Fyb3VzZWwgaW5kZXggd2UnbGwgYnJlYWsgdGhlIGRhdGEgdXAgaW4gdG9cbiAgLy8gdHdvIHBhcnRzLCBpbnRyb0RhdGEgYW5kIGJvZHlEYXRhXG4gIGNvbnN0IGZsYXZvcnNJbmRleCA9IHBhZ2VEYXRhLmFsbFByb2R1Y3RzLmVkZ2VzWzBdLm5vZGUuYm9keS5maW5kSW5kZXgoXG4gICAgKGl0ZW0sIGluZGV4KSA9PiBpdGVtLnByaW1hcnkudXNpZCA9PT0gXCJmbGF2b3JzXCJcbiAgKTtcblxuICAvLyBTcGxpdCBwYWdlIGNvbnRlbnQgaW50byB0d28gYXJyYXlzIHNvIHdlIGNhbiB3cmFwXG4gIC8vIGEgZGl2IGFyb3VuZCB0aGUgaW50cm8gbW9kdWxlcyBmb3IgdXNlIHdpdGggdGhlIHdhdmVcbiAgLy8gYW5kIGNhbiByZW5kZXJcbiAgY29uc3QgaW50cm9EYXRhID1cbiAgICBwYWdlRGF0YSAmJiBwYWdlRGF0YS5hbGxQcm9kdWN0cy5lZGdlc1swXS5ub2RlLmJvZHkuc2xpY2UoMCwgZmxhdm9yc0luZGV4KTtcbiAgY29uc3QgYm9keURhdGEgPVxuICAgIHBhZ2VEYXRhICYmIHBhZ2VEYXRhLmFsbFByb2R1Y3RzLmVkZ2VzWzBdLm5vZGUuYm9keS5zbGljZShmbGF2b3JzSW5kZXgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFwic2Nyb2xsUmVzdG9yYXRpb25cIiBpbiB3aW5kb3cuaGlzdG9yeSkge1xuICAgICAgLy8gQmFjayBvZmYsIGJyb3dzZXIsIEkgZ290IHRoaXMuLi5cbiAgICAgIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIENhbGN1bGF0ZSBpbnRybyBzZWN0aW9uIGhlaWdodFxuICAvLyBQYXNzIHRvIFdhdmUgY29tcG9uZW50XG4gIGNvbnN0IGNhbGNJbnRyb0hlaWdodCA9ICgpID0+IHtcbiAgICBzZXRJbnRyb0hlaWdodChpbnRyb1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG4gIH07XG5cbiAgLy8gUmVjYWxjdWxhdGUgaW50cm8gc2VjdGlvbiBoZWlnaHRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGFnZURhdGEpIHtcbiAgICAgIGNhbGNJbnRyb0hlaWdodCgpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2FsY0ludHJvSGVpZ2h0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2FsY0ludHJvSGVpZ2h0KTtcbiAgICB9O1xuICB9LCBbcGFnZURhdGFdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIFJlc2l6ZU9ic2VydmVyIHN1cHBvcnRcbiAgICAvLyBGaXggZm9yIGlPUyBTYWZhcmkgMTMgYW5kIGJlbG93XG4gICAgd2luZG93LlJlc2l6ZU9ic2VydmVyXG4gICAgICA/IHNldEhhc1Jlc2l6ZVN1cHBvcnQodHJ1ZSlcbiAgICAgIDogc2V0SGFzUmVzaXplU3VwcG9ydChmYWxzZSk7XG4gIH0sIFtdKTtcblxuICAvLyBEaXNwbGF5IDQwNCBlcnJvciBwYWdlIC0gd2l0aCB0ZW1wIGZpeCBmb3IgaU9TIFNhZmFyaSAxMi8xM1xuICBpZiAoXG4gICAgcGFnZURhdGFFcnJvciAmJlxuICAgICFwYWdlRGF0YUVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIpXG4gIClcbiAgICByZXR1cm4gPEVycm9yIC8+O1xuXG4gIC8vIERpc3BsYXkgbG9hZGVyIHdoaWxlIHdhaXRpbmcgcGFnZURhdGFcbiAgaWYgKCFwYWdlRGF0YSkgcmV0dXJuIDxMb2FkaW5nIC8+O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwYWdlRGF0YSAmJiAoXG4gICAgICAgIDxIZWFkXG4gICAgICAgICAgdGl0bGU9e3BhZ2VEYXRhLmFsbFByb2R1Y3RzLmVkZ2VzWzBdLm5vZGUubWV0YV90aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17cGFnZURhdGEuYWxsUHJvZHVjdHMuZWRnZXNbMF0ubm9kZS5tZXRhX2Rlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAge21lbnVEYXRhICYmIChcbiAgICAgICAgPFRvcGJhclxuICAgICAgICAgIG1lbnVEYXRhPXttZW51RGF0YS5hbGxNZW51cy5lZGdlc1swXS5ub2RlfVxuICAgICAgICAgIHRvZ2dsZU1lbnVQYXJlbnQ9eyhzdGF0ZSkgPT4gdG9nZ2xlTWVudShzdGF0ZSl9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7cGFnZURhdGEgJiYgKFxuICAgICAgICA8Q2FuUHJvdmlkZXI+XG4gICAgICAgICAgPG1haW4gcmVmPXttYWluUmVmfSByb2xlPVwibWFpblwiIGFyaWEtaGlkZGVuPXttZW51T3Blbi50b1N0cmluZygpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm9Db250YWluZXJ9IHJlZj17aW50cm9SZWZ9IHRhYkluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgICAgPE1vZHVsZXMgcGFnZURhdGE9e2ludHJvRGF0YX0gcGFnZUlkPVwicHJvZHVjdHBhZ2VcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhZGVPdXR9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhZGVPdXREYXJrfSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53YXZlQm90dG9tfSBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwLCAwLCAxOTIwLCAxMDMyXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGl0bGU+V2F2ZSBjb2xvciBmaWxsPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDg1MDMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiM3MDcwNzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wIDBoMTkyMHYxMDMySDB6XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTg1MDMpXCIgY2xpcFBhdGg9XCJ1cmwoI2EpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk01MTkuMTM2IDkxODIuOTI5Yzk1OC4yMjcgNDU5LjM0OCAxODYyLjU2NS0yMzguNjQ2IDE4NjIuNTY1IDYwLjg1NSAwIDg0NS40MDktODI5LjMyNiAxNTMwLjc0OS0xODUyLjM1MSAxNTMwLjc0OXMtMTg1Mi4zNDktNjg1LjM0LTE4NTIuMzQ5LTE1MzAuNzQ5YzAtNDM5LjIyNCAyMjMuODUzLTgzNS4yNDIgNTgyLjQyMi0xMTE0LjM5NCAwIDAgMTg4Ljg1My0xMzQuNzM0IDI5MC4xLTQyLjI1N3MzNjMuNCA4MDUuMTk0IDk2OS42MDkgMTA5NS43OTVcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMDUwZjYzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPFdhdmUgaGVpZ2h0PXtpbnRyb0hlaWdodH0gLz5cblxuICAgICAgICAgICAgICB7aGFzUmVzaXplU3VwcG9ydCAmJiA8U2Nyb2xsaW5nQ2FuIC8+fVxuICAgICAgICAgICAgICB7IWhhc1Jlc2l6ZVN1cHBvcnQgJiYgPENhbkZhbGxiYWNrIC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlDb250YWluZXJ9IHRhYkluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgICAgPE1vZHVsZXMgcGFnZURhdGE9e2JvZHlEYXRhfSBwYWdlSWQ9XCJwcm9kdWN0cGFnZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L0NhblByb3ZpZGVyPlxuICAgICAgKX1cblxuICAgICAge2Zvb3RlckRhdGEgJiYgKFxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgey4uLmZvb3RlckRhdGEuYWxsRm9vdGVycy5lZGdlc1swXS5ub2RlfVxuICAgICAgICAgIGFyaWFIaWRkZW49e21lbnVPcGVuLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIGBnZXRTdGF0aWNQcm9wc2AgaXMgaW52b2tlZCBvbiB0aGUgc2VydmVyLXNpZGUsXG4gIC8vIHNvIHRoaXMgYGZldGNoZXJgIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgb24gdGhlIHNlcnZlci1zaWRlLlxuICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGZldGNoQVBJKE1FTlVfUVVFUlkpO1xuICBjb25zdCBmb290ZXJEYXRhID0gYXdhaXQgZmV0Y2hBUEkoRk9PVEVSX1FVRVJZKTtcbiAgY29uc3QgcGFnZURhdGEgPSBhd2FpdCBmZXRjaEFQSShQUk9EVUNUX1FVRVJZKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVudURhdGEsXG4gICAgICBmb290ZXJEYXRhLFxuICAgICAgcGFnZURhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})