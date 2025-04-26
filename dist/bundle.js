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

/***/ "./src/modal-call/modal-call.js":
/*!**************************************!*\
  !*** ./src/modal-call/modal-call.js ***!
  \**************************************/
/***/ (() => {

eval("const callMenu = document.querySelector(\".modal-call_container\");\nconst closeCallMenuButton = document.querySelector(\".modal-call_close-button\");\nlet isCallMenuOpened = false;\n\ncallLogoHeader.addEventListener(\"click\", (event) => {\n  closeFeedbackMenu();\n  openCallMenu();\n  blurBody();\n  event.stopPropagation();\n});\n\ncallLogoBurgerMenu.addEventListener(\"click\", (event) => {\n  closeFeedbackMenu();\n  openCallMenu();\n  blurBody();\n  event.stopPropagation();\n});\n\ncloseCallMenuButton.addEventListener(\"click\", () => {\n  closeCallMenu();\n});\n\nfunction openCallMenu() {\n  if (window.innerWidth > 440 && window.innerWidth < 860) {\n    burgerMenu.style.opacity = 0.05;\n  }\n\n  callMenu.style.display = \"block\";\n  isCallMenuOpened = true;\n}\n\nfunction closeCallMenu() {\n  callMenu.style.display = \"none\";\n  burgerMenu.style.opacity = 1;\n  if (!isBurgerMenuOpened) unblurBody();\n  isCallMenuOpened = false;\n}\n\n\n//# sourceURL=webpack://lesson_1.3/./src/modal-call/modal-call.js?");

/***/ }),

/***/ "./src/modal-feedback/modal-feedback.js":
/*!**********************************************!*\
  !*** ./src/modal-feedback/modal-feedback.js ***!
  \**********************************************/
