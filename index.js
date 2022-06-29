const swiper = new Swiper(".swiper", {
  autoplay: true,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const section = document.getElementById("section");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const about = document.getElementById("about");

function observador(entries, observer) {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("active");
    }
  });
}

const observer = new IntersectionObserver(observador, {
  root: null,
  rootMargin: "-100px",
});

observer.observe(section);
observer.observe(section2);
observer.observe(section3);
observer.observe(about);
