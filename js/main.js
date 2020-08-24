import renderCardStart from './view/renderCardStart.js';
import renderCard from './view/renderCard.js';
import renderCardGame from './view/renderCardGame.js';
import cards from './cards.js';

renderCardStart();

const btnGame = document.querySelector('.checkbox-label');
btnGame.addEventListener('click', function onClickBtn (e) {
  const train = document.querySelector('.train');
  const play = document.querySelector('.play');
  if (train.classList === 'train') {
    train.classList.remove('none');
    play.classList.add('none');

      const card = document.querySelector('.memory-card');
      renderCard(cards[card.classList[3]]);




   /* if (document.querySelector('game memory-card') != null) {
      const card = document.querySelector('.memory-card');
      renderCard(cards[card.lastChild[1]]);
    }*/

    //возвращает поле назад
  }
  if (play.classList === 'play') {
    train.classList.add('none');
    play.classList.remove('none');

    const card = document.querySelector('.memory-card');
    renderCardGame(card.classList[1]);

    //делает поле игровым


    console.log('aaa');

  }

});

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