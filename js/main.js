import renderCardStart from './view/renderCardStart.js';
import renderCard from './view/renderCard.js';

renderCardStart();

const cardCategory = document.querySelectorAll('.memory-game');
cardCategory.forEach(card => card.addEventListener('click', function onClick(e) {
  const btn = card.querySelector('.back-face__false');
  if (btn != null) {
    const cardActiv = e.target.parentElement;
    const cardTeam = cardActiv.querySelector('.back-face__text').textContent;
    renderCard(cardTeam);
  }

}));

const menuCategory = document.querySelectorAll('.box__btn');
menuCategory.forEach(card => card.addEventListener('click', function onClickMenu (e) {
  renderCard(e.target.textContent);
}));