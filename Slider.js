let sectionSlider = document.getElementById("slider")
const imgArt = document.getElementById("Art")
const imgBooks = document.getElementById("Books")
const imgLaptops = document.getElementById("Laptops")
const left = document.getElementById("buttonLeft")
const right = document.getElementById("buttonRight")
const buttonArt = document.getElementById("buttonArt")
const buttonBooks = document.getElementById("buttonBooks")
const buttonLaptops = document.getElementById("buttonLaptops")



right.addEventListener("click", (event) => {
    
    if (imgArt.style.display !== 'none'){
        imgArt.style.display = "none"
        imgBooks.style.display = "block"
        buttonArt.style.backgroundColor = "white"
        buttonBooks.style.backgroundColor = "#08A6E4"
        buttonLaptops.style.backgroundColor = "white"
    }else if (imgBooks.style.display !== 'none'){
        imgBooks.style.display = "none"
        imgLaptops.style.display = "block"
        buttonArt.style.backgroundColor = "white"
        buttonBooks.style.backgroundColor = "white"
        buttonLaptops.style.backgroundColor = "#08A6E4"
    }else if (imgLaptops.style.display !== 'none'){
        imgLaptops.style.display = "none"
        imgArt.style.display = "block"
        buttonArt.style.backgroundColor = "#08A6E4"
        buttonBooks.style.backgroundColor = "white"
        buttonLaptops.style.backgroundColor = "white"
    }
})

left.addEventListener("click", (event) => {

    if (imgArt.style.display !== 'none'){
        imgArt.style.display = "none"
        imgLaptops.style.display = "block"
        buttonArt.style.backgroundColor = "white"
        buttonBooks.style.backgroundColor = "white"
        buttonLaptops.style.backgroundColor = "#08A6E4"
    }else if (imgLaptops.style.display !== 'none'){
        imgLaptops.style.display = "none"
        imgBooks.style.display = "block"
        buttonArt.style.backgroundColor = "white"
        buttonBooks.style.backgroundColor = "#08A6E4"
        buttonLaptops.style.backgroundColor = "white"
    }else if (imgBooks.style.display !== 'none'){
        imgBooks.style.display = "none"
        imgArt.style.display = "block"
        buttonArt.style.backgroundColor = "#08A6E4"
        buttonBooks.style.backgroundColor = "white"
        buttonLaptops.style.backgroundColor = "white"
    }
})

    

