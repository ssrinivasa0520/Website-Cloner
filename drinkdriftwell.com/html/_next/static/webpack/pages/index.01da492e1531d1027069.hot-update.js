webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Modules/EmailSignup/SignupForm.js":
/*!******************************************************!*\
  !*** ./components/Modules/EmailSignup/SignupForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_hutchaa_Projects_makemarks_Driftwell_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _LinkByType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LinkByType */ \"./components/LinkByType/index.js\");\n/* harmony import */ var _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emailsignup.module.scss */ \"./components/Modules/EmailSignup/emailsignup.module.scss\");\n/* harmony import */ var _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-mailchimp-subscribe */ \"./node_modules/react-mailchimp-subscribe/es/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/hutchaa/Projects/makemarks/Driftwell/components/Modules/EmailSignup/SignupForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar url = \"//drinkdriftwell.us7.list-manage.com/subscribe/post?u=821ad106fe946e9900c72ee0c&id=b10194a936\";\n\nvar CustomForm = function CustomForm(_ref) {\n  _s();\n\n  var primary = _ref.primary,\n      status = _ref.status,\n      message = _ref.message,\n      onValidated = _ref.onValidated,\n      onSuccess = _ref.onSuccess;\n  var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true),\n      isValid = _useState[0],\n      setIsValid = _useState[1];\n\n  var usid = primary.usid,\n      headline = primary.headline,\n      description = primary.description,\n      error = primary.error;\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_5__[\"useCookies\"])([\"subbed\"]),\n      _useCookies2 = Object(_Users_hutchaa_Projects_makemarks_Driftwell_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useCookies, 2),\n      cookie = _useCookies2[0],\n      setCookie = _useCookies2[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    var email = emailRef.current;\n\n    if (email && email.value.indexOf(\"@\") > -1) {\n      setIsValid(true);\n      onValidated({\n        EMAIL: email.value\n      });\n    } else {\n      setIsValid(false);\n    }\n\n    e.preventDefault();\n  };\n\n  var handleInputFocus = function handleInputFocus(e) {\n    window.addEventListener(\"keypress\", handleEnter);\n  };\n\n  var handleInputBlur = function handleInputBlur(e) {\n    window.removeEventListener(\"keypress\", handleEnter);\n  };\n\n  var handleEnter = function handleEnter(e) {\n    setIsValid(true);\n\n    if (e.key === \"Enter\") {\n      handleSubmit();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    return function () {\n      window.removeEventListener(\"keypress\", handleInputFocus);\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (status === \"success\") {\n      onSuccess(true);\n      setCookie(\"subbed\", true);\n      setTimeout(function () {\n        document.getElementById(\"signupModal\").style.display = \"none\";\n        document.body.style.overflow = \"visible\";\n      }, 5000);\n    }\n  }, [status]);\n\n  var statusMessage = function statusMessage() {\n    if (!isValid) {\n      return {\n        __html: serror[0].text // \"&#9888;&nbsp;Hmm, that's not right. Check your email address.\",\n\n      };\n    } else if (isValid && status === \"sending\") {\n      return {\n        __html: \"<div>Sending...</div>\"\n      };\n    } else if (isValid && status === \"error\") {\n      return {\n        __html: message\n      };\n    } else if (isValid && status === \"success\") {\n      return {\n        __html: \"Thanks for signing up! Your confirmation email is on the way.\"\n      };\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      dangerouslySetInnerHTML: {\n        __html: headline[0].text\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      dangerouslySetInnerHTML: {\n        __html: description[0].text\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fieldswrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputtextwrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          ref: emailRef,\n          type: \"text\",\n          placeholder: \"enter your email address\",\n          onBlur: handleInputBlur,\n          onFocus: handleInputFocus,\n          \"aria-label\": \"Enter email address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputtextwrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_LinkByType__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          link: {\n            _linkType: \"Link.modal\"\n          },\n          label: \"Sign Up\",\n          style: \"button\",\n          tabIndex: \"0\",\n          \"aria-label\": \"Sign up\",\n          trigger: handleSubmit\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.responseMessage,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        dangerouslySetInnerHTML: statusMessage()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(CustomForm, \"UaBugbqtKaQ/2pZfpFmCtu+x+QE=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_5__[\"useCookies\"]];\n});\n\n_c = CustomForm;\n\nvar SignupForm = function SignupForm(_ref2) {\n  var primary = _ref2.primary,\n      theme = _ref2.theme,\n      _onSuccess = _ref2.onSuccess;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      url: url,\n      render: function render(_ref3) {\n        var subscribe = _ref3.subscribe,\n            status = _ref3.status,\n            message = _ref3.message;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CustomForm, {\n          status: status,\n          message: message,\n          primary: primary,\n          onSuccess: function onSuccess(status) {\n            return typeof _onSuccess === \"function\" && _onSuccess(status);\n          },\n          onValidated: function onValidated(formData) {\n            return subscribe(formData);\n          },\n          theme: theme\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c2 = SignupForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CustomForm\");\n$RefreshReg$(_c2, \"SignupForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL0VtYWlsU2lnbnVwL1NpZ251cEZvcm0uanM/NTI0NSJdLCJuYW1lcyI6WyJ1cmwiLCJDdXN0b21Gb3JtIiwicHJpbWFyeSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJvblZhbGlkYXRlZCIsIm9uU3VjY2VzcyIsImVtYWlsUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInVzaWQiLCJoZWFkbGluZSIsImRlc2NyaXB0aW9uIiwiZXJyb3IiLCJ1c2VDb29raWVzIiwiY29va2llIiwic2V0Q29va2llIiwiaGFuZGxlU3VibWl0IiwiZSIsImVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwiaW5kZXhPZiIsIkVNQUlMIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dEZvY3VzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUVudGVyIiwiaGFuZGxlSW5wdXRCbHVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsIm92ZXJmbG93Iiwic3RhdHVzTWVzc2FnZSIsIl9faHRtbCIsInNlcnJvciIsInRleHQiLCJzdHlsZXMiLCJmaWVsZHN3cmFwcGVyIiwiaW5wdXR0ZXh0d3JhcHBlciIsIl9saW5rVHlwZSIsInJlc3BvbnNlTWVzc2FnZSIsIlNpZ251cEZvcm0iLCJ0aGVtZSIsInN1YnNjcmliZSIsImZvcm1EYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRywrRkFBWjs7QUFHQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF5RDtBQUFBOztBQUFBLE1BQXREQyxPQUFzRCxRQUF0REEsT0FBc0Q7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O0FBQUEsbUJBQWNELFNBQVMsQ0FBQ0MsUUFBRCxDQUF2QjtBQUFBLFdBUGY7QUFRRSxlQUFLLEVBQUVGO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETTtBQUFBO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURpQjtBQUFBLENBQW5COztNQUFNRCxVO0FBcUJTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTW9kdWxlcy9FbWFpbFNpZ251cC9TaWdudXBGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmtCeVR5cGUgZnJvbSBcIi4uLy4uL0xpbmtCeVR5cGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZW1haWxzaWdudXAubW9kdWxlLnNjc3NcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCJcbmltcG9ydCBNYWlsY2hpbXBTdWJzY3JpYmUgZnJvbSBcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIlxuXG5jb25zdCB1cmwgPSBcIi8vZHJpbmtkcmlmdHdlbGwudXM3Lmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PTgyMWFkMTA2ZmU5NDZlOTkwMGM3MmVlMGMmaWQ9YjEwMTk0YTkzNlwiO1xuXG5cbmNvbnN0IEN1c3RvbUZvcm0gPSAoeyBwcmltYXJ5LCBzdGF0dXMsIG1lc3NhZ2UsIG9uVmFsaWRhdGVkLCBvblN1Y2Nlc3N9KSA9PiB7XG5cbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2lzVmFsaWQsIHNldElzVmFsaWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHt1c2lkLCBoZWFkbGluZSwgZGVzY3JpcHRpb24sIGVycm9yfSA9IHByaW1hcnlcbiAgY29uc3QgW2Nvb2tpZSwgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1wic3ViYmVkXCJdKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgY29uc3QgZW1haWwgPSBlbWFpbFJlZi5jdXJyZW50O1xuICAgIGlmIChlbWFpbCAmJiBlbWFpbC52YWx1ZS5pbmRleE9mKFwiQFwiKSA+IC0xKSB7XG4gICAgICBzZXRJc1ZhbGlkKHRydWUpO1xuICAgICAgb25WYWxpZGF0ZWQoe1xuICAgICAgICBFTUFJTDogZW1haWwudmFsdWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNWYWxpZChmYWxzZSk7XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGhhbmRsZUVudGVyKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dEJsdXIgPSAoZSkgPT4ge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgaGFuZGxlRW50ZXIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVudGVyID0gKGUpID0+IHtcbiAgICBzZXRJc1ZhbGlkKHRydWUpO1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBoYW5kbGVJbnB1dEZvY3VzKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgb25TdWNjZXNzKHRydWUpO1xuICAgICAgc2V0Q29va2llKFwic3ViYmVkXCIsIHRydWUpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWdudXBNb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiXG4gICAgICB9LCA1MDAwKTtcbiAgICB9XG4gIH0sIFtzdGF0dXNdKTtcblxuICBjb25zdCBzdGF0dXNNZXNzYWdlID0gKCkgPT4ge1xuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX19odG1sOlxuICAgICAgICBzZXJyb3JbMF0udGV4dCxcbiAgICAgICAgLy8gXCImIzk4ODg7Jm5ic3A7SG1tLCB0aGF0J3Mgbm90IHJpZ2h0LiBDaGVjayB5b3VyIGVtYWlsIGFkZHJlc3MuXCIsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNWYWxpZCAmJiBzdGF0dXMgPT09IFwic2VuZGluZ1wiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfX2h0bWw6IFwiPGRpdj5TZW5kaW5nLi4uPC9kaXY+XCIsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNWYWxpZCAmJiBzdGF0dXMgPT09IFwiZXJyb3JcIikge1xuICAgICAgcmV0dXJuIHsgX19odG1sOiBtZXNzYWdlIH07XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkICYmIHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgIHJldHVybiB7IF9faHRtbDogXCJUaGFua3MgZm9yIHNpZ25pbmcgdXAhIFlvdXIgY29uZmlybWF0aW9uIGVtYWlsIGlzIG9uIHRoZSB3YXkuXCIgfTtcbiAgICB9XG4gIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmhlYWRsaW5lWzBdLnRleHR9fSA+PC9oMj5cbiAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmRlc2NyaXB0aW9uWzBdLnRleHR9fSA+PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZHN3cmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0dGV4dHdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlbWFpbFJlZn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlSW5wdXRCbHVyfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRW50ZXIgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0dGV4dHdyYXBwZXJ9PlxuXG4gICAgICAgICAgICAgICAgPExpbmtCeVR5cGVcbiAgICAgICAgICAgICAgICAgICAgbGluaz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgX2xpbmtUeXBlOiBcIkxpbmsubW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1wiU2lnbiBVcFwifVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaWduIHVwXCJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5yZXNwb25zZU1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxzcGFuICBkYW5nZXJvdXNseVNldElubmVySFRNTD17c3RhdHVzTWVzc2FnZSgpfSA+PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgXG4gIGNvbnN0IFNpZ251cEZvcm0gPSAoeyBwcmltYXJ5LHRoZW1lLCBvblN1Y2Nlc3MgfSkgPT4gKFxuICAgIDw+XG4gICAgICA8TWFpbGNoaW1wU3Vic2NyaWJlXG4gICAgICAgIHVybD17dXJsfVxuICAgICAgICByZW5kZXI9eyh7IHN1YnNjcmliZSwgc3RhdHVzLCBtZXNzYWdlIH0pID0+IChcbiAgICAgICAgICA8Q3VzdG9tRm9ybVxuICAgICAgICAgICAgc3RhdHVzPXtzdGF0dXN9XG4gICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxuICAgICAgICAgICAgcHJpbWFyeT17cHJpbWFyeX1cbiAgICAgICAgICAgIG9uU3VjY2Vzcz17KHN0YXR1cykgPT5cbiAgICAgICAgICAgICAgdHlwZW9mIG9uU3VjY2VzcyA9PT0gXCJmdW5jdGlvblwiICYmIG9uU3VjY2VzcyhzdGF0dXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvblZhbGlkYXRlZD17KGZvcm1EYXRhKSA9PiBzdWJzY3JpYmUoZm9ybURhdGEpfVxuICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Modules/EmailSignup/SignupForm.js\n");

/***/ })

})