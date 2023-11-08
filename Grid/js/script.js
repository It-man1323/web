const burger = document.querySelector('.burger');
const navList = document.querySelector ('.nav__list');

burger.addEventListener('click', () => {
   burger.classList.toggle('burger--active');
   burger.classList.toggle('burger--default');
   navList.classList.toggle('nav__list--active');
   document.body.classList.toggle('scroll--stop');
});