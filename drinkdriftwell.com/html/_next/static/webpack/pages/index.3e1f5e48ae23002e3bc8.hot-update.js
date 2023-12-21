webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Menu/index.js":
/*!**********************************!*\
  !*** ./components/Menu/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _LinkByType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LinkByType */ \"./components/LinkByType/index.js\");\n/* harmony import */ var _contexts_soundContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/soundContext */ \"./contexts/soundContext.js\");\n/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! body-scroll-lock */ \"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js\");\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Link */ \"./components/Link/index.js\");\n/* harmony import */ var _menu_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu.module.scss */ \"./components/Menu/menu.module.scss\");\n/* harmony import */ var _menu_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_menu_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/nathansearlesnsearles/Sites/drinkdriftwell/components/Menu/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nfunction Menu(_ref) {\n  _s();\n\n  var _this = this,\n      _moduleDefs;\n\n  var body = _ref.body,\n      menuOpen = _ref.menuOpen;\n  var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n  var firstLink = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (menuRef.current) {\n      menuRef.current.focus();\n    }\n  }, []);\n\n  var _useSoundContext = Object(_contexts_soundContext__WEBPACK_IMPORTED_MODULE_5__[\"useSoundContext\"])(),\n      setSoundEffect = _useSoundContext.setSoundEffect;\n\n  var backgroundVariant = {\n    open: {\n      scale: 200,\n      transition: {\n        ease: \"easeInOut\",\n        duration: 0.65\n      }\n    },\n    closed: {\n      scale: 0,\n      transition: {\n        ease: \"easeInOut\",\n        duration: 0.4\n      }\n    }\n  };\n  var ulVariant = {\n    open: {\n      display: \"block\",\n      transition: {\n        staggerChildren: 0.07,\n        delayChildren: 0.4\n      }\n    },\n    closed: {\n      transition: {\n        staggerChildren: 0.05,\n        staggerDirection: -1\n      },\n      transitionEnd: {\n        display: \"none\"\n      }\n    }\n  };\n  var liVariants = {\n    open: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        y: {\n          stiffness: 1000,\n          velocity: -100\n        }\n      }\n    },\n    closed: {\n      y: 50,\n      opacity: 0,\n      transition: {\n        y: {\n          stiffness: 1000\n        }\n      }\n    }\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    menuRef.current && menuOpen ? Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__[\"disableBodyScroll\"])(menuRef.current) : Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__[\"enableBodyScroll\"])(menuRef.current);\n    return function () {\n      // On unload clear scroll locks\n      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__[\"clearAllBodyScrollLocks\"])();\n    };\n  }, [menuOpen]);\n\n  var PageLink = function PageLink(_ref2) {\n    var primary = _ref2.primary;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, primary.link && __jsx(\"div\", {\n      onMouseEnter: function onMouseEnter() {\n        return setSoundEffect([\"bowls\", Math.random()]);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 11\n      }\n    }, __jsx(_LinkByType__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      link: primary.link,\n      label: primary.label,\n      activeClassName: _menu_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }\n    })));\n  };\n\n  var BuyLink = function BuyLink(_ref3) {\n    var primary = _ref3.primary,\n        fields = _ref3.fields;\n    return __jsx(\"div\", {\n      onMouseEnter: function onMouseEnter() {\n        return setSoundEffect([\"bowls\", Math.random()]);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 7\n      }\n    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      activeClassName: _menu_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.active,\n      href: \"/locator\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }\n    }, __jsx(\"a\", {\n      ref: firstLink,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 11\n      }\n    }, primary.label)));\n  };\n\n  var SocialLink = function SocialLink(_ref4) {\n    var fields = _ref4.fields;\n    return __jsx(\"ul\", {\n      className: _menu_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.socialLinks,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 7\n      }\n    }, fields.map(function (field, index) {\n      return __jsx(\"li\", {\n        key: \"social_link_\".concat(index),\n        onMouseEnter: function onMouseEnter() {\n          return setSoundEffect([\"rainsticks\", Math.random()]);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        href: field.link.url,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        key: \"\".concat(index, \"_\").concat(field.type),\n        title: field.link_label,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 15\n        }\n      }, __jsx(\"img\", {\n        src: field.icon.url,\n        alt: field.link_label,\n        width: field.icon.dimensions.width,\n        height: field.icon.dimensions.height,\n        loading: \"lazy\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 17\n        }\n      })));\n    }));\n  };\n\n  var moduleDefs = (_moduleDefs = {}, Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_moduleDefs, \"page_link\", PageLink), Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_moduleDefs, \"buy_link\", BuyLink), Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_moduleDefs, \"social\", SocialLink), _moduleDefs);\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].nav, {\n    initial: \"closed\",\n    animate: \"open\",\n    exit: \"closed\",\n    custom: 1000,\n    className: _menu_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.menu,\n    ref: menuRef,\n    role: \"navigation\",\n    \"aria-label\": \"Main menu\",\n    \"aria-hidden\": \"false\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _menu_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.menuContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].ul, {\n    variants: ulVariant,\n    className: [_menu_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.menuItems].join(\" \"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 9\n    }\n  }, function () {\n    return body.map(function (module, index) {\n      var Module = moduleDefs[module === null || module === void 0 ? void 0 : module.type];\n      return Module && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].li, {\n        variants: liVariants,\n        whileHover: {\n          scale: 1.125\n        },\n        whileTap: {\n          scale: 0.95\n        },\n        key: \"\".concat(index, \"_\").concat(module.type),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 168,\n          columnNumber: 19\n        }\n      }, __jsx(Module, Object(_Users_nathansearlesnsearles_Sites_drinkdriftwell_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, module, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 174,\n          columnNumber: 21\n        }\n      })));\n    });\n  }()), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: _menu_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.background,\n    variants: backgroundVariant,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Menu, \"sDyGcy+sLT9TBUn5kDVvHZjluIg=\", false, function () {\n  return [_contexts_soundContext__WEBPACK_IMPORTED_MODULE_5__[\"useSoundContext\"]];\n});\n\n_c = Menu;\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L2luZGV4LmpzP2ZmODkiXSwibmFtZXMiOlsiTWVudSIsImJvZHkiLCJtZW51T3BlbiIsIm1lbnVSZWYiLCJ1c2VSZWYiLCJmaXJzdExpbmsiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZm9jdXMiLCJ1c2VTb3VuZENvbnRleHQiLCJzZXRTb3VuZEVmZmVjdCIsImJhY2tncm91bmRWYXJpYW50Iiwib3BlbiIsInNjYWxlIiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImNsb3NlZCIsInVsVmFyaWFudCIsImRpc3BsYXkiLCJzdGFnZ2VyQ2hpbGRyZW4iLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckRpcmVjdGlvbiIsInRyYW5zaXRpb25FbmQiLCJsaVZhcmlhbnRzIiwieSIsIm9wYWNpdHkiLCJzdGlmZm5lc3MiLCJ2ZWxvY2l0eSIsImRpc2FibGVCb2R5U2Nyb2xsIiwiZW5hYmxlQm9keVNjcm9sbCIsImNsZWFyQWxsQm9keVNjcm9sbExvY2tzIiwiUGFnZUxpbmsiLCJwcmltYXJ5IiwibGluayIsIk1hdGgiLCJyYW5kb20iLCJsYWJlbCIsInN0eWxlcyIsImFjdGl2ZSIsIkJ1eUxpbmsiLCJmaWVsZHMiLCJTb2NpYWxMaW5rIiwic29jaWFsTGlua3MiLCJtYXAiLCJmaWVsZCIsImluZGV4IiwidXJsIiwidHlwZSIsImxpbmtfbGFiZWwiLCJpY29uIiwiZGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwibW9kdWxlRGVmcyIsIm1lbnUiLCJtZW51Q29udGFpbmVyIiwibWVudUl0ZW1zIiwiam9pbiIsIm1vZHVsZSIsIk1vZHVsZSIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ2UsU0FBU0EsSUFBVCxPQUFrQztBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBbEJDLElBQWtCLFFB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RSxDQUFDb0Isd0RBQU0sQ0FBQ21CLFNBQVIsRUFBbUJDLElBQW5CLENBQXdCLEdBQXhCLENBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJLFlBQU07QUFDTixXQUFPekQsSUFBSSxDQUFDMkMsR0FBTCxDQUFTLFVBQUNlLE1BQUQsRUFBU2IsS0FBVCxFQUFtQjtBQUNqQyxVQUFNYyxNQUFNLEdBQUdOLFVBQVUsQ0FBQ0ssTUFBRCxhQUFDQSxNQUFELHVCQUFDQSxNQUFNLENBQUVYLElBQVQsQ0FBekI7QUFDQSxhQUNFWSxNQUFNLElBQ0osTUFBQyxvREFBRCxDQUFRLEVBQVI7QUFDRSxnQkFBUSxFQUFFcEMsVUFEWjtBQUVFLGtCQUFVLEVBQUU7QUFBRVgsZUFBSyxFQUFFO0FBQVQsU0FGZDtBQUdFLGdCQUFRLEVBQUU7QUFBRUEsZUFBSyxFQUFFO0FBQVQsU0FIWjtBQUlFLFdBQUcsWUFBS2lDLEtBQUwsY0FBY2EsTUFBTSxDQUFDWCxJQUFyQixDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNRSxNQUFDLE1BQUQsdUpBQVlXLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU5GLENBRko7QUFZRCxLQWRNLENBQVA7QUFlRCxHQWhCQSxFQUpILENBREYsRUF1QkUsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxhQUFTLEVBQUVyQix3REFBTSxDQUFDdUIsVUFEcEI7QUFFRSxZQUFRLEVBQUVsRCxpQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJGLENBWEYsQ0FERjtBQTBDRDs7R0EvS3VCWCxJO1VBVUtTLHNFOzs7S0FWTFQsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWVudS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBMaW5rQnlUeXBlIGZyb20gXCIuLi9MaW5rQnlUeXBlXCI7XG5pbXBvcnQgeyB1c2VTb3VuZENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvc291bmRDb250ZXh0XCI7XG5cbmltcG9ydCB7XG4gIGRpc2FibGVCb2R5U2Nyb2xsLFxuICBlbmFibGVCb2R5U2Nyb2xsLFxuICBjbGVhckFsbEJvZHlTY3JvbGxMb2Nrcyxcbn0gZnJvbSBcImJvZHktc2Nyb2xsLWxvY2tcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9MaW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21lbnUubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoeyBib2R5LCBtZW51T3BlbiB9KSB7XG4gIGNvbnN0IG1lbnVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgZmlyc3RMaW5rID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1lbnVSZWYuY3VycmVudCkge1xuICAgICAgbWVudVJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBzZXRTb3VuZEVmZmVjdCB9ID0gdXNlU291bmRDb250ZXh0KCk7XG5cbiAgY29uc3QgYmFja2dyb3VuZFZhcmlhbnQgPSB7XG4gICAgb3Blbjoge1xuICAgICAgc2NhbGU6IDIwMCxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgZHVyYXRpb246IDAuNjUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICBzY2FsZTogMCxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCB1bFZhcmlhbnQgPSB7XG4gICAgb3Blbjoge1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgdHJhbnNpdGlvbjogeyBzdGFnZ2VyQ2hpbGRyZW46IDAuMDcsIGRlbGF5Q2hpbGRyZW46IDAuNCB9LFxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICB0cmFuc2l0aW9uOiB7IHN0YWdnZXJDaGlsZHJlbjogMC4wNSwgc3RhZ2dlckRpcmVjdGlvbjogLTEgfSxcbiAgICAgIHRyYW5zaXRpb25FbmQ6IHtcbiAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgbGlWYXJpYW50cyA9IHtcbiAgICBvcGVuOiB7XG4gICAgICB5OiAwLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgeTogeyBzdGlmZm5lc3M6IDEwMDAsIHZlbG9jaXR5OiAtMTAwIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICB5OiA1MCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHk6IHsgc3RpZmZuZXNzOiAxMDAwIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBtZW51UmVmLmN1cnJlbnQgJiYgbWVudU9wZW5cbiAgICAgID8gZGlzYWJsZUJvZHlTY3JvbGwobWVudVJlZi5jdXJyZW50KVxuICAgICAgOiBlbmFibGVCb2R5U2Nyb2xsKG1lbnVSZWYuY3VycmVudCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gT24gdW5sb2FkIGNsZWFyIHNjcm9sbCBsb2Nrc1xuICAgICAgY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MoKTtcbiAgICB9O1xuICB9LCBbbWVudU9wZW5dKTtcblxuICBjb25zdCBQYWdlTGluayA9ICh7IHByaW1hcnkgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7cHJpbWFyeS5saW5rICYmIChcbiAgICAgICAgICA8ZGl2IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U291bmRFZmZlY3QoW1wiYm93bHNcIiwgTWF0aC5yYW5kb20oKV0pfT5cbiAgICAgICAgICAgIDxMaW5rQnlUeXBlXG4gICAgICAgICAgICAgIGxpbms9e3ByaW1hcnkubGlua31cbiAgICAgICAgICAgICAgbGFiZWw9e3ByaW1hcnkubGFiZWx9XG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEJ1eUxpbmsgPSAoeyBwcmltYXJ5LCBmaWVsZHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U291bmRFZmZlY3QoW1wiYm93bHNcIiwgTWF0aC5yYW5kb20oKV0pfT5cbiAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZlfSBocmVmPXtgL2xvY2F0b3JgfT5cbiAgICAgICAgICA8YSByZWY9e2ZpcnN0TGlua30+e3ByaW1hcnkubGFiZWx9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFNvY2lhbExpbmsgPSAoeyBmaWVsZHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsTGlua3N9PlxuICAgICAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBrZXk9e2Bzb2NpYWxfbGlua18ke2luZGV4fWB9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U291bmRFZmZlY3QoW1wicmFpbnN0aWNrc1wiLCBNYXRoLnJhbmRvbSgpXSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17ZmllbGQubGluay51cmx9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake2luZGV4fV8ke2ZpZWxkLnR5cGV9YH1cbiAgICAgICAgICAgICAgICB0aXRsZT17ZmllbGQubGlua19sYWJlbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17ZmllbGQuaWNvbi51cmx9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2ZpZWxkLmxpbmtfbGFiZWx9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17ZmllbGQuaWNvbi5kaW1lbnNpb25zLndpZHRofVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtmaWVsZC5pY29uLmRpbWVuc2lvbnMuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgbW9kdWxlRGVmcyA9IHtcbiAgICBbXCJwYWdlX2xpbmtcIl06IFBhZ2VMaW5rLFxuICAgIFtcImJ1eV9saW5rXCJdOiBCdXlMaW5rLFxuICAgIFtcInNvY2lhbFwiXTogU29jaWFsTGluayxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24ubmF2XG4gICAgICBpbml0aWFsPVwiY2xvc2VkXCJcbiAgICAgIGFuaW1hdGU9XCJvcGVuXCJcbiAgICAgIGV4aXQ9XCJjbG9zZWRcIlxuICAgICAgY3VzdG9tPXsxMDAwfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudX1cbiAgICAgIHJlZj17bWVudVJlZn1cbiAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJNYWluIG1lbnVcIlxuICAgICAgYXJpYS1oaWRkZW49XCJmYWxzZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51Q29udGFpbmVyfT5cbiAgICAgICAgPG1vdGlvbi51bFxuICAgICAgICAgIHZhcmlhbnRzPXt1bFZhcmlhbnR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtbc3R5bGVzLm1lbnVJdGVtc10uam9pbihcIiBcIil9XG4gICAgICAgID5cbiAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBib2R5Lm1hcCgobW9kdWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBNb2R1bGUgPSBtb2R1bGVEZWZzW21vZHVsZT8udHlwZV07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgTW9kdWxlICYmIChcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2xpVmFyaWFudHN9XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMTI1IH19XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19XG4gICAgICAgICAgICAgICAgICAgIGtleT17YCR7aW5kZXh9XyR7bW9kdWxlLnR5cGV9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1vZHVsZSB7Li4ubW9kdWxlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkoKX1cbiAgICAgICAgPC9tb3Rpb24udWw+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH1cbiAgICAgICAgICB2YXJpYW50cz17YmFja2dyb3VuZFZhcmlhbnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5uYXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu/index.js\n");

/***/ })

})