/***/ (() => {

eval("const feedbackMenu = document.querySelector(\".modal-feedback_container\");\nconst closeFeedbackMenuButton = document.querySelector(\n  \".modal-feedback_close-button\",\n);\nlet isChatMenuOpened = false;\n\nchatLogoHeader.addEventListener(\"click\", (event) => {\n  closeCallMenu();\n  openFeedbackMenu();\n  blurBody();\n  event.stopPropagation();\n});\n\nchatLogoBurgerMenu.addEventListener(\"click\", (event) => {\n  closeCallMenu();\n  openFeedbackMenu();\n  blurBody();\n  event.stopPropagation();\n});\n\ncloseFeedbackMenuButton.addEventListener(\"click\", () => {\n  closeFeedbackMenu();\n});\n\nfunction openFeedbackMenu() {\n  if (window.innerWidth > 440 && window.innerWidth < 860) {\n    burgerMenu.style.opacity = 0.05;\n  }\n\n  feedbackMenu.style.display = \"block\";\n  isChatMenuOpened = true;\n}\nfunction closeFeedbackMenu() {\n  feedbackMenu.style.display = \"none\";\n  burgerMenu.style.opacity = 1;\n  if (!isBurgerMenuOpened) unblurBody();\n  isChatMenuOpened = false;\n}\n\n\n//# sourceURL=webpack://lesson_1.3/./src/modal-feedback/modal-feedback.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_call_modal_call_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-call/modal-call.js */ \"./src/modal-call/modal-call.js\");\n/* harmony import */ var _modal_call_modal_call_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modal_call_modal_call_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modal_feedback_modal_feedback_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-feedback/modal-feedback.js */ \"./src/modal-feedback/modal-feedback.js\");\n/* harmony import */ var _modal_feedback_modal_feedback_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal_feedback_modal_feedback_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _swipers_swipers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swipers/swipers.js */ \"./src/swipers/swipers.js\");\n/* harmony import */ var _swipers_swipers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swipers_swipers_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst labelReadMore = document.getElementById(\"label_read-more\");\nconst mainText = document.getElementById(\"main__text\");\nconst burgerButton = document.getElementById(\"burger-button\");\nconst burgerMenu = document.getElementById(\"burger-menu\");\nconst burgerCloseButton = document.getElementById(\"burger_close-button\");\nconst checkStatusText = document.getElementById(\"check-status-text\");\nconst checkStatusLogo = document.getElementById(\"check-status-logo\");\nconst repairText = document.getElementById(\"repair-text\");\nconst repairLogo = document.getElementById(\"repair-logo\");\nconst callLogoHeader = document.querySelector(\".header_call-logo\");\nconst callLogoBurgerMenu = document.querySelector(\".burger-menu_call-logo\");\nconst chatLogoHeader = document.querySelector(\".header_chat-logo\");\nconst chatLogoBurgerMenu = document.querySelector(\".burger-menu_chat-logo\");\nconst chatLogo = document.getElementById(\"chat-logo\");\nconst profileLogo = document.getElementById(\"profile-logo\");\nconst resizeBox = document.getElementById(\"resize-box\");\nconst headerMenuRight = document.querySelector(\".header__menu-right\");\nconst burgerMenuIcons = document.querySelector(\".burger-menu_icons\");\nconst header = document.querySelector(\"header\");\nconst main = document.querySelector(\"main\");\nlet isBurgerMenuOpened = false; /* Есть ли открытое меню */\n\n/* Изменение отображения кнопки \"Читать далее\", при изменении ширины экрана*/\n\nlabelReadMore.addEventListener(\"click\", () => {\n  labelReadMore.style.display = \"none\";\n  mainText.style.height = \"auto\";\n});\n\nif (window.innerWidth >= 678) {\n  labelReadMore.style.display = \"none\";\n  mainText.style.height = \"auto\";\n} else {\n  labelReadMore.style.display = \"flex\";\n}\n\nwindow.addEventListener(\"load\", resizeReadMore);\nwindow.addEventListener(\"resize\", resizeReadMore);\n\nfunction resizeReadMore() {\n  if (window.innerWidth >= 678) {\n    labelReadMore.style.display = \"none\";\n    mainText.style.height = \"auto\";\n  } else {\n    labelReadMore.style.display = \"flex\";\n    mainText.style.height = \"90px\";\n  }\n}\n\n/* Адаптация контента в зависимости от ширины экрана */\n\nfunction burgerMenuToLeft() {\n  /* Burger Menu слева */\n  burgerMenu.style.display = \"flex\";\n  burgerMenu.style.height = \"100vh\";\n  burgerMenu.style.width = \"320px\";\n  // moveContactLogosToBurgerMenu()\n}\n\n// function moveContactLogosToBurgerMenu() {        /* Переместить иконки Call, Chat и Profile в Burger Menu */\n//     burgerMenuIcons.appendChild(callLogo);\n//     burgerMenuIcons.appendChild(chatLogo);\n//     burgerMenuIcons.appendChild(profileLogo);\n// }\n\n// function moveContactLogosToHeader() {            /* Переместить иконки Call, Chat и Profile в Header*/\n//     headerMenuRight.appendChild(callLogo);\n//     headerMenuRight.appendChild(chatLogo);\n//     headerMenuRight.appendChild(profileLogo);\n// }\n\nfunction moveRepearAndStatusLogosToHeader() {\n  /* Переместить иконки Repair и CheckStatus в Header*/\n  headerMenuRight.appendChild(repairText);\n  headerMenuRight.appendChild(repairLogo);\n  headerMenuRight.appendChild(checkStatusText);\n  headerMenuRight.appendChild(checkStatusLogo);\n}\n\nfunction moveRepearAndStatusLogosToMain() {\n  /* Переместить иконки Repair и CheckStatus в Main*/\n  resizeBox.appendChild(repairText);\n  resizeBox.appendChild(repairLogo);\n  resizeBox.appendChild(checkStatusText);\n  resizeBox.appendChild(checkStatusLogo);\n}\n\n// function showContactLogos() {             /*  иконки Call, Chat и Profile */\n//     callLogo.style.display = \"flex\";\n//     chatLogo.style.display = \"flex\";\n//     profileLogo.style.display = \"flex\";\n// }\n\n// function hideContactLogos() {             /* Скрыть иконки Call, Chat и Profile */\n//     callLogo.style.display = \"none\";\n//     chatLogo.style.display = \"none\";\n//     profileLogo.style.display = \"none\";\n// }\n\nfunction blurBody() {\n  /* Заблюрить основной контент */\n  header.style.opacity = \"0.05\";\n  main.style.opacity = \"0.05\";\n}\n\nfunction unblurBody() {\n  /* Разблюрить основной контент */\n  header.style.opacity = \"1\";\n  main.style.opacity = \"1\";\n}\n\nfunction resizeWindow() {\n  if (!isBurgerMenuOpened) {\n    /* Нет открытых меню*/\n    unblurBody();\n\n    if (window.innerWidth >= 1440) {\n      burgerCloseButton.style.display = \"none\";\n      header.style.display = \"none\";\n      main.style.marginLeft = \"320px\";\n      main.style.width = \"calc(100vw - 320px)\";\n      burgerMenuToLeft();\n      moveRepearAndStatusLogosToMain();\n    } else {\n      burgerCloseButton.style.display = \"flex\";\n      burgerMenu.style.display = \"none\";\n      header.style.display = \"flex\";\n      header.style.marginLeft = 0;\n      header.style.width = \"100vw\";\n      main.style.marginLeft = 0;\n      main.style.width = \"100%\";\n      // moveContactLogosToHeader();\n      moveRepearAndStatusLogosToHeader();\n      // if (window.innerWidth < 768) {\n      //     hideContactLogos()\n      // } else {\n      //     showContactLogos()\n      // }\n    }\n  } else if (isBurgerMenuOpened && window.innerWidth >= 1440) {\n    /* Есть открытое меню и ширина > 1440 */\n    closeBurgerMenu();\n    burgerMenuToLeft();\n    unblurBody();\n    burgerMenu.style.boxShadow = \"0 0 0\";\n    burgerCloseButton.style.display = \"none\";\n    header.style.display = \"none\";\n    main.style.marginLeft = \"320px\";\n    main.style.width = \"calc(100vw - 320px)\";\n    moveRepearAndStatusLogosToMain();\n  } else {\n    openBurgerMenu();\n  }\n}\n\nwindow.addEventListener(\n  \"resize\",\n  resizeWindow,\n); /* Адаптация контента при загрузке страницы */\nwindow.addEventListener(\n  \"load\",\n  resizeWindow,\n); /* Адаптация контента при изменении ширины страницы */\n\n/* Burger menu */\n\nburgerButton.addEventListener(\n  \"click\",\n  openBurgerMenu,\n); /* Открыть BurgerMenu кнопкой BurgerButton*/\n\nfunction openBurgerMenu() {\n  /* Функция открыть BurgerMenu*/\n  burgerMenuToLeft();\n  // showContactLogos();\n  isBurgerMenuOpened = true;\n\n  if (window.innerWidth >= 1440) {\n    burgerMenu.style.boxShadow = \"0 0 0\";\n    unblurBody();\n    main.style.marginLeft = \"320px\";\n    main.style.width = \"calc(100vw - 320px)\";\n  } else if (window.innerWidth >= 510) {\n    blurBody();\n    burgerMenu.style.boxShadow = \"1px 0 40px rgb(172, 170, 200)\";\n  } else if (window.innerWidth >= 320) {\n    burgerMenu.style.width = \"100%\";\n    burgerMenu.style.minHeight = \"100vh\";\n    burgerMenu.style.height = \"auto\";\n  }\n}\n\nburgerCloseButton.addEventListener(\n  \"click\",\n  closeBurgerMenu,\n); /* Закрыть BurgerMenu кнопкой*/\n\ndocument.addEventListener(\"click\", (event) => {\n  /* Закрыть BurgerMenu кликом по пустой области*/\n\n  if (isBurgerMenuOpened || isCallMenuOpened || isChatMenuOpened) {\n    if (window.innerWidth > 440 && window.innerWidth < 860) {\n      if (\n        !callMenu.contains(event.target) &&\n        !closeCallMenuButton.contains(event.target) &&\n        !feedbackMenu.contains(event.target) &&\n        !closeFeedbackMenuButton.contains(event.target)\n      ) {\n        // closeBurgerMenu();\n        closeCallMenu();\n        closeFeedbackMenu();\n      }\n      // else if (!isCallMenuOpened || !isChatMenuOpened &&\n      //     !burgerMenu.contains(event.target) &&\n      //     !burgerButton.contains(event.target)) {\n      //     closeBurgerMenu();\n      // }\n    } else if (window.innerWidth < 1440) {\n      if (\n        !burgerMenu.contains(event.target) &&\n        !burgerButton.contains(event.target) &&\n        !callMenu.contains(event.target) &&\n        !closeCallMenuButton.contains(event.target) &&\n        !feedbackMenu.contains(event.target) &&\n        !closeFeedbackMenuButton.contains(event.target)\n      ) {\n        closeBurgerMenu();\n        closeCallMenu();\n        closeFeedbackMenu();\n      }\n    } else {\n      if (\n        !burgerMenu.contains(event.target) &&\n        !burgerButton.contains(event.target) &&\n        !callMenu.contains(event.target) &&\n        !closeCallMenuButton.contains(event.target) &&\n        !feedbackMenu.contains(event.target) &&\n        !closeFeedbackMenuButton.contains(event.target)\n      ) {\n        closeCallMenu();\n        closeFeedbackMenu();\n      }\n    }\n  }\n});\n\nfunction closeBurgerMenu() {\n  /* Функция закрыть BurgerMenu */\n  burgerMenu.style.display = \"none\";\n  if (isCallMenuOpened || isChatMenuOpened) {\n    blurBody();\n  } else unblurBody();\n\n  isBurgerMenuOpened = false;\n}\n\n\n//# sourceURL=webpack://lesson_1.3/./src/script.js?");

/***/ }),

