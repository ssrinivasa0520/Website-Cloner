webpackHotUpdate_N_E(1,{

/***/ "./components/Can/Loader.js":
false,

/***/ "./components/Can/ScrollingCan.js":
false,

/***/ "./components/Can/ScrollingContainer.js":
/*!**********************************************!*\
  !*** ./components/Can/ScrollingContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollingCan; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_scroll_percentage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-percentage */ \"./node_modules/react-scroll-percentage/react-scroll-percentage.esm.js\");\n/* harmony import */ var _contexts_canContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/canContext */ \"./contexts/canContext.js\");\n/* harmony import */ var _can_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./can.module.scss */ \"./components/Can/can.module.scss\");\n/* harmony import */ var _can_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_can_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Can/ScrollingContainer.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n // Dynamic imports\n\nvar Can = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./ScrollingCan */ \"./components/Can/ScrollingCan.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./ScrollingCan */ \"./components/Can/ScrollingCan.js\")];\n    },\n    modules: [\"./ScrollingCan\"]\n  }\n});\n_c2 = Can;\nfunction ScrollingCan(props) {\n  _s();\n\n  // Get can loading state from context\n  var _useCanContext = Object(_contexts_canContext__WEBPACK_IMPORTED_MODULE_4__[\"useCanContext\"])(),\n      canContext = _useCanContext.canContext;\n\n  var _useScrollPercentage = Object(react_scroll_percentage__WEBPACK_IMPORTED_MODULE_3__[\"useScrollPercentage\"])({\n    threshold: 0\n  }),\n      _useScrollPercentage2 = Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useScrollPercentage, 2),\n      ref = _useScrollPercentage2[0],\n      percentage = _useScrollPercentage2[1];\n\n  return __jsx(\"div\", {\n    className: [_can_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.driftwellCanContainer, canContext ? _can_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.loaded : \"\"].join(\" \"),\n    ref: ref,\n    \"aria-hidden\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: [_can_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.driftwellCan, _can_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sticky].join(\" \"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(Can, {\n    scrollPercentage: percentage,\n    initRotation: {\n      y: Math.PI,\n      z: 0\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(ScrollingCan, \"MjBab36B/dwaXRO5mAfPD/CUFUE=\", false, function () {\n  return [_contexts_canContext__WEBPACK_IMPORTED_MODULE_4__[\"useCanContext\"], react_scroll_percentage__WEBPACK_IMPORTED_MODULE_3__[\"useScrollPercentage\"]];\n});\n\n_c3 = ScrollingCan;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Can$dynamic\");\n$RefreshReg$(_c2, \"Can\");\n$RefreshReg$(_c3, \"ScrollingCan\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW4vU2Nyb2xsaW5nQ29udGFpbmVyLmpzPzUzM2MiXSwibmFtZXMiOlsiQ2FuIiwiZHluYW1pYyIsInNzciIsIlNjcm9sbGluZ0NhbiIsInByb3BzIiwidXNlQ2FuQ29udGV4dCIsImNhbkNvbnRleHQiLCJ1c2VTY3JvbGxQZXJjZW50YWdlIiwidGhyZXNob2xkIiwicmVmIiwicGVyY2VudGFnZSIsInN0eWxlcyIsImRyaWZ0d2VsbENhbkNvbnRhaW5lciIsImxvYWRlZCIsImpvaW4iLCJkcmlmdHdlbGxDYW4iLCJzdGlja3kiLCJ5IiwiTWF0aCIsIlBJIiwieiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsR0FBRyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSx1SUFBTjtBQUFBLENBQUQsRUFBaUM7QUFDbERDLEtBQUcsRUFBRSxLQUQ2QztBQUFBO0FBQUE7QUFBQSxrQ0FBbkIsd0RBQW1CO0FBQUE7QUFBQSxjQUFuQixnQkFBbUI7QUFBQTtBQUFBLENBQWpDLENBQW5CO01BQU1GLEc7QUFJUyxTQUFTRyxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUMxQztBQUQwQyx1QkFFbkJDLDBFQUFhLEVBRk07QUFBQSxNQUVsQ0MsVUFGa0Msa0JBRWxDQSxVQUZrQzs7QUFBQSw2QkFJaEJDLG1GQUFtQixDQUFDO0FBQzVDQyxhQUFTLEVBQUU7QUFEaUMsR0FBRCxDQUpIO0FBQUE7QUFBQSxNQUluQ0MsR0FKbUM7QUFBQSxNQUk5QkMsVUFKOEI7O0FBUTFDLFNBQ0U7QUFDRSxhQUFTLEVBQUUsQ0FDVEMsdURBQU0sQ0FBQ0MscUJBREUsRUFFVE4sVUFBVSxHQUFHSyx1REFBTSxDQUFDRSxNQUFWLEdBQW1CLEVBRnBCLEVBR1RDLElBSFMsQ0FHSixHQUhJLENBRGI7QUFLRSxPQUFHLEVBQUVMLEdBTFA7QUFNRSxtQkFBWSxNQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRTtBQUFLLGFBQVMsRUFBRSxDQUFDRSx1REFBTSxDQUFDSSxZQUFSLEVBQXNCSix1REFBTSxDQUFDSyxNQUE3QixFQUFxQ0YsSUFBckMsQ0FBMEMsR0FBMUMsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsR0FBRDtBQUNFLG9CQUFnQixFQUFFSixVQURwQjtBQUVFLGdCQUFZLEVBQUU7QUFBRU8sT0FBQyxFQUFFQyxJQUFJLENBQUNDLEVBQVY7QUFBY0MsT0FBQyxFQUFFO0FBQWpCLEtBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBREY7QUFpQkQ7O0dBekJ1QmpCLFk7VUFFQ0Usa0UsRUFFR0UsMkU7OztNQUpKSixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYW4vU2Nyb2xsaW5nQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUGVyY2VudGFnZSB9IGZyb20gXCJyZWFjdC1zY3JvbGwtcGVyY2VudGFnZVwiO1xuaW1wb3J0IHsgdXNlQ2FuQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9jYW5Db250ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Nhbi5tb2R1bGUuc2Nzc1wiO1xuXG4vLyBEeW5hbWljIGltcG9ydHNcbmNvbnN0IENhbiA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9TY3JvbGxpbmdDYW5cIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxpbmdDYW4ocHJvcHMpIHtcbiAgLy8gR2V0IGNhbiBsb2FkaW5nIHN0YXRlIGZyb20gY29udGV4dFxuICBjb25zdCB7IGNhbkNvbnRleHQgfSA9IHVzZUNhbkNvbnRleHQoKTtcblxuICBjb25zdCBbcmVmLCBwZXJjZW50YWdlXSA9IHVzZVNjcm9sbFBlcmNlbnRhZ2Uoe1xuICAgIHRocmVzaG9sZDogMCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgc3R5bGVzLmRyaWZ0d2VsbENhbkNvbnRhaW5lcixcbiAgICAgICAgY2FuQ29udGV4dCA/IHN0eWxlcy5sb2FkZWQgOiBcIlwiLFxuICAgICAgXS5qb2luKFwiIFwiKX1cbiAgICAgIHJlZj17cmVmfVxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5kcmlmdHdlbGxDYW4sIHN0eWxlcy5zdGlja3ldLmpvaW4oXCIgXCIpfT5cbiAgICAgICAgPENhblxuICAgICAgICAgIHNjcm9sbFBlcmNlbnRhZ2U9e3BlcmNlbnRhZ2V9XG4gICAgICAgICAgaW5pdFJvdGF0aW9uPXt7IHk6IE1hdGguUEksIHo6IDAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Can/ScrollingContainer.js\n");

/***/ }),

