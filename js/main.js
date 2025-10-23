const menuBtn = document.querySelector('.burger-btn');
const page = document.querySelector('.burger-page');
const seach = document.querySelector('.header__search ');
const txt = document.querySelector('.header__top-txt');
const text = document.querySelector('.header__top-text');

const body = document.body;

menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active');
  page.classList.toggle('active');
  //убирает скролл сайта
  body.classList.toggle('lock')
})

seach.addEventListener('click', (e) => {
  txt.classList.toggle('active');

  setTimeout(() => {
    txt.classList.remove('active');
  }, 2000);

  setTimeout(() => {
    text.classList.toggle('active');
  }, 2000);

  setTimeout(() => {
    text.classList.remove('active');
  }, 4000);


}
)