function blockSearchVisible() {
   // blockSearch - visible
   blockSearch.classList.remove('op-0');
   blockSearch.classList.add('op-1');
   // navList - no visible
   navList.classList.add('op-0');
   navList.classList.remove('op-1');
   // logoNone - no visible
   logoNone.classList.add('op-0__1024');
   logoNone.classList.remove('op-1__1024');
   // burgerNone - no visible
   burgerNone.classList.add('burger__op-0');
   burgerNone.classList.remove('burger__op-1');
   //  burger & menu - no visible
   burger.classList.remove('burger--active');
   menu.classList.remove('header__nav__list--active');
};

function navListVisible() {
   // blockSearch -no visible 
   blockSearch.classList.remove('op-1');
   blockSearch.classList.add('op-0');
   // navList - visible
   navList.classList.add('op-1');
   navList.classList.remove('op-0');
   // logoNone - visible
   logoNone.classList.add('op-1__1024');
   logoNone.classList.remove('op-0__1024');
   // burgerNone - visible
   burgerNone.classList.add('burger__op-1');
   burgerNone.classList.remove('burger__op-0');
};

//$ _________________burger_________________
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav__list');
let menuLinks = menu.querySelectorAll('.header__list-item__link');

burger.addEventListener('click', function () {
   burger.classList.toggle('burger--active');
   menu.classList.toggle('header__nav__list--active');
   if (burger.classList.contains("burger--active")) {
      document.body.classList.add('stop-scroll');
   } else document.body.classList.remove('stop-scroll');
   navListVisible();
});

menuLinks.forEach(function (element) {
   element.addEventListener('click', function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav__list--active');
      document.body.classList.remove('stop-scroll');
   });
});

//$ _________________heroBtn_________________
const heroBtn = document.querySelector('.hero__btn');
heroBtn.addEventListener('click', function () {
   navListVisible();
   document.body.classList.remove('stop-scroll');
});

//$ _________________slider_________________
const swiper = new Swiper('.swiper', {
   loop: true,
   speed: 1500,
   effect: 'fade',
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   // autoplay: {
   //    delay: 8000,
   // },
});

//$ _________________tabs_________________
let tabsBtn = document.querySelectorAll('.how__item__btn');
let tabsItem = document.querySelectorAll('.how__content');

tabsBtn.forEach(function (el) {
   el.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) { btn.classList.remove('how__item__btn--active') });
      e.currentTarget.classList.add('how__item__btn--active');

      tabsItem.forEach(function (elem) { elem.classList.remove('how__content--active') });
      document.querySelector(`[data-target="${path}"]`).classList.add('how__content--active');
   });
});

//$ _________________accordion_________________
new Accordion('.faq__accordion-list', {
   elementClass: 'faq__accordion-item',
   triggerClass: 'faq__accordion-trigger',
   panelClass: 'faq__accordion-panel',
   activeClass: 'faq__accordion--active'
});

//$  _________________faq - icon_________________
const btns = document.querySelectorAll('.faq__accordion-trigger');
const activeIcon = document.querySelector('.faq__accordion-icon');
let icons = document.querySelectorAll('.faq__accordion-icon');
let lis = document.querySelectorAll('li.faq__accordion-item');
let svg = document.querySelectorAll('svg.faq__accordion-icon');
let svgActive = document.querySelector('.faq__accordion-trigger--active');

btns.forEach(function (elem) {
   elem.addEventListener('click', function () {
      const icons = document.querySelectorAll('.faq__accordion-icon');
      const active = elem.querySelector('.faq__accordion-icon');
      if (active.matches('[class$="faq__accordion-trigger--active"]')) {
         active.classList.add('faq__accordion-trigger--default');
      } else {
         icons.forEach(function (el) {
            el.classList.remove('faq__accordion-trigger--active');
            el.classList.remove('faq__accordion-trigger--default');
         });
         active.classList.add('faq__accordion-trigger--active');
      }
   });
});

//$ _________________search_________________
const btnSearch = document.querySelector('.header__search__btn');
const blockSearch = document.querySelector('.header__block__search--active');
const navList = document.querySelector('.header__nav__list');
const searchNone = document.querySelector('.header__search__btn--none');
const logoNone = document.querySelector('.header__logo');
const burgerNone = document.querySelector('.header__content-burger');

btnSearch.addEventListener('click', function () {
   if (blockSearch.matches('[class$="op-0"]')) {
      blockSearchVisible();
      // document.body.classList.add('stop-scroll');
   } else if (navList.matches('[class$="op-0"]')) {
      navListVisible();
      // document.body.classList.remove('stop-scroll');
   }
});

// *_________________input-clear_________________
searchNone.onclick = function () {
   document.querySelector('.header__search__str').value = "";
}

// *_________________scroll-del search_________________
let scroll = window.scrollY;
const scrollChange = 1;

window.addEventListener('scroll', function () {
   scroll = window.scrollY;
   if (scroll >= scrollChange) {
      navListVisible();
   }
});