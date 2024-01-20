import { addNumber, resultNumber, subtractNumber, setCounter, setAccumulated, setOperation, multiplyNumber, divideNumber } from "./helpers/operations.js";

const numbers = document.querySelectorAll('.number');
const items = document.querySelectorAll('.item');
const displayText = document.querySelector('#displayText');
const clear = document.querySelector('#clear');
const coma = document.querySelector('#coma');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const result = document.querySelector('#result');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');

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
  item.addEventListener('click', (e)=>{
    styleButton(e);
    audio.play();
  })
})

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

const audio = new Audio('../media/Sonido-PIP.m4a')

const styleButton = ({ target })=> {

  if ( target.tagName === 'DIV' ) {
    target.classList.toggle("pressButton");
  }else{
    target.parentElement.classList.toggle("pressButton");
  };

  setTimeout( ()=> { 
    items.forEach( item => {
      item.classList.remove("pressButton")
    }
  )}, 150)

};

const formatNumber = ( displayText, content )=> {

  // PASO EL STRING A ARRAY
  const displayTextArray = displayText.split('');

  // QUITO LOS PUNTOS
  let arrayClear = displayTextArray.filter((word) => word !== '.');

  // SI HAY COMAS LAS CAMBIO POR PUNTO PARA PODER FORMATEARLO A ESPAÑOL
  if ( arrayClear.indexOf(',') > -1 ) arrayClear.splice(arrayClear.indexOf(','), 1, '.')

  //DETECTO SI HAY UN .0
  let decimal0 = false
  if ( ( arrayClear.join('') + content ).indexOf('.0') > -1 ) decimal0 = true


  // CONVIERTO EL ARRAY EN STRING, LE CONCATENO EL VALOR NUEVO, LO CONVIERTO A NUMERO Y LE DOY FORMATO DE NUMERO ESPAÑOL
  // CREO EL IF PARA RESOLVER EL PROBLEMA CON EL .0
  
  let result
  if( !decimal0 ){
    result = ( parseFloat( arrayClear.join('') + content )).toLocaleString('es-ES', { maximumFractionDigits: 7 })
  } else{
    result = arrayClear.join('').replace('.',',') + content 
  }



  return result

}

const addComa = ()=> {

  //SI HAY MAS DE UNA COMA TIRO ERROR
  if ( displayText.textContent.indexOf(',') > -1 ) { 
    displayText.innerHTML = `<p class="displayText">ERROR</p>` 
    return
  }

  displayText.innerHTML = `<p class="displayText">${ displayText.textContent + ',' }</p>`
  

}

const showDisplay = ( e )=>{

  const content = e.target.innerText
  displayText.textContent = `${ formatNumber( displayText.textContent, content ) }`

}

const clearDisplay = ()=>{

  const display2 = document.querySelector('#display2');
  displayText.textContent = '0';
  if( display2 ) display2.remove();
  setAccumulated(0);
  setCounter(0);
  setOperation('');
}

const clearDisplayText = ()=> {

  // EL COUNTER LO USO PARA LIMPIAR EL DISPLAY LUEGO QUE COMIENZO UNA OPERACION
  if ( setCounter() >= 1 ) { 
    displayText.textContent = '0';
    setCounter(0);
  }

}





