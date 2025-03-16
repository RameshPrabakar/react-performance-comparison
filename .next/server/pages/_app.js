/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/reportWebVitals.js":
/*!********************************!*\
  !*** ./lib/reportWebVitals.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals)\n/* harmony export */ });\nconst reportWebVitals = ({ id, name, label, value })=>{\n    // In a real app, send to analytics service\n    if (false) {}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVwb3J0V2ViVml0YWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxrQkFBa0IsQ0FBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUU7SUFDdEQsMkNBQTJDO0lBQzNDLElBQUlDLEtBQXlCLEVBQWMsRUFTMUM7QUFDSCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcGVyZm9ybWFuY2UtY29tcGFyaXNvbi8uL2xpYi9yZXBvcnRXZWJWaXRhbHMuanM/YzNmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gKHsgaWQsIG5hbWUsIGxhYmVsLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAvLyBJbiBhIHJlYWwgYXBwLCBzZW5kIHRvIGFuYWx5dGljcyBzZXJ2aWNlXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgICAgbWV0cmljOiB7XHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9OyJdLCJuYW1lcyI6WyJyZXBvcnRXZWJWaXRhbHMiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwicHJvY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRyaWMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/reportWebVitals.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_reportWebVitals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/reportWebVitals */ \"./lib/reportWebVitals.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Remove server-side injected CSS when using Material UI or other CSS-in-JS libraries\n        const jssStyles = document.querySelector(\"#jss-server-side\");\n        if (jssStyles) {\n            jssStyles.parentElement.removeChild(jssStyles);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\suvet\\\\Documents\\\\Projects\\\\react-performance-comparison\\\\pages\\\\_app.js\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, this);\n}\n// Only report web vitals in production\nfunction reportWebVitals(metric) {\n    (0,_lib_reportWebVitals__WEBPACK_IMPORTED_MODULE_2__.reportWebVitals)(metric);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDdUM7QUFDMUM7QUFFL0IsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQ0wsZ0RBQVNBLENBQUM7UUFDUixzRkFBc0Y7UUFDdEYsTUFBTU0sWUFBWUMsU0FBU0MsYUFBYSxDQUFDO1FBQ3pDLElBQUlGLFdBQVc7WUFDYkEsVUFBVUcsYUFBYSxDQUFDQyxXQUFXLENBQUNKO1FBQ3RDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNGO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDO0FBRUEsdUNBQXVDO0FBQ2hDLFNBQVNKLGdCQUFnQlUsTUFBTTtJQUNwQ1QscUVBQVlBLENBQUNTO0FBQ2Y7QUFFQSxpRUFBZVIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXBlcmZvcm1hbmNlLWNvbXBhcmlzb24vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZXBvcnRXZWJWaXRhbHMgYXMgcmVwb3J0TWV0cmljIH0gZnJvbSAnLi4vbGliL3JlcG9ydFdlYlZpdGFscyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTIHdoZW4gdXNpbmcgTWF0ZXJpYWwgVUkgb3Igb3RoZXIgQ1NTLWluLUpTIGxpYnJhcmllc1xyXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xyXG4gICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbn1cclxuXHJcbi8vIE9ubHkgcmVwb3J0IHdlYiB2aXRhbHMgaW4gcHJvZHVjdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0V2ViVml0YWxzKG1ldHJpYykge1xyXG4gIHJlcG9ydE1ldHJpYyhtZXRyaWMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwicmVwb3J0V2ViVml0YWxzIiwicmVwb3J0TWV0cmljIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJtZXRyaWMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();