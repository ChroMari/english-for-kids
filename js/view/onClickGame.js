import cards from './../cards.js';
import song from './../controlgame/song.js';
import randomSong from './../controlgame/randomSong.js';
import renderCount from './../controlgame/renderCount.js';
import renderModalEnd from './../controlgame/renderModalEnd.js';

export default function onClickGame () {
  const btnStartGame = document.querySelector('.btn');
  btnStartGame.classList.add('btn-game');
  const btnStart = document.querySelector('.btn-game');
  btnStart.textContent = 'Повторить слово';
  const teamCard = document.querySelector('.memory-card');
  const card = cards[teamCard.classList[2]];
  let randomArr = [];

  let resultRandomSong = randomSong(card, randomArr);
  song (resultRandomSong[0]);

  btnStart.addEventListener('click', function random () {
    song (resultRandomSong[0]);
  });

  const cardGames = document.querySelectorAll('.game.memory-card');
  let count = 0;

  cardGames.forEach(card1 => card1.addEventListener('click', function a (e) {
    const cardTeam = e.target.parentElement;
    let flag = 'false';
    const cardImgText = cardTeam.querySelector('.back-face__img').getAttribute('alt');

    for (let i = 0; i < card.length; i++) {
      if (card[i].word == cardImgText && card[i].audioSrc == resultRandomSong[0]) {
        flag = 'true';
        song('audio/correct.mp3');

        if (cardTeam.parentElement.classList != 'memory-game') cardTeam.parentElement.classList.add('game-none');
        else cardTeam.classList.add('game-none');

        if (randomArr.length == card.length) {
          count = renderCount(count, 1);
          renderModalEnd(count, card);
        } else {
          count = renderCount(count, 1);
          resultRandomSong = randomSong(card, randomArr);
          song (resultRandomSong[0]);
        }
      } 
    }

    if (flag == 'false') {
      song('audio/error.mp3');
      count = renderCount(count, 0);
    }
  })); 
}
