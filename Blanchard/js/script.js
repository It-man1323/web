const maxWidth1400 = window.matchMedia('(max-width: 1400px) and (min-width:1024px)');
const maxWidth1024 = window.matchMedia('(max-width: 1024px)');
const maxWidth1023 = window.matchMedia('(max-width: 1023px) and (min-width:768px)');
const maxWidth767 = window.matchMedia('(max-width: 767px)');
const maxWidth600 = window.matchMedia('(max-width: 600px)');

let projectsLink = document.querySelector('.projects__descr-link');
let eventSlider = document.querySelector('.event__slider-container');
let galleryContentRight = document.querySelector('.gallery__content-right');
let contentFormBtn = document.querySelector('.contacts__form-btn');
let slideBtn = document.querySelectorAll('.gallery__slider-slide');
let slideContent = document.querySelectorAll('.gallery__info-content');
let slideElem = document.querySelector('.gallery__info');
let slideClose = document.querySelectorAll('.gallery__info-btn');

let search = document.getElementById('search');
let searchBtn = document.getElementById('searchBtn');
let searchInput = document.getElementById('searchInput');
let searchClose = document.getElementById('searchClose');
let headerLogo = document.querySelector('.header-top__logo');
let headerBurger = document.querySelector('.header-top__burger');
let headerDisclosure = document.querySelector('.header-top__content');

let headerTopItemLink = document.querySelector('.header-top__list');
let headerTopLoginLink = document.querySelector('.header-top__login-link');
let headerTopLogoLink = document.querySelector('.header-top__logo-link');

let headerItemLink = document.querySelectorAll('.header-top__item-link');
let menuItemsTab = headerTopItemLink.querySelectorAll("*[tabindex]");
// -----------------------------------------header----------------------------------------
const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

// -----------------------------------------hero slider----------------------------------------
const swiper = new Swiper('.js-hero-swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

// -----------------------------------------gallery----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    slidesPerGroup: 3,
    pagination: {
      el: ".gallery__container .gallery__navigation-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__navigation-next",
      prevEl: ".gallery__navigation-prev"
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },

      441: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      1023: {
        slidesPerView: 2,
        spaceBetween: 34
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});

// -----------------------------------------select----------------------------------------
const select = document.querySelector('select');
const choices = new Choices (select, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
});

// -----------------------------------------accordion----------------------------------------
(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();

// -----------------------------------------tabs----------------------------------------
const paramsTab = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};

function setTabs(paramsTab) {
  const tabBtns = document.querySelectorAll(`.${paramsTab.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${paramsTab.wrap}`);
    const currentContent = wrap.querySelector(`.${paramsTab.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${paramsTab.content}`);

    contents.forEach((el) => {
      el.classList.remove(paramsTab.active);
    });

    currentContent.classList.add(paramsTab.active);

    tabBtns.forEach((el) => {
      el.classList.remove(paramsTab.active);
    });

    this.classList.add(paramsTab.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(paramsTab);

// -----------------------------------------event-slider----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let eventSlider = new Swiper(".event__slider-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    slidesPerGroup: 3,
    pagination: {
      el: ".event__navigation-pagination",
      clickable: true,
      // type: "fraction"
    },
    navigation: {
      nextEl: ".event__navigation-next",
      prevEl: ".event__navigation-prev"
    },

    breakpoints: {
      // 441: {
      //   slidesPerView: 2,
      //   spaceBetween: 30
      // },

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 34
      },

      601: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      1020: {
        slidesPerView: 3,
        spaceBetween: 27
      },

      1065: {
        slidesPerView: 3,
        spaceBetween: 20
      },

      1400: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    // a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",
    // btnVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
            slide.querySelector('.event__card-link').tabIndex = "-1";
          } else {
            slide.tabIndex = "";
            slide.querySelector('.event__card-link').tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
            slide.querySelector('.event__card-link').tabIndex = "-1";
          } else {
            slide.tabIndex = "";
            slide.querySelector('.event__card-link').tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});

