webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Modules/Callouts/index.js":
/*!**********************************************!*\
  !*** ./components/Modules/Callouts/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Grid */ \"./components/Grid/index.js\");\n/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Picture */ \"./components/Picture/index.js\");\n/* harmony import */ var _Can_CalloutContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Can/CalloutContainer */ \"./components/Can/CalloutContainer.js\");\n/* harmony import */ var _BackgroundVideo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BackgroundVideo */ \"./components/Modules/Callouts/BackgroundVideo.js\");\n/* harmony import */ var _callouts_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./callouts.module.scss */ \"./components/Modules/Callouts/callouts.module.scss\");\n/* harmony import */ var _callouts_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_callouts_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Modules/Callouts/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Callouts = function Callouts(_ref) {\n  _s();\n\n  var primary = _ref.primary,\n      fields = _ref.fields;\n  var usid = primary.usid,\n      headline = primary.headline,\n      image = primary.image;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      hasResizeSupport = _useState[0],\n      setHasResizeSupport = _useState[1];\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"])({\n    threshold: 0.5,\n    triggerOnce: true\n  }),\n      ref = _useInView.ref,\n      inView = _useInView.inView;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Check ResizeObserver support\n    // Fix for iOS Safari 13 and below\n    window.ResizeObserver && setHasResizeSupport(true);\n  }, []);\n\n  var columnConfig = function columnConfig(id) {\n    var columns = null;\n    var offsets = null;\n\n    if (id === \"callout-one\") {\n      columns = {\n        xs: 14,\n        sm: 6,\n        md: 6,\n        xl: 5\n      };\n      offsets = {\n        xs: 0\n      };\n    } else {\n      columns = {\n        xs: 14,\n        sm: 6,\n        md: 6,\n        xl: 5\n      };\n      offsets = {\n        xs: 0,\n        xl: 1\n      };\n    }\n\n    return {\n      columns: _objectSpread({}, columns),\n      offsets: _objectSpread({}, offsets)\n    };\n  };\n\n  return __jsx(\"section\", {\n    className: [_callouts_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.callouts, _callouts_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a[usid], inView ? _callouts_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.inview : \"\"].join(\" \"),\n    ref: ref,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(_BackgroundVideo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    usid: usid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }), __jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    justify: {\n      xs: \"center\",\n      md: \"start\"\n    },\n    align: {\n      xs: \"start\",\n      sm: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, usid === \"callout-one\" && __jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__[\"Column\"], {\n    columns: {\n      xs: 14,\n      sm: 8,\n      lg: 7\n    },\n    justify: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, hasResizeSupport && __jsx(_Can_CalloutContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 36\n    }\n  }), !hasResizeSupport && __jsx(\"img\", {\n    src: \"/images/driftwell-fallback.png\",\n    alt: \"Driftwell Can\",\n    className: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.fallbackCan,\n    tabIndex: \"-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  })), __jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__[\"Column\"], {\n    columns: columnConfig(usid).columns,\n    offsets: columnConfig(usid).offsets,\n    orders: {\n      xs: 2,\n      sm: 1\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, headline && __jsx(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"], {\n    render: headline,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 26\n    }\n  }), fields.map(function (field, index) {\n    var callout_title = field.callout_title,\n        callout_description = field.callout_description,\n        callout_bubble = field.callout_bubble;\n    return __jsx(\"div\", {\n      className: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.callout,\n      key: \"callout_\".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }\n    }, callout_bubble && __jsx(\"div\", {\n      className: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bubble,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 21\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 23\n      }\n    }, callout_bubble)), __jsx(\"div\", {\n      className: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.content,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 19\n      }\n    }, callout_title && __jsx(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"], {\n      render: callout_title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 39\n      }\n    }), callout_description && __jsx(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"], {\n      render: callout_description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 23\n      }\n    })));\n  })), image && __jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__[\"Column\"], {\n    columns: {\n      xs: 12,\n      sm: 8,\n      md: 7,\n      lg: 6\n    },\n    offsets: {\n      xs: 0,\n      md: 1,\n      lg: 1\n    },\n    orders: {\n      xs: 1,\n      sm: 2\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, __jsx(_Picture__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    image: image,\n    classes: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.image,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  })))), usid === \"callout-two\" && __jsx(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 1919 138.387\",\n    width: \"100%\",\n    height: \"100%\",\n    className: _callouts_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.wave,\n    \"aria-hidden\": \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  }, \"Wave graphic\"), __jsx(\"path\", {\n    d: \"M0 138.386V0c101.4 37.712 219.246 66.534 355.961 78.179 222.061 21.1 441 5.209 644.5-12.119 203.5-18.255 391.563-37.942 551.865-45.926 149.824-7.975 275.4-5.721 366.678 6.882v111.371z\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(Callouts, \"ehFRz93HDDgM6VB2FYYZpnGsgO8=\", false, function () {\n  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"]];\n});\n\n_c = Callouts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Callouts);\n\nvar _c;\n\n$RefreshReg$(_c, \"Callouts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL0NhbGxvdXRzL2luZGV4LmpzP2UyMWIiXSwibmFtZXMiOlsiQ2FsbG91dHMiLCJwcmltYXJ5IiwiZmllbGRzIiwidXNpZCIsImhlYWRsaW5lIiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsImhhc1Jlc2l6ZVN1cHBvcnQiLCJzZXRIYXNSZXNpemVTdXBwb3J0IiwidXNlSW5WaWV3IiwidGhyZXNob2xkIiwidHJpZ2dlck9uY2UiLCJyZWYiLCJpblZpZXciLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJSZXNpemVPYnNlcnZlciIsImNvbHVtbkNvbmZpZyIsImlkIiwiY29sdW1ucyIsIm9mZnNldHMiLCJ4cyIsInNtIiwibWQiLCJ4bCIsInN0eWxlcyIsImNhbGxvdXRzIiwiaW52aWV3Iiwiam9pbiIsImxnIiwiZmFsbGJhY2tDYW4iLCJtYXAiLCJmaWVsZCIsImluZGV4IiwiY2FsbG91dF90aXRsZSIsImNhbGxvdXRfZGVzY3JpcHRpb24iLCJjYWxsb3V0X2J1YmJsZSIsImNhbGxvdXQiLCJidWJibGUiLCJjb250ZW50Iiwid2F2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLE9BQXNCLFFBQXRCQSxPQUFzQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUFBLE1BQ2hDQyxJQURnQyxHQUNORixPQURNLENBQ2hDRSxJQURnQztBQUFBLE1BQzFCQyxRQUQwQixHQUNOSCxPQURNLENBQzFCRyxRQUQwQjtBQUFBLE1BQ2hCQyxLQURnQixHQUNOSixPQURNLENBQ2hCSSxLQURnQjs7QUFBQSxrQkFHUUMsc0RBQVEsQ0FBQyxJQUFELENBSGhCO0FBQUEsTUFHakNDLGdCQUhpQztBQUFBLE1BR2ZDLG1CQUhl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LFE7QUEySFNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nb2R1bGVzL0NhbGxvdXRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1yZWFjdGpzXCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sdW1uIH0gZnJvbSBcIi4uLy4uL0dyaWRcIjtcbmltcG9ydCBQaWN0dXJlIGZyb20gXCIuLi8uLi9QaWN0dXJlXCI7XG5pbXBvcnQgQ2FsbG91dENhbiBmcm9tIFwiLi4vLi4vQ2FuL0NhbGxvdXRDb250YWluZXJcIjtcbmltcG9ydCBCYWNrZ3JvdW5kVmlkZW8gZnJvbSBcIi4vQmFja2dyb3VuZFZpZGVvXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NhbGxvdXRzLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IENhbGxvdXRzID0gKHsgcHJpbWFyeSwgZmllbGRzIH0pID0+IHtcbiAgY29uc3QgeyB1c2lkLCBoZWFkbGluZSwgaW1hZ2UgfSA9IHByaW1hcnk7XG5cbiAgY29uc3QgW2hhc1Jlc2l6ZVN1cHBvcnQsIHNldEhhc1Jlc2l6ZVN1cHBvcnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgeyByZWYsIGluVmlldyB9ID0gdXNlSW5WaWV3KHtcbiAgICB0aHJlc2hvbGQ6IDAuNSxcbiAgICB0cmlnZ2VyT25jZTogdHJ1ZSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBDaGVjayBSZXNpemVPYnNlcnZlciBzdXBwb3J0XG4gICAgLy8gRml4IGZvciBpT1MgU2FmYXJpIDEzIGFuZCBiZWxvd1xuICAgIHdpbmRvdy5SZXNpemVPYnNlcnZlciAmJiBzZXRIYXNSZXNpemVTdXBwb3J0KHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29sdW1uQ29uZmlnID0gKGlkKSA9PiB7XG4gICAgbGV0IGNvbHVtbnMgPSBudWxsO1xuICAgIGxldCBvZmZzZXRzID0gbnVsbDtcblxuICAgIGlmIChpZCA9PT0gXCJjYWxsb3V0LW9uZVwiKSB7XG4gICAgICBjb2x1bW5zID0geyB4czogMTQsIHNtOiA2LCBtZDogNiwgeGw6IDUgfTtcbiAgICAgIG9mZnNldHMgPSB7IHhzOiAwIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbnMgPSB7IHhzOiAxNCwgc206IDYsIG1kOiA2LCB4bDogNSB9O1xuICAgICAgb2Zmc2V0cyA9IHsgeHM6IDAsIHhsOiAxIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbHVtbnM6IHsgLi4uY29sdW1ucyB9LFxuICAgICAgb2Zmc2V0czogeyAuLi5vZmZzZXRzIH0sXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgc3R5bGVzLmNhbGxvdXRzLFxuICAgICAgICBzdHlsZXNbdXNpZF0sXG4gICAgICAgIGluVmlldyA/IHN0eWxlcy5pbnZpZXcgOiBcIlwiLFxuICAgICAgXS5qb2luKFwiIFwiKX1cbiAgICAgIHJlZj17cmVmfVxuICAgID5cbiAgICAgIDxCYWNrZ3JvdW5kVmlkZW8gdXNpZD17dXNpZH0gLz5cblxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvd1xuICAgICAgICAgIGp1c3RpZnk9e3sgeHM6IFwiY2VudGVyXCIsIG1kOiBcInN0YXJ0XCIgfX1cbiAgICAgICAgICBhbGlnbj17eyB4czogXCJzdGFydFwiLCBzbTogXCJjZW50ZXJcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAge3VzaWQgPT09IFwiY2FsbG91dC1vbmVcIiAmJiAoXG4gICAgICAgICAgICA8Q29sdW1uIGNvbHVtbnM9e3sgeHM6IDE0LCBzbTogOCwgbGc6IDcgfX0ganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICB7aGFzUmVzaXplU3VwcG9ydCAmJiA8Q2FsbG91dENhbiAvPn1cbiAgICAgICAgICAgICAgeyFoYXNSZXNpemVTdXBwb3J0ICYmIChcbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2RyaWZ0d2VsbC1mYWxsYmFjay5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiRHJpZnR3ZWxsIENhblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mYWxsYmFja0Nhbn1cbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbkNvbmZpZyh1c2lkKS5jb2x1bW5zfVxuICAgICAgICAgICAgb2Zmc2V0cz17Y29sdW1uQ29uZmlnKHVzaWQpLm9mZnNldHN9XG4gICAgICAgICAgICBvcmRlcnM9e3sgeHM6IDIsIHNtOiAxIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hlYWRsaW5lICYmIDxSaWNoVGV4dCByZW5kZXI9e2hlYWRsaW5lfSAvPn1cblxuICAgICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgY2FsbG91dF90aXRsZSxcbiAgICAgICAgICAgICAgICBjYWxsb3V0X2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGNhbGxvdXRfYnViYmxlLFxuICAgICAgICAgICAgICB9ID0gZmllbGQ7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxsb3V0fSBrZXk9e2BjYWxsb3V0XyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICB7Y2FsbG91dF9idWJibGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1YmJsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e2NhbGxvdXRfYnViYmxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICAgICAge2NhbGxvdXRfdGl0bGUgJiYgPFJpY2hUZXh0IHJlbmRlcj17Y2FsbG91dF90aXRsZX0gLz59XG4gICAgICAgICAgICAgICAgICAgIHtjYWxsb3V0X2Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQgcmVuZGVyPXtjYWxsb3V0X2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0NvbHVtbj5cblxuICAgICAgICAgIHtpbWFnZSAmJiAoXG4gICAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICAgIGNvbHVtbnM9e3sgeHM6IDEyLCBzbTogOCwgbWQ6IDcsIGxnOiA2IH19XG4gICAgICAgICAgICAgIG9mZnNldHM9e3sgeHM6IDAsIG1kOiAxLCBsZzogMSB9fVxuICAgICAgICAgICAgICBvcmRlcnM9e3sgeHM6IDEsIHNtOiAyIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQaWN0dXJlIGltYWdlPXtpbWFnZX0gY2xhc3Nlcz17c3R5bGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAge3VzaWQgPT09IFwiY2FsbG91dC10d29cIiAmJiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE5MTkgMTM4LjM4N1wiXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53YXZlfVxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGl0bGU+V2F2ZSBncmFwaGljPC90aXRsZT5cbiAgICAgICAgICA8cGF0aCBkPVwiTTAgMTM4LjM4NlYwYzEwMS40IDM3LjcxMiAyMTkuMjQ2IDY2LjUzNCAzNTUuOTYxIDc4LjE3OSAyMjIuMDYxIDIxLjEgNDQxIDUuMjA5IDY0NC41LTEyLjExOSAyMDMuNS0xOC4yNTUgMzkxLjU2My0zNy45NDIgNTUxLjg2NS00NS45MjYgMTQ5LjgyNC03Ljk3NSAyNzUuNC01LjcyMSAzNjYuNjc4IDYuODgydjExMS4zNzF6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGxvdXRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Modules/Callouts/index.js\n");

/***/ })

})