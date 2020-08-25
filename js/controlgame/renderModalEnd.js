import song from './song.js';
import renderCardStart from './../view/renderCardStart.js';

export default function renderModalEnd(count, card) {
  let game = document.querySelector('.memory-game');
  game.textContent = '';
  let gameStatic = document.querySelector('.static-game');
  gameStatic.textContent = '';
  if (count == card.length) {
    song('audio/success.mp3');
    let itogModal = `
    <div class="modal">
      <h3 class="modal__title">Вы молодец</h3>
    </div>
    `;
    game.insertAdjacentHTML('beforeend', itogModal);
  } else {
    song('audio/failure.mp3'); 
    let itogModal = `
    <div class="modal">
      <h3 class="modal__title">Подучите слова и снова попробуйте</h3>
    </div>
    `;
    game.insertAdjacentHTML('beforeend', itogModal);
  }
  
  setTimeout(renderCardStart, 5000);

}