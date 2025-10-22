// ✅ Smooth scroll effect for navbar links
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ✅ Hero button click alert
const heroButton = document.querySelector('.cta-btn');
if (heroButton) {
  heroButton.addEventListener('click', () => {
    alert('Thank you for your interest! We will contact you soon 😊');
  });
}

// ✅ Fade-in effect on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.about, .contact').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});