// -----------------------------------------projects-slider----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let projectsSlider = new Swiper(".projects__slider-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    navigation: {
      nextEl: ".projects__navigation-next",
      prevEl: ".projects__navigation-prev"
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50
      },

      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 32
      },

      1020: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
            slide.querySelector ('.projects__slide-link').tabIndex = "-1";
          } else {
            slide.querySelector ('.projects__slide-link').tabIndex = "";
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
            slide.querySelector ('.projects__slide-link').tabIndex = "-1";
          } else {
            slide.querySelector ('.projects__slide-link').tabIndex = "";
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});

// -----------------------------------------address-form----------------------------------------
let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

const validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#d11616',
  },
});

validation.addField ("#name", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели имя',
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум 2 символа',
  },
  {
    rule: 'maxLength',
    value: 10,
    errorMessage: 'Максимум 10 символов',
  }
])
.addField ("#tel", [
  {
    required: true,
    validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 0);
    },
    errorMessage: 'Вы не ввели телефон',
  },
  {
    required: true,
    validator: (value)  => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 10);
    },
    errorMessage: 'Вы не ввели телефон полностью',
  }
])

// -----------------------------------------tooltip----------------------------------------
tippy('.js-tooltip-one', {
  theme: 'js-tooltip-theme',
  // theme: 'js-tooltip-theme-one',
  content: 'Пример современных тенденций — современная методология разработки',
  maxWidth: 264,
  duration: [300, 250],
  offset: [0, 12],

});

tippy('.js-tooltip-two', {
  theme: 'js-tooltip-theme',
  // theme: 'js-tooltip-theme-two',
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  maxWidth: 270,
  duration: [300, 250],
  offset: [0, 12],
});

tippy('.js-tooltip-three', {
  theme: 'js-tooltip-theme',
  // theme: 'js-tooltip-theme-three',
  content: 'В стремлении повысить качество',
  maxWidth: 264,
  duration: [300, 250],
  offset: [0, 12],
});

// -----------------------------------------map----------------------------------------
ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../icon/label.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

// -----------------------------------------slide-open-close----------------------------------------
slideBtn.forEach(function (el) {
  el.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.body.classList.add('stop-scroll');
    slideElem.classList.add('gallery__info--active');
    document.querySelector(`[data-target="${path}"]`).classList.add('gallery__info-content--active');
  });
});

slideClose.forEach(function (el) {
  el.addEventListener('click', function () {

    document.body.classList.remove('stop-scroll');
    slideElem.classList.remove('gallery__info--active');
    slideContent.forEach(function (elem) {elem.classList.remove('gallery__info-content--active')});
  });
});

// -----------------------------------------burger----------------------------------------
let burger = document.getElementById('burger');
let burgerMenu =document.querySelector('.header-top__menu');


function burgerActive() {
  searchBtn.classList.remove('search-icon--visible');
  searchInput.classList.remove('search-input--visible');
  searchClose.classList.remove('search-close--visible');
  // --------
  headerDisclosure.classList.remove('header--open');
  headerDisclosure.classList.add('header--close');
  // ----------
  headerBurger.classList.remove('burger--hidden');
  headerBurger.classList.add('burger--visible');
  search.classList.remove('search--active');

  if (maxWidth1024.matches) {
    headerLogo.classList.remove('logo--hidden');
    headerLogo.classList.add('logo--visible');
  }
}

burger.addEventListener('click', function () {
  burger.classList.toggle ('burger--active');
  burgerMenu.classList.toggle ('menu--active');
  document.body.classList.toggle('stop-scroll');

  burgerActive();

  if(burger.classList.contains('burger--active')) {
    headerTopLoginLink.setAttribute("tabindex", "0");
    headerTopLogoLink.setAttribute("tabindex", "-1");
    for (let item of menuItemsTab) {
      item.setAttribute("tabindex", "0");
    }
  } else {
    headerTopLoginLink.setAttribute("tabindex", "-1");
    headerTopLogoLink.setAttribute("tabindex", "0");
    for (let item of menuItemsTab) {
      item.setAttribute("tabindex", "-1");
    }
  }
});

