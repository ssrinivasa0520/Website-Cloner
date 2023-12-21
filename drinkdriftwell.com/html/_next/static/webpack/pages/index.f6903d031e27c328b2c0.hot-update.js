webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Modules/Flavors/index.js":
/*!*********************************************!*\
  !*** ./components/Modules/Flavors/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RichText */ \"./components/RichText/index.js\");\n/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Picture */ \"./components/Picture/index.js\");\n/* harmony import */ var _LinkByType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LinkByType */ \"./components/LinkByType/index.js\");\n/* harmony import */ var _contexts_soundContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../contexts/soundContext */ \"./contexts/soundContext.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.esm.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _flavors_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flavors.module.scss */ \"./components/Modules/Flavors/flavors.module.scss\");\n/* harmony import */ var _flavors_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_flavors_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Modules/Flavors/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nswiper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_7__[\"EffectCoverflow\"], swiper__WEBPACK_IMPORTED_MODULE_7__[\"A11y\"], swiper__WEBPACK_IMPORTED_MODULE_7__[\"Keyboard\"]]);\n\nvar Flavors = function Flavors(_ref) {\n  _s();\n\n  var primary = _ref.primary,\n      fields = _ref.fields;\n\n  var _useSoundContext = Object(_contexts_soundContext__WEBPACK_IMPORTED_MODULE_5__[\"useSoundContext\"])(),\n      setSoundEffect = _useSoundContext.setSoundEffect;\n\n  console.log(\"flavors: \");\n\n  var Slide = function Slide(field) {\n    var flavor = field.flavor,\n        description = field.description,\n        image = field.image;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      tabIndex: \"-1\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"image\",\n        tabIndex: \"-1\",\n        children: image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Picture__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          image: image,\n          classes: _flavors_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.image\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"content\",\n        children: [flavor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_RichText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          render: flavor\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 22\n        }, _this), description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_RichText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          render: description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 27\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          onMouseEnter: function onMouseEnter() {\n            return setSoundEffect([\"bowls\", Math.random()]);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_LinkByType__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            link: {\n              _linkType: \"Link.document\",\n              slug: \"locator\"\n            },\n            label: \"Shop Now\",\n            style: \"button\",\n            tabIndex: \"0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: _flavors_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.flavors,\n    tabIndex: \"-1\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Picture__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: primary.background,\n      classes: _flavors_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.backgroundImage,\n      tabIndex: \"-1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__[\"Swiper\"], {\n      speed: 850,\n      spaceBetween: 0,\n      slidesPerView: 2,\n      initialSlide: 2,\n      grabCursor: true,\n      slideToClickedSlide: true,\n      centeredSlides: true,\n      effect: \"coverflow\",\n      tabIndex: \"0\",\n      a11y: true,\n      onSlideChange: function onSlideChange() {\n        return setSoundEffect([\"rainsticks\", Math.random()]);\n      },\n      keyboard: {\n        enabled: true,\n        onlyInViewport: true\n      },\n      coverflowEffect: {\n        rotate: 0,\n        // Slide rotate in degrees\n        stretch: 0,\n        // Stretch space between slides (in px)\n        depth: 100,\n        // Depth offset in px (slides translate in Z axis)\n        modifier: 2,\n        // Effect multipler\n        slideShadows: false // Enables slides shadows\n\n      },\n      breakpoints: {\n        768: {\n          slidesPerView: 3,\n          spaceBetween: 0\n        },\n        1024: {\n          slidesPerView: 3,\n          spaceBetween: 80\n        },\n        1280: {\n          slidesPerView: 3,\n          spaceBetween: 100,\n          speed: 800\n        },\n        1440: {\n          slidesPerView: 3,\n          spaceBetween: 100,\n          speed: 1000\n        },\n        1680: {\n          slidesPerView: 3,\n          spaceBetween: 150,\n          speed: 1200\n        }\n      },\n      children: fields === null || fields === void 0 ? void 0 : fields.map(function (field, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__[\"SwiperSlide\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Slide, _objectSpread({}, field), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 15\n          }, _this)\n        }, \"slide_\".concat(index), false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Flavors, \"hcY7Ftl9YZSFUOCMyAJbSUXP/KI=\", false, function () {\n  return [_contexts_soundContext__WEBPACK_IMPORTED_MODULE_5__[\"useSoundContext\"]];\n});\n\n_c = Flavors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flavors);\n\nvar _c;\n\n$RefreshReg$(_c, \"Flavors\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL0ZsYXZvcnMvaW5kZXguanM/NTVkNyJdLCJuYW1lcyI6WyJTd2lwZXJDb3JlIiwidXNlIiwiRWZmZWN0Q292ZXJmbG93IiwiQTExeSIsIktleWJvYXJkIiwiRmxhdm9ycyIsInByaW1hcnkiLCJmaWVsZHMiLCJ1c2VTb3VuZENvbnRleHQiLCJzZXRTb3VuZEVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJTbGlkZSIsImZpZWxkIiwiZmxhdm9yIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInN0eWxlcyIsIk1hdGgiLCJyYW5kb20iLCJfbGlua1R5cGUiLCJzbHVnIiwiZmxhdm9ycyIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJlbmFibGVkIiwib25seUluVmlld3BvcnQiLCJyb3RhdGUiLCJzdHJldGNoIiwiZGVwdGgiLCJtb2RpZmllciIsInNsaWRlU2hhZG93cyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJzcGVlZCIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUFBLDhDQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQyxzREFBRCxFQUFrQkMsMkNBQWxCLEVBQXdCQywrQ0FBeEIsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEseUJBQ1pDLDhFQUFlLEVBREg7QUFBQSxNQUMvQkMsY0FEK0Isb0JBQy9CQSxjQUQrQjs7QUFFdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsUUFDZkMsTUFEZSxHQUNn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RCx1QkFBYSxFQUFFLENBRFg7QUFFSkMsc0JBQVksRUFBRSxHQUZWO0FBR0pDLGVBQUssRUFBRTtBQUhILFNBVEs7QUFjWCxjQUFNO0FBQ0pGLHVCQUFhLEVBQUUsQ0FEWDtBQUVKQyxzQkFBWSxFQUFFLEdBRlY7QUFHSkMsZUFBSyxFQUFFO0FBSEgsU0FkSztBQW1CWCxjQUFNO0FBQ0pGLHVCQUFhLEVBQUUsQ0FEWDtBQUVKQyxzQkFBWSxFQUFFLEdBRlY7QUFHSkMsZUFBSyxFQUFFO0FBSEg7QUFuQkssT0F2QmY7QUFBQSxnQkFpREczQixNQWpESCxhQWlER0EsTUFqREgsdUJBaURHQSxNQUFNLENBQUU0QixHQUFSLENBQVksVUFBQ3RCLEtBQUQsRUFBUXVCLEtBQVIsRUFBa0I7QUFDN0IsNEJBQ0UscUVBQUMsd0RBQUQ7QUFBQSxpQ0FDRSxxRUFBQyxLQUFELG9CQUFXdkIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsMkJBQTJCdUIsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtELE9BTkE7QUFqREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUVELENBaEdEOztHQUFNL0IsTztVQUN1Qkcsc0U7OztLQUR2QkgsTztBQWtHU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZHVsZXMvRmxhdm9ycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSaWNoVGV4dCBmcm9tIFwiLi4vLi4vUmljaFRleHRcIjtcbmltcG9ydCBQaWN0dXJlIGZyb20gXCIuLi8uLi9QaWN0dXJlXCI7XG5pbXBvcnQgTGlua0J5VHlwZSBmcm9tIFwiLi4vLi4vTGlua0J5VHlwZVwiO1xuaW1wb3J0IHsgdXNlU291bmRDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHRzL3NvdW5kQ29udGV4dFwiO1xuXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IFN3aXBlckNvcmUsIHsgRWZmZWN0Q292ZXJmbG93LCBBMTF5LCBLZXlib2FyZCB9IGZyb20gXCJzd2lwZXJcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9mbGF2b3JzLm1vZHVsZS5zY3NzXCI7XG5cblN3aXBlckNvcmUudXNlKFtFZmZlY3RDb3ZlcmZsb3csIEExMXksIEtleWJvYXJkXSk7XG5cbmNvbnN0IEZsYXZvcnMgPSAoeyBwcmltYXJ5LCBmaWVsZHMgfSkgPT4ge1xuICBjb25zdCB7IHNldFNvdW5kRWZmZWN0IH0gPSB1c2VTb3VuZENvbnRleHQoKTtcbiAgY29uc29sZS5sb2coXCJmbGF2b3JzOiBcIik7XG4gIGNvbnN0IFNsaWRlID0gKGZpZWxkKSA9PiB7XG4gICAgY29uc3QgeyBmbGF2b3IsIGRlc2NyaXB0aW9uLCBpbWFnZSB9ID0gZmllbGQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgdGFiSW5kZXg9XCItMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCIgdGFiSW5kZXg9XCItMVwiPlxuICAgICAgICAgIHtpbWFnZSAmJiA8UGljdHVyZSBpbWFnZT17aW1hZ2V9IGNsYXNzZXM9e3N0eWxlcy5pbWFnZX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICB7Zmxhdm9yICYmIDxSaWNoVGV4dCByZW5kZXI9e2ZsYXZvcn0gLz59XG4gICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxSaWNoVGV4dCByZW5kZXI9e2Rlc2NyaXB0aW9ufSAvPn1cbiAgICAgICAgICA8ZGl2IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U291bmRFZmZlY3QoW1wiYm93bHNcIiwgTWF0aC5yYW5kb20oKV0pfT5cbiAgICAgICAgICAgIDxMaW5rQnlUeXBlXG4gICAgICAgICAgICAgIGxpbms9e3tcbiAgICAgICAgICAgICAgICBfbGlua1R5cGU6IFwiTGluay5kb2N1bWVudFwiLFxuICAgICAgICAgICAgICAgIHNsdWc6IFwibG9jYXRvclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBsYWJlbD17XCJTaG9wIE5vd1wifVxuICAgICAgICAgICAgICBzdHlsZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5mbGF2b3JzfSB0YWJJbmRleD1cIi0xXCI+XG4gICAgICA8UGljdHVyZVxuICAgICAgICBpbWFnZT17cHJpbWFyeS5iYWNrZ3JvdW5kfVxuICAgICAgICBjbGFzc2VzPXtzdHlsZXMuYmFja2dyb3VuZEltYWdlfVxuICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgIC8+XG5cbiAgICAgIDxTd2lwZXJcbiAgICAgICAgc3BlZWQ9ezg1MH1cbiAgICAgICAgc3BhY2VCZXR3ZWVuPXswfVxuICAgICAgICBzbGlkZXNQZXJWaWV3PXsyfVxuICAgICAgICBpbml0aWFsU2xpZGU9ezJ9XG4gICAgICAgIGdyYWJDdXJzb3I9e3RydWV9XG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU9e3RydWV9XG4gICAgICAgIGNlbnRlcmVkU2xpZGVzPXt0cnVlfVxuICAgICAgICBlZmZlY3Q9XCJjb3ZlcmZsb3dcIlxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICBhMTF5PXt0cnVlfVxuICAgICAgICBvblNsaWRlQ2hhbmdlPXsoKSA9PiBzZXRTb3VuZEVmZmVjdChbXCJyYWluc3RpY2tzXCIsIE1hdGgucmFuZG9tKCldKX1cbiAgICAgICAga2V5Ym9hcmQ9e3tcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxuICAgICAgICB9fVxuICAgICAgICBjb3ZlcmZsb3dFZmZlY3Q9e3tcbiAgICAgICAgICByb3RhdGU6IDAsIC8vIFNsaWRlIHJvdGF0ZSBpbiBkZWdyZWVzXG4gICAgICAgICAgc3RyZXRjaDogMCwgLy8gU3RyZXRjaCBzcGFjZSBiZXR3ZWVuIHNsaWRlcyAoaW4gcHgpXG4gICAgICAgICAgZGVwdGg6IDEwMCwgLy8gRGVwdGggb2Zmc2V0IGluIHB4IChzbGlkZXMgdHJhbnNsYXRlIGluIFogYXhpcylcbiAgICAgICAgICBtb2RpZmllcjogMiwgLy8gRWZmZWN0IG11bHRpcGxlclxuICAgICAgICAgIHNsaWRlU2hhZG93czogZmFsc2UsIC8vIEVuYWJsZXMgc2xpZGVzIHNoYWRvd3NcbiAgICAgICAgfX1cbiAgICAgICAgYnJlYWtwb2ludHM9e3tcbiAgICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA4MCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEyODA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwMCxcbiAgICAgICAgICAgIHNwZWVkOiA4MDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxNDQwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMDAsXG4gICAgICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIDE2ODA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1MCxcbiAgICAgICAgICAgIHNwZWVkOiAxMjAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtmaWVsZHM/Lm1hcCgoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2BzbGlkZV8ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8U2xpZGUgey4uLmZpZWxkfSAvPlxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsYXZvcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Modules/Flavors/index.js\n");

/***/ })

})