const display = document.querySelector('#display');
let accumulated = 0;
let operation;
let counter = 0;

const formatNumber = ( displayTextContent )=> {

  // CON ESTA FORMULA CORRIJO EL BUG DEL PUNTO EN NUMEROS ENTEROS

  if ( displayTextContent.search(',') > 0 ) {
    return parseFloat( displayTextContent.replaceAll('.','').replace(',','.') ); 
  };

  return parseFloat( displayTextContent.replaceAll('.','') );
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

  const display2 = document.querySelector('#display2');
    
  if ( operation === 'result' ) {
    displayText.textContent = '0'
    operation = 'add'
    return
  }

  if( !display2 ) { 
    display.insertAdjacentHTML('afterbegin', `<p id="display2">${ displayText.textContent }</p>`);
    accumulated += formatNumber( displayText.textContent );
    counter += 1
    operation = 'add'
    return
  };
  
  if (operation === 'subtract') {
    display2.textContent = display2.textContent + ' - ' + displayText.textContent
    accumulated -= formatNumber( displayText.textContent );
  }else if( operation === 'percent' ){
    displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
  }else{
    display2.textContent = display2.textContent + ' + ' + displayText.textContent
    accumulated += formatNumber( displayText.textContent );
  }
  
  displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
  counter += 1;
  operation = 'add'
  
}
  
export const subtractNumber = ()=> {
  
    const display2 = document.querySelector('#display2');

    if ( operation === 'result' ) {
      displayText.textContent = '0'
      operation = 'subtract'
      return
    }
    
    if( !display2 &&  displayText.textContent === '0' ) { 
      display.insertAdjacentHTML('afterbegin', `<p id="display2">${ '- ' }</p>`);
      accumulated = formatNumber( displayText.textContent );
      counter += 1
      operation = 'subtract'
      return
    };
    
    if( !display2 ) { 
      display.insertAdjacentHTML('afterbegin', `<p id="display2">${ displayText.textContent }</p>`);
      accumulated = formatNumber( displayText.textContent );
      counter += 1
      operation = 'subtract'
      return
    };
    
    if ( display2.textContent === '- ') {
      display2.textContent =  '- ' + displayText.textContent
      accumulated -= formatNumber( displayText.textContent );
      displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
      counter += 1
      operation = 'subtract'
      return
    }
    
    if (operation === 'add') {
      display2.textContent = display2.textContent + ' + ' + displayText.textContent
      accumulated += formatNumber( displayText.textContent );
    }else if( operation === 'percent' ){
      displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
    }else {
      display2.textContent = display2.textContent + ' - ' + displayText.textContent
      accumulated -= formatNumber( displayText.textContent );
    }
    
    displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
    counter += 1;
    operation = 'subtract'
  
}
  
export const multiplyNumber = ()=>{
  const display2 = document.querySelector('#display2');
    
  if ( operation === 'result' ) {
    displayText.textContent = '0'
    operation = 'multiply'
    return
  }

  if( !display2 ) { 
    display.insertAdjacentHTML('afterbegin', `<p id="display2">${ displayText.textContent }</p>`);
    accumulated = formatNumber( displayText.textContent );
    counter += 1
    operation = 'multiply'
    console.log(accumulated)
    return
  };
  
  if (operation === 'subtract') {
      display2.textContent = display2.textContent + ' - ' + displayText.textContent
      accumulated -= formatNumber( displayText.textContent );
  }else {
    display2.textContent = display2.textContent + ' * ' + displayText.textContent
    accumulated *= formatNumber( displayText.textContent );
  }
  
  displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
  counter += 1;
  operation = 'multiply'
}

export const divideNumber = ()=>{
  const display2 = document.querySelector('#display2');
    
  if ( operation === 'result' ) {
    displayText.textContent = '0'
    operation = 'divide'
    return
  }

  if( !display2 ) { 
    display.insertAdjacentHTML('afterbegin', `<p id="display2">${ displayText.textContent }</p>`);
    accumulated = formatNumber( displayText.textContent );
    counter += 1
    operation = 'divide'
    return
  };
  
  if (operation === 'subtract') {
      display2.textContent = display2.textContent + ' - ' + displayText.textContent
      accumulated -= formatNumber( displayText.textContent );
  }else {
    display2.textContent = display2.textContent + ' / ' + displayText.textContent
    accumulated /= formatNumber( displayText.textContent );
  }
  
  displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
  counter += 1;
  operation = 'divide'
}
export const percentNumber = ()=>{
  const display2 = document.querySelector('#display2');
    
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

  if ( !display2 ) { 
    display.insertAdjacentHTML('afterbegin', `<p id="display2">0</p>`);
    accumulated = 0;
    counter += 1
    operation = 'percent'
    return
  };

  switch ( operation ) {
    case 'subtract':
        display2.textContent = display2.textContent + ' - ' + displayText.textContent
        accumulated -= accumulated * formatNumber( displayText.textContent ) / 100;
      break;
    case 'add':
        display2.textContent = display2.textContent + ' + ' + displayText.textContent
        accumulated +=  accumulated * formatNumber( displayText.textContent ) / 100;
        break;
    case 'multiply':
        display2.textContent = display2.textContent + ' * ' + displayText.textContent
        accumulated *=  formatNumber( displayText.textContent ) / 100 ;
        break;
    case 'divide':
        display2.textContent = display2.textContent + ' / ' + displayText.textContent
        accumulated /=  formatNumber( displayText.textContent ) / 100;
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
  
  const display2 = document.querySelector('#display2');

  if ( !operation ) return;

  if ( operation === 'add') {
    display2.textContent = display2.textContent + ' + ' + displayText.textContent
    displayText.textContent = ( accumulated + formatNumber( displayText.textContent ) ).toLocaleString('es-ES', { maximumFractionDigits: 7 });
  }

  if ( operation === 'subtract') {
    display2.textContent = display2.textContent + ' - ' + displayText.textContent
    displayText.textContent = ( accumulated - formatNumber( displayText.textContent ) ).toLocaleString('es-ES', { maximumFractionDigits: 7 });
  }

  if ( operation === 'multiply') {
    display2.textContent = display2.textContent + ' * ' + displayText.textContent
    displayText.textContent = ( accumulated * formatNumber( displayText.textContent ) ).toLocaleString('es-ES', { maximumFractionDigits: 7 });
  }
  if ( operation === 'divide') {
    display2.textContent = display2.textContent + ' / ' + displayText.textContent
    displayText.textContent = ( accumulated / formatNumber( displayText.textContent ) ).toLocaleString('es-ES', { maximumFractionDigits: 7 });
  }
  if ( operation === 'percent') {
    displayText.textContent = displayText.textContent = accumulated.toLocaleString('es-ES', { maximumFractionDigits: 7 });
  }

  accumulated = formatNumber( displayText.textContent );

  operation = 'result'


};
