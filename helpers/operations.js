const display2 = document.querySelector('#display2');
let accumulated = 0;
let operation;
let counter = 0;

const formatNumber = ( displayTextContent )=> {

  // CON ESTA FUNCION CORRIJO EL BUG DEL PUNTO EN NUMEROS ENTEROS EN ESPAÑOL
  return parseFloat( displayTextContent.replaceAll('.','').replace(',','.') ); 

}

export const setCounter = (value = counter)=> {
  counter = value
  return counter
}

export const setAccumulated = (value = accumulated)=> {
  accumulated = value
  return accumulated
}

export const setOperation = (value = operation)=> {
  operation = value
  return operation
}

export const addNumber = ()=> {

  if ( displayText.textContent === '0' && operation === 'divide' ) {
    showError();
    return
  }
    
  if ( operation === 'result' ) {
    displayText.textContent = '0'
    operation = 'add'
    return
  }

  if( ! display2.textContent ) { 
    display2.textContent = displayText.textContent + ' + ';
    accumulated += formatNumber( displayText.textContent );
    counter += 1
    operation = 'add'
    return
  };
  
  if (operation === 'subtract') {
    accumulated -= formatNumber( displayText.textContent );
    display2.textContent = accumulated + ' - '
  }else if( operation === 'percent' ){
    displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
  }else if( operation === 'divide' ){
    accumulated /= formatNumber( displayText.textContent );
    display2.textContent = accumulated + ' / '
  }else{
    accumulated += formatNumber( displayText.textContent );
    display2.textContent = accumulated + ' + '
  }
  
  displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
  counter += 1;
  operation = 'add'
  
}
  
export const subtractNumber = ()=> {

    if ( displayText.textContent === '0' && operation === 'divide' ) {
      showError();
      return
    }

    if ( operation === 'result' ) {
      displayText.textContent = '0'
      operation = 'subtract'
      return
    }
    
    if( !display2.textContent &&  displayText.textContent === '0' ) { 
      display2.textContent = '0 - ';
      accumulated = formatNumber( displayText.textContent );
      counter += 1
      operation = 'subtract'
      console.log("Entro aca!")
      return
    };
    
    if( !display2.textContent ) { 
      display2.textContent = displayText.textContent + ' - ';
      accumulated = formatNumber( displayText.textContent );
      counter += 1
      operation = 'subtract'
      return
    };
    
    if ( display2.textContent === '0 - ') {
      display2.textContent =  '- ' + accumulated
      accumulated -= formatNumber( displayText.textContent );
      displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
      counter += 1
      operation = 'subtract'
      return
    }
    
    if (operation === 'add') {
      accumulated += formatNumber( displayText.textContent );
      display2.textContent = accumulated + ' + '
    }else if( operation === 'percent' ){
      displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
    }else if( operation === 'divide' ){
      accumulated /= formatNumber( displayText.textContent );
      display2.textContent = accumulated + ' / '
    }else {
      accumulated -= formatNumber( displayText.textContent );
      display2.textContent = accumulated + ' - '
    }
    
    displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
    counter += 1;
    operation = 'subtract'
    
}
  
export const multiplyNumber = ()=>{

  if ( displayText.textContent === '0' && operation === 'divide' ) {
    showError();
    return
  }
  
  if ( operation === 'result' ) {
    displayText.textContent = '0'
    operation = 'multiply'
    return
  }

  if( !display2.textContent ) { 
    accumulated = formatNumber( displayText.textContent );
    display2.textContent = accumulated + ' * ';
    counter += 1
    operation = 'multiply'
    return
  };
  
  if (operation === 'subtract') {
    accumulated -= formatNumber( displayText.textContent );
    display2.textContent = accumulated + ' - '
  }else if( operation === 'divide' ){
    accumulated /= formatNumber( displayText.textContent );
    display2.textContent = accumulated + ' / '
  }else {
    accumulated *= formatNumber( displayText.textContent );
    display2.textContent = accumulated + ' * '
  }
  
  displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
  counter += 1;
  operation = 'multiply'
}

