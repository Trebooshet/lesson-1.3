const checkboxReadMore = document.getElementById("checkbox_read_more")
const labelReadMore = document.getElementById("label_read_more")
const mainText = document.getElementById("main__text")

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
}
else {
    labelReadMore.style.display = "flex";
}}

window.addEventListener('resize', resizeReadMore)