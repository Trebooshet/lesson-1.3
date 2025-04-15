
const callMenu = document.querySelector(".modal-call_container");
const closeCallMenuButton = document.querySelector(".modal-call_close-button");




callLogo.addEventListener("click", () => {
    openCallMenu();
    blurBody()
})

function openCallMenu() {
    callMenu.style.display = "block";
}

closeCallMenuButton.addEventListener("click", () => {
    closeCallMenu(); 
})

function closeCallMenu() {
    callMenu.style.display = "none";
    unblurBody()
}