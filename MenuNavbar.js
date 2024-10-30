
const buttonImg = document.getElementById ("imgButton")
const listButton = document.getElementById("navbarList")


//Damos funcionalidad a nuestra imagen.

buttonImg.addEventListener('click', (event) => {
event.preventDefault()
let list = listButton
if(list.style.display === 'none' || list === ''){
    list.style.display = 'block'
} else {
    list.style.display = 'none'
}

})