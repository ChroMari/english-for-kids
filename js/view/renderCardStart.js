import cards from './../cards.js';
import renderCard from './renderCard.js';

export default function renderCardStart () {
  const cardsField = document.querySelector('.memory-game');
  cardsField.textContent = '';

  const btnSwitch = document.querySelector('.switch');
  if (btnSwitch.classList[1] == null) btnSwitch.classList.add('switch-none');

  for (let i = cards[0].length - 1; i >= 0; i--) {
    let card = `
    <div class="memory-card"> 
      <div class="back-face">
        <img class="back-face__img" src="./${cards[i + 1][0].image}" alt="${cards[0][i]}">       
        <p class="back-face__text">${cards[0][i]}</p>
        <p class="back-face__repeat back-face__false">Открыть</p>
      </div>
    </div>
  `;
  cardsField.insertAdjacentHTML('afterbegin', card); 
  };

  const btns = document.querySelectorAll('.back-face__false');
  btns.forEach(btn => btn.addEventListener('click', onClick));
}


function onClick(e) {
  if (document.querySelector('.back-face__false') != null) {
  const cardActiv = e.target.parentElement;
  const cardTeam = cardActiv.querySelector('.back-face__text').textContent;
  renderCard(cardTeam);
  }
}