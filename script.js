let toggalBtn = document.querySelector(".toggal-btn");
let menuWrapper = document.querySelector(".menu-wrapper");
let overlay = document.querySelector(".overlay");
toggalBtn.addEventListener("click", () => {
  menuWrapper.classList.toggle("show");
  overlay.classList.toggle("show");
});

let closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  menuWrapper.classList.remove("show");
  overlay.classList.remove("show");
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