/***/ "./components/Can/ScrollingModel.js":
false,

/***/ "./node_modules/@alloc/types/index.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@react-spring/animated/index.js":
false,

/***/ "./node_modules/@react-spring/core/index.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/FrameLoop.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/colorMatchers.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/colorToRgba.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/colors.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/createInterpolator.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/deprecations.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/globals.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/helpers.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/hooks.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/index.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/normalizeColor.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/stringInterpolation.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/types.js":
false,

/***/ "./node_modules/@react-spring/shared/esm/types.util.js":
false,

/***/ "./node_modules/@react-spring/web/index.js":
false,

/***/ "./node_modules/@react-three/drei/index.js":
false,

/***/ "./node_modules/detect-gpu/dist/detect-gpu.umd.js":
false,

/***/ "./node_modules/fluids/dist/esm/index.js":
false,

/***/ "./node_modules/lerp/index.js":
false,

/***/ "./node_modules/lodash.omit/index.js":
false,

/***/ "./node_modules/lodash.pick/index.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-dom/node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "./node_modules/react-dom/node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "./node_modules/react-dom/node_modules/scheduler/index.js":
false,

/***/ "./node_modules/react-dom/node_modules/scheduler/tracing.js":
false,

/***/ "./node_modules/react-layout-effect/dist/esm/useLayoutEffect.js":
false,

