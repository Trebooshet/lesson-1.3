export const labelReadMore = document.getElementById("label_read-more");
export const mainText = document.getElementById("main__text");
export const burgerButton = document.getElementById("burger-button");
export const burgerMenu = document.getElementById("burger-menu");
export const burgerCloseButton = document.getElementById("burger_close-button");
export const checkStatusText = document.getElementById("check-status-text");
export const checkStatusLogo = document.getElementById("check-status-logo");
export const repairText = document.getElementById("repair-text");
export const repairLogo = document.getElementById("repair-logo");
export const callLogoHeader = document.querySelector(".header_call-logo");
export const callLogoBurgerMenu = document.querySelector(".burger-menu_call-logo");
export const chatLogoHeader = document.querySelector(".header_chat-logo");
export const chatLogoBurgerMenu = document.querySelector(".burger-menu_chat-logo");
export const resizeBox = document.getElementById("resize-box");
export const headerMenuRight = document.querySelector(".header__menu-right");
export const header = document.querySelector("header");
export const main = document.querySelector("main");
export const state = {
  isBurgerMenuOpened: false,
  isCallMenuOpened: false,
  isChatMenuOpened: false,
}

export function blurBody() {
  /* Заблюрить основной контент */
  header.style.opacity = "0.05";
  main.style.opacity = "0.05";
}

export function unblurBody() {
  /* Разблюрить основной контент */
  header.style.opacity = "1";
  main.style.opacity = "1";
}