// Your code goes here


// Turns Nav buttons red on hover
document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("mouseover", () => {
        el.style.color="red";
    })
});

// Turns Fun Bus header blue on double click
document.querySelectorAll(".logo-heading");
funBus.addEventListener("dblclick", () => {
    funBus.style.color="blue";
})



// const headerImg = document.querySelector(".intro img");
// headerImg.addEventListener("resize", () => {
//     headerImg.src = "img/The-Bus2.jpg";
// })