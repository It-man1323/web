// select
const select = document.querySelector('select');
const choices = new Choices (select, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: ''
});

// map
ymaps.ready(init);
function init() {
   var myMap = new ymaps.Map("map", {
      center: [48.872185073737896, 2.354223999999991],
      zoom: 10
   });

   var myPieChart = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/label-map.svg',
      iconImageSize: [28, 40],
      iconImageOffset: [-3, -42]
   });
   myMap.geoObjects.add(myPieChart);
}

// form
let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

const validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#ff5c00',
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
.addField ("#email", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели e-mail',
  },
  {
    rule: 'email',
    errorMessage: 'Вы не ввели e-mail правильно',
  },
])

 