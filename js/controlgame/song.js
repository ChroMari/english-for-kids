export default function song (audioSrc) { 
  const audio = new Audio(`./../../${audioSrc}`);
  audio.currentTime = 0;
  audio.play();
}