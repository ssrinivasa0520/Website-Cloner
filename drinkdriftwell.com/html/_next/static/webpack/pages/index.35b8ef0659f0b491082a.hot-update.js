webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wave/AnimatedWave.js":
/*!*****************************************!*\
  !*** ./components/Wave/AnimatedWave.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimatedWave; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_canContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/canContext */ \"./contexts/canContext.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wave.module.scss */ \"./components/Wave/wave.module.scss\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wave_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Wave/AnimatedWave.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nfunction AnimatedWave() {\n  _s();\n\n  // Get can loading state from context\n  var _useCanContext = Object(_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"])(),\n      canContext = _useCanContext.canContext;\n\n  var pixelRatioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"])({\n    /* Optional options */\n    threshold: 0.5\n  }),\n      waveRef = _useInView.ref,\n      waveInView = _useInView.inView;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isPaused = _useState[0],\n      setIsPaused = _useState[1]; // Assign multiple refs to canvas\n  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop\n\n\n  var setRefs = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (node) {\n    // Ref's from useRef needs to have the node assigned to `current`\n    canvasRef.current = node; // Callback refs, like the one from `useInView`, is a function that takes the node as an argument\n\n    waveRef(node);\n  }, [waveRef]);\n  var waveTotal = 4;\n  var waveHeight = 150;\n  var waveSpeed = 0.15;\n  var contextRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var nodesRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var setWaveNodes = function setWaveNodes() {\n    var offSetNodes = waveTotal + 2;\n    return Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(offSetNodes)).map(function (_, index) {\n      return [(index - 1) * window.innerWidth / waveTotal, 0, -index * waveHeight, waveSpeed];\n    });\n  };\n\n  var diff = function diff(a, b) {\n    return (b - a) / 2 + a;\n  };\n\n  var draw = function draw() {\n    var ctx = contextRef.current;\n    var canvasHeight = ctx.canvas.height;\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Update nodesRef\n    // [0] node x pos\n    // [1] node y pos\n    // [2] node strength\n    // [3] node speed\n\n    nodesRef.current = nodesRef.current.map(function (node) {\n      return [node[0], waveHeight / 2 * Math.cos(node[2] / 20) + canvasHeight / (2 * pixelRatioRef.current), node[2] + node[3], node[3]];\n    });\n    ctx.fillStyle = \"#0373FF\";\n    ctx.beginPath();\n    ctx.moveTo(0, ctx.canvas.height); // Update wave nodes\n\n    var n = 0;\n\n    while (n < waveTotal + 1) {\n      ctx.quadraticCurveTo(nodesRef.current[n][0], nodesRef.current[n][1], diff(nodesRef.current[n][0], nodesRef.current[n + 1][0]), diff(nodesRef.current[n][1], nodesRef.current[n + 1][1]));\n      n++;\n    } // Last wave node\n\n\n    ctx.lineTo(nodesRef.current[nodesRef.current.length - 1][0], nodesRef.current[nodesRef.current.length - 1][1]);\n    ctx.lineTo(window.innerWidth, ctx.canvas.height);\n    ctx.closePath();\n    ctx.fill();\n  };\n\n  function sizeCanvas() {\n    var _canvasRef$current$ge = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge.width,\n        height = _canvasRef$current$ge.height;\n\n    if (canvasRef.current.width !== width || canvasRef.current.height !== height) {\n      canvasRef.current.width = width * pixelRatioRef.current;\n      canvasRef.current.height = height * pixelRatioRef.current;\n      contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current); // Update node x pos on window resize\n\n      nodesRef.current = nodesRef.current.map(function (node, index) {\n        var clone = Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node);\n\n        clone[0] = (index - 1) * window.innerWidth / waveTotal;\n        return clone;\n      });\n      return true;\n    }\n\n    return false;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Store device pixel ratio\n    pixelRatioRef.current = devicePixelRatio; // Set up canvas\n\n    var canvas = canvasRef.current;\n    contextRef.current = canvas.getContext(\"2d\");\n    console.log(\"staring width: \", contextRef.current.canvas.width);\n    console.log(\"staring height: \", contextRef.current.canvas.height); // Scale canvas based on device pixel ratio\n\n    canvasRef.current.width = window.innerWidth * pixelRatioRef.current;\n    canvasRef.current.height = window.innerHeight / 2 * pixelRatioRef.current;\n    contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current); // console.log(\"canvas size: \", width, height);\n\n    console.log(\"updated width: \", contextRef.current.canvas.width);\n    console.log(\"updated height: \", contextRef.current.canvas.height); // Set up wave nodes\n\n    nodesRef.current = setWaveNodes();\n  }, [contextRef]); // Resize\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener(\"resize\", sizeCanvas);\n    return function () {\n      window.removeEventListener(\"resize\", sizeCanvas);\n    };\n  }, []); // Pause and play wave on animate in\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Initial draw of wave, paused to start\n    draw(); // Once animated in, play\n\n    setTimeout(function () {\n      setIsPaused(false);\n    }, 3000);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var animationFrameId; // if not isPaused and waveInView, requestAnimationFrame\n\n    var render = function render() {\n      draw();\n      animationFrameId = requestAnimationFrame(render);\n    };\n\n    if (!isPaused && waveInView) {\n      // Start requestAnimationFrame\n      render();\n    } else if (!waveInView) {\n      // Stop requestAnimationFrame\n      cancelAnimationFrame(animationFrameId);\n    }\n\n    return function () {\n      cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw, isPaused, waveInView]);\n  return __jsx(\"canvas\", {\n    className: _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wave,\n    ref: setRefs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 7\n    }\n  }, \"wave inside viewport \".concat(waveInView, \".\")), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 7\n    }\n  }, \"A subtle wave animation\"));\n}\n\n_s(AnimatedWave, \"8wpX4zmEGQ6MvEOMRbbLuDME3x4=\", false, function () {\n  return [_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"]];\n});\n\n_c = AnimatedWave;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimatedWave\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcz8zYjI5Il0sIm5hbWVzIjpbIkFuaW1hdGVkV2F2ZSIsInVzZUNhbkNvbnRleHQiLCJjYW5Db250ZXh0IiwicGl4ZWxSYXRpb1JlZiIsInVzZVJlZiIsInVzZUluVmlldyIsInRocmVzaG9sZCIsIndhdmVSZWYiLCJyZWYiLCJ3YXZlSW5WaWV3IiwiaW5WaWV3IiwidXNlU3RhdGUiLCJpc1BhdXNlZCIsInNldElzUGF1c2VkIiwic2V0UmVmcyIsInVzZUNhbGxiYWNrIiwibm9kZSIsImNhbnZhc1JlZiIsImN1cnJlbnQiLCJ3YXZlVG90YWwiLCJ3YXZlSGVpZ2h0Iiwid2F2ZVNwZWVkIiwiY29udGV4dFJlZiIsIm5vZGVzUmVmIiwic2V0V2F2ZU5vZGVzIiwib2ZmU2V0Tm9kZXMiLCJBcnJheSIsIm1hcCIsIl8iLCJpbmRleCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkaWZmIiwiYSIsImIiLCJkcmF3IiwiY3R4IiwiY2FudmFzSGVpZ2h0IiwiY2FudmFzIiwiaGVpZ2h0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJNYXRoIiwiY29zIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibiIsInF1YWRyYXRpY0N1cnZlVG8iLCJsaW5lVG8iLCJsZW5ndGgiLCJjbG9zZVBhdGgiLCJmaWxsIiwic2l6ZUNhbnZhcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjYWxlIiwiY2xvbmUiLCJ1c2VFZmZlY3QiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZ2V0Q29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImFuaW1hdGlvbkZyYW1lSWQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0eWxlcyIs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QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBNEJMLFVBQTVCLE9BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGLENBREY7QUFNRDs7R0F6THVCVCxZO1VBRUNDLGtFLEVBR3NCSSxxRTs7O0tBTHZCTCxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2NhbkNvbnRleHRcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vd2F2ZS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZFdhdmUoKSB7XG4gIC8vIEdldCBjYW4gbG9hZGluZyBzdGF0ZSBmcm9tIGNvbnRleHRcbiAgY29uc3QgeyBjYW5Db250ZXh0IH0gPSB1c2VDYW5Db250ZXh0KCk7XG4gIGNvbnN0IHBpeGVsUmF0aW9SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7IHJlZjogd2F2ZVJlZiwgaW5WaWV3OiB3YXZlSW5WaWV3IH0gPSB1c2VJblZpZXcoe1xuICAgIC8qIE9wdGlvbmFsIG9wdGlvbnMgKi9cbiAgICB0aHJlc2hvbGQ6IDAuNSxcbiAgfSk7XG5cbiAgY29uc3QgW2lzUGF1c2VkLCBzZXRJc1BhdXNlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBBc3NpZ24gbXVsdGlwbGUgcmVmcyB0byBjYW52YXNcbiAgLy8gVXNlIGB1c2VDYWxsYmFja2Agc28gd2UgZG9uJ3QgcmVjcmVhdGUgdGhlIGZ1bmN0aW9uIG9uIGVhY2ggcmVuZGVyIC0gQ291bGQgcmVzdWx0IGluIGluZmluaXRlIGxvb3BcbiAgY29uc3Qgc2V0UmVmcyA9IHVzZUNhbGxiYWNrKFxuICAgIChub2RlKSA9PiB7XG4gICAgICAvLyBSZWYncyBmcm9tIHVzZVJlZiBuZWVkcyB0byBoYXZlIHRoZSBub2RlIGFzc2lnbmVkIHRvIGBjdXJyZW50YFxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQgPSBub2RlO1xuICAgICAgLy8gQ2FsbGJhY2sgcmVmcywgbGlrZSB0aGUgb25lIGZyb20gYHVzZUluVmlld2AsIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgbm9kZSBhcyBhbiBhcmd1bWVudFxuICAgICAgd2F2ZVJlZihub2RlKTtcbiAgICB9LFxuICAgIFt3YXZlUmVmXVxuICApO1xuXG4gIGxldCB3YXZlVG90YWwgPSA0O1xuICBsZXQgd2F2ZUhlaWdodCA9IDE1MDtcbiAgbGV0IHdhdmVTcGVlZCA9IDAuMTU7XG5cbiAgY29uc3QgY29udGV4dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBub2Rlc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBzZXRXYXZlTm9kZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2ZmU2V0Tm9kZXMgPSB3YXZlVG90YWwgKyAyO1xuICAgIHJldHVybiBbLi4uQXJyYXkob2ZmU2V0Tm9kZXMpXS5tYXAoKF8sIGluZGV4KSA9PiBbXG4gICAgICAoKGluZGV4IC0gMSkgKiB3aW5kb3cuaW5uZXJXaWR0aCkgLyB3YXZlVG90YWwsXG4gICAgICAwLFxuICAgICAgLWluZGV4ICogd2F2ZUhlaWdodCxcbiAgICAgIHdhdmVTcGVlZCxcbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBkaWZmID0gKGEsIGIpID0+IChiIC0gYSkgLyAyICsgYTtcblxuICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGN0eCA9IGNvbnRleHRSZWYuY3VycmVudDtcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBjdHguY2FudmFzLmhlaWdodDtcblxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gVXBkYXRlIG5vZGVzUmVmXG4gICAgLy8gWzBdIG5vZGUgeCBwb3NcbiAgICAvLyBbMV0gbm9kZSB5IHBvc1xuICAgIC8vIFsyXSBub2RlIHN0cmVuZ3RoXG4gICAgLy8gWzNdIG5vZGUgc3BlZWRcbiAgICBub2Rlc1JlZi5jdXJyZW50ID0gbm9kZXNSZWYuY3VycmVudC5tYXAoKG5vZGUpID0+IFtcbiAgICAgIG5vZGVbMF0sXG4gICAgICAod2F2ZUhlaWdodCAvIDIpICogTWF0aC5jb3Mobm9kZVsyXSAvIDIwKSArXG4gICAgICAgIGNhbnZhc0hlaWdodCAvICgyICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50KSxcbiAgICAgIG5vZGVbMl0gKyBub2RlWzNdLFxuICAgICAgbm9kZVszXSxcbiAgICBdKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMzczRkZcIjtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIGN0eC5jYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIFVwZGF0ZSB3YXZlIG5vZGVzXG4gICAgbGV0IG4gPSAwO1xuICAgIHdoaWxlIChuIDwgd2F2ZVRvdGFsICsgMSkge1xuICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oXG4gICAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbl1bMF0sXG4gICAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbl1bMV0sXG4gICAgICAgIGRpZmYobm9kZXNSZWYuY3VycmVudFtuXVswXSwgbm9kZXNSZWYuY3VycmVudFtuICsgMV1bMF0pLFxuICAgICAgICBkaWZmKG5vZGVzUmVmLmN1cnJlbnRbbl1bMV0sIG5vZGVzUmVmLmN1cnJlbnRbbiArIDFdWzFdKVxuICAgICAgKTtcbiAgICAgIG4rKztcbiAgICB9XG5cbiAgICAvLyBMYXN0IHdhdmUgbm9kZVxuICAgIGN0eC5saW5lVG8oXG4gICAgICBub2Rlc1JlZi5jdXJyZW50W25vZGVzUmVmLmN1cnJlbnQubGVuZ3RoIC0gMV1bMF0sXG4gICAgICBub2Rlc1JlZi5jdXJyZW50W25vZGVzUmVmLmN1cnJlbnQubGVuZ3RoIC0gMV1bMV1cbiAgICApO1xuXG4gICAgY3R4LmxpbmVUbyh3aW5kb3cuaW5uZXJXaWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2l6ZUNhbnZhcygpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKFxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQud2lkdGggIT09IHdpZHRoIHx8XG4gICAgICBjYW52YXNSZWYuY3VycmVudC5oZWlnaHQgIT09IGhlaWdodFxuICAgICkge1xuICAgICAgY2FudmFzUmVmLmN1cnJlbnQud2lkdGggPSB3aWR0aCAqIHBpeGVsUmF0aW9SZWYuY3VycmVudDtcbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50LmhlaWdodCA9IGhlaWdodCAqIHBpeGVsUmF0aW9SZWYuY3VycmVudDtcbiAgICAgIGNvbnRleHRSZWYuY3VycmVudC5zY2FsZShwaXhlbFJhdGlvUmVmLmN1cnJlbnQsIHBpeGVsUmF0aW9SZWYuY3VycmVudCk7XG5cbiAgICAgIC8vIFVwZGF0ZSBub2RlIHggcG9zIG9uIHdpbmRvdyByZXNpemVcbiAgICAgIG5vZGVzUmVmLmN1cnJlbnQgPSBub2Rlc1JlZi5jdXJyZW50Lm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBbLi4ubm9kZV07XG4gICAgICAgIGNsb25lWzBdID0gKChpbmRleCAtIDEpICogd2luZG93LmlubmVyV2lkdGgpIC8gd2F2ZVRvdGFsO1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTdG9yZSBkZXZpY2UgcGl4ZWwgcmF0aW9cbiAgICBwaXhlbFJhdGlvUmVmLmN1cnJlbnQgPSBkZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgLy8gU2V0IHVwIGNhbnZhc1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGNvbnRleHRSZWYuY3VycmVudCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjb25zb2xlLmxvZyhcInN0YXJpbmcgd2lkdGg6IFwiLCBjb250ZXh0UmVmLmN1cnJlbnQuY2FudmFzLndpZHRoKTtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJpbmcgaGVpZ2h0OiBcIiwgY29udGV4dFJlZi5jdXJyZW50LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gU2NhbGUgY2FudmFzIGJhc2VkIG9uIGRldmljZSBwaXhlbCByYXRpb1xuICAgIGNhbnZhc1JlZi5jdXJyZW50LndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBwaXhlbFJhdGlvUmVmLmN1cnJlbnQ7XG4gICAgY2FudmFzUmVmLmN1cnJlbnQuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50O1xuICAgIGNvbnRleHRSZWYuY3VycmVudC5zY2FsZShwaXhlbFJhdGlvUmVmLmN1cnJlbnQsIHBpeGVsUmF0aW9SZWYuY3VycmVudCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImNhbnZhcyBzaXplOiBcIiwgd2lkdGgsIGhlaWdodCk7XG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGVkIHdpZHRoOiBcIiwgY29udGV4dFJlZi5jdXJyZW50LmNhbnZhcy53aWR0aCk7XG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGVkIGhlaWdodDogXCIsIGNvbnRleHRSZWYuY3VycmVudC5jYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIFNldCB1cCB3YXZlIG5vZGVzXG4gICAgbm9kZXNSZWYuY3VycmVudCA9IHNldFdhdmVOb2RlcygpO1xuICB9LCBbY29udGV4dFJlZl0pO1xuXG4gIC8vIFJlc2l6ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNpemVDYW52YXMpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNpemVDYW52YXMpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBQYXVzZSBhbmQgcGxheSB3YXZlIG9uIGFuaW1hdGUgaW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJbml0aWFsIGRyYXcgb2Ygd2F2ZSwgcGF1c2VkIHRvIHN0YXJ0XG4gICAgZHJhdygpO1xuXG4gICAgLy8gT25jZSBhbmltYXRlZCBpbiwgcGxheVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNQYXVzZWQoZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZDtcbiAgICAvLyBpZiBub3QgaXNQYXVzZWQgYW5kIHdhdmVJblZpZXcsIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIGRyYXcoKTtcbiAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9O1xuXG4gICAgaWYgKCFpc1BhdXNlZCAmJiB3YXZlSW5WaWV3KSB7XG4gICAgICAvLyBTdGFydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgIHJlbmRlcigpO1xuICAgIH0gZWxzZSBpZiAoIXdhdmVJblZpZXcpIHtcbiAgICAgIC8vIFN0b3AgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIH07XG4gIH0sIFtkcmF3LCBpc1BhdXNlZCwgd2F2ZUluVmlld10pO1xuICByZXR1cm4gKFxuICAgIDxjYW52YXMgY2xhc3NOYW1lPXtzdHlsZXMud2F2ZX0gcmVmPXtzZXRSZWZzfT5cbiAgICAgIDxwPntgd2F2ZSBpbnNpZGUgdmlld3BvcnQgJHt3YXZlSW5WaWV3fS5gfTwvcD5cbiAgICAgIDxwPkEgc3VidGxlIHdhdmUgYW5pbWF0aW9uPC9wPlxuICAgIDwvY2FudmFzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Wave/AnimatedWave.js\n");

/***/ })

})