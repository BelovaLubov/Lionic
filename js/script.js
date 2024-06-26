//меню бургер всплывающее


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let menuLinks = menu.querySelectorAll('.header-link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header-nav--active');

    document.body.classList.toggle('stop-scroll');
  }
)

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');

    menu.classList.remove('header-nav--active');

    document.body.classList.remove('stop-scroll');

  });
});

//кнопка показать еще и скрытые карточки 

const btnMore = document.querySelector('.articles-more');
const articlesItem = document.querySelectorAll('.articles-item');

btnMore.addEventListener('click', () => {
  articlesItem.forEach(el => { el.classList.add('articles-item--visible') });
  btnMore.closest('articles-center').classList.add('articles-center--hidden');
});