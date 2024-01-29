const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");


hamburger.addEventListener("click", () =>
nav.classList.toggle("active"));

window.addEventListener("scroll", function(){
    let header = document.querySelector("#header")
    header.classList.toggle('roll', window.scrollY > 250)
})

function scrollClick(event) {
    event.preventDefault();

    let cardPraia = document.querySelector("#cardPraia");

    const offsetTop = cardPraia.offsetTop;
    const scrollY = window.scrollY || window.pageYOffset;
    const destination = offsetTop - scrollY;

    // Verifica se a seção cardPraia já está visível
    if (destination !== 0) {
        window.scrollTo({
            top: destination,
            behavior: "smooth"
        });
    }
}


