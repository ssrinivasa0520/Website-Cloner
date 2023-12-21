webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wave/AnimatedWave.js":
/*!*****************************************!*\
  !*** ./components/Wave/AnimatedWave.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimatedWave; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wave.module.scss */ \"./components/Wave/wave.module.scss\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wave_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Wave/AnimatedWave.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction AnimatedWave() {\n  _s();\n\n  // Get can loading state from context\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      innerWidth = _useState[0],\n      setInnerWidth = _useState[1];\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__[\"useInView\"])({\n    /* Optional options */\n    threshold: 0.5\n  }),\n      waveRef = _useInView.ref,\n      waveInView = _useInView.inView;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isPaused = _useState2[0],\n      setIsPaused = _useState2[1]; // Assign multiple refs to canvas\n  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop\n\n\n  var setRefs = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (node) {\n    // Ref's from useRef needs to have the node assigned to `current`\n    canvasRef.current = node; // Callback refs, like the one from `useInView`, is a function that takes the node as an argument\n\n    waveRef(node);\n  }, [waveRef]);\n  var waveTotal = 4;\n  var waveHeight = 150;\n  var waveSpeed = 0.15;\n  var contextRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var nodesRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var setWaveNodes = function setWaveNodes() {\n    var offSetNodes = waveTotal + 2;\n    return Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(offSetNodes)).map(function (_, index) {\n      return [(index - 1) * window.innerWidth / waveTotal, 0, -index * waveHeight, waveSpeed];\n    });\n  };\n\n  var diff = function diff(a, b) {\n    return (b - a) / 2 + a;\n  };\n\n  var draw = function draw() {\n    var ctx = contextRef.current;\n    var _window = window,\n        _window$devicePixelRa = _window.devicePixelRatio,\n        ratio = _window$devicePixelRa === void 0 ? 1 : _window$devicePixelRa;\n    var canvasHeight = ctx.canvas.height;\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Update nodesRef\n    // [0] node x pos\n    // [1] node y pos\n    // [2] node strength\n    // [3] node speed\n\n    nodesRef.current = nodesRef.current.map(function (node) {\n      return [node[0], waveHeight / 2 * Math.cos(node[2] / 20) + canvasHeight / (2 * ratio), node[2] + node[3], node[3]];\n    });\n    ctx.fillStyle = \"#0373FF\";\n    ctx.beginPath();\n    ctx.moveTo(0, ctx.canvas.height); // Update wave nodes\n\n    var n = 0;\n\n    while (n < waveTotal + 1) {\n      ctx.quadraticCurveTo(nodesRef.current[n][0], nodesRef.current[n][1], diff(nodesRef.current[n][0], nodesRef.current[n + 1][0]), diff(nodesRef.current[n][1], nodesRef.current[n + 1][1]));\n      n++;\n    } // Last wave node\n\n\n    ctx.lineTo(nodesRef.current[nodesRef.current.length - 1][0], nodesRef.current[nodesRef.current.length - 1][1]);\n    ctx.lineTo(window.innerWidth, ctx.canvas.height);\n    ctx.closePath();\n    ctx.fill();\n  };\n\n  function sizeCanvas() {\n    var _canvasRef$current$ge = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge.width,\n        height = _canvasRef$current$ge.height;\n\n    if (canvasRef.current.width !== width || canvasRef.current.height !== height) {\n      var _window2 = window,\n          _window2$devicePixelR = _window2.devicePixelRatio,\n          ratio = _window2$devicePixelR === void 0 ? 1 : _window2$devicePixelR;\n      canvasRef.current.width = width * ratio;\n      canvasRef.current.height = height * ratio;\n      contextRef.current.scale(ratio, ratio); // Update node x pos on window resize\n\n      nodesRef.current = nodesRef.current.map(function (node, index) {\n        var clone = Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node);\n\n        clone[0] = (index - 1) * window.innerWidth / waveTotal;\n        return clone;\n      });\n      return true;\n    }\n\n    return false;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Set up canvas\n    var canvas = canvasRef.current;\n    contextRef.current = canvas.getContext(\"2d\"); // Set up wave nodes\n\n    nodesRef.current = setWaveNodes(); // Size canvas\n\n    var _canvasRef$current$ge2 = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge2.width,\n        height = _canvasRef$current$ge2.height;\n\n    var _window3 = window,\n        _window3$devicePixelR = _window3.devicePixelRatio,\n        ratio = _window3$devicePixelR === void 0 ? 1 : _window3$devicePixelR;\n    canvasRef.current.width = width * ratio;\n    canvasRef.current.height = height * ratio;\n    contextRef.current.scale(ratio, ratio);\n  }, []); // Resize\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setInnerWidth(window.innerWidth);\n    window.addEventListener(\"resize\", sizeCanvas);\n    return function () {\n      window.removeEventListener(\"resize\", sizeCanvas);\n    };\n  }, []); // Pause and play wave on animate in\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Initial draw of wave, paused to start\n    draw(); // Once animated in, play\n\n    setTimeout(function () {\n      setIsPaused(false);\n    }, 3000); // Size canvas with devicePixelRatio\n\n    sizeCanvas();\n    setInterval(function () {\n      var _window4 = window,\n          _window4$devicePixelR = _window4.devicePixelRatio,\n          ratio = _window4$devicePixelR === void 0 ? 1 : _window4$devicePixelR;\n      console.log(\"ratio: \", ratio);\n    }, 1000);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var animationFrameId; // if not isPaused and waveInView, requestAnimationFrame\n\n    var render = function render() {\n      draw();\n      animationFrameId = requestAnimationFrame(render);\n    };\n\n    if (!isPaused && waveInView) {\n      // Start requestAnimationFrame\n      render();\n    } else if (!waveInView) {\n      // Stop requestAnimationFrame\n      cancelAnimationFrame(animationFrameId);\n    }\n\n    return function () {\n      cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw, isPaused, waveInView]);\n  return __jsx(\"canvas\", {\n    className: _wave_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wave,\n    ref: setRefs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 7\n    }\n  }, \"wave inside viewport \".concat(waveInView, \".\")), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 7\n    }\n  }, \"A subtle wave animation\"));\n}\n\n_s(AnimatedWave, \"KgQqtqMn31ImH3FOYnFOC6CyCgo=\", false, function () {\n  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__[\"useInView\"]];\n});\n\n_c = AnimatedWave;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimatedWave\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcz8zYjI5Il0sIm5hbWVzIjpbIkFuaW1hdGVkV2F2ZSIsInVzZVN0YXRlIiwiaW5uZXJXaWR0aCIsInNldElubmVyV2lkdGgiLCJ1c2VJblZpZXciLCJ0aHJlc2hvbGQiLCJ3YXZlUmVmIiwicmVmIiwid2F2ZUluVmlldyIsImluVmlldyIsImlzUGF1c2VkIiwic2V0SXNQYXVzZWQiLCJzZXRSZWZzIiwidXNlQ2FsbGJhY2siLCJub2RlIiwiY2FudmFzUmVmIiwiY3VycmVudCIsIndhdmVUb3RhbCIsIndhdmVIZWlnaHQiLCJ3YXZlU3BlZWQiLCJjb250ZXh0UmVmIiwidXNlUmVmIiwibm9kZXNSZWYiLCJzZXRXYXZlTm9kZXMiLCJvZmZTZXROb2RlcyIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4Iiwid2luZG93IiwiZGlmZiIsImEiLCJiIiwiZHJhdyIsImN0eCIsImRldmljZVBpeGVsUmF0aW8iLCJyYXRpbyIsImNhbnZhc0hlaWdodCIsImNhbnZhcyIsImhlaWdodCIsImNsZWFyUmVjdCIsIndpZHRoIiwiTWF0aCIsImNvcyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsIm4iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwibGluZVRvIiwibGVuZ3RoIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNpemVDYW52YXMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY2FsZSIsImNsb25lIiwidXNlRWZmZWN0IiwiZ2V0Q29udGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsImFuaW1hdGlvbkZyYW1lSWQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0eWxlcyIsIndhdmUiXSwibWFwcGluZ3MiOiI7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O0FBQUEsK0JBRkYsQ0FERjtBQU1EOztHQTFMdUJSLFk7VUFJdUJJLHFFOzs7S0FKdkJKLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dhdmUvQW5pbWF0ZWRXYXZlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vd2F2ZS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZFdhdmUoKSB7XG4gIC8vIEdldCBjYW4gbG9hZGluZyBzdGF0ZSBmcm9tIGNvbnRleHRcbiAgY29uc3QgW2lubmVyV2lkdGgsIHNldElubmVyV2lkdGhdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCB7IHJlZjogd2F2ZVJlZiwgaW5WaWV3OiB3YXZlSW5WaWV3IH0gPSB1c2VJblZpZXcoe1xuICAgIC8qIE9wdGlvbmFsIG9wdGlvbnMgKi9cbiAgICB0aHJlc2hvbGQ6IDAuNSxcbiAgfSk7XG5cbiAgY29uc3QgW2lzUGF1c2VkLCBzZXRJc1BhdXNlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBBc3NpZ24gbXVsdGlwbGUgcmVmcyB0byBjYW52YXNcbiAgLy8gVXNlIGB1c2VDYWxsYmFja2Agc28gd2UgZG9uJ3QgcmVjcmVhdGUgdGhlIGZ1bmN0aW9uIG9uIGVhY2ggcmVuZGVyIC0gQ291bGQgcmVzdWx0IGluIGluZmluaXRlIGxvb3BcbiAgY29uc3Qgc2V0UmVmcyA9IHVzZUNhbGxiYWNrKFxuICAgIChub2RlKSA9PiB7XG4gICAgICAvLyBSZWYncyBmcm9tIHVzZVJlZiBuZWVkcyB0byBoYXZlIHRoZSBub2RlIGFzc2lnbmVkIHRvIGBjdXJyZW50YFxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQgPSBub2RlO1xuICAgICAgLy8gQ2FsbGJhY2sgcmVmcywgbGlrZSB0aGUgb25lIGZyb20gYHVzZUluVmlld2AsIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgbm9kZSBhcyBhbiBhcmd1bWVudFxuICAgICAgd2F2ZVJlZihub2RlKTtcbiAgICB9LFxuICAgIFt3YXZlUmVmXVxuICApO1xuXG4gIGxldCB3YXZlVG90YWwgPSA0O1xuICBsZXQgd2F2ZUhlaWdodCA9IDE1MDtcbiAgbGV0IHdhdmVTcGVlZCA9IDAuMTU7XG5cbiAgY29uc3QgY29udGV4dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBub2Rlc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBzZXRXYXZlTm9kZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2ZmU2V0Tm9kZXMgPSB3YXZlVG90YWwgKyAyO1xuICAgIHJldHVybiBbLi4uQXJyYXkob2ZmU2V0Tm9kZXMpXS5tYXAoKF8sIGluZGV4KSA9PiBbXG4gICAgICAoKGluZGV4IC0gMSkgKiB3aW5kb3cuaW5uZXJXaWR0aCkgLyB3YXZlVG90YWwsXG4gICAgICAwLFxuICAgICAgLWluZGV4ICogd2F2ZUhlaWdodCxcbiAgICAgIHdhdmVTcGVlZCxcbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBkaWZmID0gKGEsIGIpID0+IChiIC0gYSkgLyAyICsgYTtcblxuICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGN0eCA9IGNvbnRleHRSZWYuY3VycmVudDtcbiAgICBjb25zdCB7IGRldmljZVBpeGVsUmF0aW86IHJhdGlvID0gMSB9ID0gd2luZG93O1xuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBVcGRhdGUgbm9kZXNSZWZcbiAgICAvLyBbMF0gbm9kZSB4IHBvc1xuICAgIC8vIFsxXSBub2RlIHkgcG9zXG4gICAgLy8gWzJdIG5vZGUgc3RyZW5ndGhcbiAgICAvLyBbM10gbm9kZSBzcGVlZFxuICAgIG5vZGVzUmVmLmN1cnJlbnQgPSBub2Rlc1JlZi5jdXJyZW50Lm1hcCgobm9kZSkgPT4gW1xuICAgICAgbm9kZVswXSxcbiAgICAgICh3YXZlSGVpZ2h0IC8gMikgKiBNYXRoLmNvcyhub2RlWzJdIC8gMjApICsgY2FudmFzSGVpZ2h0IC8gKDIgKiByYXRpbyksXG4gICAgICBub2RlWzJdICsgbm9kZVszXSxcbiAgICAgIG5vZGVbM10sXG4gICAgXSk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDM3M0ZGXCI7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCBjdHguY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBVcGRhdGUgd2F2ZSBub2Rlc1xuICAgIGxldCBuID0gMDtcbiAgICB3aGlsZSAobiA8IHdhdmVUb3RhbCArIDEpIHtcbiAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKFxuICAgICAgICBub2Rlc1JlZi5jdXJyZW50W25dWzBdLFxuICAgICAgICBub2Rlc1JlZi5jdXJyZW50W25dWzFdLFxuICAgICAgICBkaWZmKG5vZGVzUmVmLmN1cnJlbnRbbl1bMF0sIG5vZGVzUmVmLmN1cnJlbnRbbiArIDFdWzBdKSxcbiAgICAgICAgZGlmZihub2Rlc1JlZi5jdXJyZW50W25dWzFdLCBub2Rlc1JlZi5jdXJyZW50W24gKyAxXVsxXSlcbiAgICAgICk7XG4gICAgICBuKys7XG4gICAgfVxuXG4gICAgLy8gTGFzdCB3YXZlIG5vZGVcbiAgICBjdHgubGluZVRvKFxuICAgICAgbm9kZXNSZWYuY3VycmVudFtub2Rlc1JlZi5jdXJyZW50Lmxlbmd0aCAtIDFdWzBdLFxuICAgICAgbm9kZXNSZWYuY3VycmVudFtub2Rlc1JlZi5jdXJyZW50Lmxlbmd0aCAtIDFdWzFdXG4gICAgKTtcblxuICAgIGN0eC5saW5lVG8od2luZG93LmlubmVyV2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNpemVDYW52YXMoKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChcbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50LndpZHRoICE9PSB3aWR0aCB8fFxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQuaGVpZ2h0ICE9PSBoZWlnaHRcbiAgICApIHtcbiAgICAgIGNvbnN0IHsgZGV2aWNlUGl4ZWxSYXRpbzogcmF0aW8gPSAxIH0gPSB3aW5kb3c7XG4gICAgICBjYW52YXNSZWYuY3VycmVudC53aWR0aCA9IHdpZHRoICogcmF0aW87XG4gICAgICBjYW52YXNSZWYuY3VycmVudC5oZWlnaHQgPSBoZWlnaHQgKiByYXRpbztcbiAgICAgIGNvbnRleHRSZWYuY3VycmVudC5zY2FsZShyYXRpbywgcmF0aW8pO1xuXG4gICAgICAvLyBVcGRhdGUgbm9kZSB4IHBvcyBvbiB3aW5kb3cgcmVzaXplXG4gICAgICBub2Rlc1JlZi5jdXJyZW50ID0gbm9kZXNSZWYuY3VycmVudC5tYXAoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gWy4uLm5vZGVdO1xuICAgICAgICBjbG9uZVswXSA9ICgoaW5kZXggLSAxKSAqIHdpbmRvdy5pbm5lcldpZHRoKSAvIHdhdmVUb3RhbDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2V0IHVwIGNhbnZhc1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGNvbnRleHRSZWYuY3VycmVudCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAvLyBTZXQgdXAgd2F2ZSBub2Rlc1xuICAgIG5vZGVzUmVmLmN1cnJlbnQgPSBzZXRXYXZlTm9kZXMoKTtcblxuICAgIC8vIFNpemUgY2FudmFzXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IGRldmljZVBpeGVsUmF0aW86IHJhdGlvID0gMSB9ID0gd2luZG93O1xuICAgIGNhbnZhc1JlZi5jdXJyZW50LndpZHRoID0gd2lkdGggKiByYXRpbztcbiAgICBjYW52YXNSZWYuY3VycmVudC5oZWlnaHQgPSBoZWlnaHQgKiByYXRpbztcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQuc2NhbGUocmF0aW8sIHJhdGlvKTtcbiAgfSwgW10pO1xuXG4gIC8vIFJlc2l6ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNpemVDYW52YXMpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNpemVDYW52YXMpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBQYXVzZSBhbmQgcGxheSB3YXZlIG9uIGFuaW1hdGUgaW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJbml0aWFsIGRyYXcgb2Ygd2F2ZSwgcGF1c2VkIHRvIHN0YXJ0XG4gICAgZHJhdygpO1xuXG4gICAgLy8gT25jZSBhbmltYXRlZCBpbiwgcGxheVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNQYXVzZWQoZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuXG4gICAgLy8gU2l6ZSBjYW52YXMgd2l0aCBkZXZpY2VQaXhlbFJhdGlvXG4gICAgc2l6ZUNhbnZhcygpO1xuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgeyBkZXZpY2VQaXhlbFJhdGlvOiByYXRpbyA9IDEgfSA9IHdpbmRvdztcbiAgICAgIGNvbnNvbGUubG9nKFwicmF0aW86IFwiLCByYXRpbyk7XG4gICAgfSwgMTAwMCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBhbmltYXRpb25GcmFtZUlkO1xuICAgIC8vIGlmIG5vdCBpc1BhdXNlZCBhbmQgd2F2ZUluVmlldywgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgZHJhdygpO1xuICAgICAgYW5pbWF0aW9uRnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH07XG5cbiAgICBpZiAoIWlzUGF1c2VkICYmIHdhdmVJblZpZXcpIHtcbiAgICAgIC8vIFN0YXJ0IHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgcmVuZGVyKCk7XG4gICAgfSBlbHNlIGlmICghd2F2ZUluVmlldykge1xuICAgICAgLy8gU3RvcCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCk7XG4gICAgfTtcbiAgfSwgW2RyYXcsIGlzUGF1c2VkLCB3YXZlSW5WaWV3XSk7XG4gIHJldHVybiAoXG4gICAgPGNhbnZhcyBjbGFzc05hbWU9e3N0eWxlcy53YXZlfSByZWY9e3NldFJlZnN9PlxuICAgICAgPHA+e2B3YXZlIGluc2lkZSB2aWV3cG9ydCAke3dhdmVJblZpZXd9LmB9PC9wPlxuICAgICAgPHA+QSBzdWJ0bGUgd2F2ZSBhbmltYXRpb248L3A+XG4gICAgPC9jYW52YXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Wave/AnimatedWave.js\n");

/***/ })

})