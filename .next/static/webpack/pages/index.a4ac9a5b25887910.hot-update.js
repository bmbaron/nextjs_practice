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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_ToggleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ToggleContext */ \"./contexts/ToggleContext.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Component1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Component1 */ \"./components/Component1.tsx\");\n/* harmony import */ var _components_Component2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Component2 */ \"./components/Component2.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [toggleComponent, setToggleComponent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ToggleContext__WEBPACK_IMPORTED_MODULE_1__.ToggleContext.Provider, {\n            value: {\n                toggleComponent,\n                setToggleComponent\n            },\n            children: toggleComponent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Component1__WEBPACK_IMPORTED_MODULE_3__.Component1, {}, void 0, false, {\n                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 28\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Component2__WEBPACK_IMPORTED_MODULE_4__.Component2, {}, void 0, false, {\n                fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 45\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/pages/index.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/bmbaron/Documents/reactplus/nextjs_practice/pages/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"e+qCpbkNSM2PsSvuBtLMsT2LnLI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE4QztBQUNXO0FBQ2xCO0FBQ2M7QUFDQTtBQUV0QyxTQUFTTSxPQUFPOztJQUU3QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUVMLCtDQUFRQSxDQUFVLElBQUk7SUFDbkUsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQTtJQUUxQyxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBV1osMEVBQWdCO2tCQUU5Qiw0RUFBQ0MsMkVBQXNCO1lBQUNjLE9BQU87Z0JBQUNSO2dCQUFpQkM7WUFBa0I7c0JBQ2hFRCxnQ0FBa0IsOERBQUNILDhEQUFVQTs7OztxQ0FBTSw4REFBQ0MsOERBQVVBOzs7O29CQUFHOzs7Ozs7Ozs7OztBQUkxRCxDQUFDO0dBYnVCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBUb2dnbGVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvVG9nZ2xlQ29udGV4dCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29tcG9uZW50MSB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50MSdcbmltcG9ydCB7IENvbXBvbmVudDIgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBvbmVudDInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW3RvZ2dsZUNvbXBvbmVudCwgc2V0VG9nZ2xlQ29tcG9uZW50XT0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblxuICAgICAgPFRvZ2dsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t0b2dnbGVDb21wb25lbnQsIHNldFRvZ2dsZUNvbXBvbmVudH19PlxuICAgICAgICB7dG9nZ2xlQ29tcG9uZW50ID8gPENvbXBvbmVudDEgLz4gOiA8Q29tcG9uZW50MiAvPn1cbiAgICAgIDwvVG9nZ2xlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlRvZ2dsZUNvbnRleHQiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29tcG9uZW50MSIsIkNvbXBvbmVudDIiLCJIb21lIiwidG9nZ2xlQ29tcG9uZW50Iiwic2V0VG9nZ2xlQ29tcG9uZW50Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});