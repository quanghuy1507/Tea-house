var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    274: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// ===fitler================================================
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menus = $$(".product_menu-list");
const items = $$(".item");

const menuActive = $(".product_menu-list.active");

menus.forEach((menu, index) => {
  const item = items[index];

  menu.onclick = function () {
    $(".product_menu-list.active").classList.remove("active");
    $(".item.active").classList.remove("active");

    this.classList.add("active");
    item.classList.add("active");
  };
});

// navbar reponsive

const Nav = $(".navbar");

$(".menu").onclick = () => {
  Nav.classList.add("active");
};

$(".fa-xmark").onclick = () => {
  Nav.classList.remove("active");
};
