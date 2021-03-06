const toggler = document.querySelector(".toggler");
const navI = document.querySelectorAll(".nav_item");

toggler.addEventListener("click", () => {
  navI.forEach((el) => {
    el.classList.toggle("active");
  });
});

new Glider(document.querySelector(".glider"), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: ".dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: "2",
        slidesToScroll: "2",
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 1200px
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        itemWidth: 150,
        duration: 0.25,
      },
    },
  ],
});
