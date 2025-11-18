// === Hamburger Menu Toggle ===
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Background blur
  if (navLinks.classList.contains("active")) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
});

// === Smooth Scroll aur Close Menu ===
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });

    navLinks.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

// === Projects Click ===
function openProject(url) {
  window.open(url, "_blank");
}

// === Year Auto ===
document.getElementById("year").textContent = new Date().getFullYear();
