webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wave/AnimatedWave.js":
/*!*****************************************!*\
  !*** ./components/Wave/AnimatedWave.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimatedWave; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_canContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/canContext */ \"./contexts/canContext.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wave.module.scss */ \"./components/Wave/wave.module.scss\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wave_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Wave/AnimatedWave.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nfunction AnimatedWave() {\n  _s();\n\n  // Get can loading state from context\n  var _useCanContext = Object(_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"])(),\n      canContext = _useCanContext.canContext;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      innerWidth = _useState[0],\n      setInnerWidth = _useState[1];\n\n  var pixelRatioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"])({\n    /* Optional options */\n    threshold: 0.5\n  }),\n      waveRef = _useInView.ref,\n      waveInView = _useInView.inView;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isPaused = _useState2[0],\n      setIsPaused = _useState2[1]; // Assign multiple refs to canvas\n  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop\n\n\n  var setRefs = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (node) {\n    // Ref's from useRef needs to have the node assigned to `current`\n    canvasRef.current = node; // Callback refs, like the one from `useInView`, is a function that takes the node as an argument\n\n    waveRef(node);\n  }, [waveRef]);\n  var waveTotal = 4;\n  var waveHeight = 150;\n  var waveSpeed = 0.15;\n  var contextRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var nodesRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var setWaveNodes = function setWaveNodes() {\n    var offSetNodes = waveTotal + 2;\n    return Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(offSetNodes)).map(function (_, index) {\n      return [(index - 1) * window.innerWidth / waveTotal, 0, -index * waveHeight, waveSpeed];\n    });\n  };\n\n  var diff = function diff(a, b) {\n    return (b - a) / 2 + a;\n  };\n\n  var draw = function draw() {\n    var ctx = contextRef.current; // const { devicePixelRatio: ratio = 1 } = window;\n\n    var ratio = 2;\n    var canvasHeight = ctx.canvas.height;\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Update nodesRef\n    // [0] node x pos\n    // [1] node y pos\n    // [2] node strength\n    // [3] node speed\n\n    nodesRef.current = nodesRef.current.map(function (node) {\n      return [node[0], waveHeight / 2 * Math.cos(node[2] / 20) + canvasHeight / (2 * ratio), node[2] + node[3], node[3]];\n    });\n    ctx.fillStyle = \"#0373FF\";\n    ctx.beginPath();\n    ctx.moveTo(0, ctx.canvas.height); // Update wave nodes\n\n    var n = 0;\n\n    while (n < waveTotal + 1) {\n      ctx.quadraticCurveTo(nodesRef.current[n][0], nodesRef.current[n][1], diff(nodesRef.current[n][0], nodesRef.current[n + 1][0]), diff(nodesRef.current[n][1], nodesRef.current[n + 1][1]));\n      n++;\n    } // Last wave node\n\n\n    ctx.lineTo(nodesRef.current[nodesRef.current.length - 1][0], nodesRef.current[nodesRef.current.length - 1][1]);\n    ctx.lineTo(window.innerWidth, ctx.canvas.height);\n    ctx.closePath();\n    ctx.fill();\n  };\n\n  function sizeCanvas() {\n    var _canvasRef$current$ge = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge.width,\n        height = _canvasRef$current$ge.height;\n\n    if (canvasRef.current.width !== width || canvasRef.current.height !== height) {\n      var _window = window,\n          _window$devicePixelRa = _window.devicePixelRatio,\n          ratio = _window$devicePixelRa === void 0 ? 1 : _window$devicePixelRa;\n      canvasRef.current.width = width * ratio;\n      canvasRef.current.height = height * ratio;\n      contextRef.current.scale(ratio, ratio); // Update node x pos on window resize\n\n      nodesRef.current = nodesRef.current.map(function (node, index) {\n        var clone = Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node);\n\n        clone[0] = (index - 1) * window.innerWidth / waveTotal;\n        return clone;\n      });\n      return true;\n    }\n\n    return false;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var _window2 = window,\n        _window2$devicePixelR = _window2.devicePixelRatio,\n        ratio = _window2$devicePixelR === void 0 ? 1 : _window2$devicePixelR;\n    pixelRatioRef.current = ratio; // Set up canvas\n\n    var canvas = canvasRef.current;\n    contextRef.current = canvas.getContext(\"2d\"); // Set up wave nodes\n\n    nodesRef.current = setWaveNodes();\n  }, [contextRef]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Scale canvas based on device pixel ratio\n    var _canvasRef$current$ge2 = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge2.width,\n        height = _canvasRef$current$ge2.height;\n\n    canvasRef.current.width = width * pixelRatioRef.current;\n    canvasRef.current.height = height * pixelRatioRef.current;\n    contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current);\n  }, [pixelRatioRef]); // Resize\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setInnerWidth(window.innerWidth); // window.addEventListener(\"resize\", sizeCanvas);\n\n    return function () {// window.removeEventListener(\"resize\", sizeCanvas);\n    };\n  }, []); // Pause and play wave on animate in\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Initial draw of wave, paused to start\n    draw(); // Once animated in, play\n\n    setTimeout(function () {\n      setIsPaused(false);\n    }, 3000);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var animationFrameId; // if not isPaused and waveInView, requestAnimationFrame\n\n    var render = function render() {\n      draw();\n      animationFrameId = requestAnimationFrame(render);\n    };\n\n    if (!isPaused && waveInView) {\n      // Start requestAnimationFrame\n      render();\n    } else if (!waveInView) {\n      // Stop requestAnimationFrame\n      cancelAnimationFrame(animationFrameId);\n    }\n\n    return function () {\n      cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw, isPaused, waveInView]);\n  return __jsx(\"canvas\", {\n    className: _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wave,\n    ref: setRefs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 7\n    }\n  }, \"wave inside viewport \".concat(waveInView, \".\")), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 7\n    }\n  }, \"A subtle wave animation\"));\n}\n\n_s(AnimatedWave, \"eKUJiObUJbOsd3KRU9Lr3G3Me44=\", false, function () {\n  return [_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"]];\n});\n\n_c = AnimatedWave;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimatedWave\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcz8zYjI5Il0sIm5hbWVzIjpbIkFuaW1hdGVkV2F2ZSIsInVzZUNhbkNvbnRleHQiLCJjYW5Db250ZXh0IiwidXNlU3RhdGUiLCJpbm5lcldpZHRoIiwic2V0SW5uZXJXaWR0aCIsInBpeGVsUmF0aW9SZWYiLCJ1c2VSZWYiLCJ1c2VJblZpZXciLCJ0aHJlc2hvbGQiLCJ3YXZlUmVmIiwicmVmIiwid2F2ZUluVmlldyIsImluVmlldyIsImlzUGF1c2VkIiwic2V0SXNQYXVzZWQiLCJzZXRSZWZzIiwidXNlQ2FsbGJhY2siLCJub2RlIiwiY2FudmFzUmVmIiwiY3VycmVudCIsIndhdmVUb3RhbCIsIndhdmVIZWlnaHQiLCJ3YXZlU3BlZWQiLCJjb250ZXh0UmVmIiwibm9kZXNSZWYiLCJzZXRXYXZlTm9kZXMiLCJvZmZTZXROb2RlcyIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4Iiwid2luZG93IiwiZGlmZiIsImEiLCJiIiwiZHJhdyIsImN0eCIsInJhdGlvIiwiY2FudmFzSGVpZ2h0IiwiY2FudmFzIiwiaGVpZ2h0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJNYXRoIiwiY29zIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibiIsInF1YWRyYXRpY0N1cnZlVG8iLCJsaW5lVG8iLCJsZW5ndGgiLCJjbG9zZVBhdGgiLCJmaWxsIiwic2l6ZUNhbnZhcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRldmljZVBpeGVsUmF0aW8iLCJzY2FsZSIsImNsb25lIiwidXNlRWZmZWN0IiwiZ2V0Q29udGV4dCIsInNldFRpbWVvdXQiLCJhbmltYXRpb25GcmFtZUlkIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzdHlsZXMiLCJ3YXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FB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ZmlsZSI6Ii4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2NhbkNvbnRleHRcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vd2F2ZS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZFdhdmUoKSB7XG4gIC8vIEdldCBjYW4gbG9hZGluZyBzdGF0ZSBmcm9tIGNvbnRleHRcbiAgY29uc3QgeyBjYW5Db250ZXh0IH0gPSB1c2VDYW5Db250ZXh0KCk7XG4gIGNvbnN0IFtpbm5lcldpZHRoLCBzZXRJbm5lcldpZHRoXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHBpeGVsUmF0aW9SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7IHJlZjogd2F2ZVJlZiwgaW5WaWV3OiB3YXZlSW5WaWV3IH0gPSB1c2VJblZpZXcoe1xuICAgIC8qIE9wdGlvbmFsIG9wdGlvbnMgKi9cbiAgICB0aHJlc2hvbGQ6IDAuNSxcbiAgfSk7XG5cbiAgY29uc3QgW2lzUGF1c2VkLCBzZXRJc1BhdXNlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBBc3NpZ24gbXVsdGlwbGUgcmVmcyB0byBjYW52YXNcbiAgLy8gVXNlIGB1c2VDYWxsYmFja2Agc28gd2UgZG9uJ3QgcmVjcmVhdGUgdGhlIGZ1bmN0aW9uIG9uIGVhY2ggcmVuZGVyIC0gQ291bGQgcmVzdWx0IGluIGluZmluaXRlIGxvb3BcbiAgY29uc3Qgc2V0UmVmcyA9IHVzZUNhbGxiYWNrKFxuICAgIChub2RlKSA9PiB7XG4gICAgICAvLyBSZWYncyBmcm9tIHVzZVJlZiBuZWVkcyB0byBoYXZlIHRoZSBub2RlIGFzc2lnbmVkIHRvIGBjdXJyZW50YFxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQgPSBub2RlO1xuICAgICAgLy8gQ2FsbGJhY2sgcmVmcywgbGlrZSB0aGUgb25lIGZyb20gYHVzZUluVmlld2AsIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgbm9kZSBhcyBhbiBhcmd1bWVudFxuICAgICAgd2F2ZVJlZihub2RlKTtcbiAgICB9LFxuICAgIFt3YXZlUmVmXVxuICApO1xuXG4gIGxldCB3YXZlVG90YWwgPSA0O1xuICBsZXQgd2F2ZUhlaWdodCA9IDE1MDtcbiAgbGV0IHdhdmVTcGVlZCA9IDAuMTU7XG5cbiAgY29uc3QgY29udGV4dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBub2Rlc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBzZXRXYXZlTm9kZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2ZmU2V0Tm9kZXMgPSB3YXZlVG90YWwgKyAyO1xuICAgIHJldHVybiBbLi4uQXJyYXkob2ZmU2V0Tm9kZXMpXS5tYXAoKF8sIGluZGV4KSA9PiBbXG4gICAgICAoKGluZGV4IC0gMSkgKiB3aW5kb3cuaW5uZXJXaWR0aCkgLyB3YXZlVG90YWwsXG4gICAgICAwLFxuICAgICAgLWluZGV4ICogd2F2ZUhlaWdodCxcbiAgICAgIHdhdmVTcGVlZCxcbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBkaWZmID0gKGEsIGIpID0+IChiIC0gYSkgLyAyICsgYTtcblxuICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGN0eCA9IGNvbnRleHRSZWYuY3VycmVudDtcbiAgICAvLyBjb25zdCB7IGRldmljZVBpeGVsUmF0aW86IHJhdGlvID0gMSB9ID0gd2luZG93O1xuICAgIGNvbnN0IHJhdGlvID0gMjtcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBjdHguY2FudmFzLmhlaWdodDtcblxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gVXBkYXRlIG5vZGVzUmVmXG4gICAgLy8gWzBdIG5vZGUgeCBwb3NcbiAgICAvLyBbMV0gbm9kZSB5IHBvc1xuICAgIC8vIFsyXSBub2RlIHN0cmVuZ3RoXG4gICAgLy8gWzNdIG5vZGUgc3BlZWRcbiAgICBub2Rlc1JlZi5jdXJyZW50ID0gbm9kZXNSZWYuY3VycmVudC5tYXAoKG5vZGUpID0+IFtcbiAgICAgIG5vZGVbMF0sXG4gICAgICAod2F2ZUhlaWdodCAvIDIpICogTWF0aC5jb3Mobm9kZVsyXSAvIDIwKSArIGNhbnZhc0hlaWdodCAvICgyICogcmF0aW8pLFxuICAgICAgbm9kZVsyXSArIG5vZGVbM10sXG4gICAgICBub2RlWzNdLFxuICAgIF0pO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAzNzNGRlwiO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gVXBkYXRlIHdhdmUgbm9kZXNcbiAgICBsZXQgbiA9IDA7XG4gICAgd2hpbGUgKG4gPCB3YXZlVG90YWwgKyAxKSB7XG4gICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhcbiAgICAgICAgbm9kZXNSZWYuY3VycmVudFtuXVswXSxcbiAgICAgICAgbm9kZXNSZWYuY3VycmVudFtuXVsxXSxcbiAgICAgICAgZGlmZihub2Rlc1JlZi5jdXJyZW50W25dWzBdLCBub2Rlc1JlZi5jdXJyZW50W24gKyAxXVswXSksXG4gICAgICAgIGRpZmYobm9kZXNSZWYuY3VycmVudFtuXVsxXSwgbm9kZXNSZWYuY3VycmVudFtuICsgMV1bMV0pXG4gICAgICApO1xuICAgICAgbisrO1xuICAgIH1cblxuICAgIC8vIExhc3Qgd2F2ZSBub2RlXG4gICAgY3R4LmxpbmVUbyhcbiAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbm9kZXNSZWYuY3VycmVudC5sZW5ndGggLSAxXVswXSxcbiAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbm9kZXNSZWYuY3VycmVudC5sZW5ndGggLSAxXVsxXVxuICAgICk7XG5cbiAgICBjdHgubGluZVRvKHdpbmRvdy5pbm5lcldpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG5cbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBzaXplQ2FudmFzKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAoXG4gICAgICBjYW52YXNSZWYuY3VycmVudC53aWR0aCAhPT0gd2lkdGggfHxcbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50LmhlaWdodCAhPT0gaGVpZ2h0XG4gICAgKSB7XG4gICAgICBjb25zdCB7IGRldmljZVBpeGVsUmF0aW86IHJhdGlvID0gMSB9ID0gd2luZG93O1xuICAgICAgY2FudmFzUmVmLmN1cnJlbnQud2lkdGggPSB3aWR0aCAqIHJhdGlvO1xuICAgICAgY2FudmFzUmVmLmN1cnJlbnQuaGVpZ2h0ID0gaGVpZ2h0ICogcmF0aW87XG4gICAgICBjb250ZXh0UmVmLmN1cnJlbnQuc2NhbGUocmF0aW8sIHJhdGlvKTtcblxuICAgICAgLy8gVXBkYXRlIG5vZGUgeCBwb3Mgb24gd2luZG93IHJlc2l6ZVxuICAgICAgbm9kZXNSZWYuY3VycmVudCA9IG5vZGVzUmVmLmN1cnJlbnQubWFwKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjbG9uZSA9IFsuLi5ub2RlXTtcbiAgICAgICAgY2xvbmVbMF0gPSAoKGluZGV4IC0gMSkgKiB3aW5kb3cuaW5uZXJXaWR0aCkgLyB3YXZlVG90YWw7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgZGV2aWNlUGl4ZWxSYXRpbzogcmF0aW8gPSAxIH0gPSB3aW5kb3c7XG4gICAgcGl4ZWxSYXRpb1JlZi5jdXJyZW50ID0gcmF0aW87XG5cbiAgICAvLyBTZXQgdXAgY2FudmFzXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgY29udGV4dFJlZi5jdXJyZW50ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIC8vIFNldCB1cCB3YXZlIG5vZGVzXG4gICAgbm9kZXNSZWYuY3VycmVudCA9IHNldFdhdmVOb2RlcygpO1xuICB9LCBbY29udGV4dFJlZl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2NhbGUgY2FudmFzIGJhc2VkIG9uIGRldmljZSBwaXhlbCByYXRpb1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjYW52YXNSZWYuY3VycmVudC53aWR0aCA9IHdpZHRoICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50O1xuICAgIGNhbnZhc1JlZi5jdXJyZW50LmhlaWdodCA9IGhlaWdodCAqIHBpeGVsUmF0aW9SZWYuY3VycmVudDtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQuc2NhbGUocGl4ZWxSYXRpb1JlZi5jdXJyZW50LCBwaXhlbFJhdGlvUmVmLmN1cnJlbnQpO1xuICB9LCBbcGl4ZWxSYXRpb1JlZl0pO1xuXG4gIC8vIFJlc2l6ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNpemVDYW52YXMpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNpemVDYW52YXMpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBQYXVzZSBhbmQgcGxheSB3YXZlIG9uIGFuaW1hdGUgaW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJbml0aWFsIGRyYXcgb2Ygd2F2ZSwgcGF1c2VkIHRvIHN0YXJ0XG4gICAgZHJhdygpO1xuXG4gICAgLy8gT25jZSBhbmltYXRlZCBpbiwgcGxheVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNQYXVzZWQoZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZDtcbiAgICAvLyBpZiBub3QgaXNQYXVzZWQgYW5kIHdhdmVJblZpZXcsIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIGRyYXcoKTtcbiAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9O1xuXG4gICAgaWYgKCFpc1BhdXNlZCAmJiB3YXZlSW5WaWV3KSB7XG4gICAgICAvLyBTdGFydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgIHJlbmRlcigpO1xuICAgIH0gZWxzZSBpZiAoIXdhdmVJblZpZXcpIHtcbiAgICAgIC8vIFN0b3AgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIH07XG4gIH0sIFtkcmF3LCBpc1BhdXNlZCwgd2F2ZUluVmlld10pO1xuICByZXR1cm4gKFxuICAgIDxjYW52YXMgY2xhc3NOYW1lPXtzdHlsZXMud2F2ZX0gcmVmPXtzZXRSZWZzfT5cbiAgICAgIDxwPntgd2F2ZSBpbnNpZGUgdmlld3BvcnQgJHt3YXZlSW5WaWV3fS5gfTwvcD5cbiAgICAgIDxwPkEgc3VidGxlIHdhdmUgYW5pbWF0aW9uPC9wPlxuICAgIDwvY2FudmFzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Wave/AnimatedWave.js\n");

/***/ })

})