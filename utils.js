import { flippedCards } from './arrays.js';
import { cards } from './dom.js'

function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));                // алгоритм тасования Фишера — Йетса.
      [array[i], array[j]] = [array[j], array[i]];
   }
}

function flip(numOfCard) {
   cards[numOfCard].classList.toggle('is-flipped');
}

function flippRestCards(cardClass) {
   for (let i = 0; i < cards.length; i++) {
      if (cards[i].className === cardClass) {
         cards[i].style.visibility = 'visible';
         continue;
      }
      flip(i);
   }
}

function flippRestEndCards(cardClass) {
   for (let i = 0; i < cards.length; i++) {
      if (cards[i].className === cardClass) {
         continue;
      }
      flip(i);
   }
}

function hideEqualCards() {
   flippedCards[0].style.visibility = 'hidden';
   flippedCards[1].style.visibility = 'hidden';
   flippedCards[0].style.transition = '1s';
   flippedCards[1].style.transition = '1s';
   flippedCards.splice(0, 2);
}

function flippBackNotEqualCards() {
   flippedCards[0].classList.toggle('is-flipped');
   flippedCards[1].classList.toggle('is-flipped');
   flippedCards.splice(0, 2);
}

function showPopup(progress) {
   const text = document.getElementsByClassName('popup__text');
   const popup = document.getElementsByClassName('popup');
   popup[0].style.opacity = "1";
   popup[0].style.visibility = "visible";
   text[0].innerHTML = `Congratulations!!! You have won!!! <br/> Your score: ${progress} moves`;
}

export {
   shuffle,
   flip,
   flippRestCards,
   flippRestEndCards,
   hideEqualCards,
   flippBackNotEqualCards,
   showPopup
}


