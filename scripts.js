import { addComa, clearDisplay, clearDisplayText, disableEffect, enableDisableAudio, showDisplay, styleButton } from "./helpers/displayFunctions.js";
import { addNumber, resultNumber, subtractNumber, multiplyNumber, divideNumber, percentNumber } from "./helpers/operations.js";

const numbers = document.querySelectorAll('.number');
const items = document.querySelectorAll('.item');
const clear = document.querySelector('#clear');
const coma = document.querySelector('#coma');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const result = document.querySelector('#result');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const percent = document.querySelector('#percent');
const sound = document.querySelector('#sound');
const audio = new Audio('../media/Sonido-PIP.m4a');

document.addEventListener('keydown', ({ key })=> {

  if ( key === 'Enter' ) { 
    result.click()
    return
  };
  if ( key === '+' ) {
    add.click()
    return
  };
  if ( key === '-' ) {
    subtract.click() 
    return
  };
  if ( key === '.' ) {
    coma.click() 
    return
  };
  if ( key === 'Delete' ) {
    clear.click() 
    return
  };

  if ( key === '*' ) {
    multiply.click() 
    return
  };

  if ( key === '/' ) {
    divide.click() 
    return
  };

  if ( key === '%' ) {
    percent.click() 
    return
  };

  if ( isNaN( key ) ) return;

  numbers.forEach(number => {
    if ( number.textContent === key ) number.click();
  });

});

numbers.forEach(number => {
  number.addEventListener('click', (e)=>{
    clearDisplayText();
    showDisplay(e);
  });
});

items.forEach(item => {
  item.addEventListener('click', ()=>{
    styleButton.bind( this, items );
    audio.play();
  })
});

clear.addEventListener('click', ()=>{
  clearDisplay();
});

coma.addEventListener('click', ()=>{
  addComa();
});

add.addEventListener('click', ()=>{
  addNumber();
});

result.addEventListener('click', ()=>{
  resultNumber();
});

subtract.addEventListener('click', ()=>{
  subtractNumber();
});

multiply.addEventListener('click', ()=>{
  multiplyNumber();
});

divide.addEventListener('click', ()=> {
  divideNumber();
});

percent.addEventListener('click', ()=> {
  percentNumber();
});

sound.addEventListener('click', ()=> {
  enableDisableAudio( audio );
  disableEffect( sound );
});