/***/ "./node_modules/three/examples/js/libs/stats.min.js":
false,

/***/ "./node_modules/three/examples/jsm/controls/DeviceOrientationControls.js":
false,

/***/ "./node_modules/three/examples/jsm/controls/FlyControls.js":
false,

/***/ "./node_modules/three/examples/jsm/controls/OrbitControls.js":
false,

/***/ "./node_modules/three/examples/jsm/controls/PointerLockControls.js":
false,

/***/ "./node_modules/three/examples/jsm/controls/TrackballControls.js":
false,

/***/ "./node_modules/three/examples/jsm/controls/TransformControls.js":
false,

/***/ "./node_modules/three/examples/jsm/curves/NURBSCurve.js":
false,

/***/ "./node_modules/three/examples/jsm/curves/NURBSUtils.js":
false,

/***/ "./node_modules/three/examples/jsm/libs/inflate.module.min.js":
false,

/***/ "./node_modules/three/examples/jsm/lights/RectAreaLightUniformsLib.js":
false,

/***/ "./node_modules/three/examples/jsm/lines/Line2.js":
false,

/***/ "./node_modules/three/examples/jsm/lines/LineGeometry.js":
false,

/***/ "./node_modules/three/examples/jsm/lines/LineMaterial.js":
false,

/***/ "./node_modules/three/examples/jsm/lines/LineSegments2.js":
false,

/***/ "./node_modules/three/examples/jsm/lines/LineSegmentsGeometry.js":
false,

/***/ "./node_modules/three/examples/jsm/loaders/FBXLoader.js":
false,

/***/ "./node_modules/three/examples/jsm/loaders/HDRCubeTextureLoader.js":
false,

/***/ "./node_modules/three/examples/jsm/loaders/RGBELoader.js":
false,

/***/ "./node_modules/three/examples/jsm/modifiers/SimplifyModifier.js":
false,

/***/ "./node_modules/three/examples/jsm/modifiers/SubdivisionModifier.js":
false,

/***/ "./node_modules/three/examples/jsm/modifiers/TessellateModifier.js":
false,

/***/ "./node_modules/three/examples/jsm/objects/Reflector.js":
false,

/***/ "./node_modules/three/examples/jsm/objects/Sky.js":
false,

/***/ "./node_modules/three/examples/jsm/postprocessing/EffectComposer.js":
false,

/***/ "./node_modules/three/examples/jsm/postprocessing/MaskPass.js":
false,

/***/ "./node_modules/three/examples/jsm/postprocessing/Pass.js":
false,

/***/ "./node_modules/three/examples/jsm/postprocessing/RenderPass.js":
false,

/***/ "./node_modules/three/examples/jsm/postprocessing/ShaderPass.js":
false,

/***/ "./node_modules/three/examples/jsm/shaders/CopyShader.js":
false,

/***/ "./node_modules/three/examples/jsm/shaders/GammaCorrectionShader.js":
false,

/***/ "./node_modules/three/examples/jsm/shaders/HorizontalBlurShader.js":
false,

/***/ "./node_modules/three/examples/jsm/shaders/VerticalBlurShader.js":
false,

/***/ "./node_modules/troika-three-text/dist/troika-three-text.esm.js":
false,

/***/ "./node_modules/troika-three-utils/dist/troika-three-utils.esm.js":
false,

/***/ "./node_modules/troika-worker-utils/dist/troika-worker-utils.esm.js":
false,

/***/ "./node_modules/use-memo-one/dist/use-memo-one.esm.js":
false,

/***/ "./node_modules/zustand/index.js":
false

})