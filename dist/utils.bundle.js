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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"favicon\": () => (/* binding */ favicon),\n/* harmony export */   \"displayYear\": () => (/* binding */ displayYear),\n/* harmony export */   \"disableInput\": () => (/* binding */ disableInput),\n/* harmony export */   \"undisableInput\": () => (/* binding */ undisableInput)\n/* harmony export */ });\n/**\r\n * Insert a favicon on the DOM\r\n * @param {HTMLImageElement} icon \r\n * @returns HTMLHeadElement\r\n */\nvar favicon = function favicon(icon) {\n  var link = document.querySelector(\"link[rel*='icon']\") || document.createElement('link');\n  link.type = 'image/png';\n  link.rel = 'icon';\n  link.href = icon;\n  return link;\n};\n/**\r\n * Display year on the DOM\r\n * @param {HTMLElement} year \r\n */\n\n\nvar displayYear = function displayYear(year) {\n  var date = new Date();\n  year.innerHTML = \"\".concat(date.getFullYear());\n};\n/**\r\n * Disable an input\r\n * @param {HTMLInputElement} element \r\n */\n\n\nvar disableInput = function disableInput(element) {\n  element.disabled = true;\n};\n/**\r\n * Undisable an input\r\n * @param {HTMLInputElement} element \r\n */\n\n\nvar undisableInput = function undisableInput(element) {\n  element.disabled = false;\n};\n\n\n\n//# sourceURL=webpack://pomodoro/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/utils.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;