const feedbackMenu = document.querySelector(".modal-feedback_container");
const closeFeedbackMenuButton = document.querySelector(
  ".modal-feedback_close-button",
);
let isChatMenuOpened = false;

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
  isChatMenuOpened = true;
}
function closeFeedbackMenu() {
  feedbackMenu.style.display = "none";
  burgerMenu.style.opacity = 1;
  if (!isBurgerMenuOpened) unblurBody();
  isChatMenuOpened = false;
}
