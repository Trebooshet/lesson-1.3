new Swiper('.brend-swiper', {
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination-brend',
      clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: 24,
  });

  new Swiper('.technic-swiper', {
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination-technic',
      clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: 24,
  });

  new Swiper('.prices-swiper', {
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination-prices',
      clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: 24,
  });

const brendGrid = document.querySelector(".brend-grid");
const showAllBrendsButton = document.querySelector("#show-all-brends_button");
const brendsDoubleArrow = document.querySelector("#brends_double-arrow");
const showAllBrendsButtonText = document.querySelector(".show-all-brends_text");
let isAllBrendsShown = false;
const technicGrid = document.querySelector(".technic-grid");
const showAllTechnicsButton = document.querySelector("#show-all-technics_button");
const showAllTechnicsButtonText = document.querySelector(".show-all-technics_text");
const technicsDoubleArrow = document.querySelector("#technics_double-arrow");
let isAllTechnicsShown = false;

function showAllBrends() {
    brendGrid.style.height = "auto";
    showAllBrendsButtonText.innerHTML = "Скрыть";
    brendsDoubleArrow.style.transform = "scaleY(-1.2)";
    isAllBrendsShown = true;
}

function hideAllBrends() {
    brendGrid.style.height = "168px";
    showAllBrendsButtonText.innerHTML = "Показать все";
    brendsDoubleArrow.style.transform = "scaleY(1.2)"
    isAllBrendsShown = false;
}

showAllBrendsButton.addEventListener("click", () => {
    !isAllBrendsShown ? showAllBrends() : hideAllBrends();
})

function showAllTechnics() {
    technicGrid.style.height = "auto";
    showAllTechnicsButtonText.innerHTML = "Скрыть";
    technicsDoubleArrow.style.transform = "scaleY(-1.2)";
    isAllTechnicsShown = true;
}

function hideAllTechnics() {
    technicGrid.style.height = "168px";
    showAllTechnicsButtonText.innerHTML = "Показать все";
    technicsDoubleArrow.style.transform = "scaleY(1.2)"
    isAllTechnicsShown = false;
}

showAllTechnicsButton.addEventListener("click", () => {
    !isAllTechnicsShown ? showAllTechnics() : hideAllTechnics();
})