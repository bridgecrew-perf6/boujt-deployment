"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./src/components/AdminPanel.tsx":
/*!***************************************!*\
  !*** ./src/components/AdminPanel.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AdminPanel\": function() { return /* binding */ AdminPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth */ \"./src/auth/auth.tsx\");\n/* harmony import */ var _ProfileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileMenu */ \"./src/components/ProfileMenu.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AdminPanel = function() {\n    _s();\n    var ref = (0,_auth_auth__WEBPACK_IMPORTED_MODULE_2__.useStrapi)(), strapi = ref.strapi, user = ref.user;\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileMenu__WEBPACK_IMPORTED_MODULE_3__.ProfileMenu, {\n                name: user === null || user === void 0 ? void 0 : user.first_name\n            }, void 0, false, {\n                fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/src/components/AdminPanel.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/src/components/AdminPanel.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(AdminPanel, \"YfnpgluLURWoaxJCGoD8zOrm8nc=\", false, function() {\n    return [\n        _auth_auth__WEBPACK_IMPORTED_MODULE_2__.useStrapi\n    ];\n});\n_c = AdminPanel;\nvar _c;\n$RefreshReg$(_c, \"AdminPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZG1pblBhbmVsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNtQjtBQUNsQjtBQUNHOztBQUVyQyxJQUFNSSxVQUFVLEdBQWEsV0FBTTs7SUFDeEMsSUFBeUJGLEdBQVcsR0FBWEEscURBQVMsRUFBRSxFQUE1QkcsTUFBTSxHQUFXSCxHQUFXLENBQTVCRyxNQUFNLEVBQUVDLElBQUksR0FBS0osR0FBVyxDQUFwQkksSUFBSTtJQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDO0lBQ2xCLHFCQUNFO2tCQUNFLDRFQUFDTixrREFBSTtzQkFDSCw0RUFBQ0cscURBQVc7Z0JBQUNNLElBQUksRUFBRUgsSUFBSSxhQUFKQSxJQUFJLFdBQVksR0FBaEJBLEtBQUFBLENBQWdCLEdBQWhCQSxJQUFJLENBQUVJLFVBQVU7Ozs7O3FCQUFJOzs7OztpQkFDbEM7cUJBQ04sQ0FDSDtDQUNILENBQUM7R0FWV04sVUFBVTs7UUFDSUYsaURBQVM7OztBQUR2QkUsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BZG1pblBhbmVsLnRzeD8yZjc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RyYXBpIH0gZnJvbSBcIi4uL2F1dGgvYXV0aFwiO1xuaW1wb3J0IHsgUHJvZmlsZU1lbnUgfSBmcm9tIFwiLi9Qcm9maWxlTWVudVwiO1xuXG5leHBvcnQgY29uc3QgQWRtaW5QYW5lbDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RyYXBpLCB1c2VyIH0gPSB1c2VTdHJhcGkoKTtcbiAgY29uc29sZS5sb2codXNlcik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4PlxuICAgICAgICA8UHJvZmlsZU1lbnUgbmFtZT17dXNlcj8uZmlyc3RfbmFtZX0gLz5cbiAgICAgIDwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiRmxleCIsIlJlYWN0IiwidXNlU3RyYXBpIiwiUHJvZmlsZU1lbnUiLCJBZG1pblBhbmVsIiwic3RyYXBpIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiZmlyc3RfbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AdminPanel.tsx\n");

/***/ })

});