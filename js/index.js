// Your code goes here


// Turns Nav buttons red on hover
document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("mouseover", () => {
        el.style.color="red";
    })
});

// Turns Fun Bus header blue on double click
const elem = document.querySelector(".logo-heading");
elem.addEventListener("dblclick", () => {
    elem.style.color = "blue";
})

// Changes Header image to Jerome Bettis
const headerImg = document.querySelector(".intro img");
window.addEventListener("resize", () => {
    headerImg.src = "img/TheBus2.jpg";
    console.log(headerImg);
})

// Changes Welcome to Fun Bus font-size to be bigger when right clicked

const click = document.querySelector(".intro h2");
click.addEventListener("contextmenu", () => {
    click.style.fontSize = "6rem";
})

// Shadows the 1st content header when mouse on

const shadow = document.querySelector(".content-section h2");
shadow.addEventListener("mouseenter", () => {
    shadow.style.textShadow = "5px 2px 2px";
})

// Underlines the 3rd content header when mouses leaves

const underl = document.querySelector(".content-destination h2");
underl.addEventListener("mouseleave", () => {
    underl.style.textDecorationLine = "underline";
})

// When any key is released the background turns purple

const key1 = document.querySelector("body");
key1.addEventListener("keyup", () => {
    key1.style.background = "purple";
})

// When any key is press down, the background turns cyan

const key2 = document.querySelector("body");
key2.addEventListener("keydown", () => {
    key2.style.background = "cyan";
})

// When you click on the first content section image, it disappears

const clork = document.querySelector(".content-section img");
clork.addEventListener("click", () => {
    clork.style.display = "none";
})

// When you try to drag the last content image, it gets bigger

const crazy = document.querySelector(".content-destination img");
crazy.addEventListener("drag", () => {
    crazy.style.transform = "scale(2)";
})