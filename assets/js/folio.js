/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/controls.js":
/*!***********************************!*\
  !*** ./src/client/js/controls.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Controls = [\"control-DisplayNone\", \"control-font600\"];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controls);\n\n//# sourceURL=webpack://project-2021-08-clone-wetube/./src/client/js/controls.js?");

/***/ }),

/***/ "./src/client/js/folio.js":
/*!********************************!*\
  !*** ./src/client/js/folio.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ \"./src/client/js/controls.js\");\nconsole.log(\"folio.js\");\n\nvar uploadForm = document.querySelector(\".folio__imageUpload\");\nvar uploadBtn = document.querySelector(\".imageUploadBtn\");\nvar uploadTarget = document.querySelector(\".imageUploadTarget\");\nvar uploadSubmit = document.querySelector(\".imageUploadSubmit\");\nvar uploadCacnel = document.querySelector(\".imageUploadCancel\");\n\nvar handleUpload = function handleUpload(id) {\n  switch (id) {\n    case \"upload\":\n      uploadBtn.classList.add(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      uploadForm.classList.remove(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      break;\n\n    case \"submit\":\n      uploadBtn.classList.remove(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      uploadForm.classList.add(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      break;\n\n    case \"cancel\":\n      uploadBtn.classList.remove(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      uploadForm.classList.add(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      break;\n  }\n};\n\nvar uploadBtnFunc = function uploadBtnFunc(event) {\n  event.preventDefault();\n  var id = \"upload\";\n  handleUpload(id);\n};\n\nvar uploadSubmitFunc = function uploadSubmitFunc(event) {\n  var id = \"submit\";\n  handleUpload(id);\n};\n\nvar uploadCacnelFunc = function uploadCacnelFunc(event) {\n  event.preventDefault();\n  var id = \"cancel\";\n  handleUpload(id);\n};\n\nuploadBtn.addEventListener(\"click\", uploadBtnFunc);\nuploadSubmit.addEventListener(\"click\", uploadSubmitFunc);\nuploadCacnel.addEventListener(\"click\", uploadCacnelFunc);\n\n//# sourceURL=webpack://project-2021-08-clone-wetube/./src/client/js/folio.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/js/folio.js");
/******/ 	
/******/ })()
;