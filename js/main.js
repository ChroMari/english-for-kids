import renderCardStart from './view/renderCardStart.js';
import renderCard from './view/renderCard.js';
import songCard from'./view/songCard.js';

renderCardStart();

if (document.querySelector('.back-face__false') != null) {
  const btns = document.querySelectorAll('.back-face__false');
  btns.forEach(btn => btn.addEventListener('click', function onClick(e) {
    const cardActiv = e.target.parentElement;
    const cardTeam = cardActiv.querySelector('.back-face__text').textContent;
    renderCard(cardTeam);
  }))
}

const menuCategory = document.querySelectorAll('.box__btn');
menuCategory.forEach(card => card.addEventListener('click', function onClickMenu (e) {
  renderCard(e.target.textContent);
}));