const checkboxReadMore = document.getElementById("checkbox_read_more")
const labelReadMore = document.getElementById("label_read_more")
const mainText = document.getElementById("main_text")

labelReadMore.addEventListener("click", function(){
    labelReadMore.style.display = "none";
    mainText.style.height = "auto";
})


