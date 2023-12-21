webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wave/AnimatedWave.js":
/*!*****************************************!*\
  !*** ./components/Wave/AnimatedWave.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimatedWave; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_canContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/canContext */ \"./contexts/canContext.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wave.module.scss */ \"./components/Wave/wave.module.scss\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wave_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Wave/AnimatedWave.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nfunction AnimatedWave() {\n  _s();\n\n  // Get can loading state from context\n  var _useCanContext = Object(_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"])(),\n      canContext = _useCanContext.canContext;\n\n  var pixelRatioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"])({\n    /* Optional options */\n    threshold: 0.5\n  }),\n      waveRef = _useInView.ref,\n      waveInView = _useInView.inView;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isPaused = _useState[0],\n      setIsPaused = _useState[1]; // Assign multiple refs to canvas\n  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop\n\n\n  var setRefs = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (node) {\n    // Ref's from useRef needs to have the node assigned to `current`\n    canvasRef.current = node; // Callback refs, like the one from `useInView`, is a function that takes the node as an argument\n\n    waveRef(node);\n  }, [waveRef]);\n  var waveTotal = 4;\n  var waveHeight = 150;\n  var waveSpeed = 0.15;\n  var contextRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var nodesRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var setWaveNodes = function setWaveNodes() {\n    var offSetNodes = waveTotal + 2;\n    return Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(offSetNodes)).map(function (_, index) {\n      return [(index - 1) * window.innerWidth / waveTotal, 0, -index * waveHeight, waveSpeed];\n    });\n  };\n\n  var diff = function diff(a, b) {\n    return (b - a) / 2 + a;\n  };\n\n  var draw = function draw() {\n    var ctx = contextRef.current;\n    var canvasHeight = ctx.canvas.height;\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Update nodesRef\n    // [0] node x pos\n    // [1] node y pos\n    // [2] node strength\n    // [3] node speed\n\n    nodesRef.current = nodesRef.current.map(function (node) {\n      return [node[0], waveHeight / 2 * Math.cos(node[2] / 20) + canvasHeight / (2 * pixelRatioRef.current), node[2] + node[3], node[3]];\n    });\n    ctx.fillStyle = \"#0373FF\";\n    ctx.beginPath();\n    ctx.moveTo(0, ctx.canvas.height); // Update wave nodes\n\n    var n = 0;\n\n    while (n < waveTotal + 1) {\n      ctx.quadraticCurveTo(nodesRef.current[n][0], nodesRef.current[n][1], diff(nodesRef.current[n][0], nodesRef.current[n + 1][0]), diff(nodesRef.current[n][1], nodesRef.current[n + 1][1]));\n      n++;\n    } // Last wave node\n\n\n    ctx.lineTo(nodesRef.current[nodesRef.current.length - 1][0], nodesRef.current[nodesRef.current.length - 1][1]);\n    ctx.lineTo(window.innerWidth, ctx.canvas.height);\n    ctx.closePath();\n    ctx.fill();\n  };\n\n  function sizeCanvas() {\n    var _canvasRef$current$ge = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge.width,\n        height = _canvasRef$current$ge.height;\n\n    if (canvasRef.current.width !== width || canvasRef.current.height !== height) {\n      canvasRef.current.width = width * pixelRatioRef.current;\n      canvasRef.current.height = height * pixelRatioRef.current;\n      contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current); // Update node x pos on window resize\n\n      nodesRef.current = nodesRef.current.map(function (node, index) {\n        var clone = Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node);\n\n        clone[0] = (index - 1) * window.innerWidth / waveTotal;\n        return clone;\n      });\n      return true;\n    }\n\n    return false;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Store device pixel ratio\n    pixelRatioRef.current = devicePixelRatio; // Set up canvas\n\n    var canvas = canvasRef.current;\n    contextRef.current = canvas.getContext(\"2d\");\n    console.log(\"staring width: \", contextRef.current.canvas.width);\n    console.log(\"staring height: \", contextRef.current.canvas.height); // Set up wave nodes\n\n    nodesRef.current = setWaveNodes();\n  }, [contextRef]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Scale canvas based on device pixel ratio\n    var _canvasRef$current$ge2 = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge2.width,\n        height = _canvasRef$current$ge2.height;\n\n    canvasRef.current.width = width * pixelRatioRef.current;\n    canvasRef.current.height = height * pixelRatioRef.current;\n    contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current);\n    console.log(\"canvas size: \", width, height);\n    console.log(\"updated width: \", contextRef.current.canvas.width);\n    console.log(\"updated height: \", contextRef.current.canvas.height);\n  }, [pixelRatioRef]); // Resize\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener(\"resize\", sizeCanvas);\n    return function () {\n      window.removeEventListener(\"resize\", sizeCanvas);\n    };\n  }, []); // Pause and play wave on animate in\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Initial draw of wave, paused to start\n    draw(); // Once animated in, play\n\n    setTimeout(function () {\n      setIsPaused(false);\n    }, 3000);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var animationFrameId; // if not isPaused and waveInView, requestAnimationFrame\n\n    var render = function render() {\n      draw();\n      animationFrameId = requestAnimationFrame(render);\n    };\n\n    if (!isPaused && waveInView) {\n      // Start requestAnimationFrame\n      render();\n    } else if (!waveInView) {\n      // Stop requestAnimationFrame\n      cancelAnimationFrame(animationFrameId);\n    }\n\n    return function () {\n      cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw, isPaused, waveInView]);\n  return __jsx(\"canvas\", {\n    className: _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wave,\n    ref: setRefs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 190,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 7\n    }\n  }, \"wave inside viewport \".concat(waveInView, \".\")), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 192,\n      columnNumber: 7\n    }\n  }, \"A subtle wave animation\"));\n}\n\n_s(AnimatedWave, \"9EzvHRyeC6W5PVh/BJ3Pdix8yfs=\", false, function () {\n  return [_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"]];\n});\n\n_c = AnimatedWave;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimatedWave\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcz8zYjI5Il0sIm5hbWVzIjpbIkFuaW1hdGVkV2F2ZSIsInVzZUNhbkNvbnRleHQiLCJjYW5Db250ZXh0IiwicGl4ZWxSYXRpb1JlZiIsInVzZVJlZiIsInVzZUluVmlldyIsInRocmVzaG9sZCIsIndhdmVSZWYiLCJyZWYiLCJ3YXZlSW5WaWV3IiwiaW5WaWV3IiwidXNlU3RhdGUiLCJpc1BhdXNlZCIsInNldElzUGF1c2VkIiwic2V0UmVmcyIsInVzZUNhbGxiYWNrIiwibm9kZSIsImNhbnZhc1JlZiIsImN1cnJlbnQiLCJ3YXZlVG90YWwiLCJ3YXZlSGVpZ2h0Iiwid2F2ZVNwZWVkIiwiY29udGV4dFJlZiIsIm5vZGVzUmVmIiwic2V0V2F2ZU5vZGVzIiwib2ZmU2V0Tm9kZXMiLCJBcnJheSIsIm1hcCIsIl8iLCJpbmRleCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkaWZmIiwiYSIsImIiLCJkcmF3IiwiY3R4IiwiY2FudmFzSGVpZ2h0IiwiY2FudmFzIiwiaGVpZ2h0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJNYXRoIiwiY29zIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibiIsInF1YWRyYXRpY0N1cnZlVG8iLCJsaW5lVG8iLCJsZW5ndGgiLCJjbG9zZVBhdGgiLCJmaWxsIiwic2l6ZUNhbnZhcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjYWxlIiwiY2xvbmUiLCJ1c2VFZmZlY3QiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZ2V0Q29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJhbmltYXRpb25GcmFtZUlkIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzdHlsZXMiLCJ3YXZlIl0sIm1hcHBp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QVAsRUFBaUJILFVBQWpCLENBbEJNLENBQVQ7QUFtQkEsU0FDRTtBQUFRLGFBQVMsRUFBRTRELHdEQUFNLENBQUNDLElBQTFCO0FBQWdDLE9BQUcsRUFBRXhELE9BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUE0QkwsVUFBNUIsT0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkYsQ0FERjtBQU1EOztHQTdMdUJULFk7VUFFQ0Msa0UsRUFHc0JJLHFFOzs7S0FMdkJMLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dhdmUvQW5pbWF0ZWRXYXZlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbkNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvY2FuQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi93YXZlLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGVkV2F2ZSgpIHtcbiAgLy8gR2V0IGNhbiBsb2FkaW5nIHN0YXRlIGZyb20gY29udGV4dFxuICBjb25zdCB7IGNhbkNvbnRleHQgfSA9IHVzZUNhbkNvbnRleHQoKTtcbiAgY29uc3QgcGl4ZWxSYXRpb1JlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHsgcmVmOiB3YXZlUmVmLCBpblZpZXc6IHdhdmVJblZpZXcgfSA9IHVzZUluVmlldyh7XG4gICAgLyogT3B0aW9uYWwgb3B0aW9ucyAqL1xuICAgIHRocmVzaG9sZDogMC41LFxuICB9KTtcblxuICBjb25zdCBbaXNQYXVzZWQsIHNldElzUGF1c2VkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIC8vIEFzc2lnbiBtdWx0aXBsZSByZWZzIHRvIGNhbnZhc1xuICAvLyBVc2UgYHVzZUNhbGxiYWNrYCBzbyB3ZSBkb24ndCByZWNyZWF0ZSB0aGUgZnVuY3Rpb24gb24gZWFjaCByZW5kZXIgLSBDb3VsZCByZXN1bHQgaW4gaW5maW5pdGUgbG9vcFxuICBjb25zdCBzZXRSZWZzID0gdXNlQ2FsbGJhY2soXG4gICAgKG5vZGUpID0+IHtcbiAgICAgIC8vIFJlZidzIGZyb20gdXNlUmVmIG5lZWRzIHRvIGhhdmUgdGhlIG5vZGUgYXNzaWduZWQgdG8gYGN1cnJlbnRgXG4gICAgICBjYW52YXNSZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICAvLyBDYWxsYmFjayByZWZzLCBsaWtlIHRoZSBvbmUgZnJvbSBgdXNlSW5WaWV3YCwgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBub2RlIGFzIGFuIGFyZ3VtZW50XG4gICAgICB3YXZlUmVmKG5vZGUpO1xuICAgIH0sXG4gICAgW3dhdmVSZWZdXG4gICk7XG5cbiAgbGV0IHdhdmVUb3RhbCA9IDQ7XG4gIGxldCB3YXZlSGVpZ2h0ID0gMTUwO1xuICBsZXQgd2F2ZVNwZWVkID0gMC4xNTtcblxuICBjb25zdCBjb250ZXh0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG5vZGVzUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHNldFdhdmVOb2RlcyA9ICgpID0+IHtcbiAgICBjb25zdCBvZmZTZXROb2RlcyA9IHdhdmVUb3RhbCArIDI7XG4gICAgcmV0dXJuIFsuLi5BcnJheShvZmZTZXROb2RlcyldLm1hcCgoXywgaW5kZXgpID0+IFtcbiAgICAgICgoaW5kZXggLSAxKSAqIHdpbmRvdy5pbm5lcldpZHRoKSAvIHdhdmVUb3RhbCxcbiAgICAgIDAsXG4gICAgICAtaW5kZXggKiB3YXZlSGVpZ2h0LFxuICAgICAgd2F2ZVNwZWVkLFxuICAgIF0pO1xuICB9O1xuXG4gIGNvbnN0IGRpZmYgPSAoYSwgYikgPT4gKGIgLSBhKSAvIDIgKyBhO1xuXG4gIGNvbnN0IGRyYXcgPSAoKSA9PiB7XG4gICAgY29uc3QgY3R4ID0gY29udGV4dFJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBVcGRhdGUgbm9kZXNSZWZcbiAgICAvLyBbMF0gbm9kZSB4IHBvc1xuICAgIC8vIFsxXSBub2RlIHkgcG9zXG4gICAgLy8gWzJdIG5vZGUgc3RyZW5ndGhcbiAgICAvLyBbM10gbm9kZSBzcGVlZFxuICAgIG5vZGVzUmVmLmN1cnJlbnQgPSBub2Rlc1JlZi5jdXJyZW50Lm1hcCgobm9kZSkgPT4gW1xuICAgICAgbm9kZVswXSxcbiAgICAgICh3YXZlSGVpZ2h0IC8gMikgKiBNYXRoLmNvcyhub2RlWzJdIC8gMjApICtcbiAgICAgICAgY2FudmFzSGVpZ2h0IC8gKDIgKiBwaXhlbFJhdGlvUmVmLmN1cnJlbnQpLFxuICAgICAgbm9kZVsyXSArIG5vZGVbM10sXG4gICAgICBub2RlWzNdLFxuICAgIF0pO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAzNzNGRlwiO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gVXBkYXRlIHdhdmUgbm9kZXNcbiAgICBsZXQgbiA9IDA7XG4gICAgd2hpbGUgKG4gPCB3YXZlVG90YWwgKyAxKSB7XG4gICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhcbiAgICAgICAgbm9kZXNSZWYuY3VycmVudFtuXVswXSxcbiAgICAgICAgbm9kZXNSZWYuY3VycmVudFtuXVsxXSxcbiAgICAgICAgZGlmZihub2Rlc1JlZi5jdXJyZW50W25dWzBdLCBub2Rlc1JlZi5jdXJyZW50W24gKyAxXVswXSksXG4gICAgICAgIGRpZmYobm9kZXNSZWYuY3VycmVudFtuXVsxXSwgbm9kZXNSZWYuY3VycmVudFtuICsgMV1bMV0pXG4gICAgICApO1xuICAgICAgbisrO1xuICAgIH1cblxuICAgIC8vIExhc3Qgd2F2ZSBub2RlXG4gICAgY3R4LmxpbmVUbyhcbiAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbm9kZXNSZWYuY3VycmVudC5sZW5ndGggLSAxXVswXSxcbiAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbm9kZXNSZWYuY3VycmVudC5sZW5ndGggLSAxXVsxXVxuICAgICk7XG5cbiAgICBjdHgubGluZVRvKHdpbmRvdy5pbm5lcldpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG5cbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBzaXplQ2FudmFzKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAoXG4gICAgICBjYW52YXNSZWYuY3VycmVudC53aWR0aCAhPT0gd2lkdGggfHxcbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50LmhlaWdodCAhPT0gaGVpZ2h0XG4gICAgKSB7XG4gICAgICBjYW52YXNSZWYuY3VycmVudC53aWR0aCA9IHdpZHRoICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50O1xuICAgICAgY2FudmFzUmVmLmN1cnJlbnQuaGVpZ2h0ID0gaGVpZ2h0ICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50O1xuICAgICAgY29udGV4dFJlZi5jdXJyZW50LnNjYWxlKHBpeGVsUmF0aW9SZWYuY3VycmVudCwgcGl4ZWxSYXRpb1JlZi5jdXJyZW50KTtcblxuICAgICAgLy8gVXBkYXRlIG5vZGUgeCBwb3Mgb24gd2luZG93IHJlc2l6ZVxuICAgICAgbm9kZXNSZWYuY3VycmVudCA9IG5vZGVzUmVmLmN1cnJlbnQubWFwKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjbG9uZSA9IFsuLi5ub2RlXTtcbiAgICAgICAgY2xvbmVbMF0gPSAoKGluZGV4IC0gMSkgKiB3aW5kb3cuaW5uZXJXaWR0aCkgLyB3YXZlVG90YWw7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFN0b3JlIGRldmljZSBwaXhlbCByYXRpb1xuICAgIHBpeGVsUmF0aW9SZWYuY3VycmVudCA9IGRldmljZVBpeGVsUmF0aW87XG5cbiAgICAvLyBTZXQgdXAgY2FudmFzXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgY29udGV4dFJlZi5jdXJyZW50ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGNvbnNvbGUubG9nKFwic3RhcmluZyB3aWR0aDogXCIsIGNvbnRleHRSZWYuY3VycmVudC5jYW52YXMud2lkdGgpO1xuICAgIGNvbnNvbGUubG9nKFwic3RhcmluZyBoZWlnaHQ6IFwiLCBjb250ZXh0UmVmLmN1cnJlbnQuY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBTZXQgdXAgd2F2ZSBub2Rlc1xuICAgIG5vZGVzUmVmLmN1cnJlbnQgPSBzZXRXYXZlTm9kZXMoKTtcbiAgfSwgW2NvbnRleHRSZWZdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNjYWxlIGNhbnZhcyBiYXNlZCBvbiBkZXZpY2UgcGl4ZWwgcmF0aW9cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY2FudmFzUmVmLmN1cnJlbnQud2lkdGggPSB3aWR0aCAqIHBpeGVsUmF0aW9SZWYuY3VycmVudDtcbiAgICBjYW52YXNSZWYuY3VycmVudC5oZWlnaHQgPSBoZWlnaHQgKiBwaXhlbFJhdGlvUmVmLmN1cnJlbnQ7XG4gICAgY29udGV4dFJlZi5jdXJyZW50LnNjYWxlKHBpeGVsUmF0aW9SZWYuY3VycmVudCwgcGl4ZWxSYXRpb1JlZi5jdXJyZW50KTtcblxuICAgIGNvbnNvbGUubG9nKFwiY2FudmFzIHNpemU6IFwiLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZWQgd2lkdGg6IFwiLCBjb250ZXh0UmVmLmN1cnJlbnQuY2FudmFzLndpZHRoKTtcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZWQgaGVpZ2h0OiBcIiwgY29udGV4dFJlZi5jdXJyZW50LmNhbnZhcy5oZWlnaHQpO1xuICB9LCBbcGl4ZWxSYXRpb1JlZl0pO1xuXG4gIC8vIFJlc2l6ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNpemVDYW52YXMpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHNpemVDYW52YXMpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBQYXVzZSBhbmQgcGxheSB3YXZlIG9uIGFuaW1hdGUgaW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJbml0aWFsIGRyYXcgb2Ygd2F2ZSwgcGF1c2VkIHRvIHN0YXJ0XG4gICAgZHJhdygpO1xuXG4gICAgLy8gT25jZSBhbmltYXRlZCBpbiwgcGxheVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNQYXVzZWQoZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZDtcbiAgICAvLyBpZiBub3QgaXNQYXVzZWQgYW5kIHdhdmVJblZpZXcsIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIGRyYXcoKTtcbiAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9O1xuXG4gICAgaWYgKCFpc1BhdXNlZCAmJiB3YXZlSW5WaWV3KSB7XG4gICAgICAvLyBTdGFydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgIHJlbmRlcigpO1xuICAgIH0gZWxzZSBpZiAoIXdhdmVJblZpZXcpIHtcbiAgICAgIC8vIFN0b3AgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIH07XG4gIH0sIFtkcmF3LCBpc1BhdXNlZCwgd2F2ZUluVmlld10pO1xuICByZXR1cm4gKFxuICAgIDxjYW52YXMgY2xhc3NOYW1lPXtzdHlsZXMud2F2ZX0gcmVmPXtzZXRSZWZzfT5cbiAgICAgIDxwPntgd2F2ZSBpbnNpZGUgdmlld3BvcnQgJHt3YXZlSW5WaWV3fS5gfTwvcD5cbiAgICAgIDxwPkEgc3VidGxlIHdhdmUgYW5pbWF0aW9uPC9wPlxuICAgIDwvY2FudmFzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Wave/AnimatedWave.js\n");

/***/ })

})