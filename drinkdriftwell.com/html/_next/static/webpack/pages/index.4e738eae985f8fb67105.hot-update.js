webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wave/AnimatedWave.js":
/*!*****************************************!*\
  !*** ./components/Wave/AnimatedWave.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimatedWave; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_canContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/canContext */ \"./contexts/canContext.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wave.module.scss */ \"./components/Wave/wave.module.scss\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wave_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Wave/AnimatedWave.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nfunction AnimatedWave() {\n  _s();\n\n  // Get can loading state from context\n  var _useCanContext = Object(_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"])(),\n      canContext = _useCanContext.canContext;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      innerWidth = _useState[0],\n      setInnerWidth = _useState[1];\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"])({\n    /* Optional options */\n    threshold: 0.5\n  }),\n      waveRef = _useInView.ref,\n      waveInView = _useInView.inView;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isPaused = _useState2[0],\n      setIsPaused = _useState2[1]; // Assign multiple refs to canvas\n  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop\n\n\n  var setRefs = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (node) {\n    // Ref's from useRef needs to have the node assigned to `current`\n    canvasRef.current = node; // Callback refs, like the one from `useInView`, is a function that takes the node as an argument\n\n    waveRef(node);\n  }, [waveRef]);\n  var waveTotal = 4;\n  var waveHeight = 150;\n  var waveSpeed = 0.15;\n  var contextRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var nodesRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var setWaveNodes = function setWaveNodes() {\n    var offSetNodes = waveTotal + 2;\n    return Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(offSetNodes)).map(function (_, index) {\n      return [(index - 1) * window.innerWidth / waveTotal, 0, -index * waveHeight, waveSpeed];\n    });\n  };\n\n  var diff = function diff(a, b) {\n    return (b - a) / 2 + a;\n  };\n\n  var draw = function draw() {\n    var ctx = contextRef.current;\n    var _window = window,\n        _window$devicePixelRa = _window.devicePixelRatio,\n        ratio = _window$devicePixelRa === void 0 ? 1 : _window$devicePixelRa;\n    var canvasHeight = ctx.canvas.height;\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Update nodesRef\n    // [0] node x pos\n    // [1] node y pos\n    // [2] node strength\n    // [3] node speed\n\n    nodesRef.current = nodesRef.current.map(function (node) {\n      return [node[0], waveHeight / 2 * Math.cos(node[2] / 20) + canvasHeight / (2 * ratio), node[2] + node[3], node[3]];\n    });\n    ctx.fillStyle = \"#0373FF\";\n    ctx.beginPath();\n    ctx.moveTo(0, ctx.canvas.height); // Update wave nodes\n\n    var n = 0;\n\n    while (n < waveTotal + 1) {\n      ctx.quadraticCurveTo(nodesRef.current[n][0], nodesRef.current[n][1], diff(nodesRef.current[n][0], nodesRef.current[n + 1][0]), diff(nodesRef.current[n][1], nodesRef.current[n + 1][1]));\n      n++;\n    } // Last wave node\n\n\n    ctx.lineTo(nodesRef.current[nodesRef.current.length - 1][0], nodesRef.current[nodesRef.current.length - 1][1]);\n    ctx.lineTo(window.innerWidth, ctx.canvas.height);\n    ctx.closePath();\n    ctx.fill();\n  };\n\n  function sizeCanvas() {\n    var _canvasRef$current$ge = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge.width,\n        height = _canvasRef$current$ge.height;\n\n    if (canvasRef.current.width !== width || canvasRef.current.height !== height) {\n      var _window2 = window,\n          _window2$devicePixelR = _window2.devicePixelRatio,\n          ratio = _window2$devicePixelR === void 0 ? 1 : _window2$devicePixelR;\n      canvasRef.current.width = width * ratio;\n      canvasRef.current.height = height * ratio;\n      contextRef.current.scale(ratio, ratio); // Update node x pos on window resize\n\n      nodesRef.current = nodesRef.current.map(function (node, index) {\n        var clone = Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node);\n\n        clone[0] = (index - 1) * window.innerWidth / waveTotal;\n        return clone;\n      });\n      return true;\n    }\n\n    return false;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    nodesRef.current = setWaveNodes(); // Set up canvas\n\n    var canvas = canvasRef.current;\n    contextRef.current = canvas.getContext(\"2d\"); // Size canvas with devicePixelRatio\n\n    sizeCanvas();\n  }, [contextRef]); // Resize\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setInnerWidth(window.innerWidth);\n    window.addEventListener(\"resize\", sizeCanvas);\n    return function () {\n      window.removeEventListener(\"resize\", sizeCanvas);\n    };\n  }, []); // Pause and play wave on animate in\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Initial draw of wave, paused to start\n    draw(); // Once animated in, play\n\n    setTimeout(function () {\n      setIsPaused(false);\n    }, 3000);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var animationFrameId; // if not isPaused and waveInView, requestAnimationFrame\n\n    var render = function render() {\n      draw();\n      animationFrameId = requestAnimationFrame(render);\n    };\n\n    if (!isPaused && waveInView) {\n      // Start requestAnimationFrame\n      render();\n    } else if (!waveInView) {\n      // Stop requestAnimationFrame\n      cancelAnimationFrame(animationFrameId);\n    }\n\n    return function () {\n      cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw, isPaused, waveInView]);\n  return __jsx(\"canvas\", {\n    className: _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wave,\n    ref: setRefs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 7\n    }\n  }, \"wave inside viewport \".concat(waveInView, \".\")), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 7\n    }\n  }, \"A subtle wave animation\"));\n}\n\n_s(AnimatedWave, \"meVVZ7jR2leMmcQW9ZOua8ZSamM=\", false, function () {\n  return [_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"]];\n});\n\n_c = AnimatedWave;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimatedWave\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcz8zYjI5Il0sIm5hbWVzIjpbIkFuaW1hdGVkV2F2ZSIsInVzZUNhbkNvbnRleHQiLCJjYW5Db250ZXh0IiwidXNlU3RhdGUiLCJpbm5lcldpZHRoIiwic2V0SW5uZXJXaWR0aCIsInVzZUluVmlldyIsInRocmVzaG9sZCIsIndhdmVSZWYiLCJyZWYiLCJ3YXZlSW5WaWV3IiwiaW5WaWV3IiwiaXNQYXVzZWQiLCJzZXRJc1BhdXNlZCIsInNldFJlZnMiLCJ1c2VDYWxsYmFjayIsIm5vZGUiLCJjYW52YXNSZWYiLCJjdXJyZW50Iiwid2F2ZVRvdGFsIiwid2F2ZUhlaWdodCIsIndhdmVTcGVlZCIsImNvbnRleHRSZWYiLCJ1c2VSZWYiLCJub2Rlc1JlZiIsInNldFdhdmVOb2RlcyIsIm9mZlNldE5vZGVzIiwiQXJyYXkiLCJtYXAiLCJfIiwiaW5kZXgiLCJ3aW5kb3ciLCJkaWZmIiwiYSIsImIiLCJkcmF3IiwiY3R4IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInJhdGlvIiwiY2FudmFzSGVpZ2h0IiwiY2FudmFzIiwiaGVpZ2h0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJNYXRoIiwiY29zIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibiIsInF1YWRyYXRpY0N1cnZlVG8iLCJsaW5lVG8iLCJsZW5ndGgiLCJjbG9zZVBhdGgiLCJmaWxsIiwic2l6ZUNhbnZhcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjYWxlIiwiY2xvbmUiLCJ1c2VFZmZlY3QiLCJnZXRDb250ZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uRnJhbWVJZCIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic3R5bGVzIiwid2F2ZSJdLCJtYXBwaW5ncyI6Ijs7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RixVQUFqQixFQUE2QjtBQUMzQjtBQUNBdUQsWUFBTTtBQUNQLEtBSEQsTUFHTyxJQUFJLENBQUN2RCxVQUFMLEVBQWlCO0FBQ3RCO0FBQ0F5RCwwQkFBb0IsQ0FBQ0gsZ0JBQUQsQ0FBcEI7QUFDRDs7QUFDRCxXQUFPLFlBQU07QUFDWEcsMEJBQW9CLENBQUNILGdCQUFELENBQXBCO0FBQ0QsS0FGRDtBQUdELEdBbEJRLEVBa0JOLENBQUM3QixJQUFELEVBQU92QixRQUFQLEVBQWlCRixVQUFqQixDQWxCTSxDQUFUO0FBbUJBLFNBQ0U7QUFBUSxhQUFTLEVBQUUwRCx3REFBTSxDQUFDQyxJQUExQjtBQUFnQyxPQUFHLEVBQUV2RCxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBNEJKLFVBQTVCLE9BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGLENBREY7QUFNRDs7R0E5S3VCVixZO1VBRUNDLGtFLEVBR3NCSyxxRTs7O0tBTHZCTixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2NhbkNvbnRleHRcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vd2F2ZS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZFdhdmUoKSB7XG4gIC8vIEdldCBjYW4gbG9hZGluZyBzdGF0ZSBmcm9tIGNvbnRleHRcbiAgY29uc3QgeyBjYW5Db250ZXh0IH0gPSB1c2VDYW5Db250ZXh0KCk7XG4gIGNvbnN0IFtpbm5lcldpZHRoLCBzZXRJbm5lcldpZHRoXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgeyByZWY6IHdhdmVSZWYsIGluVmlldzogd2F2ZUluVmlldyB9ID0gdXNlSW5WaWV3KHtcbiAgICAvKiBPcHRpb25hbCBvcHRpb25zICovXG4gICAgdGhyZXNob2xkOiAwLjUsXG4gIH0pO1xuXG4gIGNvbnN0IFtpc1BhdXNlZCwgc2V0SXNQYXVzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gQXNzaWduIG11bHRpcGxlIHJlZnMgdG8gY2FudmFzXG4gIC8vIFVzZSBgdXNlQ2FsbGJhY2tgIHNvIHdlIGRvbid0IHJlY3JlYXRlIHRoZSBmdW5jdGlvbiBvbiBlYWNoIHJlbmRlciAtIENvdWxkIHJlc3VsdCBpbiBpbmZpbml0ZSBsb29wXG4gIGNvbnN0IHNldFJlZnMgPSB1c2VDYWxsYmFjayhcbiAgICAobm9kZSkgPT4ge1xuICAgICAgLy8gUmVmJ3MgZnJvbSB1c2VSZWYgbmVlZHMgdG8gaGF2ZSB0aGUgbm9kZSBhc3NpZ25lZCB0byBgY3VycmVudGBcbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50ID0gbm9kZTtcbiAgICAgIC8vIENhbGxiYWNrIHJlZnMsIGxpa2UgdGhlIG9uZSBmcm9tIGB1c2VJblZpZXdgLCBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIG5vZGUgYXMgYW4gYXJndW1lbnRcbiAgICAgIHdhdmVSZWYobm9kZSk7XG4gICAgfSxcbiAgICBbd2F2ZVJlZl1cbiAgKTtcblxuICBsZXQgd2F2ZVRvdGFsID0gNDtcbiAgbGV0IHdhdmVIZWlnaHQgPSAxNTA7XG4gIGxldCB3YXZlU3BlZWQgPSAwLjE1O1xuXG4gIGNvbnN0IGNvbnRleHRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgbm9kZXNSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgc2V0V2F2ZU5vZGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IG9mZlNldE5vZGVzID0gd2F2ZVRvdGFsICsgMjtcbiAgICByZXR1cm4gWy4uLkFycmF5KG9mZlNldE5vZGVzKV0ubWFwKChfLCBpbmRleCkgPT4gW1xuICAgICAgKChpbmRleCAtIDEpICogd2luZG93LmlubmVyV2lkdGgpIC8gd2F2ZVRvdGFsLFxuICAgICAgMCxcbiAgICAgIC1pbmRleCAqIHdhdmVIZWlnaHQsXG4gICAgICB3YXZlU3BlZWQsXG4gICAgXSk7XG4gIH07XG5cbiAgY29uc3QgZGlmZiA9IChhLCBiKSA9PiAoYiAtIGEpIC8gMiArIGE7XG5cbiAgY29uc3QgZHJhdyA9ICgpID0+IHtcbiAgICBjb25zdCBjdHggPSBjb250ZXh0UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgeyBkZXZpY2VQaXhlbFJhdGlvOiByYXRpbyA9IDEgfSA9IHdpbmRvdztcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBjdHguY2FudmFzLmhlaWdodDtcblxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gVXBkYXRlIG5vZGVzUmVmXG4gICAgLy8gWzBdIG5vZGUgeCBwb3NcbiAgICAvLyBbMV0gbm9kZSB5IHBvc1xuICAgIC8vIFsyXSBub2RlIHN0cmVuZ3RoXG4gICAgLy8gWzNdIG5vZGUgc3BlZWRcbiAgICBub2Rlc1JlZi5jdXJyZW50ID0gbm9kZXNSZWYuY3VycmVudC5tYXAoKG5vZGUpID0+IFtcbiAgICAgIG5vZGVbMF0sXG4gICAgICAod2F2ZUhlaWdodCAvIDIpICogTWF0aC5jb3Mobm9kZVsyXSAvIDIwKSArIGNhbnZhc0hlaWdodCAvICgyICogcmF0aW8pLFxuICAgICAgbm9kZVsyXSArIG5vZGVbM10sXG4gICAgICBub2RlWzNdLFxuICAgIF0pO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAzNzNGRlwiO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gVXBkYXRlIHdhdmUgbm9kZXNcbiAgICBsZXQgbiA9IDA7XG4gICAgd2hpbGUgKG4gPCB3YXZlVG90YWwgKyAxKSB7XG4gICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhcbiAgICAgICAgbm9kZXNSZWYuY3VycmVudFtuXVswXSxcbiAgICAgICAgbm9kZXNSZWYuY3VycmVudFtuXVsxXSxcbiAgICAgICAgZGlmZihub2Rlc1JlZi5jdXJyZW50W25dWzBdLCBub2Rlc1JlZi5jdXJyZW50W24gKyAxXVswXSksXG4gICAgICAgIGRpZmYobm9kZXNSZWYuY3VycmVudFtuXVsxXSwgbm9kZXNSZWYuY3VycmVudFtuICsgMV1bMV0pXG4gICAgICApO1xuICAgICAgbisrO1xuICAgIH1cblxuICAgIC8vIExhc3Qgd2F2ZSBub2RlXG4gICAgY3R4LmxpbmVUbyhcbiAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbm9kZXNSZWYuY3VycmVudC5sZW5ndGggLSAxXVswXSxcbiAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbm9kZXNSZWYuY3VycmVudC5sZW5ndGggLSAxXVsxXVxuICAgICk7XG5cbiAgICBjdHgubGluZVRvKHdpbmRvdy5pbm5lcldpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG5cbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBzaXplQ2FudmFzKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAoXG4gICAgICBjYW52YXNSZWYuY3VycmVudC53aWR0aCAhPT0gd2lkdGggfHxcbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50LmhlaWdodCAhPT0gaGVpZ2h0XG4gICAgKSB7XG4gICAgICBjb25zdCB7IGRldmljZVBpeGVsUmF0aW86IHJhdGlvID0gMSB9ID0gd2luZG93O1xuICAgICAgY2FudmFzUmVmLmN1cnJlbnQud2lkdGggPSB3aWR0aCAqIHJhdGlvO1xuICAgICAgY2FudmFzUmVmLmN1cnJlbnQuaGVpZ2h0ID0gaGVpZ2h0ICogcmF0aW87XG4gICAgICBjb250ZXh0UmVmLmN1cnJlbnQuc2NhbGUocmF0aW8sIHJhdGlvKTtcblxuICAgICAgLy8gVXBkYXRlIG5vZGUgeCBwb3Mgb24gd2luZG93IHJlc2l6ZVxuICAgICAgbm9kZXNSZWYuY3VycmVudCA9IG5vZGVzUmVmLmN1cnJlbnQubWFwKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjbG9uZSA9IFsuLi5ub2RlXTtcbiAgICAgICAgY2xvbmVbMF0gPSAoKGluZGV4IC0gMSkgKiB3aW5kb3cuaW5uZXJXaWR0aCkgLyB3YXZlVG90YWw7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5vZGVzUmVmLmN1cnJlbnQgPSBzZXRXYXZlTm9kZXMoKTtcblxuICAgIC8vIFNldCB1cCBjYW52YXNcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgLy8gU2l6ZSBjYW52YXMgd2l0aCBkZXZpY2VQaXhlbFJhdGlvXG4gICAgc2l6ZUNhbnZhcygpO1xuICB9LCBbY29udGV4dFJlZl0pO1xuXG4gIC8vIFJlc2l6ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNpemVDYW52YXMpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNpemVDYW52YXMpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBQYXVzZSBhbmQgcGxheSB3YXZlIG9uIGFuaW1hdGUgaW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJbml0aWFsIGRyYXcgb2Ygd2F2ZSwgcGF1c2VkIHRvIHN0YXJ0XG4gICAgZHJhdygpO1xuXG4gICAgLy8gT25jZSBhbmltYXRlZCBpbiwgcGxheVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNQYXVzZWQoZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZDtcbiAgICAvLyBpZiBub3QgaXNQYXVzZWQgYW5kIHdhdmVJblZpZXcsIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIGRyYXcoKTtcbiAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9O1xuXG4gICAgaWYgKCFpc1BhdXNlZCAmJiB3YXZlSW5WaWV3KSB7XG4gICAgICAvLyBTdGFydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgIHJlbmRlcigpO1xuICAgIH0gZWxzZSBpZiAoIXdhdmVJblZpZXcpIHtcbiAgICAgIC8vIFN0b3AgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIH07XG4gIH0sIFtkcmF3LCBpc1BhdXNlZCwgd2F2ZUluVmlld10pO1xuICByZXR1cm4gKFxuICAgIDxjYW52YXMgY2xhc3NOYW1lPXtzdHlsZXMud2F2ZX0gcmVmPXtzZXRSZWZzfT5cbiAgICAgIDxwPntgd2F2ZSBpbnNpZGUgdmlld3BvcnQgJHt3YXZlSW5WaWV3fS5gfTwvcD5cbiAgICAgIDxwPkEgc3VidGxlIHdhdmUgYW5pbWF0aW9uPC9wPlxuICAgIDwvY2FudmFzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Wave/AnimatedWave.js\n");

/***/ })

})