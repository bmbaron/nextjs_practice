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

/***/ "./components/Component2.tsx":
/*!***********************************!*\
  !*** ./components/Component2.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component2\": function() { return /* binding */ Component2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ToggleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ToggleContext */ \"./contexts/ToggleContext.ts\");\n/* harmony import */ var _elements_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/Button */ \"./components/elements/Button.tsx\");\n/* harmony import */ var _elements_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/Container */ \"./components/elements/Container.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Component2 = ()=>{\n    _s();\n    const { setToggleComponent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ToggleContext__WEBPACK_IMPORTED_MODULE_2__.ToggleContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                bg: \"blue\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"goodbye\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component2.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This is the second component. It's blue.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component2.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component2.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                primary: false,\n                onClick: ()=>{\n                    setToggleComponent(true);\n                },\n                children: \"change component\"\n            }, void 0, false, {\n                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/components/Component2.tsx\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Component2, \"dfkhVenSqnDUa45rBntLCKJFSA8=\");\n_c = Component2;\nvar _c;\n$RefreshReg$(_c, \"Component2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbXBvbmVudDIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBDO0FBQ2dCO0FBQ2Y7QUFDTTtBQUUxQyxNQUFNSyxhQUFhLElBQU07O0lBQy9CLE1BQU0sRUFBRUMsbUJBQWtCLEVBQUUsR0FBR0wsaURBQVVBLENBQUNDLGtFQUFhQTtJQUV0RCxxQkFDQzs7MEJBQ0EsOERBQUNFLDBEQUFTQTtnQkFBQ0csSUFBRzs7a0NBQ2IsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBRUosOERBQUNOLG9EQUFNQTtnQkFDTk8sU0FBUyxLQUFLO2dCQUNkQyxTQUFTLElBQU07b0JBQ2RMLG1CQUFtQixJQUFJO2dCQUN4QjswQkFDQTs7Ozs7Ozs7QUFJSixFQUFFO0dBbEJXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbXBvbmVudDIudHN4Pzc3ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUb2dnbGVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvVG9nZ2xlQ29udGV4dCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2VsZW1lbnRzL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnQyID0gKCkgPT4ge1xuXHRjb25zdCB7IHNldFRvZ2dsZUNvbXBvbmVudCB9ID0gdXNlQ29udGV4dChUb2dnbGVDb250ZXh0KVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHQ8Q29udGFpbmVyIGJnPSdibHVlJz5cblx0XHRcdFx0PGgxPmdvb2RieWU8L2gxPlxuXHRcdFx0XHQ8cD5UaGlzIGlzIHRoZSBzZWNvbmQgY29tcG9uZW50LiBJdCZhcG9zO3MgYmx1ZS48L3A+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0cHJpbWFyeT17ZmFsc2V9XG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRzZXRUb2dnbGVDb21wb25lbnQodHJ1ZSlcblx0XHRcdFx0fX1cblx0XHRcdD5jaGFuZ2UgY29tcG9uZW50XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8Lz5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiVG9nZ2xlQ29udGV4dCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkNvbXBvbmVudDIiLCJzZXRUb2dnbGVDb21wb25lbnQiLCJiZyIsImgxIiwicCIsInByaW1hcnkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Component2.tsx\n"));

/***/ })

});