headerItemLink.forEach((elem) => {
  elem.addEventListener('click', () => {
    burger.classList.toggle ('burger--active');
    burgerMenu.classList.toggle ('menu--active');
    document.body.classList.remove('stop-scroll');

    if(burger.classList.contains('burger--active')) {
      headerTopLoginLink.setAttribute("tabindex", "0");
      headerTopLogoLink.setAttribute("tabindex", "-1");
      for (let item of menuItemsTab) {
        item.setAttribute("tabindex", "0");
      }
    } else {
      headerTopLoginLink.setAttribute("tabindex", "-1");
      headerTopLogoLink.setAttribute("tabindex", "0");
      for (let item of menuItemsTab) {
        item.setAttribute("tabindex", "-1");
      }
    }
  });
});

// menuLinks.forEach(function (element) {
//   element.addEventListener('click', function () {
//     burger.classList.remove('burger--active');
//     menu.classList.remove('header__nav__list--active');
//     document.body.classList.remove('stop-scroll');
//   });
// });

// --------------------------search--------------------------
searchBtn.addEventListener('click', function() {
  searchBtn.classList.add('search-icon--visible');
  searchInput.classList.add('search-input--visible');
  searchClose.classList.add('search-close--visible');
  // --------
  headerDisclosure.classList.remove('header--close');
  headerDisclosure.classList.add('header--open');
  // ----------
  headerBurger.classList.remove('burger--visible');
  headerBurger.classList.add('burger--hidden');
  search.classList.add('search--active');

  if (maxWidth1024.matches) {
    headerLogo.classList.remove('logo--visible');
    headerLogo.classList.add('logo--hidden');
  }
});

searchClose.addEventListener('click', function () {
  burgerActive();
});

let searchCurrentBtn = document.getElementById ('searchCurrentBtn');
searchCurrentBtn.addEventListener('click' , function() {
  searchCurrentBtn.preventDefault();
});

searchBtn.addEventListener('click', function () {
  if (!search.matches('search--active')) {
    searchBtn.setAttribute("type", "submit");
  } else {
    searchBtn.removeAttribute("type");
  }
});

searchClose.addEventListener('click', function () {
  searchBtn.removeAttribute("type");
});

// *_________________scroll-del search_________________
let scroll = window.scrollY;
const scrollChange = 80;

window.addEventListener('scroll', function () {
  scroll = window.scrollY;
  if (scroll >= scrollChange) {
    burgerActive();
  }
});

function mediaQ()  {
  if (maxWidth1400.matches) {
    galleryContentRight.style.width="calc(594 / 924 * 100%)";
    contentFormBtn.innerHTML = "Заказать обратный звонок";

    headerTopLoginLink.setAttribute("tabindex", "-1");
    headerTopLogoLink.setAttribute("tabindex", "0");
    for (let item of menuItemsTab) {
      item.setAttribute("tabindex", "-1");
    }

  } else if (maxWidth1023.matches) {
    projectsLink.innerHTML = "blanchard-art.ru";
    contentFormBtn.innerHTML = "Заказать обратный звонок";
    galleryContentRight.style.width="100%";
  } else if (maxWidth767.matches) {
    projectsLink.innerHTML = "blanchard-art.ru/projects/about";
    contentFormBtn.innerHTML = "Заказать";
    galleryContentRight.style.width="100%";
  } else {
    contentFormBtn.innerHTML = "Заказать обратный звонок";
    projectsLink.innerHTML = "blanchard-art.ru/projects";
    galleryContentRight.style.width="calc(1150 / 1600 * 100%)";
  }

  if (maxWidth600.matches) {
    eventSlider.style.maxWidth = "400px";
  } else {
    eventSlider.style.maxWidth = "none";
  }
}

mediaQ();

window.addEventListener('resize', () => {
  mediaQ();
});


