"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_TestContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/TestContext */ \"./contexts/TestContext.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Component1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Component1 */ \"./components/Component1.tsx\");\n/* harmony import */ var _components_Component2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Component2 */ \"./components/Component2.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [toggleComponent, setToggleComponent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_TestContext__WEBPACK_IMPORTED_MODULE_1__.TestContext.Provider, {\n            value: {\n                setToggleComponent\n            },\n            children: toggleComponent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Component1__WEBPACK_IMPORTED_MODULE_3__.Component1, {}, void 0, false, {\n                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 28\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Component2__WEBPACK_IMPORTED_MODULE_4__.Component2, {}, void 0, false, {\n                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 45\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/pages/index.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/pages/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"bm5GNK8DIb1j/5F/YWeAFUXmmzU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUU4QztBQUNPO0FBQ2Q7QUFDYztBQUNBO0FBRXRDLFNBQVNNLE9BQU87O0lBRTdCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBRUwsK0NBQVFBLENBQUMsSUFBSTtJQUUxRCxxQkFDRSw4REFBQ007UUFBSUMsV0FBV1YsMEVBQWdCO2tCQUM5Qiw0RUFBQ0MsdUVBQW9CO1lBQUNZLE9BQU87Z0JBQUNMO1lBQWtCO3NCQUM3Q0QsZ0NBQWtCLDhEQUFDSCw4REFBVUE7Ozs7cUNBQU0sOERBQUNDLDhEQUFVQTs7OztvQkFBRzs7Ozs7Ozs7Ozs7QUFJMUQsQ0FBQztHQVh1QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBUZXN0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1Rlc3RDb250ZXh0J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb21wb25lbnQxIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wb25lbnQxJ1xuaW1wb3J0IHsgQ29tcG9uZW50MiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50MidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbdG9nZ2xlQ29tcG9uZW50LCBzZXRUb2dnbGVDb21wb25lbnRdPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPFRlc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2V0VG9nZ2xlQ29tcG9uZW50fX0+XG4gICAgICAgIHt0b2dnbGVDb21wb25lbnQgPyA8Q29tcG9uZW50MSAvPiA6IDxDb21wb25lbnQyIC8+fVxuICAgICAgPC9UZXN0Q29udGV4dC5Qcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlRlc3RDb250ZXh0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbXBvbmVudDEiLCJDb21wb25lbnQyIiwiSG9tZSIsInRvZ2dsZUNvbXBvbmVudCIsInNldFRvZ2dsZUNvbXBvbmVudCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});