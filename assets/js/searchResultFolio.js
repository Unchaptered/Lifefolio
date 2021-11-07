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

/***/ "./src/client/js/searchResultFolio.js":
/*!********************************************!*\
  !*** ./src/client/js/searchResultFolio.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ \"./src/client/js/controls.js\");\nconsole.log(\"searchResultIage.js\");\n\nvar searchTargetFolio = document.querySelector(\"#search__targetFolio\");\nvar columnBtn1 = document.querySelector(\"#viewMode__1\");\nvar columnBtn2 = document.querySelector(\"#viewMode__2\");\nvar columnBtn3 = document.querySelector(\"#viewMode__3\");\nvar columnBtn4 = document.querySelector(\"#viewMode__4\");\nvar columnBtn5 = document.querySelector(\"#viewMode__5\");\nvar columnBtn6 = document.querySelector(\"#viewMode__6\");\nvar columnName = [\"column1\", \"column2\", \"column3\", \"column4\", \"column5\", \"column6\"];\n\nvar keyController = function keyController(event) {\n  console.log(\"Folio View Mode\");\n\n  switch (event.target.id) {\n    case \"viewMode__1\":\n      searchTargetFolio.className = columnName[0];\n      break;\n\n    case \"viewMode__2\":\n      searchTargetFolio.className = columnName[1];\n      break;\n\n    case \"viewMode__3\":\n      searchTargetFolio.className = columnName[2];\n      break;\n\n    case \"viewMode__4\":\n      searchTargetFolio.className = columnName[3];\n      break;\n\n    case \"viewMode__5\":\n      searchTargetFolio.className = columnName[4];\n      break;\n\n    case \"viewMode__6\":\n      searchTargetFolio.className = columnName[5];\n      break;\n\n    default:\n      break;\n  }\n\n  ;\n  return;\n};\n\ncolumnBtn1.addEventListener(\"click\", keyController);\ncolumnBtn2.addEventListener(\"click\", keyController);\ncolumnBtn3.addEventListener(\"click\", keyController);\ncolumnBtn4.addEventListener(\"click\", keyController);\ncolumnBtn5.addEventListener(\"click\", keyController);\ncolumnBtn6.addEventListener(\"click\", keyController);\n\n//# sourceURL=webpack://project-2021-08-clone-wetube/./src/client/js/searchResultFolio.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/js/searchResultFolio.js");
/******/ 	
/******/ })()
;