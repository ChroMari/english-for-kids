import cards from './../cards.js';

export default function cardSong (text, index) {
  let card = cards[index];
  for (let i = 0; i < card.length; i++) {
    if (card[i].word == text) {
      console.log('aa');
      const audio = new Audio(`./../../${card[i].audioSrc}`);
      audio.currentTime = 0;
      audio.play();
    }
  }
}