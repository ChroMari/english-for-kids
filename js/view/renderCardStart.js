import cards from './../cards.js';


export default function renderCardStart () {
  const cardsField = document.querySelector('.memory-game');

  for (let i = cards[0].length - 1; i >= 0; i--) {
    let card = `
    <div class="memory-card"> 
      <div class="back-face">
        <img class="back-face__img" src="./${cards[i + 1][0].image}" alt="${cards[0][i]}">       
          <p class="back-face__text">${cards[0][i]}</p>
          <p class="back-face__repeat">Кол-во карточек 8<p>
      </div>
    </div>
  `;
  cardsField.insertAdjacentHTML('afterbegin', card); 
  };
}