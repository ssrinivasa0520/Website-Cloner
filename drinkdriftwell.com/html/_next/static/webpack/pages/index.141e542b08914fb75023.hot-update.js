webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Can/ScrollingModel.js":
/*!******************************************!*\
  !*** ./components/Can/ScrollingModel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei_useGLTF__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei/useGLTF */ \"./node_modules/@react-three/drei/useGLTF.js\");\n/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-three-fiber */ \"./node_modules/react-three-fiber/web.js\");\n/* harmony import */ var lerp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lerp */ \"./node_modules/lerp/index.js\");\n/* harmony import */ var lerp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lerp__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Can/ScrollingModel.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/*\nauto-generated by: https://github.com/pmndrs/gltfjsx\n*/\n\n\n\n\n\nMath.radians = function (degrees) {\n  return degrees * Math.PI / 180;\n};\n\nfunction Model(props) {\n  _s();\n\n  var group = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var introCompleteRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(false);\n\n  var _useGLTF = Object(_react_three_drei_useGLTF__WEBPACK_IMPORTED_MODULE_2__[\"useGLTF\"])(\"/model/driftwell.glb\"),\n      nodes = _useGLTF.nodes,\n      materials = _useGLTF.materials; // Set initial y and z position\n  // Y: add * 0.3 more for the animated rotation in\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var _props$initRotation, _props$initRotation2;\n\n    group.current.rotation.y = ((_props$initRotation = props.initRotation) === null || _props$initRotation === void 0 ? void 0 : _props$initRotation.y) * 0.33 || 0;\n    group.current.rotation.z = ((_props$initRotation2 = props.initRotation) === null || _props$initRotation2 === void 0 ? void 0 : _props$initRotation2.z) || 0;\n  }, []); // Animate rotation\n\n  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__[\"useFrame\"])(function (_ref) {\n    var clock = _ref.clock;\n\n    if (!introCompleteRef.current) {\n      // Store current rotation.y\n      var currentRotationY = group.current.rotation.y; // Calc new rotation.y amount\n\n      var updatedPosY = currentRotationY + clock.getElapsedTime() * 0.33;\n      console.log(updatedPosY, Math.PI);\n\n      if (updatedPosY > Math.PI + Math.PI / 3) {\n        introCompleteRef.current = true;\n      } else {\n        group.current.rotation.y = lerp__WEBPACK_IMPORTED_MODULE_4___default()(currentRotationY, updatedPosY, 0.025);\n      }\n    }\n  });\n  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__[\"useFrame\"])(function () {\n    if (!introCompleteRef.current) return;\n    var currentRotationY = group.current.rotation.y;\n    var currentRotationZ = group.current.rotation.z;\n    var currentRotationX = group.current.rotation.x;\n\n    if (window.pageYOffset > 50) {\n      group.current.rotation.y = lerp__WEBPACK_IMPORTED_MODULE_4___default()(currentRotationY, Math.PI + props.scrollPercentage * 2.5, 0.025);\n      group.current.rotation.z = lerp__WEBPACK_IMPORTED_MODULE_4___default()(currentRotationZ, props.scrollPercentage * 0.5, 0.025);\n      group.current.rotation.x = lerp__WEBPACK_IMPORTED_MODULE_4___default()(currentRotationX, props.scrollPercentage * 0.5, 0.025);\n    } else {// Assume at top of page, reset rotations\n      // group.current.rotation.y = lerp(currentRotationY, Math.PI, 0.05);\n      // group.current.rotation.z = lerp(currentRotationZ, 0, 0.05);\n      // group.current.rotation.x = lerp(currentRotationX, 0, 0.05);\n    }\n  }); // Update primary materials\n\n  materials.CAN_METAL_TOP.roughness = 0.6;\n  materials.CAN_METAL_OTHER.roughness = 0.6;\n  materials.CAN_LABEL.roughness = 0.6;\n  return __jsx(\"group\", Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: group\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }), __jsx(\"mesh\", {\n    material: materials.CAN_METAL_TOP,\n    geometry: nodes.CAN_METAL_TOP.geometry,\n    position: [0, 1.76, 0],\n    rotation: [Math.PI / 2, 0, 0],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }), __jsx(\"mesh\", {\n    material: materials.CAN_LABEL,\n    geometry: nodes.NEW_CAN_LABEL.geometry,\n    position: [0, -1.98, 0],\n    rotation: [Math.PI / 2, 0, -Math.PI],\n    scale: [0.39, 0.39, 0.39],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }), __jsx(\"mesh\", {\n    material: materials.CAN_METAL_OTHER,\n    geometry: nodes.CAN_TAB.geometry,\n    position: [0, 1.92, 0],\n    rotation: [Math.PI / 2, 0, 0],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }), __jsx(\"mesh\", {\n    material: materials.CAN_METAL_OTHER,\n    geometry: nodes.CAN_TAB_RIVET.geometry,\n    position: [0, 1.86, 0],\n    rotation: [Math.PI / 2, 0, 0],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }), __jsx(\"mesh\", {\n    material: materials.CAN_METAL_OTHER,\n    geometry: nodes.NEW_CAN_METAL_BOTTOM.geometry,\n    position: [0, -1.98, 0],\n    rotation: [Math.PI / 2, 0, -Math.PI],\n    scale: [0.39, 0.39, 0.39],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Model, \"nctg7mpmc9LQpKeB9m1wNVf9Eb8=\", false, function () {\n  return [_react_three_drei_useGLTF__WEBPACK_IMPORTED_MODULE_2__[\"useGLTF\"], react_three_fiber__WEBPACK_IMPORTED_MODULE_3__[\"useFrame\"], react_three_fiber__WEBPACK_IMPORTED_MODULE_3__[\"useFrame\"]];\n});\n\n_c = Model;\n\nvar _c;\n\n$RefreshReg$(_c, \"Model\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW4vU2Nyb2xsaW5nTW9kZWwuanM/OTcwZSJdLCJuYW1lcyI6WyJNYXRoIiwicmFkaWFucyIsImRlZ3JlZXMiLCJQSSIsIk1vZGVsIiwicHJvcHMiLCJncm91cCIsInVzZVJlZiIsImludHJvQ29tcGxldGVSZWYiLCJ1c2VHTFRGIiwibm9kZXMiLCJtYXRlcmlhbHMiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwicm90YXRpb24iLCJ5IiwiaW5pdFJvdGF0aW9uIiwieiIsInVzZUZyYW1lIiwiY2xvY2siLCJjdXJyZW50Um90YXRpb25ZIiwidXBkYXRlZFBvc1kiLCJnZXRFbGFwc2VkVGltZSIsImNvbnNvbGUiLCJsb2ciLCJsZXJwIiwiY3VycmVudFJvdGF0aW9uWiIsImN1cnJlbnRSb3RhdGlvblgiLCJ4Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxQZXJjZW50YWdlIiwiQ0FOX01FVEFMX1RPUCIsInJvdWdobmVzcyIsIkNBTl9NRVRBTF9PVEhFUiIsIkNBTl9MQUJFTCIsImdlb21ldHJ5IiwiTkVXX0NBTl9MQUJFTCIsIkNBTl9UQUIiLCJDQU5fVEFCX1JJVkVUIiwiTkVXX0NBTl9NRVRBTF9CT1RUT00iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsSUFBSSxDQUFDQyxPQUFMLEdBQWUsVUFBVUMsT0FBVixFQUFtQjtBQUNoQyxTQUFRQSxPQUFPLEdBQUdGLElBQUksQ0FBQ0csRUFBaEIsR0FBc0IsR0FBN0I7QUFDRCxDQUZEOztBQUllLFNBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNuQyxNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLEVBQXBCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdELG9EQUFNLENBQUMsS0FBRCxDQUEvQjs7QUFGbUMsaUJBSU5FLHlFQUFPLENBQUMsc0JBQUQsQ0FKRDtB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QWpCLENBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLEVBb0JFO0FBQ0UsWUFBUSxFQUFFUSxTQUFTLENBQUN1QixlQUR0QjtBQUVFLFlBQVEsRUFBRXhCLEtBQUssQ0FBQzZCLGFBQU4sQ0FBb0JILFFBRmhDO0FBR0UsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBSFo7QUFJRSxZQUFRLEVBQUUsQ0FBQ3BDLElBQUksQ0FBQ0csRUFBTCxHQUFVLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLENBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCRixFQTBCRTtBQUNFLFlBQVEsRUFBRVEsU0FBUyxDQUFDdUIsZUFEdEI7QUFFRSxZQUFRLEVBQUV4QixLQUFLLENBQUM4QixvQkFBTixDQUEyQkosUUFGdkM7QUFHRSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxJQUFMLEVBQVcsQ0FBWCxDQUhaO0FBSUUsWUFBUSxFQUFFLENBQUNwQyxJQUFJLENBQUNHLEVBQUwsR0FBVSxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFDSCxJQUFJLENBQUNHLEVBQXZCLENBSlo7QUFLRSxTQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJGLENBREY7QUFvQ0Q7O0dBdEd1QkMsSztVQUlPSyxpRSxFQVU3QlMsMEQsRUFlQUEsMEQ7OztLQTdCc0JkLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhbi9TY3JvbGxpbmdNb2RlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5hdXRvLWdlbmVyYXRlZCBieTogaHR0cHM6Ly9naXRodWIuY29tL3BtbmRycy9nbHRmanN4XG4qL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHTFRGIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpL3VzZUdMVEZcIjtcbmltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSBcInJlYWN0LXRocmVlLWZpYmVyXCI7XG5pbXBvcnQgbGVycCBmcm9tIFwibGVycFwiO1xuXG5NYXRoLnJhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICByZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGVsKHByb3BzKSB7XG4gIGNvbnN0IGdyb3VwID0gdXNlUmVmKCk7XG4gIGNvbnN0IGludHJvQ29tcGxldGVSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IHsgbm9kZXMsIG1hdGVyaWFscyB9ID0gdXNlR0xURihcIi9tb2RlbC9kcmlmdHdlbGwuZ2xiXCIpO1xuXG4gIC8vIFNldCBpbml0aWFsIHkgYW5kIHogcG9zaXRpb25cbiAgLy8gWTogYWRkICogMC4zIG1vcmUgZm9yIHRoZSBhbmltYXRlZCByb3RhdGlvbiBpblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdyb3VwLmN1cnJlbnQucm90YXRpb24ueSA9IHByb3BzLmluaXRSb3RhdGlvbj8ueSAqIDAuMzMgfHwgMDtcbiAgICBncm91cC5jdXJyZW50LnJvdGF0aW9uLnogPSBwcm9wcy5pbml0Um90YXRpb24/LnogfHwgMDtcbiAgfSwgW10pO1xuXG4gIC8vIEFuaW1hdGUgcm90YXRpb25cbiAgdXNlRnJhbWUoKHsgY2xvY2sgfSkgPT4ge1xuICAgIGlmICghaW50cm9Db21wbGV0ZVJlZi5jdXJyZW50KSB7XG4gICAgICAvLyBTdG9yZSBjdXJyZW50IHJvdGF0aW9uLnlcbiAgICAgIGNvbnN0IGN1cnJlbnRSb3RhdGlvblkgPSBncm91cC5jdXJyZW50LnJvdGF0aW9uLnk7XG4gICAgICAvLyBDYWxjIG5ldyByb3RhdGlvbi55IGFtb3VudFxuICAgICAgbGV0IHVwZGF0ZWRQb3NZID0gY3VycmVudFJvdGF0aW9uWSArIGNsb2NrLmdldEVsYXBzZWRUaW1lKCkgKiAwLjMzO1xuICAgICAgY29uc29sZS5sb2codXBkYXRlZFBvc1ksIE1hdGguUEkpO1xuICAgICAgaWYgKHVwZGF0ZWRQb3NZID4gTWF0aC5QSSArIE1hdGguUEkgLyAzKSB7XG4gICAgICAgIGludHJvQ29tcGxldGVSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncm91cC5jdXJyZW50LnJvdGF0aW9uLnkgPSBsZXJwKGN1cnJlbnRSb3RhdGlvblksIHVwZGF0ZWRQb3NZLCAwLjAyNSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgaWYgKCFpbnRyb0NvbXBsZXRlUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IGN1cnJlbnRSb3RhdGlvblkgPSBncm91cC5jdXJyZW50LnJvdGF0aW9uLnk7XG4gICAgY29uc3QgY3VycmVudFJvdGF0aW9uWiA9IGdyb3VwLmN1cnJlbnQucm90YXRpb24uejtcbiAgICBjb25zdCBjdXJyZW50Um90YXRpb25YID0gZ3JvdXAuY3VycmVudC5yb3RhdGlvbi54O1xuXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDUwKSB7XG4gICAgICBncm91cC5jdXJyZW50LnJvdGF0aW9uLnkgPSBsZXJwKFxuICAgICAgICBjdXJyZW50Um90YXRpb25ZLFxuICAgICAgICBNYXRoLlBJICsgcHJvcHMuc2Nyb2xsUGVyY2VudGFnZSAqIDIuNSxcbiAgICAgICAgMC4wMjVcbiAgICAgICk7XG5cbiAgICAgIGdyb3VwLmN1cnJlbnQucm90YXRpb24ueiA9IGxlcnAoXG4gICAgICAgIGN1cnJlbnRSb3RhdGlvblosXG4gICAgICAgIHByb3BzLnNjcm9sbFBlcmNlbnRhZ2UgKiAwLjUsXG4gICAgICAgIDAuMDI1XG4gICAgICApO1xuXG4gICAgICBncm91cC5jdXJyZW50LnJvdGF0aW9uLnggPSBsZXJwKFxuICAgICAgICBjdXJyZW50Um90YXRpb25YLFxuICAgICAgICBwcm9wcy5zY3JvbGxQZXJjZW50YWdlICogMC41LFxuICAgICAgICAwLjAyNVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXNzdW1lIGF0IHRvcCBvZiBwYWdlLCByZXNldCByb3RhdGlvbnNcbiAgICAgIC8vIGdyb3VwLmN1cnJlbnQucm90YXRpb24ueSA9IGxlcnAoY3VycmVudFJvdGF0aW9uWSwgTWF0aC5QSSwgMC4wNSk7XG4gICAgICAvLyBncm91cC5jdXJyZW50LnJvdGF0aW9uLnogPSBsZXJwKGN1cnJlbnRSb3RhdGlvblosIDAsIDAuMDUpO1xuICAgICAgLy8gZ3JvdXAuY3VycmVudC5yb3RhdGlvbi54ID0gbGVycChjdXJyZW50Um90YXRpb25YLCAwLCAwLjA1KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFVwZGF0ZSBwcmltYXJ5IG1hdGVyaWFsc1xuICBtYXRlcmlhbHMuQ0FOX01FVEFMX1RPUC5yb3VnaG5lc3MgPSAwLjY7XG4gIG1hdGVyaWFscy5DQU5fTUVUQUxfT1RIRVIucm91Z2huZXNzID0gMC42O1xuICBtYXRlcmlhbHMuQ0FOX0xBQkVMLnJvdWdobmVzcyA9IDAuNjtcbiAgcmV0dXJuIChcbiAgICA8Z3JvdXAgcmVmPXtncm91cH0gey4uLnByb3BzfT5cbiAgICAgIDxtZXNoXG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuQ0FOX01FVEFMX1RPUH1cbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLkNBTl9NRVRBTF9UT1AuZ2VvbWV0cnl9XG4gICAgICAgIHBvc2l0aW9uPXtbMCwgMS43NiwgMF19XG4gICAgICAgIHJvdGF0aW9uPXtbTWF0aC5QSSAvIDIsIDAsIDBdfVxuICAgICAgLz5cbiAgICAgIDxtZXNoXG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuQ0FOX0xBQkVMfVxuICAgICAgICBnZW9tZXRyeT17bm9kZXMuTkVXX0NBTl9MQUJFTC5nZW9tZXRyeX1cbiAgICAgICAgcG9zaXRpb249e1swLCAtMS45OCwgMF19XG4gICAgICAgIHJvdGF0aW9uPXtbTWF0aC5QSSAvIDIsIDAsIC1NYXRoLlBJXX1cbiAgICAgICAgc2NhbGU9e1swLjM5LCAwLjM5LCAwLjM5XX1cbiAgICAgIC8+XG4gICAgICA8bWVzaFxuICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLkNBTl9NRVRBTF9PVEhFUn1cbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLkNBTl9UQUIuZ2VvbWV0cnl9XG4gICAgICAgIHBvc2l0aW9uPXtbMCwgMS45MiwgMF19XG4gICAgICAgIHJvdGF0aW9uPXtbTWF0aC5QSSAvIDIsIDAsIDBdfVxuICAgICAgLz5cbiAgICAgIDxtZXNoXG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuQ0FOX01FVEFMX09USEVSfVxuICAgICAgICBnZW9tZXRyeT17bm9kZXMuQ0FOX1RBQl9SSVZFVC5nZW9tZXRyeX1cbiAgICAgICAgcG9zaXRpb249e1swLCAxLjg2LCAwXX1cbiAgICAgICAgcm90YXRpb249e1tNYXRoLlBJIC8gMiwgMCwgMF19XG4gICAgICAvPlxuICAgICAgPG1lc2hcbiAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5DQU5fTUVUQUxfT1RIRVJ9XG4gICAgICAgIGdlb21ldHJ5PXtub2Rlcy5ORVdfQ0FOX01FVEFMX0JPVFRPTS5nZW9tZXRyeX1cbiAgICAgICAgcG9zaXRpb249e1swLCAtMS45OCwgMF19XG4gICAgICAgIHJvdGF0aW9uPXtbTWF0aC5QSSAvIDIsIDAsIC1NYXRoLlBJXX1cbiAgICAgICAgc2NhbGU9e1swLjM5LCAwLjM5LCAwLjM5XX1cbiAgICAgIC8+XG4gICAgPC9ncm91cD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Can/ScrollingModel.js\n");

/***/ })

})