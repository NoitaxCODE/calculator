"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backButton = exports.showError = exports.resultNumber = exports.percentNumber = exports.divideNumber = exports.multiplyNumber = exports.subtractNumber = exports.addNumber = exports.setOperation = exports.setAccumulated = exports.setCounter = void 0;
var display2 = document.querySelector('#display2');
var accumulated = 0;
var operation;
var counter = 0;

var formatNumber = function formatNumber(displayTextContent) {
  // CON ESTA FUNCION CORRIJO EL BUG DEL PUNTO EN NUMEROS ENTEROS EN ESPAÑOL
  return parseFloat(displayTextContent.replaceAll('.', '').replace(',', '.'));
};

var setCounter = function setCounter() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : counter;
  counter = value;
  return counter;
};

exports.setCounter = setCounter;

var setAccumulated = function setAccumulated() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : accumulated;
  accumulated = value;
  return accumulated;
};

exports.setAccumulated = setAccumulated;

var setOperation = function setOperation() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : operation;
  operation = value;
  return operation;
};

exports.setOperation = setOperation;

var addNumber = function addNumber() {
  if (displayText.textContent === '0' && operation === 'divide') {
    showError();
    return;
  }

  if (operation === 'result') {
    displayText.textContent = '0';
    operation = 'add';
    return;
  }

  if (!display2.textContent) {
    display2.textContent = displayText.textContent + ' + ';
    accumulated += formatNumber(displayText.textContent);
    counter += 1;
    operation = 'add';
    return;
  }

  ;

  if (operation === 'subtract') {
    accumulated -= formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' - ';
  } else if (operation === 'percent') {
    displayText.textContent = accumulated.toLocaleString('es-ES', {
      maximumFractionDigits: 7
    });
  } else if (operation === 'divide') {
    accumulated /= formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' / ';
  } else {
    accumulated += formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' + ';
  }

  displayText.textContent = accumulated.toLocaleString('es-ES', {
    maximumFractionDigits: 7
  });
  counter += 1;
  operation = 'add';
};

exports.addNumber = addNumber;

var subtractNumber = function subtractNumber() {
  if (displayText.textContent === '0' && operation === 'divide') {
    showError();
    return;
  }

  if (operation === 'result') {
    displayText.textContent = '0';
    operation = 'subtract';
    return;
  }

  if (!display2.textContent && displayText.textContent === '0') {
    display2.textContent = '0 - ';
    accumulated = formatNumber(displayText.textContent);
    counter += 1;
    operation = 'subtract';
    console.log("Entro aca!");
    return;
  }

  ;

  if (!display2.textContent) {
    display2.textContent = displayText.textContent + ' - ';
    accumulated = formatNumber(displayText.textContent);
    counter += 1;
    operation = 'subtract';
    return;
  }

  ;

  if (display2.textContent === '0 - ') {
    display2.textContent = '- ' + accumulated;
    accumulated -= formatNumber(displayText.textContent);
    displayText.textContent = accumulated.toLocaleString('es-ES', {
      maximumFractionDigits: 7
    });
    counter += 1;
    operation = 'subtract';
    return;
  }

  if (operation === 'add') {
    accumulated += formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' + ';
  } else if (operation === 'percent') {
    displayText.textContent = accumulated.toLocaleString('es-ES', {
      maximumFractionDigits: 7
    });
  } else if (operation === 'divide') {
    accumulated /= formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' / ';
  } else {
    accumulated -= formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' - ';
  }

  displayText.textContent = accumulated.toLocaleString('es-ES', {
    maximumFractionDigits: 7
  });
  counter += 1;
  operation = 'subtract';
};

exports.subtractNumber = subtractNumber;

var multiplyNumber = function multiplyNumber() {
  if (displayText.textContent === '0' && operation === 'divide') {
    showError();
    return;
  }

  if (operation === 'result') {
    displayText.textContent = '0';
    operation = 'multiply';
    return;
  }

  if (!display2.textContent) {
    accumulated = formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' * ';
    counter += 1;
    operation = 'multiply';
    return;
  }

  ;

  if (operation === 'subtract') {
    accumulated -= formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' - ';
  } else if (operation === 'divide') {
    accumulated /= formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' / ';
  } else {
    accumulated *= formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' * ';
  }

  displayText.textContent = accumulated.toLocaleString('es-ES', {
    maximumFractionDigits: 7
  });
  counter += 1;
  operation = 'multiply';
};

