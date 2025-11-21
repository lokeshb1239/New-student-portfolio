// Smooth Scroll for Buttons and Nav Links
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Responsive Navbar Toggle
const menuBtn = document.createElement("div");
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML = "☰";
document.querySelector("nav").prepend(menuBtn);

const navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
});
// Toggle Menu on Mobile
const nav = document.querySelector("nav");
const navMenu = document.querySelector("nav ul");

nav.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 && e.target.tagName === "NAV") {
        navMenu.classList.toggle("active");
    }
});
