//Будет искать img только в классе .structure__image
const items = document.querySelector('.structure__image').querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.slickNext');
const previousItem = document.querySelector('.slickPrev');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);

//==============================================================================

var sec = 1800,
  countDiv = document.getElementById("timer"),
  secpass,
  countDown = setInterval(function () {
    'use strict';

    secpass();
  }, 1000);

function secpass() {
  'use strict';

  var min = Math.floor(sec / 60),
    remSec = sec % 60;

  if (remSec < 10) {

    remSec = '0' + remSec;

  }
  if (min < 10) {

    min = '0' + min;

  }
  countDiv.innerHTML = min + ":" + remSec;

  if (sec > 0) {

    sec = sec - 1;

  } else {

    clearInterval(countDown);

    countDiv.innerHTML = 'countdown done';

  }
}

//====================================================================

