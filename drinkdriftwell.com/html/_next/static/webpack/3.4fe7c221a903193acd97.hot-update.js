webpackHotUpdate_N_E(3,{

/***/ "./components/Wave/AnimatedWave.js":
/*!*****************************************!*\
  !*** ./components/Wave/AnimatedWave.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimatedWave; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wave.module.scss */ \"./components/Wave/wave.module.scss\");\n/* harmony import */ var _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wave_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Wave/AnimatedWave.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction AnimatedWave() {\n  _s();\n\n  // Get can loading state from context\n  var pixelRatioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"])({\n    /* Optional options */\n    threshold: 0.5\n  }),\n      waveRef = _useInView.ref,\n      waveInView = _useInView.inView;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      isPaused = _useState[0],\n      setIsPaused = _useState[1]; // Assign multiple refs to canvas\n  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop\n\n\n  var setRefs = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (node) {\n    // Ref's from useRef needs to have the node assigned to `current`\n    canvasRef.current = node; // Callback refs, like the one from `useInView`, is a function that takes the node as an argument\n\n    waveRef(node);\n  }, [waveRef]);\n  var wavePropsRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])({\n    total: 3,\n    height: 90,\n    speed: 0.25\n  });\n  var contextRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var nodesRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var setWaveNodes = function setWaveNodes() {\n    var _ref;\n\n    var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 90;\n    var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.25;\n    wavePropsRef.current = {\n      total: total,\n      height: height,\n      speed: speed\n    };\n    var offSetNodes = wavePropsRef.current.total + 2;\n    nodesRef.current = (_ref = Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(offSetNodes))) === null || _ref === void 0 ? void 0 : _ref.map(function (_, index) {\n      return [(index - 1) * window.innerWidth / wavePropsRef.current.total, 0, index * wavePropsRef.current.height, wavePropsRef.current.speed];\n    });\n  };\n\n  var diff = function diff(a, b) {\n    return (b - a) / 2 + a;\n  };\n\n  var draw = function draw() {\n    var _nodesRef$current;\n\n    if (!wavePropsRef) return false;\n    var ctx = contextRef.current;\n    var canvasHeight = ctx.canvas.height;\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Update nodesRef\n    // [0] node x pos\n    // [1] node y pos\n    // [2] node strength\n    // [3] node speed\n\n    nodesRef.current = (_nodesRef$current = nodesRef.current) === null || _nodesRef$current === void 0 ? void 0 : _nodesRef$current.map(function (node) {\n      return [node[0], wavePropsRef.current.height / 2 * Math.cos(node[2] / 20) + canvasHeight / (2 * pixelRatioRef.current), node[2] + node[3], node[3]];\n    });\n    ctx.fillStyle = \"#0373FF\";\n    ctx.beginPath();\n    ctx.moveTo(0, ctx.canvas.height); // Update wave nodes\n\n    var n = 0;\n\n    while (n < wavePropsRef.current.total + 1) {\n      ctx.quadraticCurveTo(nodesRef.current[n][0], nodesRef.current[n][1], diff(nodesRef.current[n][0], nodesRef.current[n + 1][0]), diff(nodesRef.current[n][1], nodesRef.current[n + 1][1]));\n      n++;\n    } // Last wave node\n\n\n    ctx.lineTo(nodesRef.current[nodesRef.current.length - 1][0], nodesRef.current[nodesRef.current.length - 1][1]);\n    ctx.lineTo(window.innerWidth, ctx.canvas.height);\n    ctx.closePath();\n    ctx.fill();\n  };\n\n  function resize() {\n    if (!wavePropsRef) return;\n\n    var _canvasRef$current$ge = canvasRef.current.getBoundingClientRect(),\n        width = _canvasRef$current$ge.width,\n        height = _canvasRef$current$ge.height; // scale and size canvas with device pixel ratio\n\n\n    if (canvasRef.current.width !== width * pixelRatioRef.current) {\n      var _nodesRef$current2;\n\n      if (width < 512) {\n        setWaveNodes(2);\n      } else if (width < 512 && width < 720) {\n        setWaveNodes(2);\n      } else if (width > 720 && width < 1440) {\n        setWaveNodes(3);\n      } else if (width > 1440) {\n        setWaveNodes(4);\n      }\n\n      canvasRef.current.width = width * pixelRatioRef.current;\n      canvasRef.current.height = height * pixelRatioRef.current;\n      contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current); // Update node x pos on window resize\n\n      nodesRef.current = (_nodesRef$current2 = nodesRef.current) === null || _nodesRef$current2 === void 0 ? void 0 : _nodesRef$current2.map(function (node, index) {\n        var clone = Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node);\n\n        clone[0] = (index - 1) * window.innerWidth / wavePropsRef.current.total;\n        return clone;\n      });\n      return true;\n    }\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // Store device pixel ratio\n    pixelRatioRef.current = devicePixelRatio; // Set up canvas\n\n    var canvas = canvasRef.current;\n    contextRef.current = canvas.getContext(\"2d\"); // Scale canvas based on device pixel ratio\n\n    canvasRef.current.width = window.innerWidth * pixelRatioRef.current;\n    canvasRef.current.height = window.innerHeight / 2 * pixelRatioRef.current;\n    contextRef.current.scale(pixelRatioRef.current, pixelRatioRef.current); // Set up wave nodes\n\n    if (window.innerWidth < 720) {\n      setWaveNodes(2);\n    } else if (window.innerWidth > 720 && window.innerWidth < 1440) {\n      setWaveNodes(3);\n    } else if (window.innerWidth > 1440) {\n      setWaveNodes(4);\n    }\n  }, [contextRef]); // Resize\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.addEventListener(\"resize\", resize);\n    return function () {\n      window.removeEventListener(\"resize\", resize);\n    };\n  }, []); // Pause and play wave on animate in\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // Initial draw of wave, paused to start\n    draw(); // Once animated in, play\n\n    setTimeout(function () {\n      setIsPaused(false);\n    }, 3000);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var animationFrameId; // if not isPaused and waveInView, requestAnimationFrame\n\n    var render = function render() {\n      draw();\n      animationFrameId = requestAnimationFrame(render);\n    };\n\n    if (!isPaused && waveInView) {\n      // Start requestAnimationFrame\n      render();\n    } else if (!waveInView) {\n      // Stop requestAnimationFrame\n      cancelAnimationFrame(animationFrameId);\n    }\n\n    return function () {\n      cancelAnimationFrame(animationFrameId);\n    };\n  }, [isPaused, waveInView]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"canvas\", {\n    className: _wave_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wave,\n    ref: setRefs,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: \"A subtle wave animation\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 198,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 197,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AnimatedWave, \"SstWH+JuA7zyRO1XW74+GIqjn4o=\", false, function () {\n  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"]];\n});\n\n_c = AnimatedWave;\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimatedWave\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcz8zYjI5Il0sIm5hbWVzIjpbIkFuaW1hdGVkV2F2ZSIsInBpeGVsUmF0aW9SZWYiLCJ1c2VSZWYiLCJ1c2VJblZpZXciLCJ0aHJlc2hvbGQiLCJ3YXZlUmVmIiwicmVmIiwid2F2ZUluVmlldyIsImluVmlldyIsInVzZVN0YXRlIiwiaXNQYXVzZWQiLCJzZXRJc1BhdXNlZCIsInNldFJlZnMiLCJ1c2VDYWxsYmFjayIsIm5vZGUiLCJjYW52YXNSZWYiLCJjdXJyZW50Iiwid2F2ZVByb3BzUmVmIiwidG90YWwiLCJoZWlnaHQiLCJzcGVlZCIsImNvbnRleHRSZWYiLCJub2Rlc1JlZiIsInNldFdhdmVOb2RlcyIsIm9mZlNldE5vZGVzIiwiQXJyYXkiLCJtYXAiLCJfIiwiaW5kZXgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZGlmZiIsImEiLCJiIiwiZHJhdyIsImN0eCIsImNhbnZhc0hlaWdodCIsImNhbnZhcyIsImNsZWFyUmVjdCIsIndpZHRoIiwiTWF0aCIsImNvcyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsIm4iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwibGluZVRvIiwibGVuZ3RoIiwiY2xvc2VQYXRoIiwiZmlsbCIsInJlc2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjYWxlIiwiY2xvbmUiLCJ1c2VFZmZlY3QiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZ2V0Q29udGV4dCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uRnJhbWVJZCIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic3R5bGVzIiwid2F2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVl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RlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUE0Qyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTyxnQkFBSixDQURjLENBRWQ7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQjdCLFVBQUk7QUFDSjRCLHNCQUFnQixHQUFHRSxxQkFBcUIsQ0FBQ0QsTUFBRCxDQUF4QztBQUNELEtBSEQ7O0FBS0EsUUFBSSxDQUFDckQsUUFBRCxJQUFhSCxVQUFqQixFQUE2QjtBQUMzQjtBQUNBd0QsWUFBTTtBQUNQLEtBSEQsTUFHTyxJQUFJLENBQUN4RCxVQUFMLEVBQWlCO0FBQ3RCO0FBQ0EwRCwwQkFBb0IsQ0FBQ0gsZ0JBQUQsQ0FBcEI7QUFDRDs7QUFDRCxXQUFPLFlBQU07QUFDWEcsMEJBQW9CLENBQUNILGdCQUFELENBQXBCO0FBQ0QsS0FGRDtBQUdELEdBbEJRLEVBa0JOLENBQUNwRCxRQUFELEVBQVdILFVBQVgsQ0FsQk0sQ0FBVDtBQW1CQSxzQkFDRTtBQUFRLGFBQVMsRUFBRTJELHdEQUFNLENBQUNDLElBQTFCO0FBQWdDLE9BQUcsRUFBRXZELE9BQXJDO0FBQUEsMkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0FwTXVCWixZO1VBSXVCRyxxRTs7O0tBSnZCSCxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XYXZlL0FuaW1hdGVkV2F2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vd2F2ZS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZFdhdmUoKSB7XG4gIC8vIEdldCBjYW4gbG9hZGluZyBzdGF0ZSBmcm9tIGNvbnRleHRcbiAgY29uc3QgcGl4ZWxSYXRpb1JlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHsgcmVmOiB3YXZlUmVmLCBpblZpZXc6IHdhdmVJblZpZXcgfSA9IHVzZUluVmlldyh7XG4gICAgLyogT3B0aW9uYWwgb3B0aW9ucyAqL1xuICAgIHRocmVzaG9sZDogMC41LFxuICB9KTtcblxuICBjb25zdCBbaXNQYXVzZWQsIHNldElzUGF1c2VkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIC8vIEFzc2lnbiBtdWx0aXBsZSByZWZzIHRvIGNhbnZhc1xuICAvLyBVc2UgYHVzZUNhbGxiYWNrYCBzbyB3ZSBkb24ndCByZWNyZWF0ZSB0aGUgZnVuY3Rpb24gb24gZWFjaCByZW5kZXIgLSBDb3VsZCByZXN1bHQgaW4gaW5maW5pdGUgbG9vcFxuICBjb25zdCBzZXRSZWZzID0gdXNlQ2FsbGJhY2soXG4gICAgKG5vZGUpID0+IHtcbiAgICAgIC8vIFJlZidzIGZyb20gdXNlUmVmIG5lZWRzIHRvIGhhdmUgdGhlIG5vZGUgYXNzaWduZWQgdG8gYGN1cnJlbnRgXG4gICAgICBjYW52YXNSZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICAvLyBDYWxsYmFjayByZWZzLCBsaWtlIHRoZSBvbmUgZnJvbSBgdXNlSW5WaWV3YCwgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBub2RlIGFzIGFuIGFyZ3VtZW50XG4gICAgICB3YXZlUmVmKG5vZGUpO1xuICAgIH0sXG4gICAgW3dhdmVSZWZdXG4gICk7XG5cbiAgY29uc3Qgd2F2ZVByb3BzUmVmID0gdXNlUmVmKHtcbiAgICB0b3RhbDogMyxcbiAgICBoZWlnaHQ6IDkwLFxuICAgIHNwZWVkOiAwLjI1LFxuICB9KTtcbiAgY29uc3QgY29udGV4dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBub2Rlc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBzZXRXYXZlTm9kZXMgPSAodG90YWwgPSAzLCBoZWlnaHQgPSA5MCwgc3BlZWQgPSAwLjI1KSA9PiB7XG4gICAgd2F2ZVByb3BzUmVmLmN1cnJlbnQgPSB7XG4gICAgICB0b3RhbDogdG90YWwsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHNwZWVkOiBzcGVlZCxcbiAgICB9O1xuICAgIGNvbnN0IG9mZlNldE5vZGVzID0gd2F2ZVByb3BzUmVmLmN1cnJlbnQudG90YWwgKyAyO1xuICAgIG5vZGVzUmVmLmN1cnJlbnQgPSBbLi4uQXJyYXkob2ZmU2V0Tm9kZXMpXT8ubWFwKChfLCBpbmRleCkgPT4gW1xuICAgICAgKChpbmRleCAtIDEpICogd2luZG93LmlubmVyV2lkdGgpIC8gd2F2ZVByb3BzUmVmLmN1cnJlbnQudG90YWwsXG4gICAgICAwLFxuICAgICAgaW5kZXggKiB3YXZlUHJvcHNSZWYuY3VycmVudC5oZWlnaHQsXG4gICAgICB3YXZlUHJvcHNSZWYuY3VycmVudC5zcGVlZCxcbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBkaWZmID0gKGEsIGIpID0+IChiIC0gYSkgLyAyICsgYTtcblxuICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgIGlmICghd2F2ZVByb3BzUmVmKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgY3R4ID0gY29udGV4dFJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBVcGRhdGUgbm9kZXNSZWZcbiAgICAvLyBbMF0gbm9kZSB4IHBvc1xuICAgIC8vIFsxXSBub2RlIHkgcG9zXG4gICAgLy8gWzJdIG5vZGUgc3RyZW5ndGhcbiAgICAvLyBbM10gbm9kZSBzcGVlZFxuICAgIG5vZGVzUmVmLmN1cnJlbnQgPSBub2Rlc1JlZi5jdXJyZW50Py5tYXAoKG5vZGUpID0+IFtcbiAgICAgIG5vZGVbMF0sXG4gICAgICAod2F2ZVByb3BzUmVmLmN1cnJlbnQuaGVpZ2h0IC8gMikgKiBNYXRoLmNvcyhub2RlWzJdIC8gMjApICtcbiAgICAgICAgY2FudmFzSGVpZ2h0IC8gKDIgKiBwaXhlbFJhdGlvUmVmLmN1cnJlbnQpLFxuICAgICAgbm9kZVsyXSArIG5vZGVbM10sXG4gICAgICBub2RlWzNdLFxuICAgIF0pO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAzNzNGRlwiO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gVXBkYXRlIHdhdmUgbm9kZXNcbiAgICBsZXQgbiA9IDA7XG4gICAgd2hpbGUgKG4gPCB3YXZlUHJvcHNSZWYuY3VycmVudC50b3RhbCArIDEpIHtcbiAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKFxuICAgICAgICBub2Rlc1JlZi5jdXJyZW50W25dWzBdLFxuICAgICAgICBub2Rlc1JlZi5jdXJyZW50W25dWzFdLFxuICAgICAgICBkaWZmKG5vZGVzUmVmLmN1cnJlbnRbbl1bMF0sIG5vZGVzUmVmLmN1cnJlbnRbbiArIDFdWzBdKSxcbiAgICAgICAgZGlmZihub2Rlc1JlZi5jdXJyZW50W25dWzFdLCBub2Rlc1JlZi5jdXJyZW50W24gKyAxXVsxXSlcbiAgICAgICk7XG4gICAgICBuKys7XG4gICAgfVxuXG4gICAgLy8gTGFzdCB3YXZlIG5vZGVcbiAgICBjdHgubGluZVRvKFxuICAgICAgbm9kZXNSZWYuY3VycmVudFtub2Rlc1JlZi5jdXJyZW50Lmxlbmd0aCAtIDFdWzBdLFxuICAgICAgbm9kZXNSZWYuY3VycmVudFtub2Rlc1JlZi5jdXJyZW50Lmxlbmd0aCAtIDFdWzFdXG4gICAgKTtcblxuICAgIGN0eC5saW5lVG8od2luZG93LmlubmVyV2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICBpZiAoIXdhdmVQcm9wc1JlZikgcmV0dXJuO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBzY2FsZSBhbmQgc2l6ZSBjYW52YXMgd2l0aCBkZXZpY2UgcGl4ZWwgcmF0aW9cbiAgICBpZiAoY2FudmFzUmVmLmN1cnJlbnQud2lkdGggIT09IHdpZHRoICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50KSB7XG4gICAgICBpZiAod2lkdGggPCA1MTIpIHtcbiAgICAgICAgc2V0V2F2ZU5vZGVzKDIpO1xuICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDUxMiAmJiB3aWR0aCA8IDcyMCkge1xuICAgICAgICBzZXRXYXZlTm9kZXMoMik7XG4gICAgICB9IGVsc2UgaWYgKHdpZHRoID4gNzIwICYmIHdpZHRoIDwgMTQ0MCkge1xuICAgICAgICBzZXRXYXZlTm9kZXMoMyk7XG4gICAgICB9IGVsc2UgaWYgKHdpZHRoID4gMTQ0MCkge1xuICAgICAgICBzZXRXYXZlTm9kZXMoNCk7XG4gICAgICB9XG4gICAgICBjYW52YXNSZWYuY3VycmVudC53aWR0aCA9IHdpZHRoICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50O1xuICAgICAgY2FudmFzUmVmLmN1cnJlbnQuaGVpZ2h0ID0gaGVpZ2h0ICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50O1xuICAgICAgY29udGV4dFJlZi5jdXJyZW50LnNjYWxlKHBpeGVsUmF0aW9SZWYuY3VycmVudCwgcGl4ZWxSYXRpb1JlZi5jdXJyZW50KTtcblxuICAgICAgLy8gVXBkYXRlIG5vZGUgeCBwb3Mgb24gd2luZG93IHJlc2l6ZVxuICAgICAgbm9kZXNSZWYuY3VycmVudCA9IG5vZGVzUmVmLmN1cnJlbnQ/Lm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBbLi4ubm9kZV07XG4gICAgICAgIGNsb25lWzBdID1cbiAgICAgICAgICAoKGluZGV4IC0gMSkgKiB3aW5kb3cuaW5uZXJXaWR0aCkgLyB3YXZlUHJvcHNSZWYuY3VycmVudC50b3RhbDtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU3RvcmUgZGV2aWNlIHBpeGVsIHJhdGlvXG4gICAgcGl4ZWxSYXRpb1JlZi5jdXJyZW50ID0gZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgIC8vIFNldCB1cCBjYW52YXNcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgLy8gU2NhbGUgY2FudmFzIGJhc2VkIG9uIGRldmljZSBwaXhlbCByYXRpb1xuICAgIGNhbnZhc1JlZi5jdXJyZW50LndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBwaXhlbFJhdGlvUmVmLmN1cnJlbnQ7XG4gICAgY2FudmFzUmVmLmN1cnJlbnQuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogcGl4ZWxSYXRpb1JlZi5jdXJyZW50O1xuICAgIGNvbnRleHRSZWYuY3VycmVudC5zY2FsZShwaXhlbFJhdGlvUmVmLmN1cnJlbnQsIHBpeGVsUmF0aW9SZWYuY3VycmVudCk7XG5cbiAgICAvLyBTZXQgdXAgd2F2ZSBub2Rlc1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDcyMCkge1xuICAgICAgc2V0V2F2ZU5vZGVzKDIpO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPiA3MjAgJiYgd2luZG93LmlubmVyV2lkdGggPCAxNDQwKSB7XG4gICAgICBzZXRXYXZlTm9kZXMoMyk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDE0NDApIHtcbiAgICAgIHNldFdhdmVOb2Rlcyg0KTtcbiAgICB9XG4gIH0sIFtjb250ZXh0UmVmXSk7XG5cbiAgLy8gUmVzaXplXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBQYXVzZSBhbmQgcGxheSB3YXZlIG9uIGFuaW1hdGUgaW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJbml0aWFsIGRyYXcgb2Ygd2F2ZSwgcGF1c2VkIHRvIHN0YXJ0XG4gICAgZHJhdygpO1xuXG4gICAgLy8gT25jZSBhbmltYXRlZCBpbiwgcGxheVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNQYXVzZWQoZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZDtcbiAgICAvLyBpZiBub3QgaXNQYXVzZWQgYW5kIHdhdmVJblZpZXcsIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIGRyYXcoKTtcbiAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9O1xuXG4gICAgaWYgKCFpc1BhdXNlZCAmJiB3YXZlSW5WaWV3KSB7XG4gICAgICAvLyBTdGFydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgIHJlbmRlcigpO1xuICAgIH0gZWxzZSBpZiAoIXdhdmVJblZpZXcpIHtcbiAgICAgIC8vIFN0b3AgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIH07XG4gIH0sIFtpc1BhdXNlZCwgd2F2ZUluVmlld10pO1xuICByZXR1cm4gKFxuICAgIDxjYW52YXMgY2xhc3NOYW1lPXtzdHlsZXMud2F2ZX0gcmVmPXtzZXRSZWZzfT5cbiAgICAgIDxwPkEgc3VidGxlIHdhdmUgYW5pbWF0aW9uPC9wPlxuICAgIDwvY2FudmFzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Wave/AnimatedWave.js\n");

/***/ })

})