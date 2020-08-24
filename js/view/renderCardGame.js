import cards from './../cards.js';

export default function renderCardGame (index) {
  const cardsField = document.querySelector('.memory-game');
  cardsField.textContent = '';
  const elementsCard = cards[index];
  for (let i = 0; i < elementsCard.length; i++) {
    let card = `
    <div class="game memory-card ${index}"> 
      <div class="back-face">
        <img class="back-face__img" src="./${elementsCard[i].image}" alt="${elementsCard[i].word}">       
          <p class="back-face__text"></p>

      </div>
    </div>
  `;
  cardsField.insertAdjacentHTML('afterbegin', card); 
  }
}