import cards from './../cards.js';
import songCard from './songCard.js';

export default function renderCard (team) {
  const indexTeam = cards[0].indexOf(team);
  const elementsCard = cards[indexTeam + 1];
  const cardsField = document.querySelector('.memory-game');
  cardsField.textContent = '';

  for (let i = 0; i < elementsCard.length; i++) {
    let card = `
    <div class="memory-card ${indexTeam + 1}"> 
      <div class="font-face"> 
        <img class="font-face__img" src="./${elementsCard[i].image}" alt="${elementsCard[i].word}">
        <p class="font-face__text">${elementsCard[i].translation}</p>
      </div> 
      <div class="back-face">
        <img class="back-face__img" src="./${elementsCard[i].image}" alt="${elementsCard[i].word}">       
          <p class="back-face__text">${elementsCard[i].word}</p>
          <p class="back-face__repeat">Перевод<p>
      </div>
    </div>
  `;
  cardsField.insertAdjacentHTML('afterbegin', card); 
  }

  const backCard = document.querySelectorAll('.back-face__repeat');
  backCard.forEach(card => card.addEventListener('click', flipCard));

  const cardclicks = document.querySelectorAll('.memory-card');
  cardclicks.forEach(card => card.addEventListener('click', function onClickCard(e) {
    if (e.target.classList != 'back-face__repeat') {
      const element = e.target.parentElement.parentElement;
      const text = element.querySelector('.back-face__text').textContent;
      const index = element.classList[1];
      songCard(text, index);

    }
  }));
}

function flipCard(e) {
  const cardflip = document.querySelectorAll('.memory-card');

  cardflip.forEach(card => card.classList.remove('flip')); 
  e.target.parentElement.parentElement.classList.add('flip');
}
