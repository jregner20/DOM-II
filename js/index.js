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

//mouseenter style.textShadow

const shadow = document.querySelector(".content-section h2");
shadow.addEventListener("mouseenter", () => {
    shadow.style.textShadow = "5px 2px 2px";
})

//mouseleave

const underl = document.querySelector(".content-destination h2");
underl.addEventListener("mouseleave", () => {
    underl.style.textDecorationLine = "underline";
})

//keyup

const key1 = document.querySelector("body");
key1.addEventListener("keyup", () => {
    key1.style.background = "purple";
})

//keydown

const key2 = document.querySelector("body");
key2.addEventListener("keydown", () => {
    key2.style.background = "cyan";
})

//click

//scroll
