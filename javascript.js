// Initialize AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Add animation to hero section elements when carousel slides
document
  .querySelectorAll("#heroCarousel .carousel-item")
  .forEach((item, index) => {
    item.addEventListener("slide.bs.carousel", function () {
      const caption = this.querySelector(".carousel-caption");
      if (caption) {
        caption
          .querySelector(".hero-title")
          .classList.add("animate__fadeInDown");
        caption
          .querySelector(".hero-subtitle")
          .classList.add("animate__fadeInUp");
        caption.querySelector(".d-flex").classList.add("animate__fadeInUp");
      }
    });
  });

// Auto rotate carousel
const myCarousel = document.getElementById("heroCarousel");
if (myCarousel) {
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 7000,
    pause: false,
  });
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Add smooth scroll when swipe indicator is clicked
document
  .querySelector(".swipe-indicator")
  .addEventListener("click", function () {
    document.querySelector(".hero-section").scrollIntoView({
      behavior: "smooth",
    });
  });

// Hide swipe indicator when user scrolls
window.addEventListener("scroll", function () {
  const indicator = document.querySelector(".swipe-indicator");
  if (window.scrollY > 50) {
    indicator.style.opacity = "0";
    indicator.style.transition = "opacity 0.5s ease";
  } else {
    indicator.style.opacity = "1";
  }
});

// Year on footer
const currentYear = new Date().getFullYear();
const year = document.getElementById('year').innerHTML = currentYear;