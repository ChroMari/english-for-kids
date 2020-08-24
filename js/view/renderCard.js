import cards from './../cards.js';

export default function renderCard (team) {
  const indexTeam = cards[0].indexOf(team);
  const elementsCard = cards[indexTeam + 1];
  const cardsField = document.querySelector('.memory-game');
  cardsField.textContent = '';

  for (let i = 0; i < elementsCard.length; i++) {
    let card = `
    <div class="memory-card"> 
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

}

function flipCard(e) {
  const cardflip = document.querySelectorAll('.memory-card');

  cardflip.forEach(card => card.classList.remove('flip')); 
  e.target.parentElement.parentElement.classList.add('flip');
}
