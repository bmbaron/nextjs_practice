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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component1\": function() { return /* binding */ Component1; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/UserContext */ \"./contexts/UserContext.ts\");\n/* harmony import */ var _contexts_ToggleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ToggleContext */ \"./contexts/ToggleContext.ts\");\n/* harmony import */ var _components_elements_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/elements/Button */ \"./components/elements/Button.tsx\");\n/* harmony import */ var _components_elements_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/elements/Container */ \"./components/elements/Container.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Component1 = ()=>{\n    _s();\n    const { setToggleComponent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ToggleContext__WEBPACK_IMPORTED_MODULE_3__.ToggleContext);\n    const { secretWord  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const [showSecret, setShowSecret] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_Container__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                bg: \"salmon\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"hello\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This is the first component. It's red.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                primary: false,\n                                onClick: ()=>setShowSecret((prev)=>!prev),\n                                children: \"click to show secret\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 6\n                            }, undefined),\n                            showSecret && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: secretWord\n                            }, void 0, false, {\n                                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                primary: true,\n                onClick: ()=>{\n                    setToggleComponent(false);\n                },\n                children: \"change component\"\n            }, void 0, false, {\n                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component1.tsx\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Component1, \"E9KFIxYU8yxu2B5thJZ9Q6BWPn8=\");\n_c = Component1;\nvar _c;\n$RefreshReg$(_c, \"Component1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudDEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOztBQUFvRDtBQUNDO0FBQ0k7QUFDSDtBQUNNO0FBRXJELE1BQU1PLGFBQWEsSUFBTTs7SUFFL0IsTUFBTSxFQUFFQyxtQkFBa0IsRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0csa0VBQWFBO0lBQ3ZELE1BQU0sRUFBRUssV0FBVSxFQUFFLEdBQUdSLGlEQUFVQSxDQUFDRSw4REFBV0E7SUFFN0MsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFVLEtBQUs7SUFFM0QscUJBQ0M7OzBCQUNDLDhEQUFDSSxxRUFBU0E7Z0JBQUNNLElBQUc7O2tDQUNiLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQzs7MENBQ0EsOERBQUNWLCtEQUFNQTtnQ0FDTlcsU0FBUyxLQUFLO2dDQUNkQyxTQUFTLElBQU1OLGNBQWNPLENBQUFBLE9BQVEsQ0FBQ0E7MENBQ3RDOzs7Ozs7NEJBQ0FSLDRCQUFjLDhEQUFDSTswQ0FBR0w7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHckIsOERBQUNKLCtEQUFNQTtnQkFDTlcsU0FBUyxJQUFJO2dCQUNiQyxTQUFTLElBQU07b0JBQ2RULG1CQUFtQixLQUFLO2dCQUN6QjswQkFDQTs7Ozs7Ozs7QUFJSixFQUFDO0dBN0JZRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbXBvbmVudDEudHN4PzE0YTMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1VzZXJDb250ZXh0J1xuaW1wb3J0IHsgVG9nZ2xlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1RvZ2dsZUNvbnRleHQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2VsZW1lbnRzL0J1dHRvbidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvZWxlbWVudHMvQ29udGFpbmVyJ1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50MSA9ICgpID0+IHtcblxuXHRjb25zdCB7IHNldFRvZ2dsZUNvbXBvbmVudCB9ID0gdXNlQ29udGV4dChUb2dnbGVDb250ZXh0KVxuXHRjb25zdCB7IHNlY3JldFdvcmQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG5cblx0Y29uc3QgW3Nob3dTZWNyZXQsIHNldFNob3dTZWNyZXRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PENvbnRhaW5lciBiZz0nc2FsbW9uJz5cblx0XHRcdFx0PGgxPmhlbGxvPC9oMT5cblx0XHRcdFx0PHA+VGhpcyBpcyB0aGUgZmlyc3QgY29tcG9uZW50LiBJdCZhcG9zO3MgcmVkLjwvcD5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRwcmltYXJ5PXtmYWxzZX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFNob3dTZWNyZXQocHJldiA9PiAhcHJldil9XG5cdFx0XHRcdFx0PmNsaWNrIHRvIHNob3cgc2VjcmV0PC9CdXR0b24+XG5cdFx0XHRcdFx0e3Nob3dTZWNyZXQgJiYgPHA+e3NlY3JldFdvcmR9PC9wPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0cHJpbWFyeT17dHJ1ZX1cblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdHNldFRvZ2dsZUNvbXBvbmVudChmYWxzZSlcblx0XHRcdFx0fX1cblx0XHRcdD5jaGFuZ2UgY29tcG9uZW50XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8Lz5cblx0KVxufVxuXG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJVc2VyQ29udGV4dCIsIlRvZ2dsZUNvbnRleHQiLCJCdXR0b24iLCJDb250YWluZXIiLCJDb21wb25lbnQxIiwic2V0VG9nZ2xlQ29tcG9uZW50Iiwic2VjcmV0V29yZCIsInNob3dTZWNyZXQiLCJzZXRTaG93U2VjcmV0IiwiYmciLCJoMSIsInAiLCJkaXYiLCJwcmltYXJ5Iiwib25DbGljayIsInByZXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Component1.tsx\n"));

/***/ })

});