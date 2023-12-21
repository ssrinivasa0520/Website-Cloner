webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wave/AnimatedWave.js":
/*!*****************************************!*\
  !*** ./components/Wave/AnimatedWave.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimatedWave; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_canContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/canContext */ \"./contexts/canContext.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wave.module.scss */ \"./components/Wave/wave.module.scss\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wave_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Wave/AnimatedWave.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nfunction AnimatedWave() {\n  _s();\n\n  // Get can loading state from context\n  var _useCanContext = Object(_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"])(),\n      canContext = _useCanContext.canContext;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      innerWidth = _useState[0],\n      setInnerWidth = _useState[1];\n\n  var pixelRatioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"])({\n    /* Optional options */\n    threshold: 0.5\n  }),\n      waveRef = _useInView.ref,\n      waveInView = _useInView.inView;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isPaused = _useState2[0],\n      setIsPaused = _useState2[1]; // Assign multiple refs to canvas\n  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop\n\n\n  var setRefs = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (node) {\n    // Ref's from useRef needs to have the node assigned to `current`\n    canvasRef.current = node; // Callback refs, like the one from `useInView`, is a function that takes the node as an argument\n\n    waveRef(node);\n  }, [waveRef]);\n  var waveTotal = 4;\n  var waveHeight = 150;\n  var waveSpeed = 0.15;\n  var contextRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var nodesRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var setWaveNodes = function setWaveNodes() {\n    var offSetNodes = waveTotal + 2;\n    return Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(offSetNodes)).map(function (_, index) {\n      return [(index - 1) * window.innerWidth / waveTotal, 0, -index * waveHeight, waveSpeed];\n    });\n  };\n\n  var diff = function diff(a, b) {\n    return (b - a) / 2 + a;\n  };\n\n  var draw = function draw() {\n    var ctx = contextRef.current; // const { devicePixelRatio: ratio = 1 } = window;\n\n    var ratio = 2;\n    var canvasHeight = ctx.canvas.height;\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Update nodesRef\n    // [0] node x pos\n    // [1] node y pos\n    // [2] node strength\n    // [3] node speed\n\n    nodesRef.current = nodesRef.current.map(function (node) {\n      return [node[0], waveHeight / 2 * Math.cos(node[2] / 20) + canvasHeight / (2 * pixelRatioRef.current), node[2] + node[3], node[3]];\n    });\n    ctx.fillStyle = \"#0373FF\";\n    ctx.beginPath();\n    ctx.moveTo(0, ctx.canvas.height); // Update wave nodes\n\n    var n = 0;\n\n    while (n < waveTotal + 1) {\n      ctx.quadraticCurveTo(nodesRef.current[n][0], nodesRef.current[n][1], diff(nodesRef.current[n][0], nodesRef.current[n + 1][0]), diff(nodesRef.current[n][1], nodesRef.current[n + 1][1]));\n      n++;\n    } // Last wave node\n\n\n    ctx.lineTo(nodesRef.current[nodesRef.current.length - 1][0], nodesRef.current[nodesRef.current.length - 1][1]);\n    ctx.lineTo(window.innerWidth, ctx.canvas.height);\n    ctx.closePath();\n    ctx.fill();\n  };\n\n  function sizeCanvas() {\n    var _canvasRef$current$ge = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge.width,\n        height = _canvasRef$current$ge.height;\n\n    if (canvasRef.current.width !== width || canvasRef.current.height !== height) {\n      canvasRef.current.width = width * pixelRatioRef.current;\n      canvasRef.current.height = height * pixelRatioRef.current;\n      contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current); // Update node x pos on window resize\n\n      nodesRef.current = nodesRef.current.map(function (node, index) {\n        var clone = Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node);\n\n        clone[0] = (index - 1) * window.innerWidth / waveTotal;\n        return clone;\n      });\n      return true;\n    }\n\n    return false;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var _window = window,\n        _window$devicePixelRa = _window.devicePixelRatio,\n        ratio = _window$devicePixelRa === void 0 ? 1 : _window$devicePixelRa;\n    pixelRatioRef.current = ratio; // Set up canvas\n\n    var canvas = canvasRef.current;\n    contextRef.current = canvas.getContext(\"2d\"); // Set up wave nodes\n\n    nodesRef.current = setWaveNodes();\n  }, [contextRef]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Scale canvas based on device pixel ratio\n    var _canvasRef$current$ge2 = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge2.width,\n        height = _canvasRef$current$ge2.height;\n\n    canvasRef.current.width = width * pixelRatioRef.current;\n    canvasRef.current.height = height * pixelRatioRef.current;\n    contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current);\n  }, [pixelRatioRef]); // Resize\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setInnerWidth(window.innerWidth);\n    window.addEventListener(\"resize\", sizeCanvas);\n    return function () {\n      window.removeEventListener(\"resize\", sizeCanvas);\n    };\n  }, []); // Pause and play wave on animate in\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // Initial draw of wave, paused to start\n    draw(); // Once animated in, play\n\n    setTimeout(function () {\n      setIsPaused(false);\n    }, 3000);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var animationFrameId; // if not isPaused and waveInView, requestAnimationFrame\n\n    var render = function render() {\n      draw();\n      animationFrameId = requestAnimationFrame(render);\n    };\n\n    if (!isPaused && waveInView) {\n      // Start requestAnimationFrame\n      render();\n    } else if (!waveInView) {\n      // Stop requestAnimationFrame\n      cancelAnimationFrame(animationFrameId);\n    }\n\n    return function () {\n      cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw, isPaused, waveInView]);\n  return __jsx(\"canvas\", {\n    className: _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wave,\n    ref: setRefs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 7\n    }\n  }, \"wave inside viewport \".concat(waveInView, \".\")), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 7\n    }\n  }, \"A subtle wave animation\"));\n}\n\n_s(AnimatedWave, \"eKUJiObUJbOsd3KRU9Lr3G3Me44=\", false, function () {\n  return [_contexts_canContext__WEBPACK_IMPORTED_MODULE_2__[\"useCanContext\"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"]];\n});\n\n_c = AnimatedWave;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimatedWave\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcz8zYjI5Il0sIm5hbWVzIjpbIkFuaW1hdGVkV2F2ZSIsInVzZUNhbkNvbnRleHQiLCJjYW5Db250ZXh0IiwidXNlU3RhdGUiLCJpbm5lcldpZHRoIiwic2V0SW5uZXJXaWR0aCIsInBpeGVsUmF0aW9SZWYiLCJ1c2VSZWYiLCJ1c2VJblZpZXciLCJ0aHJlc2hvbGQiLCJ3YXZlUmVmIiwicmVmIiwid2F2ZUluVmlldyIsImluVmlldyIsImlzUGF1c2VkIiwic2V0SXNQYXVzZWQiLCJzZXRSZWZzIiwidXNlQ2FsbGJhY2siLCJub2RlIiwiY2FudmFzUmVmIiwiY3VycmVudCIsIndhdmVUb3RhbCIsIndhdmVIZWlnaHQiLCJ3YXZlU3BlZWQiLCJjb250ZXh0UmVmIiwibm9kZXNSZWYiLCJzZXRXYXZlTm9kZXMiLCJvZmZTZXROb2RlcyIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4Iiwid2luZG93IiwiZGlmZiIsImEiLCJiIiwiZHJhdyIsImN0eCIsInJhdGlvIiwiY2FudmFzSGVpZ2h0IiwiY2FudmFzIiwiaGVpZ2h0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJNYXRoIiwiY29zIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibiIsInF1YWRyYXRpY0N1cnZlVG8iLCJsaW5lVG8iLCJsZW5ndGgiLCJjbG9zZVBhdGgiLCJmaWxsIiwic2l6ZUNhbnZhcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjYWxlIiwiY2xvbmUiLCJ1c2VFZmZlY3QiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZ2V0Q29udGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImFuaW1hdGlvbkZyYW1lSWQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0eWxlcyIsIndhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUNyQztBQURxQyx1QkFFZEMsMEVBQWEsRUFGQztBQUFBLE1BRTdCQyxVQUY2QixrQkFFN0JBLFVBRjZCOztBQUFBLGtCQUdEQyxzREFBUSxFQUhQO0FBQUEsTUFHOUJDLFVBSDhCO0FBQUEsTUFHbEJDLGFBSGtCOztBQUlyQyxNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCOztBQUpxQyxtQkFNUUMsNkVBQVMsQ0FBQztBQUNyRDtBQUNBQyxhQUFTLEVBQUU7QUFGMEMsR0FBRCxDQU5qQjtBQUFBLE1BTXhCQyxPQU53QixjQU03QkMsR0FONkI7QUFBQSxNQU1QQyxVQU5PLGNBTWZDLE1BTmU7O0FBQUEsbUJBV0xWLHNEQUFRLENBQUMsSUFBRCxDQVhIO0FBQUEsTUFXOUJXLFFBWDhCO0FBQUEsTUFXcEJDLFdBWG9CLGtCQWFyQztBQUNBOzs7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLHlEQUFXLENBQ3pCLFVBQUNDLElBQUQsRUFBVTtBQUNSO0FBQ0FDLGFBQVMsQ0FBQ0MsT0FBVixHQUFvQkYsSUFBcEIsQ0FGUSxDQUdSOztBQUNBUixXQUFPLENBQUNRLElBQUQsQ0FBUDtBQUNELEdBTndCLEVBT3pCLENBQUNSLE9BQUQsQ0FQeUIsQ0FBM0I7QUFVQSxNQUFJVyxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxNQUFJQyxVQUFVLEdBQUcsR0FBakI7QUFDQSxNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQSxNQUFNQyxVQUFVLEdBQUdqQixvREFBTSxDQUFDLElBQUQsQ0FBekI7QUFDQSxNQUFNWSxTQUFTLEdBQUdaLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQU1rQixRQUFRLEdBQUdsQixvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRUEsTUFBTW1CLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBTUMsV0FBVyxHQUFHTixTQUFTLEdBQUcsQ0FBaEM7QUFDQSxXQUFPLDJKQUFJTyxLQUFLLENBQUNELFdBQUQsQ0FBVCxFQUF3QkUsR0FBeEIsQ0FBNEIsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsYUFBYyxDQUM5QyxDQUFDQSxLQUFLLEdBQUcsQ0FBVCxJQUFjQyxNQUFNLENBQUM1QixVQUF0QixHQUFvQ2lCLFNBRFcsRUFFL0MsQ0FGK0MsRUFHL0MsQ0FBQ1UsS0FBRCxHQUFTVCxVQUhzQyxFQUkvQ0MsU0FKK0MsQ0FBZDtBQUFBLEtBQTVCLENBQVA7QUFNRCxHQVJEOztBQVVBLE1BQU1VLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVUsQ0FBQ0EsQ0FBQyxHQUFHRCxDQUFMLElBQVUsQ0FBVixHQUFjQSxDQUF4QjtBQUFBLEdBQWI7O0FBRUEsTUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixRQUFNQyxHQUFHLEdBQUdiLFVBQVUsQ0FBQ0osT0FBdkIsQ0FEaUIsQ0FFakI7O0FBQ0EsUUFBTWtCLEtBQUssR0FBRyxDQUFkO0FBQ0EsUUFBTUMsWUFBWSxHQUFHRixHQUFHLENBQUNHLE1BQUosQ0FBV0MsTUFBaEM7QUFFQUosT0FBRyxDQUFDSyxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQkwsR0FBRyxDQUFDRyxNQUFKLENBQVdHLEtBQS9CLEVBQXNDTixHQUFHLENBQUNHLE1BQUosQ0FBV0MsTUFBakQsRUFOaUIsQ0FRakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQWhCLFlBQVEsQ0FBQ0wsT0FBVCxHQUFtQkssUUFBUSxDQUFDTCxPQUFULENBQWlCUyxHQUFqQixDQUFxQixVQUFDWCxJQUFEO0FBQUEsYUFBVSxDQUNoREEsSUFBSSxDQUFDLENBQUQsQ0FENEMsRUFFL0NJLFVBQVUsR0FBRyxDQUFkLEdBQW1Cc0IsSUFBSSxDQUFDQyxHQUFMLENBQVMzQixJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsRUFBbkIsQ0FBbkIsR0FDRXFCLFlBQVksSUFBSSxJQUFJakMsYUFBYSxDQUFDYyxPQUF0QixDQUhrQyxFQUloREYsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUprQyxFQUtoREEsSUFBSSxDQUFDLENBQUQsQ0FMNEMsQ0FBVjtBQUFBLEtBQXJCLENBQW5CO0FBUUFtQixPQUFHLENBQUNTLFNBQUosR0FBZ0IsU0FBaEI7QUFFQVQsT0FBRyxDQUFDVSxTQUFKO0FBQ0FWLE9BQUcsQ0FBQ1csTUFBSixDQUFXLENBQVgsRUFBY1gsR0FBRyxDQUFDRyxNQUFKLENBQVdDLE1BQXpCLEVBeEJpQixDQTBCakI7O0FBQ0EsUUFBSVEsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsV0FBT0EsQ0FBQyxHQUFHNUIsU0FBUyxHQUFHLENBQXZCLEVBQTBCO0FBQ3hCZ0IsU0FBRyxDQUFDYSxnQkFBSixDQUNFekIsUUFBUSxDQUFDTCxPQUFULENBQWlCNkIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FERixFQUVFeEIsUUFBUSxDQUFDTCxPQUFULENBQWlCNkIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FGRixFQUdFaEIsSUFBSSxDQUFDUixRQUFRLENBQUNMLE9BQVQsQ0FBaUI2QixDQUFqQixFQUFvQixDQUFwQixDQUFELEVBQXlCeEIsUUFBUSxDQUFDTCxPQUFULENBQWlCNkIsQ0FBQyxHQUFHLENBQXJCLEVBQXdCLENBQXhCLENBQXpCLENBSE4sRUFJRWhCLElBQUksQ0FBQ1IsUUFBUSxDQUFDTCxPQUFULENBQWlCNkIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBRCxFQUF5QnhCLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQjZCLENBQUMsR0FBRyxDQUFyQixFQUF3QixDQUF4QixDQUF6QixDQUpOO0FBTUFBLE9BQUM7QUFDRixLQXBDZ0IsQ0FzQ2pCOzs7QUFDQVosT0FBRyxDQUFDYyxNQUFKLENBQ0UxQixRQUFRLENBQUNMLE9BQVQsQ0FBaUJLLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQmdDLE1BQWpCLEdBQTBCLENBQTNDLEVBQThDLENBQTlDLENBREYsRUFFRTNCLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQkssUUFBUSxDQUFDTCxPQUFULENBQWlCZ0MsTUFBakIsR0FBMEIsQ0FBM0MsRUFBOEMsQ0FBOUMsQ0FGRjtBQUtBZixPQUFHLENBQUNjLE1BQUosQ0FBV25CLE1BQU0sQ0FBQzVCLFVBQWxCLEVBQThCaUMsR0FBRyxDQUFDRyxNQUFKLENBQVdDLE1BQXpDO0FBRUFKLE9BQUcsQ0FBQ2dCLFNBQUo7QUFDQWhCLE9BQUcsQ0FBQ2lCLElBQUo7QUFDRCxHQWhERDs7QUFrREEsV0FBU0MsVUFBVCxHQUFzQjtBQUFBLGdDQUNNcEMsU0FBUyxDQUFDQyxPQUFWLENBQWtCb0MscUJBQWxCLEVBRE47QUFBQSxRQUNaYixLQURZLHlCQUNaQSxLQURZO0FBQUEsUUFDTEYsTUFESyx5QkFDTEEsTUFESzs7QUFHcEIsUUFDRXRCLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQnVCLEtBQWxCLEtBQTRCQSxLQUE1QixJQUNBeEIsU0FBUyxDQUFDQyxPQUFWLENBQWtCcUIsTUFBbEIsS0FBNkJBLE1BRi9CLEVBR0U7QUFDQXRCLGVBQVMsQ0FBQ0MsT0FBVixDQUFrQnVCLEtBQWxCLEdBQTBCQSxLQUFLLEdBQUdyQyxhQUFhLENBQUNjLE9BQWhEO0FBQ0FELGVBQVMsQ0FBQ0MsT0FBVixDQUFrQnFCLE1BQWxCLEdBQTJCQSxNQUFNLEdBQUduQyxhQUFhLENBQUNjLE9BQWxEO0FBQ0FJLGdCQUFVLENBQUNKLE9BQVgsQ0FBbUJxQyxLQUFuQixDQUF5Qm5ELGFBQWEsQ0FBQ2MsT0FBdkMsRUFBZ0RkLGFBQWEsQ0FBQ2MsT0FBOUQsRUFIQSxDQUtBOztBQUNBSyxjQUFRLENBQUNMLE9BQVQsR0FBbUJLLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQlMsR0FBakIsQ0FBcUIsVUFBQ1gsSUFBRCxFQUFPYSxLQUFQLEVBQWlCO0FBQ3ZELFlBQU0yQixLQUFLLEdBQUcsMkpBQUl4QyxJQUFQLENBQVg7O0FBQ0F3QyxhQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVksQ0FBQzNCLEtBQUssR0FBRyxDQUFULElBQWNDLE1BQU0sQ0FBQzVCLFVBQXRCLEdBQW9DaUIsU0FBL0M7QUFDQSxlQUFPcUMsS0FBUDtBQUNELE9BSmtCLENBQW5CO0FBTUEsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBTyxLQUFQO0FBQ0Q7O0FBRURDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGtCQUMwQjNCLE1BRDFCO0FBQUEsd0NBQ040QixnQkFETTtBQUFBLFFBQ1l0QixLQURaLHNDQUNvQixDQURwQjtBQUVkaEMsaUJBQWEsQ0FBQ2MsT0FBZCxHQUF3QmtCLEtBQXhCLENBRmMsQ0FJZDs7QUFDQSxRQUFNRSxNQUFNLEdBQUdyQixTQUFTLENBQUNDLE9BQXpCO0FBQ0FJLGNBQVUsQ0FBQ0osT0FBWCxHQUFxQm9CLE1BQU0sQ0FBQ3FCLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBckIsQ0FOYyxDQVFkOztBQUNBcEMsWUFBUSxDQUFDTCxPQUFULEdBQW1CTSxZQUFZLEVBQS9CO0FBQ0QsR0FWUSxFQVVOLENBQUNGLFVBQUQsQ0FWTSxDQUFUO0FBWUFtQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQURjLGlDQUVZeEMsU0FBUyxDQUFDQyxPQUFWLENBQWtCb0MscUJBQWxCLEVBRlo7QUFBQSxRQUVOYixLQUZNLDBCQUVOQSxLQUZNO0FBQUEsUUFFQ0YsTUFGRCwwQkFFQ0EsTUFGRDs7QUFJZHRCLGFBQVMsQ0FBQ0MsT0FBVixDQUFrQnVCLEtBQWxCLEdBQTBCQSxLQUFLLEdBQUdyQyxhQUFhLENBQUNjLE9BQWhEO0FBQ0FELGFBQVMsQ0FBQ0MsT0FBVixDQUFrQnFCLE1BQWxCLEdBQTJCQSxNQUFNLEdBQUduQyxhQUFhLENBQUNjLE9BQWxEO0FBQ0FJLGNBQVUsQ0FBQ0osT0FBWCxDQUFtQnFDLEtBQW5CLENBQXlCbkQsYUFBYSxDQUFDYyxPQUF2QyxFQUFnRGQsYUFBYSxDQUFDYyxPQUE5RDtBQUNELEdBUFEsRUFPTixDQUFDZCxhQUFELENBUE0sQ0FBVCxDQW5JcUMsQ0E0SXJDOztBQUNBcUQseURBQVMsQ0FBQyxZQUFNO0FBQ2R0RCxpQkFBYSxDQUFDMkIsTUFBTSxDQUFDNUIsVUFBUixDQUFiO0FBQ0E0QixVQUFNLENBQUM4QixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1AsVUFBbEM7QUFFQSxXQUFPLFlBQU07QUFDWHZCLFlBQU0sQ0FBQytCLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUixVQUFyQztBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFULENBN0lxQyxDQXNKckM7O0FBQ0FJLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0F2QixRQUFJLEdBRlUsQ0FJZDs7QUFDQTRCLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZqRCxpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUE0Qyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTSxnQkFBSixDQURjLENBRWQ7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQjlCLFVBQUk7QUFDSjZCLHNCQUFnQixHQUFHRSxxQkFBcUIsQ0FBQ0QsTUFBRCxDQUF4QztBQUNELEtBSEQ7O0FBS0EsUUFBSSxDQUFDcEQsUUFBRCxJQUFhRixVQUFqQixFQUE2QjtBQUMzQjtBQUNBc0QsWUFBTTtBQUNQLEtBSEQsTUFHTyxJQUFJLENBQUN0RCxVQUFMLEVBQWlCO0FBQ3RCO0FBQ0F3RCwwQkFBb0IsQ0FBQ0gsZ0JBQUQsQ0FBcEI7QUFDRDs7QUFDRCxXQUFPLFlBQU07QUFDWEcsMEJBQW9CLENBQUNILGdCQUFELENBQXBCO0FBQ0QsS0FGRDtBQUdELEdBbEJRLEVBa0JOLENBQUM3QixJQUFELEVBQU90QixRQUFQLEVBQWlCRixVQUFqQixDQWxCTSxDQUFUO0FBbUJBLFNBQ0U7QUFBUSxhQUFTLEVBQUV5RCx3REFBTSxDQUFDQyxJQUExQjtBQUFnQyxPQUFHLEVBQUV0RCxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBNEJKLFVBQTVCLE9BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGLENBREY7QUFNRDs7R0ExTHVCWixZO1VBRUNDLGtFLEVBSXNCTyxxRTs7O0tBTnZCUixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2NhbkNvbnRleHRcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vd2F2ZS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZFdhdmUoKSB7XG4gIC8vIEdldCBjYW4gbG9hZGluZyBzdGF0ZSBmcm9tIGNvbnRleHRcbiAgY29uc3QgeyBjYW5Db250ZXh0IH0gPSB1c2VDYW5Db250ZXh0KCk7XG4gIGNvbnN0IFtpbm5lcldpZHRoLCBzZXRJbm5lcldpZHRoXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHBpeGVsUmF0aW9SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB7IHJlZjogd2F2ZVJlZiwgaW5WaWV3OiB3YXZlSW5WaWV3IH0gPSB1c2VJblZpZXcoe1xuICAgIC8qIE9wdGlvbmFsIG9wdGlvbnMgKi9cbiAgICB0aHJlc2hvbGQ6IDAuNSxcbiAgfSk7XG5cbiAgY29uc3QgW2lzUGF1c2VkLCBzZXRJc1BhdXNlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBBc3NpZ24gbXVsdGlwbGUgcmVmcyB0byBjYW52YXNcbiAgLy8gVXNlIGB1c2VDYWxsYmFja2Agc28gd2UgZG9uJ3QgcmVjcmVhdGUgdGhlIGZ1bmN0aW9uIG9uIGVhY2ggcmVuZGVyIC0gQ291bGQgcmVzdWx0IGluIGluZmluaXRlIGxvb3BcbiAgY29uc3Qgc2V0UmVmcyA9IHVzZUNhbGxiYWNrKFxuICAgIChub2RlKSA9PiB7XG4gICAgICAvLyBSZWYncyBmcm9tIHVzZVJlZiBuZWVkcyB0byBoYXZlIHRoZSBub2RlIGFzc2lnbmVkIHRvIGBjdXJyZW50YFxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQgPSBub2RlO1xuICAgICAgLy8gQ2FsbGJhY2sgcmVmcywgbGlrZSB0aGUgb25lIGZyb20gYHVzZUluVmlld2AsIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgbm9kZSBhcyBhbiBhcmd1bWVudFxuICAgICAgd2F2ZVJlZihub2RlKTtcbiAgICB9LFxuICAgIFt3YXZlUmVmXVxuICApO1xuXG4gIGxldCB3YXZlVG90YWwgPSA0O1xuICBsZXQgd2F2ZUhlaWdodCA9IDE1MDtcbiAgbGV0IHdhdmVTcGVlZCA9IDAuMTU7XG5cbiAgY29uc3QgY29udGV4dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBub2Rlc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBzZXRXYXZlTm9kZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2ZmU2V0Tm9kZXMgPSB3YXZlVG90YWwgKyAyO1xuICAgIHJldHVybiBbLi4uQXJyYXkob2ZmU2V0Tm9kZXMpXS5tYXAoKF8sIGluZGV4KSA9PiBbXG4gICAgICAoKGluZGV4IC0gMSkgKiB3aW5kb3cuaW5uZXJXaWR0aCkgLyB3YXZlVG90YWwsXG4gICAgICAwLFxuICAgICAgLWluZGV4ICogd2F2ZUhlaWdodCxcbiAgICAgIHdhdmVTcGVlZCxcbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBkaWZmID0gKGEsIGIpID0+IChiIC0gYSkgLyAyICsgYTtcblxuICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGN0eCA9IGNvbnRleHRSZWYuY3VycmVudDtcbiAgICAvLyBjb25zdCB7IGRldmljZVBpeGVsUmF0aW86IHJhdGlvID0gMSB9ID0gd2luZG93O1xuICAgIGNvbnN0IHJhdGlvID0gMjtcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBjdHguY2FudmFzLmhlaWdodDtcblxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gVXBkYXRlIG5vZGVzUmVmXG4gICAgLy8gWzBdIG5vZGUgeCBwb3NcbiAgICAvLyBbMV0gbm9kZSB5IHBvc1xuICAgIC8vIFsyXSBub2RlIHN0cmVuZ3RoXG4gICAgLy8gWzNdIG5vZGUgc3BlZWRcbiAgICBub2Rlc1JlZi5jdXJyZW50ID0gbm9kZXNSZWYuY3VycmVudC5tYXAoKG5vZGUpID0+IFtcbiAgICAgIG5vZGVbMF0sXG4gICAgICAod2F2ZUhlaWdodCAvIDIpICogTWF0aC5jb3Mobm9kZVsyXSAvIDIwKSArXG4gICAgICAgIGNhbnZhc0hlaWdodCAvICgyICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50KSxcbiAgICAgIG5vZGVbMl0gKyBub2RlWzNdLFxuICAgICAgbm9kZVszXSxcbiAgICBdKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMzczRkZcIjtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIGN0eC5jYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIFVwZGF0ZSB3YXZlIG5vZGVzXG4gICAgbGV0IG4gPSAwO1xuICAgIHdoaWxlIChuIDwgd2F2ZVRvdGFsICsgMSkge1xuICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oXG4gICAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbl1bMF0sXG4gICAgICAgIG5vZGVzUmVmLmN1cnJlbnRbbl1bMV0sXG4gICAgICAgIGRpZmYobm9kZXNSZWYuY3VycmVudFtuXVswXSwgbm9kZXNSZWYuY3VycmVudFtuICsgMV1bMF0pLFxuICAgICAgICBkaWZmKG5vZGVzUmVmLmN1cnJlbnRbbl1bMV0sIG5vZGVzUmVmLmN1cnJlbnRbbiArIDFdWzFdKVxuICAgICAgKTtcbiAgICAgIG4rKztcbiAgICB9XG5cbiAgICAvLyBMYXN0IHdhdmUgbm9kZVxuICAgIGN0eC5saW5lVG8oXG4gICAgICBub2Rlc1JlZi5jdXJyZW50W25vZGVzUmVmLmN1cnJlbnQubGVuZ3RoIC0gMV1bMF0sXG4gICAgICBub2Rlc1JlZi5jdXJyZW50W25vZGVzUmVmLmN1cnJlbnQubGVuZ3RoIC0gMV1bMV1cbiAgICApO1xuXG4gICAgY3R4LmxpbmVUbyh3aW5kb3cuaW5uZXJXaWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2l6ZUNhbnZhcygpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKFxuICAgICAgY2FudmFzUmVmLmN1cnJlbnQud2lkdGggIT09IHdpZHRoIHx8XG4gICAgICBjYW52YXNSZWYuY3VycmVudC5oZWlnaHQgIT09IGhlaWdodFxuICAgICkge1xuICAgICAgY2FudmFzUmVmLmN1cnJlbnQud2lkdGggPSB3aWR0aCAqIHBpeGVsUmF0aW9SZWYuY3VycmVudDtcbiAgICAgIGNhbnZhc1JlZi5jdXJyZW50LmhlaWdodCA9IGhlaWdodCAqIHBpeGVsUmF0aW9SZWYuY3VycmVudDtcbiAgICAgIGNvbnRleHRSZWYuY3VycmVudC5zY2FsZShwaXhlbFJhdGlvUmVmLmN1cnJlbnQsIHBpeGVsUmF0aW9SZWYuY3VycmVudCk7XG5cbiAgICAgIC8vIFVwZGF0ZSBub2RlIHggcG9zIG9uIHdpbmRvdyByZXNpemVcbiAgICAgIG5vZGVzUmVmLmN1cnJlbnQgPSBub2Rlc1JlZi5jdXJyZW50Lm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBbLi4ubm9kZV07XG4gICAgICAgIGNsb25lWzBdID0gKChpbmRleCAtIDEpICogd2luZG93LmlubmVyV2lkdGgpIC8gd2F2ZVRvdGFsO1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGRldmljZVBpeGVsUmF0aW86IHJhdGlvID0gMSB9ID0gd2luZG93O1xuICAgIHBpeGVsUmF0aW9SZWYuY3VycmVudCA9IHJhdGlvO1xuXG4gICAgLy8gU2V0IHVwIGNhbnZhc1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGNvbnRleHRSZWYuY3VycmVudCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAvLyBTZXQgdXAgd2F2ZSBub2Rlc1xuICAgIG5vZGVzUmVmLmN1cnJlbnQgPSBzZXRXYXZlTm9kZXMoKTtcbiAgfSwgW2NvbnRleHRSZWZdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNjYWxlIGNhbnZhcyBiYXNlZCBvbiBkZXZpY2UgcGl4ZWwgcmF0aW9cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY2FudmFzUmVmLmN1cnJlbnQud2lkdGggPSB3aWR0aCAqIHBpeGVsUmF0aW9SZWYuY3VycmVudDtcbiAgICBjYW52YXNSZWYuY3VycmVudC5oZWlnaHQgPSBoZWlnaHQgKiBwaXhlbFJhdGlvUmVmLmN1cnJlbnQ7XG4gICAgY29udGV4dFJlZi5jdXJyZW50LnNjYWxlKHBpeGVsUmF0aW9SZWYuY3VycmVudCwgcGl4ZWxSYXRpb1JlZi5jdXJyZW50KTtcbiAgfSwgW3BpeGVsUmF0aW9SZWZdKTtcblxuICAvLyBSZXNpemVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbm5lcldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBzaXplQ2FudmFzKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBzaXplQ2FudmFzKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gUGF1c2UgYW5kIHBsYXkgd2F2ZSBvbiBhbmltYXRlIGluXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSW5pdGlhbCBkcmF3IG9mIHdhdmUsIHBhdXNlZCB0byBzdGFydFxuICAgIGRyYXcoKTtcblxuICAgIC8vIE9uY2UgYW5pbWF0ZWQgaW4sIHBsYXlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzUGF1c2VkKGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lSWQ7XG4gICAgLy8gaWYgbm90IGlzUGF1c2VkIGFuZCB3YXZlSW5WaWV3LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICBkcmF3KCk7XG4gICAgICBhbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfTtcblxuICAgIGlmICghaXNQYXVzZWQgJiYgd2F2ZUluVmlldykge1xuICAgICAgLy8gU3RhcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICByZW5kZXIoKTtcbiAgICB9IGVsc2UgaWYgKCF3YXZlSW5WaWV3KSB7XG4gICAgICAvLyBTdG9wIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICB9O1xuICB9LCBbZHJhdywgaXNQYXVzZWQsIHdhdmVJblZpZXddKTtcbiAgcmV0dXJuIChcbiAgICA8Y2FudmFzIGNsYXNzTmFtZT17c3R5bGVzLndhdmV9IHJlZj17c2V0UmVmc30+XG4gICAgICA8cD57YHdhdmUgaW5zaWRlIHZpZXdwb3J0ICR7d2F2ZUluVmlld30uYH08L3A+XG4gICAgICA8cD5BIHN1YnRsZSB3YXZlIGFuaW1hdGlvbjwvcD5cbiAgICA8L2NhbnZhcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Wave/AnimatedWave.js\n");

/***/ })

})