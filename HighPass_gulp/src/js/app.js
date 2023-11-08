import * as modFunction from "./modules/functions.js";

modFunction.isWebp();

// выбираем все ссылки на странице
const links = document.querySelectorAll('a[href^="#"]');

// добавляем обработчик клика на каждую ссылку
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // отменяем стандартное поведение ссылки
    event.preventDefault();

    // document.classList.add('.scroll-stop');
    document.body.style.overflow = "auto";
    // получаем id элемента, на который ссылается ссылка
    const targetId = link.getAttribute('href').slice(1);
    
    // находим элемент на странице
    const targetElement = document.getElementById(targetId);
    
    // вычисляем расстояние до элемента
    const offsetTop = targetElement.offsetTop;
    
    // плавно скроллим к элементу
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
    
    burgertl.reverse();
  });
});


// search
const search = document.getElementById('search');
const btnSearch = document.getElementById('btn-search');

const searchtl = gsap.timeline({ paused: true });

let mm = gsap.matchMedia();

const animSearch = () => {
  searchtl.fromTo('#input-search', { display: 'none' }, { display: 'block'});
  searchtl.fromTo('#input-search', { opacity: 0 }, { opacity: 1, duration: .2, ease: 'sine.out' }, '<');
  searchtl.fromTo('#searchOpen', { display: 'block', scaleX: 1}, { display: 'none', scaleX: 0, duration: .2, ease: 'sine.out' }, '<');
  searchtl.fromTo('#searchClose', { display: 'none', scaleX: 0}, { display: 'block', scaleX: 1, duration: .2, ease: 'sine.out' }, '<');
  searchtl.fromTo('#search', { width: 25 }, { width: 280, duration: .5, ease: 'sine.out' }, '<');
}

mm.add("(min-width: 62em)", () => {
  searchtl.to('.menu-hidden', { display: 'none' });
  animSearch();
});

mm.add("(max-width: 62em)", () => {
  animSearch();
});

const mediaQuery = window.matchMedia('(max-width: 480px)');
const logo = document.querySelector('.header__logo')

btnSearch.addEventListener('click', () => {
  if (!search.classList.contains('search--active')) {
    searchtl.play();
    search.classList.add('search--active');
    burgertl.reverse();
    if (mediaQuery.matches) {
      logo.classList.add('logo--hidden');
    }
  } else {
    searchtl.reverse();
    search.classList.remove('search--active');
    logo.classList.remove('logo--hidden');
  }
});

let scroll = window.scrollY;
const scrollChange = 80;

window.addEventListener('scroll', () => {
  scroll = window.scrollY;
  if (scroll >= scrollChange) {
    searchtl.reverse();
    search.classList.remove('search--active');
    logo.classList.remove('logo--hidden');
  }
});

//burger
const burgerOpen = document.getElementById('burgerOpen');
const burgerClose = document.getElementById('burgerClose');

const burgertl = gsap.timeline({ paused: true });

const animBurger = () => {
  burgertl.fromTo('#menu', { x: -650 }, { x: 0, duration: .2}, '<');
  burgertl.fromTo('#burgerClose', { display: 'none' }, { display: 'block', duration: .2}, '<');
  burgertl.fromTo('.header__item:nth-child(1)', { x: -650 }, { x: 0, duration: .2, ease: 'back.out(1)'});
  burgertl.fromTo('.header__item:nth-child(2)', { x: -650 }, { x: 0, duration: .2, ease: 'back.out(1)'});
  burgertl.fromTo('.header__item:nth-child(3)', { x: -650 }, { x: 0, duration: .2, ease: 'back.out(1)'});
  burgertl.fromTo('.header__item:nth-child(4)', { x: -650 }, { x: 0, duration: .2, ease: 'back.out(1)'});
  burgertl.fromTo('.header__item:nth-child(5)', { x: -650 }, { x: 0, duration: .2, ease: 'back.out(1)'});
  burgertl.fromTo('.header__item:nth-child(6)', { x: -650 }, { x: 0, duration: .2, ease: 'back.out(1)'});
}

mm.add("(max-width: 40em)", () => {
  animBurger();
});

burgerOpen.addEventListener('click', () => {
  burgertl.play();
  searchtl.reverse();
  document.body.style.overflow = "hidden";
  search.classList.remove('search--active');
  logo.classList.remove('logo--hidden');

});

burgerClose.addEventListener('click', () => {
  burgertl.reverse();
  document.body.style.overflow = "auto";
});

// ------------contacts------------
const info = document.getElementById('info');
const infoBtn = document.getElementById('infoBtn');
const infoIconClose = document.getElementById('infoIconClose');
const infoIconOpen = document.getElementById('infoIconOpen');

infoBtn.addEventListener ('click', () => {
  if (info.classList.contains('info--active')) {
    info.classList.remove('info--active');
    document.querySelector('.contacts__info-content').style.transform = 'translateY(40px)';
    infoIconClose.style.display = 'none';
    infoIconOpen.style.display = 'block';
  } else {
    info.classList.add('info--active');
    document.querySelector('.contacts__info-content').style.transform = 'translateY(0)';
    infoIconClose.style.display = 'block';
    infoIconOpen.style.display = 'none';
  }
});


// ------------map------------
ymaps.ready(init);
export function init() {
  let myMap = new ymaps.Map(
    "map",
    {
      center: [55.75885160413514, 37.6219490217997],
      zoom: 13,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  const placemark = new ymaps.Placemark(
    [55.76973963263544,37.63860017536414],{},
    {
      iconLayout: "default#image",
      iconImageHref: "img/placemark.svg",
      iconImageSize: [12, 12],
      iconImageOffset: [0, 0],
    }
  );

  myMap.geoObjects.add(placemark);
  myMap.container.fitToViewport();
}

// ------------validate email subs------------
const validFormSubs = new JustValidate(document.querySelector('#formSubs'), {
  errorLabelStyle: {
    color: '#f06666',
  },
});

// email-sub validate
validFormSubs.addField (document.querySelector('#emailSubs'), [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели email',
  },
  {
    rule: 'customRegexp',
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    errorMessage: 'Вы ввели не корректный email',
  }
]);

// ------------validate form------------
const validForm = new JustValidate(document.querySelector('#form'), {
  errorLabelStyle: {
    color: '#FF3030',
  },
});

// name validate
validForm.addField (document.querySelector('#name'), [
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
  },
  {
    rule: 'customRegexp',
    value: /^[a-zA-Z0-9_-]+$/,
    errorMessage: 'Недопустимый формат',
  }
]);

// email validate
validForm.addField (document.querySelector('#email'), [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели email',
  },
  {
    rule: 'customRegexp',
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    errorMessage: 'Вы ввели не корректный email',
  }
]);

// area validate
validForm.addField (document.querySelector('#area'), [
  {
    rule: 'required',
    errorMessage: 'Вы не написали комментарий',
  }
]);


