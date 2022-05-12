const toggler = document.querySelector(".toggler");
const navI = document.querySelectorAll(".nav_item");

toggler.addEventListener("click", () => {
  navI.forEach((el) => {
    el.classList.toggle("active");
  });
});

new Glider(document.querySelector(".glider"), {
  slidesToShow: 3,
  slidesToScroll: 2,
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});
