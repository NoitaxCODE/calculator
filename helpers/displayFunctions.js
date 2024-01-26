import { setAccumulated, setCounter, setOperation } from "./operations.js";

const displayText = document.querySelector('#displayText');
const display2 = document.querySelector('#display2');

export const styleButton = ( items , { target } )=> {

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

export const formatDisplayNumber = ( displayText, content )=> {

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

};

export const addComa = ()=> {

  //SI HAY MAS DE UNA COMA TIRO ERROR
  if ( displayText.textContent.indexOf(',') > -1 ) { 
    displayText.innerHTML = `<p class="displayText">ERROR</p>` 
    return
  }

  displayText.textContent =  displayText.textContent + ','
  

};

export const showDisplay = ( e )=>{

  const content = e.target.innerText
  displayText.textContent = formatDisplayNumber( displayText.textContent, content ) 

};

export const clearDisplay = ()=>{

  displayText.textContent = '0';
  display2.textContent = '';
  display2.classList.remove('display2-bg');
  setAccumulated(0);
  setCounter(0);
  setOperation('');
};

export const clearDisplayText = ()=> {

  // EL COUNTER LO USO PARA LIMPIAR EL DISPLAY LUEGO QUE COMIENZO UNA OPERACION
  if ( setCounter() >= 1 ) { 
    displayText.textContent = '0';
    setCounter(0);
  }

};

export const enableDisableAudio = ( audio )=>{
  ( audio.volume === 0 ) ? audio.volume = 1 : audio.volume = 0;
};

export const disableEffect = ( sound )=> {
  sound.classList.toggle('disableAudioButton')
};

export const showDisplay2Bg = ()=>{
  display2.classList.add('display2-bg')
}
