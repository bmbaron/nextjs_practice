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

/***/ "./components/Component1.tsx":
/*!***********************************!*\
  !*** ./components/Component1.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component1\": function() { return /* binding */ Component1; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/UserContext */ \"./contexts/UserContext.ts\");\n/* harmony import */ var _contexts_ToggleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ToggleContext */ \"./contexts/ToggleContext.ts\");\n/* harmony import */ var _components_elements_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/elements/Button */ \"./components/elements/Button.tsx\");\n/* harmony import */ var _components_elements_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/elements/Container */ \"./components/elements/Container.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Component1 = ()=>{\n    _s();\n    const { secretWord  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const { setToggleComponent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ToggleContext__WEBPACK_IMPORTED_MODULE_3__.ToggleContext);\n    const [showSecret, setShowSecret] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_Container__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                bg: \"salmon\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"View Secret\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                primary: false,\n                                onClick: ()=>setShowSecret((prev)=>!prev),\n                                children: [\n                                    \"click to \",\n                                    showSecret ? \"hide\" : \"show\",\n                                    \" secret\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 6\n                            }, undefined),\n                            showSecret && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: secretWord\n                            }, void 0, false, {\n                                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                primary: true,\n                onClick: ()=>{\n                    setToggleComponent(false);\n                },\n                children: [\n                    \"go to \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"edit secret\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Component1, \"MlfHMSWl15gq33nRqrKqEM/S/L4=\");\n_c = Component1;\nvar _c;\n$RefreshReg$(_c, \"Component1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudDEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOztBQUFvRDtBQUNDO0FBQ0k7QUFDSDtBQUNNO0FBRXJELE1BQU1PLGFBQWEsSUFBTTs7SUFFL0IsTUFBTSxFQUFFQyxXQUFVLEVBQUUsR0FBR1AsaURBQVVBLENBQUNFLDhEQUFXQTtJQUM3QyxNQUFNLEVBQUVNLG1CQUFrQixFQUFFLEdBQUdSLGlEQUFVQSxDQUFDRyxrRUFBYUE7SUFFdkQsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFVLEtBQUs7SUFFM0QscUJBQ0M7OzBCQUNDLDhEQUFDSSxxRUFBU0E7Z0JBQUNNLElBQUc7O2tDQUNiLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBSUMsT0FBTzs0QkFBQ0MsU0FBUzt3QkFBTTs7MENBQzNCLDhEQUFDWCwrREFBTUE7Z0NBQ05ZLFNBQVMsS0FBSztnQ0FDZEMsU0FBUyxJQUFNUCxjQUFjUSxDQUFBQSxPQUFRLENBQUNBOztvQ0FDdEM7b0NBQVVULGFBQWEsU0FBUyxNQUFNO29DQUFDOzs7Ozs7OzRCQUN2Q0EsNEJBQWMsOERBQUNVOzBDQUFHWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdyQiw4REFBQ0gsK0RBQU1BO2dCQUNOWSxTQUFTLElBQUk7Z0JBQ2JDLFNBQVMsSUFBTTtvQkFDZFQsbUJBQW1CLEtBQUs7Z0JBQ3pCOztvQkFDQTtrQ0FBTSw4REFBQ1k7a0NBQU87Ozs7Ozs7Ozs7Ozs7O0FBSWxCLEVBQUM7R0E1QllkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tcG9uZW50MS50c3g/MTRhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvVXNlckNvbnRleHQnXG5pbXBvcnQgeyBUb2dnbGVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvVG9nZ2xlQ29udGV4dCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvZWxlbWVudHMvQnV0dG9uJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9lbGVtZW50cy9Db250YWluZXInXG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnQxID0gKCkgPT4ge1xuXG5cdGNvbnN0IHsgc2VjcmV0V29yZCB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcblx0Y29uc3QgeyBzZXRUb2dnbGVDb21wb25lbnQgfSA9IHVzZUNvbnRleHQoVG9nZ2xlQ29udGV4dClcblxuXHRjb25zdCBbc2hvd1NlY3JldCwgc2V0U2hvd1NlY3JldF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Q29udGFpbmVyIGJnPSdzYWxtb24nPlxuXHRcdFx0XHQ8aDE+VmlldyBTZWNyZXQ8L2gxPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0cHJpbWFyeT17ZmFsc2V9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRTaG93U2VjcmV0KHByZXYgPT4gIXByZXYpfVxuXHRcdFx0XHRcdD5jbGljayB0byB7c2hvd1NlY3JldCA/ICdoaWRlJyA6ICdzaG93J30gc2VjcmV0PC9CdXR0b24+XG5cdFx0XHRcdFx0e3Nob3dTZWNyZXQgJiYgPHA+e3NlY3JldFdvcmR9PC9wPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0cHJpbWFyeT17dHJ1ZX1cblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdHNldFRvZ2dsZUNvbXBvbmVudChmYWxzZSlcblx0XHRcdFx0fX1cblx0XHRcdD5nbyB0byA8c3Ryb25nPmVkaXQgc2VjcmV0PC9zdHJvbmc+XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8Lz5cblx0KVxufVxuXG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJVc2VyQ29udGV4dCIsIlRvZ2dsZUNvbnRleHQiLCJCdXR0b24iLCJDb250YWluZXIiLCJDb21wb25lbnQxIiwic2VjcmV0V29yZCIsInNldFRvZ2dsZUNvbXBvbmVudCIsInNob3dTZWNyZXQiLCJzZXRTaG93U2VjcmV0IiwiYmciLCJoMSIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsInByaW1hcnkiLCJvbkNsaWNrIiwicHJldiIsInAiLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Component1.tsx\n"));

/***/ })

});