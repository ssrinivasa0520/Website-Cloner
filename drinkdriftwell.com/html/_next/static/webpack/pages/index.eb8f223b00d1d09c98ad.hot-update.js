webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wave/AnimatedWave.js":
/*!*****************************************!*\
  !*** ./components/Wave/AnimatedWave.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimatedWave; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wave.module.scss */ \"./components/Wave/wave.module.scss\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wave_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Wave/AnimatedWave.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction AnimatedWave() {\n  _s();\n\n  // Get can loading state from context\n  var pixelRatioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__[\"useInView\"])({\n    /* Optional options */\n    threshold: 0.5\n  }),\n      waveRef = _useInView.ref,\n      waveInView = _useInView.inView;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isPaused = _useState[0],\n      setIsPaused = _useState[1]; // Assign multiple refs to canvas\n  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop\n\n\n  var setRefs = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (node) {\n    // Ref's from useRef needs to have the node assigned to `current`\n    canvasRef.current = node; // Callback refs, like the one from `useInView`, is a function that takes the node as an argument\n\n    waveRef(node);\n  }, [waveRef]);\n  var wavePropsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var contextRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var nodesRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var setWaveNodes = function setWaveNodes() {\n    var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 90;\n    var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.25;\n    wavePropsRef.current = {\n      total: total,\n      height: height,\n      speed: speed\n    };\n    var offSetNodes = wavePropsRef.current.total + 2;\n    nodesRef.current = Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(offSetNodes)).map(function (_, index) {\n      return [(index - 1) * window.innerWidth / wavePropsRef.current.total, 0, index * wavePropsRef.current.height, wavePropsRef.current.speed];\n    });\n  };\n\n  var diff = function diff(a, b) {\n    return (b - a) / 2 + a;\n  };\n\n  var draw = function draw() {\n    var ctx = contextRef.current;\n    var canvasHeight = ctx.canvas.height;\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Update nodesRef\n    // [0] node x pos\n    // [1] node y pos\n    // [2] node strength\n    // [3] node speed\n\n    nodesRef.current = nodesRef.current.map(function (node) {\n      return [node[0], wavePropsRef.current.height / 2 * Math.cos(node[2] / 20) + canvasHeight / (2 * pixelRatioRef.current), node[2] + node[3], node[3]];\n    });\n    ctx.fillStyle = \"#0373FF\";\n    ctx.beginPath();\n    ctx.moveTo(0, ctx.canvas.height); // Update wave nodes\n\n    var n = 0;\n\n    while (n < wavePropsRef.current.total + 1) {\n      ctx.quadraticCurveTo(nodesRef.current[n][0], nodesRef.current[n][1], diff(nodesRef.current[n][0], nodesRef.current[n + 1][0]), diff(nodesRef.current[n][1], nodesRef.current[n + 1][1]));\n      n++;\n    } // Last wave node\n\n\n    ctx.lineTo(nodesRef.current[nodesRef.current.length - 1][0], nodesRef.current[nodesRef.current.length - 1][1]);\n    ctx.lineTo(window.innerWidth, ctx.canvas.height);\n    ctx.closePath();\n    ctx.fill();\n  };\n\n  function resize() {\n    var _canvasRef$current$ge = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge.width,\n        height = _canvasRef$current$ge.height; // scale and size canvas with device pixel ratio\n\n\n    if (canvasRef.current.width !== width * pixelRatioRef.current) {\n      if (width < 512) {\n        setWaveNodes(2);\n      } else if (width < 512 && width < 720) {\n        setWaveNodes(2);\n      } else if (width > 720 && width < 1440) {\n        setWaveNodes(3);\n      } else if (width > 1440) {\n        setWaveNodes(4);\n      }\n\n      canvasRef.current.width = width * pixelRatioRef.current;\n      canvasRef.current.height = height * pixelRatioRef.current;\n      contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current); // Update node x pos on window resize\n\n      nodesRef.current = nodesRef.current.map(function (node, index) {\n        var clone = Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node);\n\n        clone[0] = (index - 1) * window.innerWidth / wavePropsRef.current.total;\n        return clone;\n      });\n      return true;\n    }\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Store device pixel ratio\n    pixelRatioRef.current = devicePixelRatio; // Set up canvas\n\n    var canvas = canvasRef.current;\n    contextRef.current = canvas.getContext(\"2d\"); // Scale canvas based on device pixel ratio\n\n    canvasRef.current.width = window.innerWidth * pixelRatioRef.current;\n    canvasRef.current.height = window.innerHeight / 2 * pixelRatioRef.current;\n    contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current); // Set up wave nodes\n\n    if (window.innerWidth < 720) {\n      setWaveNodes(2);\n    } else if (window.innerWidth > 720 && window.innerWidth < 1440) {\n      setWaveNodes(3);\n    } else if (window.innerWidth > 1440) {\n      setWaveNodes(4);\n    }\n  }, [contextRef]); // Resize\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener(\"resize\", resize);\n    return function () {\n      window.removeEventListener(\"resize\", resize);\n    };\n  }, []); // Pause and play wave on animate in\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Initial draw of wave, paused to start\n    draw(); // Once animated in, play\n\n    setTimeout(function () {\n      setIsPaused(false);\n    }, 3000);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var animationFrameId; // if not isPaused and waveInView, requestAnimationFrame\n\n    var render = function render() {\n      draw();\n      animationFrameId = requestAnimationFrame(render);\n    };\n\n    if (!isPaused && waveInView) {\n      // Start requestAnimationFrame\n      render();\n    } else if (!waveInView) {\n      // Stop requestAnimationFrame\n      cancelAnimationFrame(animationFrameId);\n    }\n\n    return function () {\n      cancelAnimationFrame(animationFrameId);\n    };\n  }, [isPaused, waveInView]);\n  return __jsx(\"canvas\", {\n    className: _wave_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wave,\n    ref: setRefs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 192,\n      columnNumber: 7\n    }\n  }, \"A subtle wave animation\"));\n}\n\n_s(AnimatedWave, \"SstWH+JuA7zyRO1XW74+GIqjn4o=\", false, function () {\n  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__[\"useInView\"]];\n});\n\n_c = AnimatedWave;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimatedWave\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcz8zYjI5Il0sIm5hbWVzIjpbIkFuaW1hdGVkV2F2ZSIsInBpeGVsUmF0aW9SZWYiLCJ1c2VSZWYiLCJ1c2VJblZpZXciLCJ0aHJlc2hvbGQiLCJ3YXZlUmVmIiwicmVmIiwid2F2ZUluVmlldyIsImluVmlldyIsInVzZVN0YXRlIiwiaXNQYXVzZWQiLCJzZXRJc1BhdXNlZCIsInNldFJlZnMiLCJ1c2VDYWxsYmFjayIsIm5vZGUiLCJjYW52YXNSZWYiLCJjdXJyZW50Iiwid2F2ZVByb3BzUmVmIiwiY29udGV4dFJlZiIsIm5vZGVzUmVmIiwic2V0V2F2ZU5vZGVzIiwidG90YWwiLCJoZWlnaHQiLCJzcGVlZCIsIm9mZlNldE5vZGVzIiwiQXJyYXkiLCJtYXAiLCJfIiwiaW5kZXgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZGlmZiIsImEiLCJiIiwiZHJhdyIsImN0eCIsImNhbnZhc0hlaWdodCIsImNhbnZhcyIsImNsZWFyUmVjdCIsIndpZHRoIiwiTWF0aCIsImNvcyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsIm4iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwibGluZVRvIiwibGVuZ3RoIiwiY2xvc2VQYXRoIiwiZmlsbCIsInJlc2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjYWxlIiwiY2xvbmUiLCJ1c2VFZmZlY3QiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZ2V0Q29udGV4dCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uRnJhbWVJZCIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic3R5bGVzIiwid2F2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxT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OztBQUtBLFFBQUksQ0FBQ3JELFFBQUQsSUFBYUgsVUFBakIsRUFBNkI7QUFDM0I7QUFDQXdELFlBQU07QUFDUCxLQUhELE1BR08sSUFBSSxDQUFDeEQsVUFBTCxFQUFpQjtBQUN0QjtBQUNBMEQsMEJBQW9CLENBQUNILGdCQUFELENBQXBCO0FBQ0Q7O0FBQ0QsV0FBTyxZQUFNO0FBQ1hHLDBCQUFvQixDQUFDSCxnQkFBRCxDQUFwQjtBQUNELEtBRkQ7QUFHRCxHQWxCUSxFQWtCTixDQUFDcEQsUUFBRCxFQUFXSCxVQUFYLENBbEJNLENBQVQ7QUFtQkEsU0FDRTtBQUFRLGFBQVMsRUFBRTJELHdEQUFNLENBQUNDLElBQTFCO0FBQWdDLE9BQUcsRUFBRXZELE9BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLENBREY7QUFLRDs7R0E5THVCWixZO1VBSXVCRyxxRTs7O0tBSnZCSCxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3dhdmUubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0ZWRXYXZlKCkge1xuICAvLyBHZXQgY2FuIGxvYWRpbmcgc3RhdGUgZnJvbSBjb250ZXh0XG4gIGNvbnN0IHBpeGVsUmF0aW9SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7IHJlZjogd2F2ZVJlZiwgaW5WaWV3OiB3YXZlSW5WaWV3IH0gPSB1c2VJblZpZXcoe1xuICAgIC8qIE9wdGlvbmFsIG9wdGlvbnMgKi9cbiAgICB0aHJlc2hvbGQ6IDAuNSxcbiAgfSk7XG5cbiAgY29uc3QgW2lzUGF1c2VkLCBzZXRJc1BhdXNlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBBc3NpZ24gbXVsdGlwbGUgcmVmcyB0byBjYW52YXNcbiAgLy8gVXNlIGB1c2VDYWxsYmFja2Agc28gd2UgZG9uJ3QgcmVjcmVhdGUgdGhlIGZ1bmN0aW9uIG9uIGVhY2ggcmVuZGVyIC0gQ291bGQgcmVzdWx0IGluIGluZmluaXRlIGxvb3BcbiAgY29uc3Qgc2V0UmVmcyA9IHVzZUNhbGxiYWNrKFxuICAgIChub2RlKSA9PiB7XG4gICAgICAvLyBSZWYncyBmcm9tIHVzZVJlZiBuZWVkcyB0byBoYXZlIHRoZSBub2RlIGFzc2lnbmVkIHRvIGBjdXJyZW50YFxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQgPSBub2RlO1xuICAgICAgLy8gQ2FsbGJhY2sgcmVmcywgbGlrZSB0aGUgb25lIGZyb20gYHVzZUluVmlld2AsIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgbm9kZSBhcyBhbiBhcmd1bWVudFxuICAgICAgd2F2ZVJlZihub2RlKTtcbiAgICB9LFxuICAgIFt3YXZlUmVmXVxuICApO1xuXG4gIGNvbnN0IHdhdmVQcm9wc1JlZiA9IHVzZVJlZigpO1xuICBjb25zdCBjb250ZXh0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG5vZGVzUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHNldFdhdmVOb2RlcyA9ICh0b3RhbCA9IDMsIGhlaWdodCA9IDkwLCBzcGVlZCA9IDAuMjUpID0+IHtcbiAgICB3YXZlUHJvcHNSZWYuY3VycmVudCA9IHtcbiAgICAgIHRvdGFsOiB0b3RhbCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgc3BlZWQ6IHNwZWVkLFxuICAgIH07XG4gICAgY29uc3Qgb2ZmU2V0Tm9kZXMgPSB3YXZlUHJvcHNSZWYuY3VycmVudC50b3RhbCArIDI7XG4gICAgbm9kZXNSZWYuY3VycmVudCA9IFsuLi5BcnJheShvZmZTZXROb2RlcyldLm1hcCgoXywgaW5kZXgpID0+IFtcbiAgICAgICgoaW5kZXggLSAxKSAqIHdpbmRvdy5pbm5lcldpZHRoKSAvIHdhdmVQcm9wc1JlZi5jdXJyZW50LnRvdGFsLFxuICAgICAgMCxcbiAgICAgIGluZGV4ICogd2F2ZVByb3BzUmVmLmN1cnJlbnQuaGVpZ2h0LFxuICAgICAgd2F2ZVByb3BzUmVmLmN1cnJlbnQuc3BlZWQsXG4gICAgXSk7XG4gIH07XG5cbiAgY29uc3QgZGlmZiA9IChhLCBiKSA9PiAoYiAtIGEpIC8gMiArIGE7XG5cbiAgY29uc3QgZHJhdyA9ICgpID0+IHtcbiAgICBjb25zdCBjdHggPSBjb250ZXh0UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY3R4LmNhbnZhcy5oZWlnaHQ7XG5cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIFVwZGF0ZSBub2Rlc1JlZlxuICAgIC8vIFswXSBub2RlIHggcG9zXG4gICAgLy8gWzFdIG5vZGUgeSBwb3NcbiAgICAvLyBbMl0gbm9kZSBzdHJlbmd0aFxuICAgIC8vIFszXSBub2RlIHNwZWVkXG4gICAgbm9kZXNSZWYuY3VycmVudCA9IG5vZGVzUmVmLmN1cnJlbnQubWFwKChub2RlKSA9PiBbXG4gICAgICBub2RlWzBdLFxuICAgICAgKHdhdmVQcm9wc1JlZi5jdXJyZW50LmhlaWdodCAvIDIpICogTWF0aC5jb3Mobm9kZVsyXSAvIDIwKSArXG4gICAgICAgIGNhbnZhc0hlaWdodCAvICgyICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50KSxcbiAgICAgIG5vZGVbMl0gKyBub2RlWzNdLFxuICAgICAgbm9kZVszXSxcbiAgICBdKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMzczRkZcIjtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIGN0eC5jYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIFVwZGF0ZSB3YXZlIG5vZGVzXG4gICAgbGV0IG4gPSAwO1xuICAgIHdoaWxlIChuIDwgd2F2ZVByb3BzUmVmLmN1cnJlbnQudG90YWwgKyAxKSB7XG4gICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhcbiAgICAgICAgbm9kZXNSZWYuY3VycmVudFtuXVswXSxcbiAgICAgICAgbm9kZXNSZWYuY3VycmVudFtuXVsxXSxcbiAgICAgICAgZGlmZihub2Rlc1JlZi5jdXJyZW50W25dWzBdLCBub2Rlc1JlZi5jdXJyZW50W24gKyAxXVswXSksXG4gICAgICAgIGRpZmYobm9kZXNSZWYuY3VycmVudFtuXVsxXSwgbm9kZXNSZWYuY3VycmVudFtuICsgMV1bMV0pXG4gICAgICApO1xuICAgICAgbisrO1xuICAgIH1cblxuICAgIC8vIExhc3Qgd2F2ZSBub2RlXG4gICAgY3R4LmxpbmVUbyhcbiAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbm9kZXNSZWYuY3VycmVudC5sZW5ndGggLSAxXVswXSxcbiAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbm9kZXNSZWYuY3VycmVudC5sZW5ndGggLSAxXVsxXVxuICAgICk7XG5cbiAgICBjdHgubGluZVRvKHdpbmRvdy5pbm5lcldpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG5cbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfTtcblxuICBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIHNjYWxlIGFuZCBzaXplIGNhbnZhcyB3aXRoIGRldmljZSBwaXhlbCByYXRpb1xuICAgIGlmIChjYW52YXNSZWYuY3VycmVudC53aWR0aCAhPT0gd2lkdGggKiBwaXhlbFJhdGlvUmVmLmN1cnJlbnQpIHtcbiAgICAgIGlmICh3aWR0aCA8IDUxMikge1xuICAgICAgICBzZXRXYXZlTm9kZXMoMik7XG4gICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgNTEyICYmIHdpZHRoIDwgNzIwKSB7XG4gICAgICAgIHNldFdhdmVOb2RlcygyKTtcbiAgICAgIH0gZWxzZSBpZiAod2lkdGggPiA3MjAgJiYgd2lkdGggPCAxNDQwKSB7XG4gICAgICAgIHNldFdhdmVOb2RlcygzKTtcbiAgICAgIH0gZWxzZSBpZiAod2lkdGggPiAxNDQwKSB7XG4gICAgICAgIHNldFdhdmVOb2Rlcyg0KTtcbiAgICAgIH1cbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50LndpZHRoID0gd2lkdGggKiBwaXhlbFJhdGlvUmVmLmN1cnJlbnQ7XG4gICAgICBjYW52YXNSZWYuY3VycmVudC5oZWlnaHQgPSBoZWlnaHQgKiBwaXhlbFJhdGlvUmVmLmN1cnJlbnQ7XG4gICAgICBjb250ZXh0UmVmLmN1cnJlbnQuc2NhbGUocGl4ZWxSYXRpb1JlZi5jdXJyZW50LCBwaXhlbFJhdGlvUmVmLmN1cnJlbnQpO1xuXG4gICAgICAvLyBVcGRhdGUgbm9kZSB4IHBvcyBvbiB3aW5kb3cgcmVzaXplXG4gICAgICBub2Rlc1JlZi5jdXJyZW50ID0gbm9kZXNSZWYuY3VycmVudC5tYXAoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gWy4uLm5vZGVdO1xuICAgICAgICBjbG9uZVswXSA9XG4gICAgICAgICAgKChpbmRleCAtIDEpICogd2luZG93LmlubmVyV2lkdGgpIC8gd2F2ZVByb3BzUmVmLmN1cnJlbnQudG90YWw7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFN0b3JlIGRldmljZSBwaXhlbCByYXRpb1xuICAgIHBpeGVsUmF0aW9SZWYuY3VycmVudCA9IGRldmljZVBpeGVsUmF0aW87XG5cbiAgICAvLyBTZXQgdXAgY2FudmFzXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgY29udGV4dFJlZi5jdXJyZW50ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIC8vIFNjYWxlIGNhbnZhcyBiYXNlZCBvbiBkZXZpY2UgcGl4ZWwgcmF0aW9cbiAgICBjYW52YXNSZWYuY3VycmVudC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50O1xuICAgIGNhbnZhc1JlZi5jdXJyZW50LmhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAqIHBpeGVsUmF0aW9SZWYuY3VycmVudDtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQuc2NhbGUocGl4ZWxSYXRpb1JlZi5jdXJyZW50LCBwaXhlbFJhdGlvUmVmLmN1cnJlbnQpO1xuXG4gICAgLy8gU2V0IHVwIHdhdmUgbm9kZXNcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3MjApIHtcbiAgICAgIHNldFdhdmVOb2RlcygyKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzIwICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgMTQ0MCkge1xuICAgICAgc2V0V2F2ZU5vZGVzKDMpO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPiAxNDQwKSB7XG4gICAgICBzZXRXYXZlTm9kZXMoNCk7XG4gICAgfVxuICB9LCBbY29udGV4dFJlZl0pO1xuXG4gIC8vIFJlc2l6ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gUGF1c2UgYW5kIHBsYXkgd2F2ZSBvbiBhbmltYXRlIGluXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSW5pdGlhbCBkcmF3IG9mIHdhdmUsIHBhdXNlZCB0byBzdGFydFxuICAgIGRyYXcoKTtcblxuICAgIC8vIE9uY2UgYW5pbWF0ZWQgaW4sIHBsYXlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzUGF1c2VkKGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lSWQ7XG4gICAgLy8gaWYgbm90IGlzUGF1c2VkIGFuZCB3YXZlSW5WaWV3LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICBkcmF3KCk7XG4gICAgICBhbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfTtcblxuICAgIGlmICghaXNQYXVzZWQgJiYgd2F2ZUluVmlldykge1xuICAgICAgLy8gU3RhcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICByZW5kZXIoKTtcbiAgICB9IGVsc2UgaWYgKCF3YXZlSW5WaWV3KSB7XG4gICAgICAvLyBTdG9wIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICB9O1xuICB9LCBbaXNQYXVzZWQsIHdhdmVJblZpZXddKTtcbiAgcmV0dXJuIChcbiAgICA8Y2FudmFzIGNsYXNzTmFtZT17c3R5bGVzLndhdmV9IHJlZj17c2V0UmVmc30+XG4gICAgICA8cD5BIHN1YnRsZSB3YXZlIGFuaW1hdGlvbjwvcD5cbiAgICA8L2NhbnZhcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Wave/AnimatedWave.js\n");

/***/ })

})