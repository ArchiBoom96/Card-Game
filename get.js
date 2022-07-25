import { frontSideArray, arrayOfAnimals, flippedCards } from './arrays.js';

function getFrontImages() {
   for (let i = 0, j = 0; i < frontSideArray.length; i++, j++) {
      if (i === 16) {
         j = 0;
      }
      frontSideArray[i].style.backgroundImage = `url(${arrayOfAnimals[j]})`;
   }
}

function getFlippedCards(parent) {
   parent.classList.toggle('is-flipped');
   flippedCards.push(parent);
}

export {
   getFrontImages,
   getFlippedCards
}