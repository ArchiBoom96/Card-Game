const backSide = document.getElementsByClassName('card__back');
const frontSide = document.getElementsByClassName('card__front');

let cards = document.getElementsByClassName('card');
const card = document.getElementsByClassName('body')[0];

const startBtn = document.querySelector('input[name="Start"]');
const newBtn = document.querySelector('input[name="New"]');
const endBtn = document.querySelector('input[name="End"]');
const okBtn = document.querySelector('button');
const popup = document.getElementsByClassName('popup')[0];

export {
   backSide,
   frontSide,
   card,
   cards,
   startBtn,
   newBtn,
   endBtn,
   okBtn,
   popup
}