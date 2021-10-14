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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Controls = [\"control__display-none\", \"font-600\"];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controls);\n\n//# sourceURL=webpack://project-2021-08-clone-wetube/./src/client/js/controls.js?");

/***/ }),

/***/ "./src/client/js/profile.js":
/*!**********************************!*\
  !*** ./src/client/js/profile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ \"./src/client/js/controls.js\");\nconsole.log(\"profile.js\");\n\nvar description = document.querySelector(\".dsecript__value\");\nvar modifyDescription = document.querySelector(\".descript__modifyValue\");\nvar modifyForm = document.querySelector(\".dscript__modifyDiv\");\nvar modifyBtn = document.querySelector(\".descript__modify\");\nvar modifySubmit = document.querySelector(\".descript__modifySubmit\");\nvar modfiyCancel = document.querySelector(\".descript__modifyCanccel\");\nvar form = document.querySelector(\".form__content\");\n\nvar handleModify = function handleModify(id) {\n  switch (id) {\n    case \"Button\":\n      modifyDescription.value = null;\n      description.classList.add(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      modifyBtn.classList.add(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      modifyForm.classList.remove(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      return;\n\n    case \"Cancel\":\n      modifyDescription.value = null;\n      description.classList.remove(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      modifyBtn.classList.remove(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      modifyForm.classList.add(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      return;\n\n    case \"Submit\":\n      description.classList.remove(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      modifyBtn.classList.remove(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      modifyForm.classList.add(_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]);\n      return;\n\n    default:\n      return;\n  }\n};\n\nvar modifyBtnFunc = function modifyBtnFunc(event) {\n  event.preventDefault();\n  var id = \"Button\";\n  handleModify(id);\n};\n\nvar modifySubmitFunc = function modifySubmitFunc(event) {\n  var id = \"Submit\";\n  handleModify(id);\n};\n\nvar modifyCancelFunc = function modifyCancelFunc(event) {\n  event.preventDefault();\n  var id = \"Cancel\";\n  handleModify(id);\n};\n\nvar shortcutKey = function shortcutKey(event) {\n  switch (event.key) {\n    case \"Enter\":\n      form.submit();\n      return;\n\n    default:\n      return;\n  }\n};\n\nmodifyBtn.addEventListener(\"click\", modifyBtnFunc);\nmodifySubmit.addEventListener(\"click\", modifySubmitFunc);\nmodfiyCancel.addEventListener(\"click\", modifySubmitFunc);\ndocument.addEventListener(\"keydown\", shortcutKey);\n\n//# sourceURL=webpack://project-2021-08-clone-wetube/./src/client/js/profile.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/js/profile.js");
/******/ 	
/******/ })()
;