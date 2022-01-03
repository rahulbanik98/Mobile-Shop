let next = document.querySelector(".Next");
let back = document.querySelector(".back");
let carousel = document.querySelector(".car-cards");

let angle = 0;


//      -----------------------------ACTIVE BUTTONS------------------------
next.addEventListener("click", () =>
{
    angle -= 45;
    carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});

back.addEventListener("click", () =>
{
    angle += 45;
    carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});