export const divideNumber = ()=>{
  
    
  if ( operation === 'result' ) {
    displayText.textContent = '0'
    operation = 'divide'
    return
  }

  if( !display2.textContent ) { 
    accumulated = formatNumber( displayText.textContent );
    display2.textContent = displayText.textContent + ' / ';
    counter += 1
    operation = 'divide'
    return
  };

  if ( displayText.textContent === '0' ) {
    displayText.textContent = 'ERROR';
    display2.textContent = '';
    accumulated = 0;
    operation = '';
    return
  }
  
  if (operation === 'subtract') {
    accumulated -= formatNumber( displayText.textContent );
    display2.textContent = accumulated + ' - '
  }else {
    accumulated /= formatNumber( displayText.textContent );
    display2.textContent = accumulated + ' / '
  }
  
  displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
  counter += 1;
  operation = 'divide'
}

export const percentNumber = ()=>{
  
  if ( displayText.textContent === '0' && operation === 'divide' ) {
    showError();
    return
  }

  if ( operation === 'result' ) {
    displayText.textContent = '0'
    operation = 'percent'
    return
  };

  if ( accumulated === 0 ) {
    displayText.textContent = '0';
    counter += 1
    operation = 'percent'
    return
  }

  if ( !display2.textContent ) { 
    display2.textContent = 0;
    accumulated = 0;
    counter += 1
    operation = 'percent'
    return
  };

  switch ( operation ) {
    case 'subtract':
      accumulated -= accumulated * formatNumber( displayText.textContent ) / 100;
      display2.textContent = accumulated + ' - '
      break;
    case 'add':
      accumulated +=  accumulated * formatNumber( displayText.textContent ) / 100;
      display2.textContent = accumulated + ' + '
      break;
    case 'multiply':
      accumulated *=  formatNumber( displayText.textContent ) / 100 ;
      display2.textContent = accumulated + ' * '
      break;
    case 'divide':
      accumulated /=  formatNumber( displayText.textContent ) / 100;
      display2.textContent = accumulated + ' / '
      break;
    default:
        accumulated = 0;
        break;
  }

  display2.textContent = display2.textContent + '%'
  displayText.textContent = formatNumber( displayText.textContent ) / 100 ;
  counter += 1;
  operation = 'percent'
};

export const resultNumber = ()=> {
  
  if ( !operation ) return;

  if ( displayText.textContent === '0' && operation === 'divide' ) {
    showError();
    return
  }

  switch ( operation ) {
    case 'add':
      display2.textContent = display2.textContent + displayText.textContent + ' ='
      displayText.textContent = ( accumulated + formatNumber( displayText.textContent ) ).toLocaleString('es-ES', { maximumFractionDigits: 7 });
      break;
    case 'subtract':
      if ( display2.textContent === '- ' ) { 
        display2.textContent = '- ' + displayText.textContent
      }else{
        display2.textContent = display2.textContent + displayText.textContent + ' ='
      }
      displayText.textContent = ( accumulated - formatNumber( displayText.textContent ) ).toLocaleString('es-ES', { maximumFractionDigits: 7 });    
      break;
    case 'multiply':
      display2.textContent = display2.textContent + displayText.textContent + ' ='
      displayText.textContent = ( accumulated * formatNumber( displayText.textContent ) ).toLocaleString('es-ES', { maximumFractionDigits: 7 });
      break;
    case 'divide':
      display2.textContent = display2.textContent + displayText.textContent + ' ='
      displayText.textContent = ( accumulated / formatNumber( displayText.textContent ) ).toLocaleString('es-ES', { maximumFractionDigits: 7 }); 
      break;
    case 'percent':
      displayText.textContent = displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
      break;
  }

  accumulated = formatNumber( displayText.textContent );
  operation = 'result'
};

export const showError = ()=>{
  displayText.textContent = 'ERROR';
  display2.textContent = '';
  display2.classList.remove('display2-bg');
  accumulated = 0;
  operation = '';
}