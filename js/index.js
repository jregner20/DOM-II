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

