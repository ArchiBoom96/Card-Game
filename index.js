'use strict'
import { shuffle, flippRestCards, flippRestEndCards, hideEqualCards, flippBackNotEqualCards, showPopup } from './utils.js';
import { card, startBtn, newBtn, endBtn, okBtn, popup } from './dom.js';
import { getFrontImages, getFlippedCards } from './get.js';
import { frontSideArray, flippedCards } from './arrays.js'


function playGame() {
   newBtn.addEventListener('click', () => {
      flippedCards.length = 0;
      pairsOfFlippedCards = 0;
      shuffle(frontSideArray);
      getFrontImages();
      flippRestCards('card');
      startBtn.addEventListener('click', startBtnHandler);
   })

   const startBtnHandler = () => {
      flippRestCards('card is-flipped');
   }

   let progress = 0;
   let pairsOfFlippedCards;

   card.addEventListener('click', (e) => {
      const parent = e.target.parentNode;
      if (parent.parentNode.className === 'scene' && parent.className !== 'card') {
         getFlippedCards(parent);
      }
      if (flippedCards.length === 2 && flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
         hideEqualCards();
         progress++;
         pairsOfFlippedCards++;
      }
      if (flippedCards.length === 3) {
         flippBackNotEqualCards();
         progress++;
      }
      if (pairsOfFlippedCards === 16) {
         showPopup(progress);
      }
   });

   const endBtnHandler = () => {
      flippRestEndCards('card');
      startBtn.removeEventListener('click', startBtnHandler);
   }
   endBtn.addEventListener('click', endBtnHandler);

   okBtn.addEventListener('click', () => {
      popup.style.opacity = '0';
      popup.style.visibility = 'hidden';
   })
}

playGame();













// class Card {
//    constructor(frontSide, backSide, isFlipped) {
//       this.frontSide = frontSide;
//       this.backSide = backSide;
//       this.isFlipped = isFlipped;
//    }
// }

// const arrOfCards = []

// function getArrayOfCards() {
//    for (let i = 0; i < 32; i++) {
//       arrOfCards[i] = new Card(frontSide[i], backSide[i], false)
//    }
//    console.log(arrOfCards[0]);
// }



// function gameStart() {
//    card.addEventListener('click', (e) => {
//       const parent = e.target.parentNode;
//       if (parent.parentNode.className === 'scene') {
//          parent.classList.toggle('is-flipped');
//       }
//       console.log(parent.className)
//    });
// }