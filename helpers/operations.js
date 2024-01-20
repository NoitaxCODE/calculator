const display = document.querySelector('#display');
let accumulated = 0;
let operation;
let counter = 0;

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
    accumulated += parseFloat( displayText.textContent.replace(',','.') );
    counter += 1
    operation = 'add'
    return
  };
  
  if (operation === 'subtract') {
      display2.textContent = display2.textContent + ' - ' + displayText.textContent
      accumulated -= parseFloat( displayText.textContent.replace(',','.') );
  }else {
    display2.textContent = display2.textContent + ' + ' + displayText.textContent
    accumulated += parseFloat( displayText.textContent.replace(',','.') );
  }
  
  displayText.textContent = accumulated.toString().replace('.',',');
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
      accumulated = parseFloat( displayText.textContent.replace(',','.') );
      counter += 1
      operation = 'subtract'
      return
    };
    
    if( !display2 ) { 
      display.insertAdjacentHTML('afterbegin', `<p id="display2">${ displayText.textContent }</p>`);
      accumulated = parseFloat( displayText.textContent.replace(',','.') );
      counter += 1
      operation = 'subtract'
      return
    };
    
    if ( display2.textContent === '- ') {
      display2.textContent =  '- ' + displayText.textContent
      accumulated -= parseFloat( displayText.textContent.replace(',','.') );
      displayText.textContent = accumulated.toString().replace('.',',');
      counter += 1
      operation = 'subtract'
      return
    }
    
    if (operation === 'add') {
      display2.textContent = display2.textContent + ' + ' + displayText.textContent
      accumulated += parseFloat( displayText.textContent.replace(',','.') );
    }else {
      display2.textContent = display2.textContent + ' - ' + displayText.textContent
      accumulated -= parseFloat( displayText.textContent.replace(',','.') );
    }
    
    displayText.textContent = accumulated.toString().replace('.',',');
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
    accumulated = parseFloat( displayText.textContent.replace(',','.') );
    counter += 1
    operation = 'multiply'
    return
  };
  
  if (operation === 'subtract') {
      display2.textContent = display2.textContent + ' - ' + displayText.textContent
      accumulated -= parseFloat( displayText.textContent.replace(',','.') );
  }else {
    display2.textContent = display2.textContent + ' * ' + displayText.textContent
    accumulated *= parseFloat( displayText.textContent.replace(',','.') );
  }
  
  displayText.textContent = accumulated.toString().replace('.',',');
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
    accumulated = parseFloat( displayText.textContent.replace(',','.') );
    counter += 1
    operation = 'divide'
    return
  };
  
  if (operation === 'subtract') {
      display2.textContent = display2.textContent + ' - ' + displayText.textContent
      accumulated -= parseFloat( displayText.textContent.replace(',','.') );
  }else {
    display2.textContent = display2.textContent + ' / ' + displayText.textContent
    accumulated /= parseFloat( displayText.textContent.replace(',','.') );
  }
  
  displayText.textContent = accumulated.toString().replace('.',',');
  counter += 1;
  operation = 'divide'
}

export const resultNumber = ()=> {
  
  const display2 = document.querySelector('#display2');

  if ( operation === 'add') {
    display2.textContent = display2.textContent + ' + ' + displayText.textContent
    displayText.textContent = ( accumulated + parseFloat(displayText.textContent.replace(',','.')) ).toString().replace('.',',')
  }

  if ( operation === 'subtract') {
    display2.textContent = display2.textContent + ' - ' + displayText.textContent
    displayText.textContent = ( accumulated - parseFloat(displayText.textContent.replace(',','.')) ).toString().replace('.',',')
  }

  if ( operation === 'multiply') {
    display2.textContent = display2.textContent + ' * ' + displayText.textContent
    displayText.textContent = ( accumulated * parseFloat(displayText.textContent.replace(',','.')) ).toString().replace('.',',')
  }
  if ( operation === 'divide') {
    display2.textContent = display2.textContent + ' / ' + displayText.textContent
    displayText.textContent = ( accumulated / parseFloat(displayText.textContent.replace(',','.')) ).toString().replace('.',',')
  }
  
  accumulated = parseFloat( displayText.textContent.replace(',','.') );
  operation = 'result'


}