import renderCardStart from './view/renderCardStart.js';
import renderCard from './view/renderCard.js';
import renderCardGame from './view/renderCardGame.js';
import cards from './cards.js';

renderCardStart();

const btnGame = document.querySelector('.checkbox-label');
let flag = 'false';

btnGame.addEventListener('click', function onClickBtn (e) {
  const train = document.querySelector('.train');
  const play = document.querySelector('.play');
  if (train.classList.value === 'train' && flag == 'false') {
    train.classList.add('none');
    play.classList.remove('none');
    flag = 'true';

    const card = document.querySelector('.memory-card');
    renderCardGame(card.classList[1]);

  }
  else if (flag == 'true' ) {
    train.classList.remove('none');
    play.classList.add('none');
    flag = 'false';

    const card = document.querySelector('.memory-card');
    renderCard(cards[0][card.classList[2] - 1]);

  }

});

const menuCategory = document.querySelectorAll('.box__btn');
menuCategory.forEach(card => card.addEventListener('click', function onClickMenu (e) {
  if (e.target.textContent == 'Выбрать категорию') renderCardStart();
  else renderCard(e.target.textContent);
}));

