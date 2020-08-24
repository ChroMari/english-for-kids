import renderCardStart from './view/renderCardStart.js';
import renderCard from './view/renderCard.js';

renderCardStart();

const cardCategory = document.querySelectorAll('.memory-game');
//cardCategory.forEach(card => card.addEventListener('click', renderCard));

const menuCategory = document.querySelectorAll('.box__btn');
menuCategory.forEach(card => card.addEventListener('click', renderCard));