import { callLogoHeader, callLogoBurgerMenu, chatLogoHeader, chatLogoBurgerMenu, burgerMenu, state, blurBody, unblurBody } from "../globals.js";

export const callMenu = document.querySelector(".modal-call_container");
export const closeCallMenuButton = document.querySelector(".modal-call_close-button");
export const feedbackMenu = document.querySelector(".modal-feedback_container");
export const closeFeedbackMenuButton = document.querySelector(".modal-feedback_close-button",);

function openCallMenu() {
  if (window.innerWidth > 440 && window.innerWidth < 860) {
    burgerMenu.style.opacity = 0.05;
  }
  callMenu.style.display = "block";
  state.isCallMenuOpened = true;
}

export function closeCallMenu() {
  callMenu.style.display = "none";
  burgerMenu.style.opacity = 1;
  if (!state.isBurgerMenuOpened) unblurBody();
  state.isCallMenuOpened = false;
}

callLogoHeader.addEventListener("click", (event) => {
  closeFeedbackMenu();
  openCallMenu();
  blurBody();
  event.stopPropagation();
});

callLogoBurgerMenu.addEventListener("click", (event) => {
  closeFeedbackMenu();
  openCallMenu();
  blurBody();
  event.stopPropagation();
});

closeCallMenuButton.addEventListener("click", () => {
  closeCallMenu();
});

chatLogoHeader.addEventListener("click", (event) => {
  closeCallMenu();
  openFeedbackMenu();
  blurBody();
  event.stopPropagation();
});

chatLogoBurgerMenu.addEventListener("click", (event) => {
  closeCallMenu();
  openFeedbackMenu();
  blurBody();
  event.stopPropagation();
});

closeFeedbackMenuButton.addEventListener("click", () => {
  closeFeedbackMenu();
});

function openFeedbackMenu() {
  if (window.innerWidth > 440 && window.innerWidth < 860) {
    burgerMenu.style.opacity = 0.05;
  }
  feedbackMenu.style.display = "block";
  state.isChatMenuOpened = true;
}

export function closeFeedbackMenu() {
  feedbackMenu.style.display = "none";
  burgerMenu.style.opacity = 1;
  if (!state.isBurgerMenuOpened) unblurBody();
  state.isChatMenuOpened = false;
}

