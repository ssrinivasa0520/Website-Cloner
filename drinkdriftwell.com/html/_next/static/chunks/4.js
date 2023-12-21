(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./components/Can/Fallback.js":
/*!************************************!*\
  !*** ./components/Can/Fallback.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanFallback; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_canContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/canContext */ \"./contexts/canContext.js\");\n/* harmony import */ var _can_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./can.module.scss */ \"./components/Can/can.module.scss\");\n/* harmony import */ var _can_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_can_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/hutchaa/Projects/makemarks/Driftwell/components/Can/Fallback.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction CanFallback() {\n  _s();\n\n  var _useCanContext = Object(_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"])(),\n      setCanContext = _useCanContext.setCanContext;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Delay loading of can fallback\n    // so we don't call setCanContext(true)\n    // if the fallback is unmounted/not used\n    var delay = setTimeout(function () {\n      setCanContext(true);\n    }, 500);\n    return function () {\n      clearTimeout(delay);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: [_can_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.driftwellCanContainer, _can_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.loaded].join(\" \"),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: [_can_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.driftwellCan, _can_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sticky].join(\" \"),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/images/driftwell-fallback.png\",\n        alt: \"Driftwell Can\",\n        className: _can_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fallbackCan,\n        loading: \"lazy\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CanFallback, \"fxX8Zmb2dxpiX+lpTffaHeoXhDE=\", false, function () {\n  return [_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"]];\n});\n\n_c = CanFallback;\n\nvar _c;\n\n$RefreshReg$(_c, \"CanFallback\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW4vRmFsbGJhY2suanM/MzMxZSJdLCJuYW1lcyI6WyJDYW5GYWxsYmFjayIsInVzZUNhbkNvbnRleHQiLCJzZXRDYW5Db250ZXh0IiwidXNlRWZmZWN0IiwiZGVsYXkiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3R5bGVzIiwiZHJpZnR3ZWxsQ2FuQ29udGFpbmVyIiwibG9hZGVkIiwiam9pbiIsImRyaWZ0d2VsbENhbiIsInN0aWNreSIsImZhbGxiYWNrQ2FuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSx1QkFDVkMsMEVBQWEsRUFESDtBQUFBLE1BQzVCQyxhQUQ0QixrQkFDNUJBLGFBRDRCOztBQUVwQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxVQUFVLENBQUMsWUFBTTtBQUM3QkgsbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxLQUZ1QixFQUVyQixHQUZxQixDQUF4QjtBQUdBLFdBQU8sWUFBTTtBQUNYSSxrQkFBWSxDQUFDRixLQUFELENBQVo7QUFDRCxLQUZEO0FBR0QsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNFO0FBQUssYUFBUyxFQUFFLENBQUNHLHVEQUFNLENBQUNDLHFCQUFSLEVBQStCRCx1REFBTSxDQUFDRSxNQUF0QyxFQUE4Q0MsSUFBOUMsQ0FBbUQsR0FBbkQsQ0FBaEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRSxDQUFDSCx1REFBTSxDQUFDSSxZQUFSLEVBQXNCSix1REFBTSxDQUFDSyxNQUE3QixFQUFxQ0YsSUFBckMsQ0FBMEMsR0FBMUMsQ0FBaEI7QUFBQSw2QkFDRTtBQUNFLFdBQUcsRUFBQyxnQ0FETjtBQUVFLFdBQUcsRUFBQyxlQUZOO0FBR0UsaUJBQVMsRUFBRUgsdURBQU0sQ0FBQ00sV0FIcEI7QUFJRSxlQUFPLEVBQUM7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQTFCdUJiLFc7VUFDSUMsa0U7OztLQURKRCxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYW4vRmFsbGJhY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbkNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvY2FuQ29udGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jYW4ubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FuRmFsbGJhY2soKSB7XG4gIGNvbnN0IHsgc2V0Q2FuQ29udGV4dCB9ID0gdXNlQ2FuQ29udGV4dCgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIERlbGF5IGxvYWRpbmcgb2YgY2FuIGZhbGxiYWNrXG4gICAgLy8gc28gd2UgZG9uJ3QgY2FsbCBzZXRDYW5Db250ZXh0KHRydWUpXG4gICAgLy8gaWYgdGhlIGZhbGxiYWNrIGlzIHVubW91bnRlZC9ub3QgdXNlZFxuICAgIGNvbnN0IGRlbGF5ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRDYW5Db250ZXh0KHRydWUpO1xuICAgIH0sIDUwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChkZWxheSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMuZHJpZnR3ZWxsQ2FuQ29udGFpbmVyLCBzdHlsZXMubG9hZGVkXS5qb2luKFwiIFwiKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5kcmlmdHdlbGxDYW4sIHN0eWxlcy5zdGlja3ldLmpvaW4oXCIgXCIpfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZHJpZnR3ZWxsLWZhbGxiYWNrLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiRHJpZnR3ZWxsIENhblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmFsbGJhY2tDYW59XG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Can/Fallback.js\n");

/***/ })

}]);