/***/ "./src/swipers/swipers.js":
/*!********************************!*\
  !*** ./src/swipers/swipers.js ***!
  \********************************/
/***/ (() => {

eval("new Swiper(\".brend-swiper\", {\n  direction: \"horizontal\",\n  pagination: {\n    el: \".swiper-pagination-brend\",\n    clickable: true,\n  },\n  slidesPerView: 2,\n  spaceBetween: 24,\n});\n\nnew Swiper(\".technic-swiper\", {\n  direction: \"horizontal\",\n  pagination: {\n    el: \".swiper-pagination-technic\",\n    clickable: true,\n  },\n  slidesPerView: 2,\n  spaceBetween: 24,\n});\n\nnew Swiper(\".prices-swiper\", {\n  direction: \"horizontal\",\n  pagination: {\n    el: \".swiper-pagination-prices\",\n    clickable: true,\n  },\n  slidesPerView: 2,\n  spaceBetween: 24,\n});\n\nconst brendGrid = document.querySelector(\".brend-grid\");\nconst showAllBrendsButton = document.querySelector(\"#show-all-brends_button\");\nconst brendsDoubleArrow = document.querySelector(\"#brends_double-arrow\");\nconst showAllBrendsButtonText = document.querySelector(\".show-all-brends_text\");\nlet isAllBrendsShown = false;\nconst technicGrid = document.querySelector(\".technic-grid\");\nconst showAllTechnicsButton = document.querySelector(\n  \"#show-all-technics_button\",\n);\nconst showAllTechnicsButtonText = document.querySelector(\n  \".show-all-technics_text\",\n);\nconst technicsDoubleArrow = document.querySelector(\"#technics_double-arrow\");\nlet isAllTechnicsShown = false;\n\nfunction showAllBrends() {\n  brendGrid.style.height = \"auto\";\n  showAllBrendsButtonText.innerHTML = \"Скрыть\";\n  brendsDoubleArrow.style.transform = \"scaleY(-1.2)\";\n  isAllBrendsShown = true;\n}\n\nfunction hideAllBrends() {\n  brendGrid.style.height = \"168px\";\n  showAllBrendsButtonText.innerHTML = \"Показать все\";\n  brendsDoubleArrow.style.transform = \"scaleY(1.2)\";\n  isAllBrendsShown = false;\n}\n\nshowAllBrendsButton.addEventListener(\"click\", () => {\n  !isAllBrendsShown ? showAllBrends() : hideAllBrends();\n});\n\nfunction showAllTechnics() {\n  technicGrid.style.height = \"auto\";\n  showAllTechnicsButtonText.innerHTML = \"Скрыть\";\n  technicsDoubleArrow.style.transform = \"scaleY(-1.2)\";\n  isAllTechnicsShown = true;\n}\n\nfunction hideAllTechnics() {\n  technicGrid.style.height = \"168px\";\n  showAllTechnicsButtonText.innerHTML = \"Показать все\";\n  technicsDoubleArrow.style.transform = \"scaleY(1.2)\";\n  isAllTechnicsShown = false;\n}\n\nshowAllTechnicsButton.addEventListener(\"click\", () => {\n  !isAllTechnicsShown ? showAllTechnics() : hideAllTechnics();\n});\n\n\n//# sourceURL=webpack://lesson_1.3/./src/swipers/swipers.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;