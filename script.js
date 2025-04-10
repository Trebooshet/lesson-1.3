'use strict'

const labelReadMore = document.getElementById("label_read-more")
const mainText = document.getElementById("main__text")
const burgerButton = document.getElementById("burger-button")
const burgerMenu = document.getElementById("burger-menu")
const burgerCloseButton = document.getElementById("burger_close-button")
const checkStatusText = document.getElementById("check-status-text")
const checkStatusLogo = document.getElementById("check-status-logo")
const repairText = document.getElementById("repair-text")
const repairLogo = document.getElementById("repair-logo")
const callLogo = document.getElementById("call-logo")
const chatLogo = document.getElementById("chat-logo")
const profileLogo = document.getElementById("profile-logo")
const resizeBox = document.getElementById("resize-box")
const headerMenuRight = document.querySelector(".header__menu-right")
const burgerMenuIcons = document.querySelector(".burger-menu_icons")
const header = document.querySelector("header")
const main = document.querySelector("main")
let isOpenAnyMenu = false;          /* Есть ли открытое меню */


/* Изменение отображения кнопки "Читать далее", при изменении ширины экрана*/
 
labelReadMore.addEventListener("click", () =>{
    labelReadMore.style.display = "none";
    mainText.style.height = "auto";
})

    if (window.innerWidth >= 678) {
        labelReadMore.style.display = "none";
        mainText.style.height = "auto";
    } else {
        labelReadMore.style.display = "flex";
    }

window.addEventListener('resize', resizeReadMore);

function resizeReadMore() {
    if (window.innerWidth >= 678) {
        labelReadMore.style.display = "none";
        mainText.style.height = "auto";
    } else {
        labelReadMore.style.display = "flex";
        mainText.style.height = "90px";
    }}




/* Адаптация контента в зависимости от ширины экрана */

function burgerMenuToLeft() {             /* Burger Menu слева */
    burgerMenu.style.display = "flex";
    burgerMenu.style.height = "100vh";
    burgerMenu.style.width = "320px";
    contactLogosToBurgerMenu()
}

function contactLogosToBurgerMenu() {            /* Переместить иконки Call, Chat и Profile в Burger Menu */
    burgerMenuIcons.appendChild(callLogo);
    burgerMenuIcons.appendChild(chatLogo);
    burgerMenuIcons.appendChild(profileLogo);
}

function contactLogosToHeader() {                /* Переместить иконки Call, Chat и Profile в Header*/
    headerMenuRight.appendChild(callLogo);
    headerMenuRight.appendChild(chatLogo);
    headerMenuRight.appendChild(profileLogo)
}

function repearAndStatusLogosToHeader() {   /* Переместить иконки Repair и CheckStatus в Header*/
    headerMenuRight.appendChild(repairText);
    headerMenuRight.appendChild(repairLogo);
    headerMenuRight.appendChild(checkStatusText);
    headerMenuRight.appendChild(checkStatusLogo);
}

function repearAndStatusLogosToMain() {   /* Переместить иконки Repair и CheckStatus в Header*/
    resizeBox.appendChild(repairText);
    resizeBox.appendChild(repairLogo);
    resizeBox.appendChild(checkStatusText);
    resizeBox.appendChild(checkStatusLogo);
}

function showContactLogos() {             /*  иконки Call, Chat и Profile */
    callLogo.style.display = "flex";
    chatLogo.style.display = "flex";
    profileLogo.style.display = "flex";
}

function hideContactLogos() {             /* Скрыть иконки Call, Chat и Profile */
    callLogo.style.display = "none";
    chatLogo.style.display = "none";
    profileLogo.style.display = "none";
    
}
   
                

