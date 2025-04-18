const callMenu = document.querySelector(".modal-call_container");
const closeCallMenuButton = document.querySelector(".modal-call_close-button");
let isCallMenuOpened = false;

callLogoHeader.addEventListener("click", (event) => {
    closeFeedbackMenu();
    openCallMenu();
    blurBody();
    event.stopPropagation();
})

callLogoBurgerMenu.addEventListener("click", (event) => {
    closeFeedbackMenu();
    openCallMenu();
    blurBody();
    event.stopPropagation();
})

closeCallMenuButton.addEventListener("click", () => {
    closeCallMenu(); 
})

function openCallMenu() {
    if (window.innerWidth > 440 &&
        window.innerWidth < 860) {
            burgerMenu.style.opacity = 0.05
        }

    callMenu.style.display = "block";
    isCallMenuOpened = true;
  
}

function closeCallMenu() {
    callMenu.style.display = "none";
    burgerMenu.style.opacity = 1;
    if (!isBurgerMenuOpened) unblurBody(); 
    isCallMenuOpened = false;
}
 
