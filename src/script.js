import './modal-call/modal-call.js';
import './modal-feedback/modal-feedback.js';
import './swipers/swipers.js';

const labelReadMore = document.getElementById("label_read-more");
const mainText = document.getElementById("main__text");
const burgerButton = document.getElementById("burger-button");
const burgerMenu = document.getElementById("burger-menu");
const burgerCloseButton = document.getElementById("burger_close-button");
const checkStatusText = document.getElementById("check-status-text");
const checkStatusLogo = document.getElementById("check-status-logo");
const repairText = document.getElementById("repair-text");
const repairLogo = document.getElementById("repair-logo");
const callLogoHeader = document.querySelector(".header_call-logo");
const callLogoBurgerMenu = document.querySelector(".burger-menu_call-logo");
const chatLogoHeader = document.querySelector(".header_chat-logo");
const chatLogoBurgerMenu = document.querySelector(".burger-menu_chat-logo");
const chatLogo = document.getElementById("chat-logo");
const profileLogo = document.getElementById("profile-logo");
const resizeBox = document.getElementById("resize-box");
const headerMenuRight = document.querySelector(".header__menu-right");
const burgerMenuIcons = document.querySelector(".burger-menu_icons");
const header = document.querySelector("header");
const main = document.querySelector("main");
let isBurgerMenuOpened = false; /* Есть ли открытое меню */

/* Изменение отображения кнопки "Читать далее", при изменении ширины экрана*/

labelReadMore.addEventListener("click", () => {
  labelReadMore.style.display = "none";
  mainText.style.height = "auto";
});

if (window.innerWidth >= 678) {
  labelReadMore.style.display = "none";
  mainText.style.height = "auto";
} else {
  labelReadMore.style.display = "flex";
}

window.addEventListener("load", resizeReadMore);
window.addEventListener("resize", resizeReadMore);

function resizeReadMore() {
  if (window.innerWidth >= 678) {
    labelReadMore.style.display = "none";
    mainText.style.height = "auto";
  } else {
    labelReadMore.style.display = "flex";
    mainText.style.height = "90px";
  }
}

/* Адаптация контента в зависимости от ширины экрана */

function burgerMenuToLeft() {
  /* Burger Menu слева */
  burgerMenu.style.display = "flex";
  burgerMenu.style.height = "100vh";
  burgerMenu.style.width = "320px";
  // moveContactLogosToBurgerMenu()
}

// function moveContactLogosToBurgerMenu() {        /* Переместить иконки Call, Chat и Profile в Burger Menu */
//     burgerMenuIcons.appendChild(callLogo);
//     burgerMenuIcons.appendChild(chatLogo);
//     burgerMenuIcons.appendChild(profileLogo);
// }

// function moveContactLogosToHeader() {            /* Переместить иконки Call, Chat и Profile в Header*/
//     headerMenuRight.appendChild(callLogo);
//     headerMenuRight.appendChild(chatLogo);
//     headerMenuRight.appendChild(profileLogo);
// }

function moveRepearAndStatusLogosToHeader() {
  /* Переместить иконки Repair и CheckStatus в Header*/
  headerMenuRight.appendChild(repairText);
  headerMenuRight.appendChild(repairLogo);
  headerMenuRight.appendChild(checkStatusText);
  headerMenuRight.appendChild(checkStatusLogo);
}

function moveRepearAndStatusLogosToMain() {
  /* Переместить иконки Repair и CheckStatus в Main*/
  resizeBox.appendChild(repairText);
  resizeBox.appendChild(repairLogo);
  resizeBox.appendChild(checkStatusText);
  resizeBox.appendChild(checkStatusLogo);
}

// function showContactLogos() {             /*  иконки Call, Chat и Profile */
//     callLogo.style.display = "flex";
//     chatLogo.style.display = "flex";
//     profileLogo.style.display = "flex";
// }

// function hideContactLogos() {             /* Скрыть иконки Call, Chat и Profile */
//     callLogo.style.display = "none";
//     chatLogo.style.display = "none";
//     profileLogo.style.display = "none";
// }

function blurBody() {
  /* Заблюрить основной контент */
  header.style.opacity = "0.05";
  main.style.opacity = "0.05";
}

function unblurBody() {
  /* Разблюрить основной контент */
  header.style.opacity = "1";
  main.style.opacity = "1";
}

