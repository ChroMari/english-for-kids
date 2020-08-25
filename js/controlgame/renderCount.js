export default function renderCount (count, item) {
  const bar = document.querySelector('.star');
  console.log(bar);
  let barStar;
  if (item == 0) {
    barStar = `<img class="star__img" src="./img/star.svg">`;
    count = count - 1;

  } else {
    barStar = `<img src="./img/star-win.svg">`;
    count = count + 1;
  }
  bar.insertAdjacentHTML('beforeend', barStar);
  
  const starImg = document.querySelectorAll('.star__img');
  if (starImg.length > 5) {
    starImg[0].remove();
  }
  return count;
}