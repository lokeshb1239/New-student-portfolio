const images = document.querySelectorAll(".gallery-item img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.getElementById("closeBtn");

// Click image to open popup
images.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
        document.body.style.overflow = "hidden"; // Stop page scroll
    });
});

// Close popup
function closePopup() {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closePopup);

// Close when clicking outside image
popup.addEventListener("click", (e) => {
    if (e.target !== popupImg) closePopup();
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
});