function resizeWindow() {       
    if (!isOpenAnyMenu) {               /* Нет открытых меню*/

        if (window.innerWidth >= 1440){
            burgerMenu.style.display = "flex";
            burgerMenu.style.height = "100vh";
            burgerMenu.style.width = "320px";
            burgerCloseButton.style.display = "none";
            header.style.display = "none";
            main.style.opacity = 1;
            main.style.marginLeft = "320px";
            main.style.width = "calc(100vw - 320px)";
            // resizeBox.appendChild(repairText);
            // resizeBox.appendChild(repairLogo);
            // resizeBox.appendChild(checkStatusText);
            // resizeBox.appendChild(checkStatusLogo);
            burgerMenuToLeft()
            repearAndStatusLogosToMain();
        } else {
            burgerCloseButton.style.display = "flex";
            burgerMenu.style.display = "none";
            header.style.display = "flex";
            header.style.opacity = 1;
            header.style.marginLeft = 0;
            header.style.width = "100vw";
            main.style.opacity = 1;
            main.style.marginLeft = 0;
            main.style.width = "100%";
            // headerMenuRight.appendChild(repairText);
            // headerMenuRight.appendChild(repairLogo);
            // headerMenuRight.appendChild(checkStatusText);
            // headerMenuRight.appendChild(checkStatusLogo);
            contactLogosToHeader();
            // headerMenuRight.appendChild(callLogo);
            // headerMenuRight.appendChild(chatLogo);
            // headerMenuRight.appendChild(profileLogo)
            repearAndStatusLogosToHeader();
            if (window.innerWidth < 768) {
                // callLogo.style.display = "none";
                // chatLogo.style.display = "none";
                // profileLogo.style.display = "none";
                hideContactLogos()
            } else {
                // callLogo.style.display = "flex";
                // chatLogo.style.display = "flex";
                // profileLogo.style.display = "flex";
                showContactLogos()
            }
        }
    }   
    else if (isOpenAnyMenu && window.innerWidth >= 1440) { /* Есть открытое меню и ширина > 1440 */
            closeBurgerMenu();
            burgerMenuToLeft();
            burgerMenu.style.boxShadow = "0 0 0";
            // burgerMenu.style.display = "flex";
            // burgerMenu.style.height = "100vh";
            // burgerMenu.style.width = "320px";
            burgerCloseButton.style.display = "none";
            header.style.display = "none";
            main.style.opacity = 1;
            main.style.marginLeft = "320px";
            main.style.width = "calc(100vw - 320px)";
            // resizeBox.appendChild(repairText);
            // resizeBox.appendChild(repairLogo);
            // resizeBox.appendChild(checkStatusText);
            // resizeBox.appendChild(checkStatusLogo);
            repearAndStatusLogosToMain()
            // burgerMenuIcons.appendChild(callLogo);
            // burgerMenuIcons.appendChild(chatLogo);
            // burgerMenuIcons.appendChild(profileLogo);
    } else {openBurgerMenu()}  
        }   


window.addEventListener("resize", resizeWindow) /* Адаптация контента при загрузке страницы */
window.addEventListener("load", resizeWindow)   /* Адаптация контента при изменении ширины страницы */

/* Burger menu */

burgerButton.addEventListener("click", openBurgerMenu); /* Открыть BurgerMenu кнопкой BurgerButton*/

function openBurgerMenu() {             /* Функция открыть BurgerMenu*/
    // burgerMenu.style.display = "flex";
    // contactLogosToBurgerMenu();
    // callLogo.style.display = "flex";
    // chatLogo.style.display = "flex";
    // profileLogo.style.display = "flex";
    burgerMenuToLeft();
    showContactLogos();
    isOpenAnyMenu = true; 

    if (window.innerWidth >= 1440) {
        // burgerMenu.style.width = "320px";
        // burgerMenu.style.height = "100vh";
        burgerMenu.style.boxShadow = "0 0 0"; 
        header.style.opacity = "1";
        main.style.opacity = "1";
        main.style.marginLeft = "320px";
        main.style.width = "calc(100vw - 320px)";
    } else if (window.innerWidth >= 510) {
        header.style.opacity = 0.05;
        main.style.opacity = 0.05;
        // burgerMenu.style.width = "320px";
        // burgerMenu.style.height = "100vh";
        burgerMenu.style.boxShadow = "1px 0 40px rgb(172, 170, 200)";
    } else if (window.innerWidth >= 320) {
        burgerMenu.style.width = "100%";
    } 
    // else {
    //     burgerMenu.style.width = "320px";
    // }
}

burgerCloseButton.addEventListener("click", closeBurgerMenu); /* Закрыть BurgerMenu кнопкой*/

document.addEventListener("click", (event) => {  /* Закрыть BurgerMenu кликом по пустой области*/
    if (!burgerMenu.contains(event.target) && 
        !burgerButton.contains(event.target) && window.innerWidth < 1440) {
        closeBurgerMenu();
    }
})

function closeBurgerMenu() {    /* Функция закрыть BurgerMenu */
    burgerMenu.style.display = "none";
    // headerMenuRight.appendChild(callLogo);
    // headerMenuRight.appendChild(chatLogo);
    // headerMenuRight.appendChild(profileLogo);
    contactLogosToHeader();
    header.style.opacity = 1;
    main.style.opacity = 1;

    if (window.innerWidth <= 768) {
    // callLogo.style.display = "none";
    // chatLogo.style.display = "none";
    // profileLogo.style.display = "none";
    hideContactLogos();
    }

    isOpenAnyMenu = false; 
}