exports.multiplyNumber = multiplyNumber;

var divideNumber = function divideNumber() {
  if (operation === 'result') {
    displayText.textContent = '0';
    operation = 'divide';
    return;
  }

  if (!display2.textContent) {
    accumulated = formatNumber(displayText.textContent);
    display2.textContent = displayText.textContent + ' / ';
    counter += 1;
    operation = 'divide';
    return;
  }

  ;

  if (displayText.textContent === '0') {
    showError();
    return;
  }

  if (operation === 'subtract') {
    accumulated -= formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' - ';
  } else {
    accumulated /= formatNumber(displayText.textContent);
    display2.textContent = accumulated + ' / ';
  }

  displayText.textContent = accumulated.toLocaleString('es-ES', {
    maximumFractionDigits: 7
  });
  counter += 1;
  operation = 'divide';
};

exports.divideNumber = divideNumber;

var percentNumber = function percentNumber() {
  if (displayText.textContent === '0' && operation === 'divide') {
    showError();
    return;
  }

  if (operation === 'result') {
    displayText.textContent = '0';
    operation = 'percent';
    return;
  }

  ;

  if (accumulated === 0) {
    displayText.textContent = '0';
    counter += 1;
    operation = 'percent';
    return;
  }

  if (!display2.textContent) {
    display2.textContent = 0;
    accumulated = 0;
    counter += 1;
    operation = 'percent';
    return;
  }

  ;
  var displayValue = accumulated * formatNumber(displayText.textContent) / 100;

  switch (operation) {
    case 'add':
      accumulated += displayValue;
      displayText.textContent = displayValue;
      display2.textContent = display2.textContent + displayValue;
      break;

    case 'subtract':
      accumulated -= displayValue;
      displayText.textContent = displayValue;
      display2.textContent = display2.textContent + displayValue;
      break;

    case 'multiply':
      accumulated *= formatNumber(displayText.textContent) / 100;
      displayText.textContent = formatNumber(displayText.textContent) / 100;
      display2.textContent = display2.textContent + formatNumber(displayText.textContent) / 100;
      break;

    case 'divide':
      accumulated /= formatNumber(displayText.textContent) / 100;
      displayText.textContent = formatNumber(displayText.textContent) / 100;
      display2.textContent = display2.textContent + formatNumber(displayText.textContent) / 100;
      break;
  }

  counter += 1;
  operation = 'percent';
};

exports.percentNumber = percentNumber;

var resultNumber = function resultNumber() {
  if (!operation) return;

  if (displayText.textContent === '0' && operation === 'divide') {
    showError();
    return;
  }

  switch (operation) {
    case 'add':
      display2.textContent = display2.textContent + displayText.textContent + ' =';
      displayText.textContent = (accumulated + formatNumber(displayText.textContent)).toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;

    case 'subtract':
      if (display2.textContent === '- ') {
        display2.textContent = '- ' + displayText.textContent;
      } else {
        display2.textContent = display2.textContent + displayText.textContent + ' =';
      }

      displayText.textContent = (accumulated - formatNumber(displayText.textContent)).toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;

    case 'multiply':
      display2.textContent = display2.textContent + displayText.textContent + ' =';
      displayText.textContent = (accumulated * formatNumber(displayText.textContent)).toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;

    case 'divide':
      display2.textContent = display2.textContent + displayText.textContent + ' =';
      displayText.textContent = (accumulated / formatNumber(displayText.textContent)).toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;

    case 'percent':
      display2.textContent = display2.textContent + ' =';
      displayText.textContent = accumulated.toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;
  }

  accumulated = formatNumber(displayText.textContent);
  operation = 'result';
};

exports.resultNumber = resultNumber;

var showError = function showError() {
  displayText.textContent = 'ERROR';
  display2.textContent = '';
  display2.classList.remove('display2-bg');
  accumulated = 0;
  operation = '';
};

exports.showError = showError;

var backButton = function backButton() {
  if (!displayText.textContent) return;

  if (displayText.textContent.length <= 2) {
    displayText.textContent = 0;
    return;
  }

  displayText.textContent = displayText.textContent.slice(0, -1);
};

exports.backButton = backButton;
//# sourceMappingURL=operations.dev.js.map
