export default function randomSong (card, arr) {
  let flag = 'false';
  let randomCount;
  do {
    randomCount = Math.round(Math.random()*(card.length - 1));
    if (arr.indexOf(randomCount) == -1) {
      arr.push(randomCount);
      flag = 'true';
    }
  } while (flag != 'true');
  console.log(randomCount);
  return [card[randomCount].audioSrc, arr];
}
