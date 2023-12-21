webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Modules/EmailSignup/SignupForm.js":
/*!******************************************************!*\
  !*** ./components/Modules/EmailSignup/SignupForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_hutchaa_Projects_makemarks_Driftwell_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _LinkByType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LinkByType */ \"./components/LinkByType/index.js\");\n/* harmony import */ var _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emailsignup.module.scss */ \"./components/Modules/EmailSignup/emailsignup.module.scss\");\n/* harmony import */ var _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-mailchimp-subscribe */ \"./node_modules/react-mailchimp-subscribe/es/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/hutchaa/Projects/makemarks/Driftwell/components/Modules/EmailSignup/SignupForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar url = \"//drinkdriftwell.us7.list-manage.com/subscribe/post?u=821ad106fe946e9900c72ee0c&id=b10194a936\";\n\nvar CustomForm = function CustomForm(_ref) {\n  _s();\n\n  var primary = _ref.primary,\n      status = _ref.status,\n      message = _ref.message,\n      onValidated = _ref.onValidated,\n      onSuccess = _ref.onSuccess;\n  var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true),\n      isValid = _useState[0],\n      setIsValid = _useState[1];\n\n  var usid = primary.usid,\n      headline = primary.headline,\n      description = primary.description,\n      error = primary.error;\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_5__[\"useCookies\"])([\"subbed\"]),\n      _useCookies2 = Object(_Users_hutchaa_Projects_makemarks_Driftwell_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useCookies, 2),\n      cookie = _useCookies2[0],\n      setCookie = _useCookies2[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    var email = emailRef.current;\n\n    if (email && email.value.indexOf(\"@\") > -1) {\n      setIsValid(true);\n      onValidated({\n        EMAIL: email.value\n      });\n    } else {\n      setIsValid(false);\n    }\n\n    e.preventDefault();\n  };\n\n  var handleInputFocus = function handleInputFocus(e) {\n    window.addEventListener(\"keypress\", handleEnter);\n  };\n\n  var handleInputBlur = function handleInputBlur(e) {\n    window.removeEventListener(\"keypress\", handleEnter);\n  };\n\n  var handleEnter = function handleEnter(e) {\n    setIsValid(true);\n\n    if (e.key === \"Enter\") {\n      handleSubmit();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    return function () {\n      window.removeEventListener(\"keypress\", handleInputFocus);\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (status === \"success\") {\n      onSuccess(true);\n      setCookie(\"subbed\", true);\n      setTimeout(function () {\n        document.getElementById(\"signupModal\").style.display = \"none\";\n        document.body.style.overflow = \"visible\";\n      }, 5000);\n    }\n  }, [status]);\n\n  var statusMessage = function statusMessage() {\n    if (!isValid) {\n      return {\n        __html: \"&#9888;&nbsp;Hmm, that's not right. Check your email address.\"\n      };\n    } else if (isValid && status === \"sending\") {\n      return {\n        __html: \"<div>Sending...</div>\"\n      };\n    } else if (isValid && status === \"error\") {\n      return {\n        __html: message\n      };\n    } else if (isValid && status === \"success\") {\n      return {\n        __html: \"Thanks for signing up! Your confirmation email is on the way.\"\n      };\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      dangerouslySetInnerHTML: {\n        __html: headline[0].text\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      dangerouslySetInnerHTML: {\n        __html: description[0].text\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fieldswrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputtextwrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          ref: emailRef,\n          type: \"text\",\n          placeholder: \"enter your email address\",\n          onBlur: handleInputBlur,\n          onFocus: handleInputFocus,\n          \"aria-label\": \"Enter email address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputtextwrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_LinkByType__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          link: {\n            _linkType: \"Link.modal\"\n          },\n          label: \"Sign Up\",\n          style: \"button\",\n          tabIndex: \"0\",\n          \"aria-label\": \"Sign up\",\n          trigger: handleSubmit\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, _this), {\n      error: error\n    }, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _emailsignup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.responseMessage,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        dangerouslySetInnerHTML: statusMessage()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(CustomForm, \"UaBugbqtKaQ/2pZfpFmCtu+x+QE=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_5__[\"useCookies\"]];\n});\n\n_c = CustomForm;\n\nvar SignupForm = function SignupForm(_ref2) {\n  var primary = _ref2.primary,\n      theme = _ref2.theme,\n      _onSuccess = _ref2.onSuccess;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      url: url,\n      render: function render(_ref3) {\n        var subscribe = _ref3.subscribe,\n            status = _ref3.status,\n            message = _ref3.message;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CustomForm, {\n          status: status,\n          message: message,\n          primary: primary,\n          onSuccess: function onSuccess(status) {\n            return typeof _onSuccess === \"function\" && _onSuccess(status);\n          },\n          onValidated: function onValidated(formData) {\n            return subscribe(formData);\n          },\n          theme: theme\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c2 = SignupForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CustomForm\");\n$RefreshReg$(_c2, \"SignupForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2R1bGVzL0VtYWlsU2lnbnVwL1NpZ251cEZvcm0uanM/NTI0NSJdLCJuYW1lcyI6WyJ1cmwiLCJDdXN0b21Gb3JtIiwicHJpbWFyeSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJvblZhbGlkYXRlZCIsIm9uU3VjY2VzcyIsImVtYWlsUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInVzaWQiLCJoZWFkbGluZSIsImRlc2NyaXB0aW9uIiwiZXJyb3IiLCJ1c2VDb29raWVzIiwiY29va2llIiwic2V0Q29va2llIiwiaGFuZGxlU3VibWl0IiwiZSIsImVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwiaW5kZXhPZiIsIkVNQUlMIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dEZvY3VzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUVudGVyIiwiaGFuZGxlSW5wdXRCbHVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsIm92ZXJmbG93Iiwic3RhdHVzTWVzc2FnZSIsIl9faHRtbCIsInRleHQiLCJzdHlsZXMiLCJmaWVsZHN3cmFwcGVyIiwiaW5wdXR0ZXh0d3JhcHBlciIsIl9saW5rVHlwZSIsInJlc3BvbnNlTWVzc2FnZSIsIlNpZ251cEZvcm0iLCJ0aGVtZSIsInN1YnNjcmliZSIsImZvcm1EYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRywrRkFBWjs7QUFHQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF5RDtBQUFBOztBQUFBLE1BQXREQyxPQUFzRCxRQUF0REEsT0FBc0Q7QUFBQSxNQUE3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QUFTLENBQUNDLFFBQUQsQ0FBdkI7QUFBQSxXQVBmO0FBUUUsZUFBSyxFQUFFRjtBQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE07QUFBQTtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFEaUI7QUFBQSxDQUFuQjs7TUFBTUQsVTtBQXFCU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZHVsZXMvRW1haWxTaWdudXAvU2lnbnVwRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rQnlUeXBlIGZyb20gXCIuLi8uLi9MaW5rQnlUeXBlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2VtYWlsc2lnbnVwLm1vZHVsZS5zY3NzXCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiXG5pbXBvcnQgTWFpbGNoaW1wU3Vic2NyaWJlIGZyb20gXCJyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlXCJcblxuY29uc3QgdXJsID0gXCIvL2RyaW5rZHJpZnR3ZWxsLnVzNy5saXN0LW1hbmFnZS5jb20vc3Vic2NyaWJlL3Bvc3Q/dT04MjFhZDEwNmZlOTQ2ZTk5MDBjNzJlZTBjJmlkPWIxMDE5NGE5MzZcIjtcblxuXG5jb25zdCBDdXN0b21Gb3JtID0gKHsgcHJpbWFyeSwgc3RhdHVzLCBtZXNzYWdlLCBvblZhbGlkYXRlZCwgb25TdWNjZXNzfSkgPT4ge1xuXG4gIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtpc1ZhbGlkLCBzZXRJc1ZhbGlkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB7dXNpZCwgaGVhZGxpbmUsIGRlc2NyaXB0aW9uLCBlcnJvcn0gPSBwcmltYXJ5XG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFtcInN1YmJlZFwiXSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGVtYWlsID0gZW1haWxSZWYuY3VycmVudDtcbiAgICBpZiAoZW1haWwgJiYgZW1haWwudmFsdWUuaW5kZXhPZihcIkBcIikgPiAtMSkge1xuICAgICAgc2V0SXNWYWxpZCh0cnVlKTtcbiAgICAgIG9uVmFsaWRhdGVkKHtcbiAgICAgICAgRU1BSUw6IGVtYWlsLnZhbHVlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzVmFsaWQoZmFsc2UpO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBoYW5kbGVFbnRlcik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGhhbmRsZUVudGVyKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbnRlciA9IChlKSA9PiB7XG4gICAgc2V0SXNWYWxpZCh0cnVlKTtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgaGFuZGxlU3VibWl0KCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgaGFuZGxlSW5wdXRGb2N1cyk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgIG9uU3VjY2Vzcyh0cnVlKTtcbiAgICAgIHNldENvb2tpZShcInN1YmJlZFwiLCB0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbnVwTW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIlxuICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICB9LCBbc3RhdHVzXSk7XG5cbiAgY29uc3Qgc3RhdHVzTWVzc2FnZSA9ICgpID0+IHtcbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIF9faHRtbDpcbiAgICAgICAgICBcIiYjOTg4ODsmbmJzcDtIbW0sIHRoYXQncyBub3QgcmlnaHQuIENoZWNrIHlvdXIgZW1haWwgYWRkcmVzcy5cIixcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkICYmIHN0YXR1cyA9PT0gXCJzZW5kaW5nXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIF9faHRtbDogXCI8ZGl2PlNlbmRpbmcuLi48L2Rpdj5cIixcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkICYmIHN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XG4gICAgICByZXR1cm4geyBfX2h0bWw6IG1lc3NhZ2UgfTtcbiAgICB9IGVsc2UgaWYgKGlzVmFsaWQgJiYgc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgcmV0dXJuIHsgX19odG1sOiBcIlRoYW5rcyBmb3Igc2lnbmluZyB1cCEgWW91ciBjb25maXJtYXRpb24gZW1haWwgaXMgb24gdGhlIHdheS5cIiB9O1xuICAgIH1cbiAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6aGVhZGxpbmVbMF0udGV4dH19ID48L2gyPlxuICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6ZGVzY3JpcHRpb25bMF0udGV4dH19ID48L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkc3dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR0ZXh0d3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWY9e2VtYWlsUmVmfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVJbnB1dEJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbnRlciBlbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR0ZXh0d3JhcHBlcn0+XG5cbiAgICAgICAgICAgICAgICA8TGlua0J5VHlwZVxuICAgICAgICAgICAgICAgICAgICBsaW5rPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbGlua1R5cGU6IFwiTGluay5tb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17XCJTaWduIFVwXCJ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNpZ24gdXBcIlxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt7ZXJyb3J9fVxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucmVzcG9uc2VNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3N0YXR1c01lc3NhZ2UoKX0gPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBjb25zdCBTaWdudXBGb3JtID0gKHsgcHJpbWFyeSx0aGVtZSwgb25TdWNjZXNzIH0pID0+IChcbiAgICA8PlxuICAgICAgPE1haWxjaGltcFN1YnNjcmliZVxuICAgICAgICB1cmw9e3VybH1cbiAgICAgICAgcmVuZGVyPXsoeyBzdWJzY3JpYmUsIHN0YXR1cywgbWVzc2FnZSB9KSA9PiAoXG4gICAgICAgICAgPEN1c3RvbUZvcm1cbiAgICAgICAgICAgIHN0YXR1cz17c3RhdHVzfVxuICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgICAgICAgIHByaW1hcnk9e3ByaW1hcnl9XG4gICAgICAgICAgICBvblN1Y2Nlc3M9eyhzdGF0dXMpID0+XG4gICAgICAgICAgICAgIHR5cGVvZiBvblN1Y2Nlc3MgPT09IFwiZnVuY3Rpb25cIiAmJiBvblN1Y2Nlc3Moc3RhdHVzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25WYWxpZGF0ZWQ9eyhmb3JtRGF0YSkgPT4gc3Vic2NyaWJlKGZvcm1EYXRhKX1cbiAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcblxuXG4gIGV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Modules/EmailSignup/SignupForm.js\n");

/***/ })

})