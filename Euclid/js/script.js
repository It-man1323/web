//$ burger
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav__list');
let menuLinks = menu.querySelectorAll('.header__list-item__link');

burger.addEventListener('click', function () {
   burger.classList.toggle('burger--active');
   menu.classList.toggle('header__nav__list--active');
   document.body.classList.toggle('stop-scroll');
})

//%  Стоп скрол добавить класс

menuLinks.forEach(function (element) {
   element.addEventListener('click', function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav__list--active');
      document.body.classList.remove('stop-scroll');
   })
})

// $ slider
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

//$ tabs
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

// $ accordion
new Accordion('.faq__accordion-list', {
   elementClass: 'faq__accordion-item',
   triggerClass: 'faq__accordion-trigger',
   panelClass: 'faq__accordion-panel',
   activeClass: 'faq__accordion--active'
});

//$  faq - icon
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

// разобраться с opacity и dn при проверке
const btnSearch = document.querySelector('.header__search__btn');
const blockSearch = document.querySelector('.header__block__search--active');
const navList = document.querySelector('.header__nav__list');
const searchNone = document.querySelector('.header__search__btn--none');
const logoNone = document.querySelector('.header__logo');
const burgerNone = document.querySelector('.header__content-burger');

btnSearch.addEventListener('click', function () {
   if (blockSearch.matches('[class$="logo__op-0"]')) {
      console.log(true);
      blockSearch.classList.remove('logo__op-0');
      blockSearch.classList.add('logo__op-1');
      navList.classList.add('logo__op-0');
      navList.classList.remove('logo__op-1');
      logoNone.classList.add('logo-1024__op-0');
      logoNone.classList.remove('logo-1024__op-1');
      burgerNone.classList.add('burger__op-0');
      burgerNone.classList.remove('burger__op-1');
   } else if (navList.matches('[class$="logo__op-0"]')) {
      blockSearch.classList.remove('logo__op-1');
      blockSearch.classList.add('logo__op-0');
      navList.classList.add('logo__op-1');
      navList.classList.remove('logo__op-0');
      logoNone.classList.add('logo-1024__op-1');
      logoNone.classList.remove('logo-1024__op-0');
      burgerNone.classList.add('burger__op-1');
      burgerNone.classList.remove('burger__op-0');
      console.log(false);
   }

});



searchNone.onclick = function () {
   document.querySelector('.header__search__str').value = "";
}

// if (blockSearch.matches('[class$="trOp0"]')) {
//    console.log (true);
//    blockSearch.classList.remove ('trOp0');
//    blockSearch.classList.add ('trOp1');
//    navList.classList.add ('trOp0');
//    navList.classList.remove ('trOp1');
// } else if (navList.matches('[class$="trOp0"]')) {
//    blockSearch.classList.remove ('trOp1');
//    blockSearch.classList.add ('trOp0');
//    navList.classList.add ('trOp1');
//    navList.classList.remove ('trOp0');
//    console.log (false);
// }