
const buttonTop = document.getElementById("buttonTop")

buttonTop.addEventListener('scroll',(event) => {
    const returnToTop = buttonTop;
    if (document.body.scrollTop > 200 || documentElement.scrollTop > 200) {
        buttonTop.style.display = 'block' ;
    } else {
        buttonTop.style.display = 'none';
    }
    
}) ;

buttonTop.addEventListener('click', () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 200);
});