function resizeWindow() {
  if (!isBurgerMenuOpened) {
    /* Нет открытых меню*/
    unblurBody();

    if (window.innerWidth >= 1440) {
      burgerCloseButton.style.display = "none";
      header.style.display = "none";
      main.style.marginLeft = "320px";
      main.style.width = "calc(100vw - 320px)";
      burgerMenuToLeft();
      moveRepearAndStatusLogosToMain();
    } else {
      burgerCloseButton.style.display = "flex";
      burgerMenu.style.display = "none";
      header.style.display = "flex";
      header.style.marginLeft = 0;
      header.style.width = "100vw";
      main.style.marginLeft = 0;
      main.style.width = "100%";
      // moveContactLogosToHeader();
      moveRepearAndStatusLogosToHeader();
      // if (window.innerWidth < 768) {
      //     hideContactLogos()
      // } else {
      //     showContactLogos()
      // }
    }
  } else if (isBurgerMenuOpened && window.innerWidth >= 1440) {
    /* Есть открытое меню и ширина > 1440 */
    closeBurgerMenu();
    burgerMenuToLeft();
    unblurBody();
    burgerMenu.style.boxShadow = "0 0 0";
    burgerCloseButton.style.display = "none";
    header.style.display = "none";
    main.style.marginLeft = "320px";
    main.style.width = "calc(100vw - 320px)";
    moveRepearAndStatusLogosToMain();
  } else {
    openBurgerMenu();
  }
}

window.addEventListener(
  "resize",
  resizeWindow,
); /* Адаптация контента при загрузке страницы */
window.addEventListener(
  "load",
  resizeWindow,
); /* Адаптация контента при изменении ширины страницы */

/* Burger menu */

burgerButton.addEventListener(
  "click",
  openBurgerMenu,
); /* Открыть BurgerMenu кнопкой BurgerButton*/

function openBurgerMenu() {
  /* Функция открыть BurgerMenu*/
  burgerMenuToLeft();
  // showContactLogos();
  isBurgerMenuOpened = true;

  if (window.innerWidth >= 1440) {
    burgerMenu.style.boxShadow = "0 0 0";
    unblurBody();
    main.style.marginLeft = "320px";
    main.style.width = "calc(100vw - 320px)";
  } else if (window.innerWidth >= 510) {
    blurBody();
    burgerMenu.style.boxShadow = "1px 0 40px rgb(172, 170, 200)";
  } else if (window.innerWidth >= 320) {
    burgerMenu.style.width = "100%";
    burgerMenu.style.minHeight = "100vh";
    burgerMenu.style.height = "auto";
  }
}

burgerCloseButton.addEventListener(
  "click",
  closeBurgerMenu,
); /* Закрыть BurgerMenu кнопкой*/

document.addEventListener("click", (event) => {
  /* Закрыть BurgerMenu кликом по пустой области*/

  if (isBurgerMenuOpened || isCallMenuOpened || isChatMenuOpened) {
    if (window.innerWidth > 440 && window.innerWidth < 860) {
      if (
        !callMenu.contains(event.target) &&
        !closeCallMenuButton.contains(event.target) &&
        !feedbackMenu.contains(event.target) &&
        !closeFeedbackMenuButton.contains(event.target)
      ) {
        // closeBurgerMenu();
        closeCallMenu();
        closeFeedbackMenu();
      }
      // else if (!isCallMenuOpened || !isChatMenuOpened &&
      //     !burgerMenu.contains(event.target) &&
      //     !burgerButton.contains(event.target)) {
      //     closeBurgerMenu();
      // }
    } else if (window.innerWidth < 1440) {
      if (
        !burgerMenu.contains(event.target) &&
        !burgerButton.contains(event.target) &&
        !callMenu.contains(event.target) &&
        !closeCallMenuButton.contains(event.target) &&
        !feedbackMenu.contains(event.target) &&
        !closeFeedbackMenuButton.contains(event.target)
      ) {
        closeBurgerMenu();
        closeCallMenu();
        closeFeedbackMenu();
      }
    } else {
      if (
        !burgerMenu.contains(event.target) &&
        !burgerButton.contains(event.target) &&
        !callMenu.contains(event.target) &&
        !closeCallMenuButton.contains(event.target) &&
        !feedbackMenu.contains(event.target) &&
        !closeFeedbackMenuButton.contains(event.target)
      ) {
        closeCallMenu();
        closeFeedbackMenu();
      }
    }
  }
});

function closeBurgerMenu() {
  /* Функция закрыть BurgerMenu */
  burgerMenu.style.display = "none";
  if (isCallMenuOpened || isChatMenuOpened) {
    blurBody();
  } else unblurBody();

  isBurgerMenuOpened = false;
}
