webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Modules/Flavors/index.js":
/*!*********************************************!*\
  !*** ./components/Modules/Flavors/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RichText */ \"./components/RichText/index.js\");\n/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Picture */ \"./components/Picture/index.js\");\n/* harmony import */ var _LinkByType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LinkByType */ \"./components/LinkByType/index.js\");\n/* harmony import */ var _contexts_soundContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../contexts/soundContext */ \"./contexts/soundContext.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.esm.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _flavors_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flavors.module.scss */ \"./components/Modules/Flavors/flavors.module.scss\");\n/* harmony import */ var _flavors_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_flavors_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Modules/Flavors/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nswiper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_7__[\"EffectCoverflow\"], swiper__WEBPACK_IMPORTED_MODULE_7__[\"A11y\"], swiper__WEBPACK_IMPORTED_MODULE_7__[\"Keyboard\"]]);\n\nvar Flavors = function Flavors(_ref) {\n  _s();\n\n  var primary = _ref.primary,\n      fields = _ref.fields;\n\n  var _useSoundContext = Object(_contexts_soundContext__WEBPACK_IMPORTED_MODULE_5__[\"useSoundContext\"])(),\n      setSoundEffect = _useSoundContext.setSoundEffect;\n\n  var Slide = function Slide(field) {\n    var flavor = field.flavor,\n        description = field.description,\n        image = field.image;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      tabIndex: \"-1\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"image\",\n        tabIndex: \"-1\",\n        children: image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Picture__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          image: image,\n          classes: _flavors_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.image\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"content\",\n        children: [flavor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_RichText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          render: flavor\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 22\n        }, _this), description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_RichText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          render: description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 27\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          onMouseEnter: function onMouseEnter() {\n            return setSoundEffect([\"bowls\", Math.random()]);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_LinkByType__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            link: {\n              _linkType: \"Link.document\",\n              slug: \"locator\"\n            },\n            label: \"Shop Now\",\n            style: \"button\",\n            tabIndex: \"0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: _flavors_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.flavors,\n    tabIndex: \"-1\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Picture__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: primary.background,\n      classes: _flavors_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.backgroundImage,\n      tabIndex: \"-1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__[\"Swiper\"], {\n      speed: 850,\n      spaceBetween: 0,\n      slidesPerView: 2,\n      initialSlide: 2,\n      grabCursor: true,\n      slideToClickedSlide: true,\n      centeredSlides: true,\n      effect: \"coverflow\",\n      tabIndex: \"0\",\n      a11y: true // onSlideChange={() => setSoundEffect([\"rainsticks\", Math.random()])}\n      ,\n      keyboard: {\n        enabled: true,\n        onlyInViewport: true\n      },\n      coverflowEffect: {\n        rotate: 0,\n        // Slide rotate in degrees\n        stretch: 0,\n        // Stretch space between slides (in px)\n        depth: 100,\n        // Depth offset in px (slides translate in Z axis)\n        modifier: 2,\n        // Effect multipler\n        slideShadows: false // Enables slides shadows\n\n      },\n      breakpoints: {\n        768: {\n          slidesPerView: 3,\n          spaceBetween: 0\n        },\n        1024: {\n          slidesPerView: 3,\n          spaceBetween: 80\n        },\n        1280: {\n          slidesPerView: 3,\n          spaceBetween: 100,\n          speed: 800\n        },\n        1440: {\n          slidesPerView: 3,\n          spaceBetween: 100,\n          speed: 1000\n        },\n        1680: {\n          slidesPerView: 3,\n          spaceBetween: 150,\n          speed: 1200\n        }\n      },\n      children: fields === null || fields === void 0 ? void 0 : fields.map(function (field, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__[\"SwiperSlide\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Slide, _objectSpread({}, field), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 15\n          }, _this)\n        }, \"slide_\".concat(index), false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Flavors, \"hcY7Ftl9YZSFUOCMyAJbSUXP/KI=\", false, function () {\n  return [_contexts_soundContext__WEBPACK_IMPORTED_MODULE_5__[\"useSoundContext\"]];\n});\n\n_c = Flavors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flavors);\n\nvar _c;\n\n$RefreshReg$(_c, \"Flavors\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL0ZsYXZvcnMvaW5kZXguanM/NTVkNyJdLCJuYW1lcyI6WyJTd2lwZXJDb3JlIiwidXNlIiwiRWZmZWN0Q292ZXJmbG93IiwiQTExeSIsIktleWJvYXJkIiwiRmxhdm9ycyIsInByaW1hcnkiLCJmaWVsZHMiLCJ1c2VTb3VuZENvbnRleHQiLCJzZXRTb3VuZEVmZmVjdCIsIlNsaWRlIiwiZmllbGQiLCJmbGF2b3IiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwic3R5bGVzIiwiTWF0aCIsInJhbmRvbSIsIl9saW5rVHlwZSIsInNsdWciLCJmbGF2b3JzIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRJbWFnZSIsImVuYWJsZWQiLCJvbmx5SW5WaWV3cG9ydCIsInJvdGF0ZSIsInN0cmV0Y2giLCJkZXB0aCIsIm1vZGlmaWVyIiwic2xpZGVTaGFkb3dzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInNwZWVkIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQUEsOENBQVUsQ0FBQ0MsR0FBWCxDQUFlLENBQUNDLHNEQUFELEVBQWtCQywyQ0FBbEIsRUFBd0JDLCtDQUF4QixDQUFmOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLE9BQXNCLFFBQXRCQSxPQUFzQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSx5QkFDWkMsOEVBQWUsRUFESDtBQUFBLE1BQy9CQyxjQUQrQixvQkFDL0JBLGNBRCtCOztBQUV2QyxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQSxRQUNmQyxNQURlLEdBQ2dCRCxLQURoQixDQUNmQyxNQURlO0FBQUEsUUFDUEMsV0FETyxHQUNnQkYsS0FEaEIs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QUhILFNBZEs7QUFtQlgsY0FBTTtBQUNKRix1QkFBYSxFQUFFLENBRFg7QUFFSkMsc0JBQVksRUFBRSxHQUZWO0FBR0pDLGVBQUssRUFBRTtBQUhIO0FBbkJLLE9BdkJmO0FBQUEsZ0JBaURHekIsTUFqREgsYUFpREdBLE1BakRILHVCQWlER0EsTUFBTSxDQUFFMEIsR0FBUixDQUFZLFVBQUN0QixLQUFELEVBQVF1QixLQUFSLEVBQWtCO0FBQzdCLDRCQUNFLHFFQUFDLHdEQUFEO0FBQUEsaUNBQ0UscUVBQUMsS0FBRCxvQkFBV3ZCLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLDJCQUEyQnVCLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFLRCxPQU5BO0FBakRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1FRCxDQS9GRDs7R0FBTTdCLE87VUFDdUJHLHNFOzs7S0FEdkJILE87QUFpR1NBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nb2R1bGVzL0ZsYXZvcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmljaFRleHQgZnJvbSBcIi4uLy4uL1JpY2hUZXh0XCI7XG5pbXBvcnQgUGljdHVyZSBmcm9tIFwiLi4vLi4vUGljdHVyZVwiO1xuaW1wb3J0IExpbmtCeVR5cGUgZnJvbSBcIi4uLy4uL0xpbmtCeVR5cGVcIjtcbmltcG9ydCB7IHVzZVNvdW5kQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0cy9zb3VuZENvbnRleHRcIjtcblxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBTd2lwZXJDb3JlLCB7IEVmZmVjdENvdmVyZmxvdywgQTExeSwgS2V5Ym9hcmQgfSBmcm9tIFwic3dpcGVyXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZmxhdm9ycy5tb2R1bGUuc2Nzc1wiO1xuXG5Td2lwZXJDb3JlLnVzZShbRWZmZWN0Q292ZXJmbG93LCBBMTF5LCBLZXlib2FyZF0pO1xuXG5jb25zdCBGbGF2b3JzID0gKHsgcHJpbWFyeSwgZmllbGRzIH0pID0+IHtcbiAgY29uc3QgeyBzZXRTb3VuZEVmZmVjdCB9ID0gdXNlU291bmRDb250ZXh0KCk7XG4gIGNvbnN0IFNsaWRlID0gKGZpZWxkKSA9PiB7XG4gICAgY29uc3QgeyBmbGF2b3IsIGRlc2NyaXB0aW9uLCBpbWFnZSB9ID0gZmllbGQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgdGFiSW5kZXg9XCItMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCIgdGFiSW5kZXg9XCItMVwiPlxuICAgICAgICAgIHtpbWFnZSAmJiA8UGljdHVyZSBpbWFnZT17aW1hZ2V9IGNsYXNzZXM9e3N0eWxlcy5pbWFnZX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICB7Zmxhdm9yICYmIDxSaWNoVGV4dCByZW5kZXI9e2ZsYXZvcn0gLz59XG4gICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxSaWNoVGV4dCByZW5kZXI9e2Rlc2NyaXB0aW9ufSAvPn1cbiAgICAgICAgICA8ZGl2IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U291bmRFZmZlY3QoW1wiYm93bHNcIiwgTWF0aC5yYW5kb20oKV0pfT5cbiAgICAgICAgICAgIDxMaW5rQnlUeXBlXG4gICAgICAgICAgICAgIGxpbms9e3tcbiAgICAgICAgICAgICAgICBfbGlua1R5cGU6IFwiTGluay5kb2N1bWVudFwiLFxuICAgICAgICAgICAgICAgIHNsdWc6IFwibG9jYXRvclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBsYWJlbD17XCJTaG9wIE5vd1wifVxuICAgICAgICAgICAgICBzdHlsZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5mbGF2b3JzfSB0YWJJbmRleD1cIi0xXCI+XG4gICAgICA8UGljdHVyZVxuICAgICAgICBpbWFnZT17cHJpbWFyeS5iYWNrZ3JvdW5kfVxuICAgICAgICBjbGFzc2VzPXtzdHlsZXMuYmFja2dyb3VuZEltYWdlfVxuICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgIC8+XG5cbiAgICAgIDxTd2lwZXJcbiAgICAgICAgc3BlZWQ9ezg1MH1cbiAgICAgICAgc3BhY2VCZXR3ZWVuPXswfVxuICAgICAgICBzbGlkZXNQZXJWaWV3PXsyfVxuICAgICAgICBpbml0aWFsU2xpZGU9ezJ9XG4gICAgICAgIGdyYWJDdXJzb3I9e3RydWV9XG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU9e3RydWV9XG4gICAgICAgIGNlbnRlcmVkU2xpZGVzPXt0cnVlfVxuICAgICAgICBlZmZlY3Q9XCJjb3ZlcmZsb3dcIlxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICBhMTF5PXt0cnVlfVxuICAgICAgICAvLyBvblNsaWRlQ2hhbmdlPXsoKSA9PiBzZXRTb3VuZEVmZmVjdChbXCJyYWluc3RpY2tzXCIsIE1hdGgucmFuZG9tKCldKX1cbiAgICAgICAga2V5Ym9hcmQ9e3tcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxuICAgICAgICB9fVxuICAgICAgICBjb3ZlcmZsb3dFZmZlY3Q9e3tcbiAgICAgICAgICByb3RhdGU6IDAsIC8vIFNsaWRlIHJvdGF0ZSBpbiBkZWdyZWVzXG4gICAgICAgICAgc3RyZXRjaDogMCwgLy8gU3RyZXRjaCBzcGFjZSBiZXR3ZWVuIHNsaWRlcyAoaW4gcHgpXG4gICAgICAgICAgZGVwdGg6IDEwMCwgLy8gRGVwdGggb2Zmc2V0IGluIHB4IChzbGlkZXMgdHJhbnNsYXRlIGluIFogYXhpcylcbiAgICAgICAgICBtb2RpZmllcjogMiwgLy8gRWZmZWN0IG11bHRpcGxlclxuICAgICAgICAgIHNsaWRlU2hhZG93czogZmFsc2UsIC8vIEVuYWJsZXMgc2xpZGVzIHNoYWRvd3NcbiAgICAgICAgfX1cbiAgICAgICAgYnJlYWtwb2ludHM9e3tcbiAgICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA4MCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEyODA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwMCxcbiAgICAgICAgICAgIHNwZWVkOiA4MDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxNDQwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMDAsXG4gICAgICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIDE2ODA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1MCxcbiAgICAgICAgICAgIHNwZWVkOiAxMjAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtmaWVsZHM/Lm1hcCgoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2BzbGlkZV8ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8U2xpZGUgey4uLmZpZWxkfSAvPlxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsYXZvcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Modules/Flavors/index.js\n");

/***/ })

})