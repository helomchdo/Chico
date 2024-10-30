const hamburguer = document.querySelector(".bx");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a")

hamburguer.addEventListener("click", () => 
nav.classList.toggle("active"));

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active"); 
    });
});