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


/* Изменение отображения, при изменении ширины экрана*/
 
labelReadMore.addEventListener("click", function(){
    labelReadMore.style.display = "none";
    mainText.style.height = "auto";
})

if (window.innerWidth >= 678) {
    labelReadMore.style.display = "none";
}
else {
    labelReadMore.style.display = "flex";
}

function resizeReadMore () {
if (window.innerWidth >= 678) {
    labelReadMore.style.display = "none";
    mainText.style.height = "auto";
}
else {
    labelReadMore.style.display = "flex";
    mainText.style.height = "90px";
}}

window.addEventListener('resize', resizeReadMore)

/* Burger menu */

 function resizeWindow () {
    if (window.innerWidth >= 1440){
        burgerMenu.style.display = "flex";
        burgerMenu.style.height = "100vh";
        burgerMenu.style.width = 320;
        burgerCloseButton.style.display = "none";
        document.querySelector("header").style.display = "none";
        main.style.opacity = 1;
        main.style.marginLeft = "320px";
        main.style.width = "calc(100vw - 320px)";
        resizeBox.appendChild(repairText);
        resizeBox.appendChild(repairLogo);
        resizeBox.appendChild(checkStatusText);
        resizeBox.appendChild(checkStatusLogo);
        burgerMenuIcons.appendChild(callLogo);
        burgerMenuIcons.appendChild(chatLogo);
        burgerMenuIcons.appendChild(profileLogo);
    }
    else {
        burgerCloseButton.style.display = "flex";
        burgerMenu.style.display = "none";
        header.style.display = "flex";
        header.style.opacity = 1;
        header.style.marginLeft = 0;
        header.style.width = "100vw";
        main.style.opacity = 1;
        main.style.marginLeft = 0;
        main.style.width = "100vw";
        headerMenuRight.appendChild(repairText);
        headerMenuRight.appendChild(repairLogo);
        headerMenuRight.appendChild(checkStatusText);
        headerMenuRight.appendChild(checkStatusLogo);
        headerMenuRight.appendChild(callLogo);
        headerMenuRight.appendChild(chatLogo);
        headerMenuRight.appendChild(profileLogo)
    }
}

window.addEventListener("resize", resizeWindow)

window.addEventListener("load", resizeWindow)


burgerButton.addEventListener("click",() => {
    
    if (window.innerWidth >= 510) {
        burgerMenu.style.display = "flex";
        burgerMenuIcons.appendChild(callLogo);
        burgerMenuIcons.appendChild(chatLogo);
        burgerMenuIcons.appendChild(profileLogo);
        header.style.opacity = 0.05;
        main.style.opacity = 0.05;
        burgerMenu.style.height = "100vh";
        burgerMenu.style.boxShadow = "1px 0 40px rgb(172, 170, 200)";
        return
    }
    else if (window.innerWidth >= 320) {
        burgerMenu.style.display = "flex";
        burgerMenu.style.width = "100%";
        burgerMenuIcons.appendChild(callLogo);
        burgerMenuIcons.appendChild(chatLogo);
        burgerMenuIcons.appendChild(profileLogo);
        return
    }
    else {
        burgerMenu.style.display = "flex";
        burgerMenu.style.width = "320";
        burgerMenuIcons.appendChild(callLogo);
        burgerMenuIcons.appendChild(chatLogo);
        burgerMenuIcons.appendChild(profileLogo);
        return
    }
})

burgerCloseButton.addEventListener("click",() => {
    burgerMenu.style.display = "none";
    headerMenuRight.appendChild(callLogo);
    headerMenuRight.appendChild(chatLogo);
    headerMenuRight.appendChild(profileLogo);
    header.style.opacity = 1;
    main.style.opacity = 1;
})
