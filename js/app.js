let hamburger = document.querySelector(".nav__hamburguer");
let navContainer = document.querySelector(".nav__links-container");

hamburger.addEventListener("click", function() {
    navContainer.classList.toggle("nav__links-container--visible");
    if(hamburger.src.includes("close")){
        hamburger.src = "/images/icon-hamburger.svg";
    }
    else{
        hamburger.src = "/images/icon-close.svg";
    }
});
