/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/masonryFake.js":
/*!**************************************!*\
  !*** ./src/client/js/masonryFake.js ***!
  \**************************************/
/***/ (() => {

eval("console.log(\"masonryFake.js\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var lazyloadImages = document.querySelectorAll(\"img.image__lazy\");\n  var lazyloadThrottleTimeout;\n\n  function lazyload() {\n    if (lazyloadThrottleTimeout) {\n      clearTimeout(lazyloadThrottleTimeout);\n    }\n\n    lazyloadThrottleTimeout = setTimeout(function () {\n      var scrollTop = window.pageYOffset;\n      lazyloadImages.forEach(function (img) {\n        if (img.offsetTop < window.innerHeight + scrollTop) {\n          img.src = img.dataset.src;\n          img.classList.remove('image__lazy');\n        }\n      });\n\n      if (lazyloadImages.length == 0) {\n        document.removeEventListener(\"scroll\", lazyload);\n        window.removeEventListener(\"resize\", lazyload);\n        window.removeEventListener(\"orientationChange\", lazyload);\n      }\n    }, 20);\n  }\n\n  document.addEventListener(\"scroll\", lazyload);\n  window.addEventListener(\"resize\", lazyload);\n  window.addEventListener(\"orientationChange\", lazyload);\n});\n\n//# sourceURL=webpack://project-2021-08-clone-wetube/./src/client/js/masonryFake.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/masonryFake.js"]();
/******/ 	
/******/ })()
;