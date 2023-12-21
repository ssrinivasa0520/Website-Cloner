webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading/index.js\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/fetcher */ \"./lib/fetcher.js\");\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/queries */ \"./lib/queries.js\");\n/* harmony import */ var _contexts_canContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/canContext */ \"./contexts/canContext.js\");\n/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Head */ \"./components/Head/index.js\");\n/* harmony import */ var _components_Modules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Modules */ \"./components/Modules/index.js\");\n/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Topbar */ \"./components/Topbar/index.js\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Logo */ \"./components/Logo/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var _components_Can_ScrollingContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Can/ScrollingContainer */ \"./components/Can/ScrollingContainer.js\");\n/* harmony import */ var _react_three_drei_useGLTF__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @react-three/drei/useGLTF */ \"./node_modules/@react-three/drei/useGLTF.js\");\n/* harmony import */ var _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/homepage.module.scss */ \"./styles/homepage.module.scss\");\n/* harmony import */ var _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_16__);\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n // Data fetching\n\n\n\n\n\n\n// canContext global state with useContext\n // Page components\n\n\n\n\n\n\n // Dynamic imports\n\nvar CanFallback = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/Can/Fallback */ \"./components/Can/Fallback.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/Can/Fallback */ \"./components/Can/Fallback.js\")];\n    },\n    modules: [\"../components/Can/Fallback\"]\n  }\n});\n_c2 = CanFallback;\nvar Wave = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Wave */ \"./components/Wave/index.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/Wave */ \"./components/Wave/index.js\")];\n    },\n    modules: [\"../components/Wave\"]\n  }\n}); // Preload can model\n\n_c4 = Wave;\n\n_react_three_drei_useGLTF__WEBPACK_IMPORTED_MODULE_15__[\"useGLTF\"].preload(\"/model/driftwell.glb\"); // Homepage styles\n\n\nvar __N_SSG = true;\nfunction Product(props) {\n  _s();\n\n  // Data fetching: SWR with server side initial data\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_lib_queries__WEBPACK_IMPORTED_MODULE_7__[\"MENU_QUERY\"], _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    initialData: props.menuData\n  }),\n      menuData = _useSWR.data;\n\n  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_lib_queries__WEBPACK_IMPORTED_MODULE_7__[\"FOOTER_QUERY\"], _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    initialData: props.footerData\n  }),\n      footerData = _useSWR2.data;\n\n  var _useSWR3 = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_lib_queries__WEBPACK_IMPORTED_MODULE_7__[\"PRODUCT_QUERY\"], _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    initialData: props.pageData\n  }),\n      pageData = _useSWR3.data,\n      pageDataError = _useSWR3.error;\n\n  var mainRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var introRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      introHeight = _useState[0],\n      setIntroHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      hasResizeSupport = _useState2[0],\n      setHasResizeSupport = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      menuOpen = _useState3[0],\n      setMenuOpen = _useState3[1];\n\n  var toggleMenu = function toggleMenu() {\n    setMenuOpen(!menuOpen);\n  }; // Get index/location of the Flavors carousel\n  // Using the Flavors carousel index we'll break the data up in to\n  // two parts, introData and bodyData\n\n\n  var flavorsIndex = pageData.allProducts.edges[0].node.body.findIndex(function (item, index) {\n    return item.primary.usid === \"flavors\";\n  }); // Split page content into two arrays so we can wrap\n  // a div around the intro modules for use with the wave\n  // and can render\n\n  var introData = pageData && pageData.allProducts.edges[0].node.body.slice(0, flavorsIndex);\n  var bodyData = pageData && pageData.allProducts.edges[0].node.body.slice(flavorsIndex);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (\"scrollRestoration\" in window.history) {\n      // Back off, browser, I got this...\n      history.scrollRestoration = \"manual\";\n      window.scrollTo(0, 0);\n    }\n  }, []); // Calculate intro section height\n  // Pass to Wave component\n\n  var calcIntroHeight = function calcIntroHeight() {\n    setIntroHeight(introRef.current.getBoundingClientRect().height);\n  }; // Recalculate intro section height\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (pageData) {\n      calcIntroHeight();\n      window.addEventListener(\"resize\", calcIntroHeight);\n    }\n\n    return function () {\n      window.removeEventListener(\"resize\", calcIntroHeight);\n    };\n  }, [pageData]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Check ResizeObserver support\n    // Fix for iOS Safari 13 and below\n    window.ResizeObserver ? setHasResizeSupport(true) : setHasResizeSupport(false);\n  }, []); // Display 404 error page - with temp fix for iOS Safari 12/13\n\n  if (pageDataError && !pageDataError.message.includes(\"Access-Control-Allow-Headers\")) return __jsx(next_error__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 12\n    }\n  }); // Display loader while waiting pageData\n\n  if (!pageData) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 25\n    }\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, pageData && __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    title: pageData.allProducts.edges[0].node.meta_title,\n    description: pageData.allProducts.edges[0].node.meta_description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }), menuData && __jsx(_components_Topbar__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    menuData: menuData.allMenus.edges[0].node,\n    toggleMenuParent: function toggleMenuParent(state) {\n      return toggleMenu(state);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }), pageData && __jsx(_contexts_canContext__WEBPACK_IMPORTED_MODULE_8__[\"CanProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }, __jsx(\"main\", {\n    ref: mainRef,\n    role: \"main\",\n    \"aria-hidden\": menuOpen.toString(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.introContainer,\n    ref: introRef,\n    tabIndex: \"-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Modules__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    pageData: introData,\n    pageId: \"productpage\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.fadeOut,\n    \"aria-hidden\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.fadeOutDark,\n    \"aria-hidden\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  }), __jsx(\"div\", {\n    className: _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.waveBottom,\n    \"aria-hidden\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 15\n    }\n  }, __jsx(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0, 0, 1920, 1032\",\n    width: \"100%\",\n    height: \"100%\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 17\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 19\n    }\n  }, \"Wave color fill\"), __jsx(\"defs\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 19\n    }\n  }, __jsx(\"clipPath\", {\n    id: \"a\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 21\n    }\n  }, __jsx(\"path\", {\n    transform: \"translate(0 8503)\",\n    fill: \"#fff\",\n    stroke: \"#707070\",\n    d: \"M0 0h1920v1032H0z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 23\n    }\n  }))), __jsx(\"g\", {\n    transform: \"translate(0 -8503)\",\n    clipPath: \"url(#a)\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 19\n    }\n  }, __jsx(\"path\", {\n    d: \"M519.136 9182.929c958.227 459.348 1862.565-238.646 1862.565 60.855 0 845.409-829.326 1530.749-1852.351 1530.749s-1852.349-685.34-1852.349-1530.749c0-439.224 223.853-835.242 582.422-1114.394 0 0 188.853-134.734 290.1-42.257s363.4 805.194 969.609 1095.795\",\n    fill: \"#050f63\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 21\n    }\n  })))), __jsx(Wave, {\n    height: introHeight,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 15\n    }\n  }), hasResizeSupport && __jsx(_components_Can_ScrollingContainer__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 36\n    }\n  }), hasResizeSupport === false && __jsx(CanFallback, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 46\n    }\n  })), __jsx(\"div\", {\n    className: _styles_homepage_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.bodyContainer,\n    tabIndex: \"-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Modules__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    pageData: bodyData,\n    pageId: \"productpage\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 15\n    }\n  })), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 13\n    }\n  }))), footerData && __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_13__[\"default\"], Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, footerData.allFooters.edges[0].node, {\n    ariaHidden: menuOpen.toString(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Product, \"jE94GomooJx8CUCFMpVm7WJWWlk=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c5 = Product;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"CanFallback$dynamic\");\n$RefreshReg$(_c2, \"CanFallback\");\n$RefreshReg$(_c3, \"Wave$dynamic\");\n$RefreshReg$(_c4, \"Wave\");\n$RefreshReg$(_c5, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJDYW5GYWxsYmFjayIsImR5bmFtaWMiLCJXYXZlIiwidXNlR0xURiIsInByZWxvYWQiLCJQcm9kdWN0IiwicHJvcHMiLCJ1c2VTV1IiLCJNRU5VX1FVRVJZIiwiZmV0Y2hlciIsImluaXRpYWxEYXRhIiwibWVudURhdGEiLCJkYXRhIiwiRk9PVEVSX1FVRVJZIiwiZm9vdGVyRGF0YSIsIlBST0RVQ1RfUVVFUlkiLCJwYWdlRGF0YSIsInBhZ2VEYXRhRXJyb3IiLCJlcnJvciIsIm1haW5SZWYiLCJ1c2VSZWYiLCJpbnRyb1JlZiIsInVzZVN0YXRlIiwiaW50cm9IZWlnaHQiLCJzZXRJbnRyb0hlaWdodCIsImhhc1Jlc2l6ZVN1cHBvcnQiLCJzZXRIYXNSZXNpemVTdXBwb3J0IiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInRvZ2dsZU1lbnUiLCJmbGF2b3JzSW5kZXgiLCJhbGxQcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsImJvZHkiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaW5kZXgiLCJwcmltYXJ5IiwidXNpZCIsImludHJvRGF0YSIsInNsaWNlIiwiYm9keURhdGEiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJoaXN0b3J5Iiwic2Nyb2xsUmVzdG9yYXRpb24iLCJzY3JvbGxUbyIsImNhbGNJbnRyb0hlaWdodCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJlc2l6ZU9ic2VydmVyIiwibWVzc2FnZSIsImluY2x1ZGVzIiwibWV0YV90aXRsZSIsIm1ldGFfZGVzY3JpcHRpb24iLCJhbGxNZW51cyIsInN0YXRlIiwidG9TdHJpbmciLCJzdHlsZXMiLCJpbnRyb0NvbnRhaW5lciIsImZhZGVPdXQiLCJmYWRlT3V0RGFyayIsIndhdmVCb3R0b20iLCJib2R5Q29udGFp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REYsQ0FqQkYsQ0FERixDQUpGLEVBK0JFLE1BQUMsSUFBRDtBQUFNLFVBQU0sRUFBRTNDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CRixFQWlDR0UsZ0JBQWdCLElBQUksTUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakN2QixFQWtDR0EsZ0JBQWdCLEtBQUssS0FBckIsSUFBOEIsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ2pDLENBREYsRUFxQ0U7QUFBSyxhQUFTLEVBQUVxQyxvRUFBTSxDQUFDSyxhQUF2QjtBQUFzQyxZQUFRLEVBQUMsSUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBUyxZQUFRLEVBQUV6QixRQUFuQjtBQUE2QixVQUFNLEVBQUMsYUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBckNGLEVBd0NFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhDRixDQURGLENBaEJKLEVBOERHNUIsVUFBVSxJQUNULE1BQUMsMkRBQUQsdUpBQ01BLFVBQVUsQ0FBQ3NELFVBQVgsQ0FBc0JwQyxLQUF0QixDQUE0QixDQUE1QixFQUErQkMsSUFEckM7QUFFRSxjQUFVLEVBQUVOLFFBQVEsQ0FBQ2tDLFFBQVQsRUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBL0RKLENBREY7QUF1RUQ7O0dBL0p1QnhELE87VUFFS0UsMkMsRUFJRUEsMkMsRUFJb0JBLDJDOzs7TUFWM0JGLE8iLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG4vLyBEYXRhIGZldGNoaW5nXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwibmV4dC9lcnJvclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL2xpYi9mZXRjaGVyXCI7XG5pbXBvcnQgeyBNRU5VX1FVRVJZLCBQUk9EVUNUX1FVRVJZLCBGT09URVJfUVVFUlkgfSBmcm9tIFwiLi4vbGliL3F1ZXJpZXNcIjtcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuLy8gY2FuQ29udGV4dCBnbG9iYWwgc3RhdGUgd2l0aCB1c2VDb250ZXh0XG5pbXBvcnQgeyBDYW5Qcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9jYW5Db250ZXh0XCI7XG5cbi8vIFBhZ2UgY29tcG9uZW50c1xuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZFwiO1xuaW1wb3J0IE1vZHVsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kdWxlc1wiO1xuaW1wb3J0IFRvcGJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub3BiYXJcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ29cIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgU2Nyb2xsaW5nQ2FuIGZyb20gXCIuLi9jb21wb25lbnRzL0Nhbi9TY3JvbGxpbmdDb250YWluZXJcIjtcblxuLy8gRHluYW1pYyBpbXBvcnRzXG5cbmNvbnN0IENhbkZhbGxiYWNrID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL0Nhbi9GYWxsYmFja1wiKSk7XG5jb25zdCBXYXZlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL1dhdmVcIikpO1xuXG4vLyBQcmVsb2FkIGNhbiBtb2RlbFxuaW1wb3J0IHsgdXNlR0xURiB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaS91c2VHTFRGXCI7XG51c2VHTFRGLnByZWxvYWQoXCIvbW9kZWwvZHJpZnR3ZWxsLmdsYlwiKTtcblxuLy8gSG9tZXBhZ2Ugc3R5bGVzXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdChwcm9wcykge1xuICAvLyBEYXRhIGZldGNoaW5nOiBTV1Igd2l0aCBzZXJ2ZXIgc2lkZSBpbml0aWFsIGRhdGFcbiAgY29uc3QgeyBkYXRhOiBtZW51RGF0YSB9ID0gdXNlU1dSKE1FTlVfUVVFUlksIGZldGNoZXIsIHtcbiAgICBpbml0aWFsRGF0YTogcHJvcHMubWVudURhdGEsXG4gIH0pO1xuXG4gIGNvbnN0IHsgZGF0YTogZm9vdGVyRGF0YSB9ID0gdXNlU1dSKEZPT1RFUl9RVUVSWSwgZmV0Y2hlciwge1xuICAgIGluaXRpYWxEYXRhOiBwcm9wcy5mb290ZXJEYXRhLFxuICB9KTtcblxuICBjb25zdCB7IGRhdGE6IHBhZ2VEYXRhLCBlcnJvcjogcGFnZURhdGFFcnJvciB9ID0gdXNlU1dSKFxuICAgIFBST0RVQ1RfUVVFUlksXG4gICAgZmV0Y2hlcixcbiAgICB7XG4gICAgICBpbml0aWFsRGF0YTogcHJvcHMucGFnZURhdGEsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IG1haW5SZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgaW50cm9SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBbaW50cm9IZWlnaHQsIHNldEludHJvSGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaGFzUmVzaXplU3VwcG9ydCwgc2V0SGFzUmVzaXplU3VwcG9ydF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBzZXRNZW51T3BlbighbWVudU9wZW4pO1xuICB9O1xuXG4gIC8vIEdldCBpbmRleC9sb2NhdGlvbiBvZiB0aGUgRmxhdm9ycyBjYXJvdXNlbFxuICAvLyBVc2luZyB0aGUgRmxhdm9ycyBjYXJvdXNlbCBpbmRleCB3ZSdsbCBicmVhayB0aGUgZGF0YSB1cCBpbiB0b1xuICAvLyB0d28gcGFydHMsIGludHJvRGF0YSBhbmQgYm9keURhdGFcbiAgY29uc3QgZmxhdm9yc0luZGV4ID0gcGFnZURhdGEuYWxsUHJvZHVjdHMuZWRnZXNbMF0ubm9kZS5ib2R5LmZpbmRJbmRleChcbiAgICAoaXRlbSwgaW5kZXgpID0+IGl0ZW0ucHJpbWFyeS51c2lkID09PSBcImZsYXZvcnNcIlxuICApO1xuXG4gIC8vIFNwbGl0IHBhZ2UgY29udGVudCBpbnRvIHR3byBhcnJheXMgc28gd2UgY2FuIHdyYXBcbiAgLy8gYSBkaXYgYXJvdW5kIHRoZSBpbnRybyBtb2R1bGVzIGZvciB1c2Ugd2l0aCB0aGUgd2F2ZVxuICAvLyBhbmQgY2FuIHJlbmRlclxuICBjb25zdCBpbnRyb0RhdGEgPVxuICAgIHBhZ2VEYXRhICYmIHBhZ2VEYXRhLmFsbFByb2R1Y3RzLmVkZ2VzWzBdLm5vZGUuYm9keS5zbGljZSgwLCBmbGF2b3JzSW5kZXgpO1xuICBjb25zdCBib2R5RGF0YSA9XG4gICAgcGFnZURhdGEgJiYgcGFnZURhdGEuYWxsUHJvZHVjdHMuZWRnZXNbMF0ubm9kZS5ib2R5LnNsaWNlKGZsYXZvcnNJbmRleCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXCJzY3JvbGxSZXN0b3JhdGlvblwiIGluIHdpbmRvdy5oaXN0b3J5KSB7XG4gICAgICAvLyBCYWNrIG9mZiwgYnJvd3NlciwgSSBnb3QgdGhpcy4uLlxuICAgICAgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCI7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gQ2FsY3VsYXRlIGludHJvIHNlY3Rpb24gaGVpZ2h0XG4gIC8vIFBhc3MgdG8gV2F2ZSBjb21wb25lbnRcbiAgY29uc3QgY2FsY0ludHJvSGVpZ2h0ID0gKCkgPT4ge1xuICAgIHNldEludHJvSGVpZ2h0KGludHJvUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KTtcbiAgfTtcblxuICAvLyBSZWNhbGN1bGF0ZSBpbnRybyBzZWN0aW9uIGhlaWdodFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwYWdlRGF0YSkge1xuICAgICAgY2FsY0ludHJvSGVpZ2h0KCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjYWxjSW50cm9IZWlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjYWxjSW50cm9IZWlnaHQpO1xuICAgIH07XG4gIH0sIFtwYWdlRGF0YV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgUmVzaXplT2JzZXJ2ZXIgc3VwcG9ydFxuICAgIC8vIEZpeCBmb3IgaU9TIFNhZmFyaSAxMyBhbmQgYmVsb3dcbiAgICB3aW5kb3cuUmVzaXplT2JzZXJ2ZXJcbiAgICAgID8gc2V0SGFzUmVzaXplU3VwcG9ydCh0cnVlKVxuICAgICAgOiBzZXRIYXNSZXNpemVTdXBwb3J0KGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIC8vIERpc3BsYXkgNDA0IGVycm9yIHBhZ2UgLSB3aXRoIHRlbXAgZml4IGZvciBpT1MgU2FmYXJpIDEyLzEzXG4gIGlmIChcbiAgICBwYWdlRGF0YUVycm9yICYmXG4gICAgIXBhZ2VEYXRhRXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIilcbiAgKVxuICAgIHJldHVybiA8RXJyb3IgLz47XG5cbiAgLy8gRGlzcGxheSBsb2FkZXIgd2hpbGUgd2FpdGluZyBwYWdlRGF0YVxuICBpZiAoIXBhZ2VEYXRhKSByZXR1cm4gPExvYWRpbmcgLz47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3BhZ2VEYXRhICYmIChcbiAgICAgICAgPEhlYWRcbiAgICAgICAgICB0aXRsZT17cGFnZURhdGEuYWxsUHJvZHVjdHMuZWRnZXNbMF0ubm9kZS5tZXRhX3RpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwYWdlRGF0YS5hbGxQcm9kdWN0cy5lZGdlc1swXS5ub2RlLm1ldGFfZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7bWVudURhdGEgJiYgKFxuICAgICAgICA8VG9wYmFyXG4gICAgICAgICAgbWVudURhdGE9e21lbnVEYXRhLmFsbE1lbnVzLmVkZ2VzWzBdLm5vZGV9XG4gICAgICAgICAgdG9nZ2xlTWVudVBhcmVudD17KHN0YXRlKSA9PiB0b2dnbGVNZW51KHN0YXRlKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHtwYWdlRGF0YSAmJiAoXG4gICAgICAgIDxDYW5Qcm92aWRlcj5cbiAgICAgICAgICA8bWFpbiByZWY9e21haW5SZWZ9IHJvbGU9XCJtYWluXCIgYXJpYS1oaWRkZW49e21lbnVPcGVuLnRvU3RyaW5nKCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb0NvbnRhaW5lcn0gcmVmPXtpbnRyb1JlZn0gdGFiSW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgICA8TW9kdWxlcyBwYWdlRGF0YT17aW50cm9EYXRhfSBwYWdlSWQ9XCJwcm9kdWN0cGFnZVwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFkZU91dH0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFkZU91dERhcmt9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhdmVCb3R0b219IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAsIDAsIDE5MjAsIDEwMzJcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0aXRsZT5XYXZlIGNvbG9yIGZpbGw8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cImFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgODUwMylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzcwNzA3MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTAgMGgxOTIwdjEwMzJIMHpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAtODUwMylcIiBjbGlwUGF0aD1cInVybCgjYSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUxOS4xMzYgOTE4Mi45MjljOTU4LjIyNyA0NTkuMzQ4IDE4NjIuNTY1LTIzOC42NDYgMTg2Mi41NjUgNjAuODU1IDAgODQ1LjQwOS04MjkuMzI2IDE1MzAuNzQ5LTE4NTIuMzUxIDE1MzAuNzQ5cy0xODUyLjM0OS02ODUuMzQtMTg1Mi4zNDktMTUzMC43NDljMC00MzkuMjI0IDIyMy44NTMtODM1LjI0MiA1ODIuNDIyLTExMTQuMzk0IDAgMCAxODguODUzLTEzNC43MzQgMjkwLjEtNDIuMjU3czM2My40IDgwNS4xOTQgOTY5LjYwOSAxMDk1Ljc5NVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMwNTBmNjNcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8V2F2ZSBoZWlnaHQ9e2ludHJvSGVpZ2h0fSAvPlxuXG4gICAgICAgICAgICAgIHtoYXNSZXNpemVTdXBwb3J0ICYmIDxTY3JvbGxpbmdDYW4gLz59XG4gICAgICAgICAgICAgIHtoYXNSZXNpemVTdXBwb3J0ID09PSBmYWxzZSAmJiA8Q2FuRmFsbGJhY2sgLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keUNvbnRhaW5lcn0gdGFiSW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgICA8TW9kdWxlcyBwYWdlRGF0YT17Ym9keURhdGF9IHBhZ2VJZD1cInByb2R1Y3RwYWdlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvQ2FuUHJvdmlkZXI+XG4gICAgICApfVxuXG4gICAgICB7Zm9vdGVyRGF0YSAmJiAoXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICB7Li4uZm9vdGVyRGF0YS5hbGxGb290ZXJzLmVkZ2VzWzBdLm5vZGV9XG4gICAgICAgICAgYXJpYUhpZGRlbj17bWVudU9wZW4udG9TdHJpbmcoKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gYGdldFN0YXRpY1Byb3BzYCBpcyBpbnZva2VkIG9uIHRoZSBzZXJ2ZXItc2lkZSxcbiAgLy8gc28gdGhpcyBgZmV0Y2hlcmAgZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBvbiB0aGUgc2VydmVyLXNpZGUuXG4gIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgZmV0Y2hBUEkoTUVOVV9RVUVSWSk7XG4gIGNvbnN0IGZvb3RlckRhdGEgPSBhd2FpdCBmZXRjaEFQSShGT09URVJfUVVFUlkpO1xuICBjb25zdCBwYWdlRGF0YSA9IGF3YWl0IGZldGNoQVBJKFBST0RVQ1RfUVVFUlkpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZW51RGF0YSxcbiAgICAgIGZvb3RlckRhdGEsXG4gICAgICBwYWdlRGF0YSxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})