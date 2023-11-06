resetmode();
document.querySelector(".nav-item.mode").onclick = () => {
  if (
    document.querySelector(".nav-item.mode i").classList.contains("fa-moon")
  ) {
    document.querySelector(".nav-item.mode i").classList.remove("fa-moon");
    document.querySelector(".nav-item.mode i").classList.add("fa-sun");
    document.body.classList.remove("bg-dark");
    document.body.classList.add("bg-light");
  } else if (
    document.querySelector(".nav-item.mode i").classList.contains("fa-sun")
  ) {
    document.querySelector(".nav-item.mode i").classList.remove("fa-sun");
    document.querySelector(".nav-item.mode i").classList.add("fa-moon");
    document.body.classList.remove("bg-light");
    document.body.classList.add("bg-dark");
  }
  resetmode();
};
function resetmode() {
  document.querySelector("nav").classList.remove("navbar-dark");
  document.querySelector("nav").classList.remove("navbar-light");
  if (document.body.classList.contains("bg-dark")) {
    document.querySelector("nav").classList.add("navbar-dark");
  } else if (document.body.classList.contains("bg-light")) {
    document.querySelector("nav").classList.add("navbar-light");
  }
}
var swiper = new Swiper(".swiper-con", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    0: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});
document.querySelectorAll("[copy]").forEach((item) => {
  item.onclick = () => {
    input = document.createElement("input");
    input.setAttribute("value", item.getAttribute("copy"));
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  };
});
