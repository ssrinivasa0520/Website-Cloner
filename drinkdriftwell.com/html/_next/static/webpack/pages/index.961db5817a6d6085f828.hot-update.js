webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Modules/Callouts/index.js":
/*!**********************************************!*\
  !*** ./components/Modules/Callouts/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Grid */ \"./components/Grid/index.js\");\n/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Picture */ \"./components/Picture/index.js\");\n/* harmony import */ var _callouts_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./callouts.module.scss */ \"./components/Modules/Callouts/callouts.module.scss\");\n/* harmony import */ var _callouts_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_callouts_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Can_CalloutContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Can/CalloutContainer */ \"./components/Can/CalloutContainer.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Modules/Callouts/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n // Dynamic imports\n\nvar BackgroundVideo = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./BackgroundVideo */ \"./components/Modules/Callouts/BackgroundVideo.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./BackgroundVideo */ \"./components/Modules/Callouts/BackgroundVideo.js\")];\n    },\n    modules: [\"./BackgroundVideo\"]\n  }\n});\n_c2 = BackgroundVideo;\n\nvar Callouts = function Callouts(_ref) {\n  _s();\n\n  var primary = _ref.primary,\n      fields = _ref.fields;\n  var usid = primary.usid,\n      headline = primary.headline,\n      image = primary.image;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      hasResizeSupport = _useState[0],\n      setHasResizeSupport = _useState[1];\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__[\"useInView\"])({\n    threshold: 0.5,\n    triggerOnce: true\n  }),\n      ref = _useInView.ref,\n      inView = _useInView.inView;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Check ResizeObserver support\n    // Fix for iOS Safari 13 and below\n    window.ResizeObserver ? setHasResizeSupport(true) : setHasResizeSupport(false);\n  }, []);\n\n  var columnConfig = function columnConfig(id) {\n    var columns = null;\n    var offsets = null;\n\n    if (id === \"callout-one\") {\n      columns = {\n        xs: 14,\n        sm: 6,\n        md: 6,\n        xl: 5\n      };\n      offsets = {\n        xs: 0\n      };\n    } else {\n      columns = {\n        xs: 14,\n        sm: 6,\n        md: 6,\n        xl: 5\n      };\n      offsets = {\n        xs: 0,\n        xl: 1\n      };\n    }\n\n    return {\n      columns: _objectSpread({}, columns),\n      offsets: _objectSpread({}, offsets)\n    };\n  };\n\n  return __jsx(\"section\", {\n    className: [_callouts_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.callouts, _callouts_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a[usid], inView ? _callouts_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.inview : \"\"].join(\" \"),\n    ref: ref,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(BackgroundVideo, {\n    usid: usid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }), __jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    justify: {\n      xs: \"center\",\n      md: \"start\"\n    },\n    align: {\n      xs: \"start\",\n      sm: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, usid === \"callout-one\" && __jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__[\"Column\"], {\n    columns: {\n      xs: 14,\n      sm: 8,\n      lg: 7\n    },\n    justify: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, hasResizeSupport && __jsx(_Can_CalloutContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 36\n    }\n  }), hasResizeSupport === false && __jsx(\"img\", {\n    src: \"/images/driftwell-fallback.png\",\n    alt: \"Driftwell Can\",\n    className: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.fallbackCan,\n    tabIndex: \"-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 17\n    }\n  })), __jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__[\"Column\"], {\n    columns: columnConfig(usid).columns,\n    offsets: columnConfig(usid).offsets,\n    orders: {\n      xs: 2,\n      sm: 1\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, headline && __jsx(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"], {\n    render: headline,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 26\n    }\n  }), fields.map(function (field, index) {\n    var callout_title = field.callout_title,\n        callout_description = field.callout_description,\n        callout_bubble = field.callout_bubble;\n    return __jsx(\"div\", {\n      className: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.callout,\n      key: \"callout_\".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 17\n      }\n    }, callout_bubble && __jsx(\"div\", {\n      className: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bubble,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 21\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 23\n      }\n    }, callout_bubble)), __jsx(\"div\", {\n      className: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.content,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 19\n      }\n    }, callout_title && __jsx(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"], {\n      render: callout_title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 39\n      }\n    }), callout_description && __jsx(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"], {\n      render: callout_description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 23\n      }\n    })));\n  })), image && __jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__[\"Column\"], {\n    columns: {\n      xs: 12,\n      sm: 8,\n      md: 7,\n      lg: 6\n    },\n    offsets: {\n      xs: 0,\n      md: 1,\n      lg: 1\n    },\n    orders: {\n      xs: 1,\n      sm: 2\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, __jsx(_Picture__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    image: image,\n    classes: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 15\n    }\n  })))), usid === \"callout-two\" && __jsx(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 1919 138.387\",\n    width: \"100%\",\n    height: \"100%\",\n    className: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.wave,\n    \"aria-hidden\": \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 11\n    }\n  }, \"Wave graphic\"), __jsx(\"path\", {\n    d: \"M0 138.386V0c101.4 37.712 219.246 66.534 355.961 78.179 222.061 21.1 441 5.209 644.5-12.119 203.5-18.255 391.563-37.942 551.865-45.926 149.824-7.975 275.4-5.721 366.678 6.882v111.371z\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(Callouts, \"ehFRz93HDDgM6VB2FYYZpnGsgO8=\", false, function () {\n  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__[\"useInView\"]];\n});\n\n_c3 = Callouts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Callouts);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"BackgroundVideo$dynamic\");\n$RefreshReg$(_c2, \"BackgroundVideo\");\n$RefreshReg$(_c3, \"Callouts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL0NhbGxvdXRzL2luZGV4LmpzP2UyMWIiXSwibmFtZXMiOlsiQmFja2dyb3VuZFZpZGVvIiwiZHluYW1pYyIsIkNhbGxvdXRzIiwicHJpbWFyeSIsImZpZWxkcyIsInVzaWQiLCJoZWFkbGluZSIsImltYWdlIiwidXNlU3RhdGUiLCJoYXNSZXNpemVTdXBwb3J0Iiwic2V0SGFzUmVzaXplU3VwcG9ydCIsInVzZUluVmlldyIsInRocmVzaG9sZCIsInRyaWdnZXJPbmNlIiwicmVmIiwiaW5WaWV3IiwidXNlRWZmZWN0Iiwid2luZG93IiwiUmVzaXplT2JzZXJ2ZXIiLCJjb2x1bW5Db25maWciLCJpZCIsImNvbHVtbnMiLCJvZmZzZXRzIiwieHMiLCJzbSIsIm1kIiwieGwiLCJzdHlsZXMiLCJjYWxsb3V0cyIsImludmlldyIsImpvaW4iLCJsZyIsImZhbGxiYWNrQ2FuIiwibWFwIiwiZmllbGQiLCJpbmRleCIsImNhbGxvdXRfdGl0bGUiLCJjYWxsb3V0X2Rlc2NyaXB0aW9uIiwiY2FsbG91dF9idWJibGUiLCJjYWxsb3V0IiwiYnViYmxlIiwiY29udGVudCIsIndhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSwwSkFBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMsMkVBQWQ7QUFBQTtBQUFBLGNBQWMsbUJBQWQ7QUFBQTtBQUFBLEVBQS9CO01BQU1ELGU7O0FBRU4sSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsT0FBc0IsUUFBdEJBLE9BQXNCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQUEsTUFDaENDLElBRGdDLEdBQ05GLE9BRE0sQ0FDaENF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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkYsRUFTRTtBQUFNLEtBQUMsRUFBQyx5TEFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0F4RUosQ0FERjtBQXVGRCxDQTNIRDs7R0FBTXhDLFE7VUFLb0JTLHFFOzs7TUFMcEJULFE7QUE2SFNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nb2R1bGVzL0NhbGxvdXRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLXJlYWN0anNcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2x1bW4gfSBmcm9tIFwiLi4vLi4vR3JpZFwiO1xuaW1wb3J0IFBpY3R1cmUgZnJvbSBcIi4uLy4uL1BpY3R1cmVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2FsbG91dHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBDYWxsb3V0Q2FuIGZyb20gXCIuLi8uLi9DYW4vQ2FsbG91dENvbnRhaW5lclwiO1xuXG4vLyBEeW5hbWljIGltcG9ydHNcbmNvbnN0IEJhY2tncm91bmRWaWRlbyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9CYWNrZ3JvdW5kVmlkZW9cIikpO1xuXG5jb25zdCBDYWxsb3V0cyA9ICh7IHByaW1hcnksIGZpZWxkcyB9KSA9PiB7XG4gIGNvbnN0IHsgdXNpZCwgaGVhZGxpbmUsIGltYWdlIH0gPSBwcmltYXJ5O1xuXG4gIGNvbnN0IFtoYXNSZXNpemVTdXBwb3J0LCBzZXRIYXNSZXNpemVTdXBwb3J0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldyh7XG4gICAgdGhyZXNob2xkOiAwLjUsXG4gICAgdHJpZ2dlck9uY2U6IHRydWUsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgUmVzaXplT2JzZXJ2ZXIgc3VwcG9ydFxuICAgIC8vIEZpeCBmb3IgaU9TIFNhZmFyaSAxMyBhbmQgYmVsb3dcbiAgICB3aW5kb3cuUmVzaXplT2JzZXJ2ZXJcbiAgICAgID8gc2V0SGFzUmVzaXplU3VwcG9ydCh0cnVlKVxuICAgICAgOiBzZXRIYXNSZXNpemVTdXBwb3J0KGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNvbHVtbkNvbmZpZyA9IChpZCkgPT4ge1xuICAgIGxldCBjb2x1bW5zID0gbnVsbDtcbiAgICBsZXQgb2Zmc2V0cyA9IG51bGw7XG5cbiAgICBpZiAoaWQgPT09IFwiY2FsbG91dC1vbmVcIikge1xuICAgICAgY29sdW1ucyA9IHsgeHM6IDE0LCBzbTogNiwgbWQ6IDYsIHhsOiA1IH07XG4gICAgICBvZmZzZXRzID0geyB4czogMCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5zID0geyB4czogMTQsIHNtOiA2LCBtZDogNiwgeGw6IDUgfTtcbiAgICAgIG9mZnNldHMgPSB7IHhzOiAwLCB4bDogMSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiB7IC4uLmNvbHVtbnMgfSxcbiAgICAgIG9mZnNldHM6IHsgLi4ub2Zmc2V0cyB9LFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgIHN0eWxlcy5jYWxsb3V0cyxcbiAgICAgICAgc3R5bGVzW3VzaWRdLFxuICAgICAgICBpblZpZXcgPyBzdHlsZXMuaW52aWV3IDogXCJcIixcbiAgICAgIF0uam9pbihcIiBcIil9XG4gICAgICByZWY9e3JlZn1cbiAgICA+XG4gICAgICA8QmFja2dyb3VuZFZpZGVvIHVzaWQ9e3VzaWR9IC8+XG5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3dcbiAgICAgICAgICBqdXN0aWZ5PXt7IHhzOiBcImNlbnRlclwiLCBtZDogXCJzdGFydFwiIH19XG4gICAgICAgICAgYWxpZ249e3sgeHM6IFwic3RhcnRcIiwgc206IFwiY2VudGVyXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt1c2lkID09PSBcImNhbGxvdXQtb25lXCIgJiYgKFxuICAgICAgICAgICAgPENvbHVtbiBjb2x1bW5zPXt7IHhzOiAxNCwgc206IDgsIGxnOiA3IH19IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAge2hhc1Jlc2l6ZVN1cHBvcnQgJiYgPENhbGxvdXRDYW4gLz59XG4gICAgICAgICAgICAgIHtoYXNSZXNpemVTdXBwb3J0ID09PSBmYWxzZSAmJiAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9kcmlmdHdlbGwtZmFsbGJhY2sucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkRyaWZ0d2VsbCBDYW5cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmFsbGJhY2tDYW59XG4gICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5Db25maWcodXNpZCkuY29sdW1uc31cbiAgICAgICAgICAgIG9mZnNldHM9e2NvbHVtbkNvbmZpZyh1c2lkKS5vZmZzZXRzfVxuICAgICAgICAgICAgb3JkZXJzPXt7IHhzOiAyLCBzbTogMSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkbGluZSAmJiA8UmljaFRleHQgcmVuZGVyPXtoZWFkbGluZX0gLz59XG5cbiAgICAgICAgICAgIHtmaWVsZHMubWFwKChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIGNhbGxvdXRfdGl0bGUsXG4gICAgICAgICAgICAgICAgY2FsbG91dF9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBjYWxsb3V0X2J1YmJsZSxcbiAgICAgICAgICAgICAgfSA9IGZpZWxkO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsbG91dH0ga2V5PXtgY2FsbG91dF8ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAge2NhbGxvdXRfYnViYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idWJibGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxwPntjYWxsb3V0X2J1YmJsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgICAgIHtjYWxsb3V0X3RpdGxlICYmIDxSaWNoVGV4dCByZW5kZXI9e2NhbGxvdXRfdGl0bGV9IC8+fVxuICAgICAgICAgICAgICAgICAgICB7Y2FsbG91dF9kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0IHJlbmRlcj17Y2FsbG91dF9kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICAgICAgPENvbHVtblxuICAgICAgICAgICAgICBjb2x1bW5zPXt7IHhzOiAxMiwgc206IDgsIG1kOiA3LCBsZzogNiB9fVxuICAgICAgICAgICAgICBvZmZzZXRzPXt7IHhzOiAwLCBtZDogMSwgbGc6IDEgfX1cbiAgICAgICAgICAgICAgb3JkZXJzPXt7IHhzOiAxLCBzbTogMiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGljdHVyZSBpbWFnZT17aW1hZ2V9IGNsYXNzZXM9e3N0eWxlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIHt1c2lkID09PSBcImNhbGxvdXQtdHdvXCIgJiYgKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxOTE5IDEzOC4zODdcIlxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMud2F2ZX1cbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRpdGxlPldhdmUgZ3JhcGhpYzwvdGl0bGU+XG4gICAgICAgICAgPHBhdGggZD1cIk0wIDEzOC4zODZWMGMxMDEuNCAzNy43MTIgMjE5LjI0NiA2Ni41MzQgMzU1Ljk2MSA3OC4xNzkgMjIyLjA2MSAyMS4xIDQ0MSA1LjIwOSA2NDQuNS0xMi4xMTkgMjAzLjUtMTguMjU1IDM5MS41NjMtMzcuOTQyIDU1MS44NjUtNDUuOTI2IDE0OS44MjQtNy45NzUgMjc1LjQtNS43MjEgMzY2LjY3OCA2Ljg4MnYxMTEuMzcxelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxsb3V0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Modules/Callouts/index.js\n");

/***/ })

})