const sectionSlider = document.getElementById("slider")
const imgArt = document.getElementById("Art")
const imgBooks = document.getElementById("Books")
const imgLaptops = document.getElementById("Laptops")
const left = document.getElementById("buttonLeft")
const right = document.getElementById("buttonRight")

right.addEventListener("click", (event) => {

    if (sectionSlider === imgArt){
        imgArt.style.display = "none"
        sectionSlider = imgBooks
        imgBooks.style.display = "block"
    } else if (sectionSlider === imgBooks){
        imgBooks.style.display = "none"
        sectionSlider = imgLaptops
        imgLaptops.style.display = "block"
    } else if (sectionSlider === imgLaptops){
        imgLaptops.style.display = "none"
        sectionSlider = imgArt
        imgArt.style.display = "block"
    }
})
