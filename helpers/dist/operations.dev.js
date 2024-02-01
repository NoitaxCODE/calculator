"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backButton = exports.resultNumber = exports.percentNumber = exports.divideNumber = exports.multiplyNumber = exports.subtractNumber = exports.addNumber = void 0;

var _displayFunctions = require("./displayFunctions.js");

var _status = require("./status.js");

var display2 = document.querySelector('#display2');

var formatNumber = function formatNumber(displayTextContent) {
  // CON ESTA FUNCION CORRIJO EL BUG DEL PUNTO EN NUMEROS ENTEROS EN ESPAÑOL
  return parseFloat(displayTextContent.replaceAll('.', '').replace(',', '.'));
};

var addNumber = function addNumber() {
  if ((0, _status.setOperation)() === 'error') return;

  if (displayText.textContent === '0' && (0, _status.setOperation)() === 'divide') {
    (0, _displayFunctions.showError)();
    return;
  }

  if (!display2.textContent && displayText.textContent === '0') {
    display2.textContent = '0 + ';
    (0, _status.setCounter)((0, _status.setCounter)() + 1);
    (0, _status.setOperation)('add');
    return;
  }

  ;

  if (!display2.textContent) {
    display2.textContent = displayText.textContent + ' + ';
    (0, _status.setAccumulated)((0, _status.setAccumulated)() + formatNumber(displayText.textContent));
    (0, _status.setCounter)((0, _status.setCounter)() + 1);
    (0, _status.setOperation)('add');
    return;
  }

  ;

  switch ((0, _status.setOperation)()) {
    case 'result':
      display2.textContent = (0, _status.setAccumulated)() + ' + ';
      displayText.textContent = '0';
      (0, _status.setOperation)('add');
      return;

    case 'subtract':
      (0, _status.setAccumulated)((0, _status.setAccumulated)() - formatNumber(displayText.textContent));
      display2.textContent = (0, _status.setAccumulated)() + ' - ';
      break;

    case 'percent':
      displayText.textContent = (0, _status.setAccumulated)().toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;

    case 'divide':
      (0, _status.setAccumulated)((0, _status.setAccumulated)() / formatNumber(displayText.textContent));
      display2.textContent = (0, _status.setAccumulated)() + ' / ';
      break;

    default:
      (0, _status.setAccumulated)((0, _status.setAccumulated)() + formatNumber(displayText.textContent));
      display2.textContent = (0, _status.setAccumulated)() + ' + ';
      break;
  }

  displayText.textContent = (0, _status.setAccumulated)().toLocaleString('es-ES', {
    maximumFractionDigits: 7
  });
  (0, _status.setCounter)((0, _status.setCounter)() + 1);
  (0, _status.setOperation)('add');
};

exports.addNumber = addNumber;

var subtractNumber = function subtractNumber() {
  if ((0, _status.setOperation)() === 'error') return;

  if (displayText.textContent === '0' && (0, _status.setOperation)() === 'divide') {
    (0, _displayFunctions.showError)();
    return;
  }

  if (!display2.textContent && displayText.textContent === '0') {
    display2.textContent = '0 - ';
    (0, _status.setCounter)((0, _status.setCounter)() + 1);
    (0, _status.setOperation)('subtract');
    return;
  }

  ;

  if (!display2.textContent) {
    display2.textContent = displayText.textContent + ' - ';
    (0, _status.setAccumulated)(formatNumber(displayText.textContent));
    (0, _status.setCounter)((0, _status.setCounter)() + 1);
    (0, _status.setOperation)('subtract');
    return;
  }

  ;

  if (display2.textContent === '0 - ') {
    display2.textContent = '- ' + (0, _status.setAccumulated)();
    (0, _status.setAccumulated)((0, _status.setAccumulated)() - formatNumber(displayText.textContent));
    displayText.textContent = (0, _status.setAccumulated)().toLocaleString('es-ES', {
      maximumFractionDigits: 7
    });
    (0, _status.setCounter)((0, _status.setCounter)() + 1);
    (0, _status.setOperation)('subtract');
    return;
  }

  switch ((0, _status.setOperation)()) {
    case 'result':
      display2.textContent = (0, _status.setAccumulated)() + ' - ';
      displayText.textContent = '0';
      (0, _status.setOperation)('subtract');
      return;

    case 'add':
      (0, _status.setAccumulated)((0, _status.setAccumulated)() + formatNumber(displayText.textContent));
      display2.textContent = (0, _status.setAccumulated)() + ' + ';
      break;

    case 'percent':
      displayText.textContent = (0, _status.setAccumulated)().toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;

    case 'divide':
      (0, _status.setAccumulated)((0, _status.setAccumulated)() / formatNumber(displayText.textContent));
      display2.textContent = (0, _status.setAccumulated)() + ' / ';
      break;

    default:
      (0, _status.setAccumulated)((0, _status.setAccumulated)() - formatNumber(displayText.textContent));
      display2.textContent = (0, _status.setAccumulated)() + ' - ';
      break;
  }

  displayText.textContent = (0, _status.setAccumulated)().toLocaleString('es-ES', {
    maximumFractionDigits: 7
  });
  (0, _status.setCounter)((0, _status.setCounter)() + 1);
  (0, _status.setOperation)('subtract');
};

exports.subtractNumber = subtractNumber;

var multiplyNumber = function multiplyNumber() {
  if ((0, _status.setOperation)() === 'error') return;

  if (displayText.textContent === '0' && (0, _status.setOperation)() === 'divide') {
    (0, _displayFunctions.showError)();
    return;
  }

  if (!display2.textContent && displayText.textContent === '0') {
    display2.textContent = '0 * ';
    (0, _status.setCounter)((0, _status.setCounter)() + 1);
    (0, _status.setOperation)('multiply');
    return;
  }

  ;

  if (!display2.textContent) {
    (0, _status.setAccumulated)(formatNumber(displayText.textContent));
    display2.textContent = (0, _status.setAccumulated)() + ' * ';
    (0, _status.setCounter)((0, _status.setCounter)() + 1);
    (0, _status.setOperation)('multiply');
    return;
  }

  ;

  switch ((0, _status.setOperation)()) {
    case 'result':
      display2.textContent = (0, _status.setAccumulated)() + ' * ';
      displayText.textContent = '0';
      (0, _status.setOperation)('multiply');
      return;

    case 'subtract':
      (0, _status.setAccumulated)((0, _status.setAccumulated)() - formatNumber(displayText.textContent));
      display2.textContent = (0, _status.setAccumulated)() + ' - ';
      break;

    case 'divide':
      (0, _status.setAccumulated)((0, _status.setAccumulated)() / formatNumber(displayText.textContent));
      display2.textContent = (0, _status.setAccumulated)() + ' / ';
      break;

    default:
      (0, _status.setAccumulated)((0, _status.setAccumulated)() * formatNumber(displayText.textContent));
      display2.textContent = (0, _status.setAccumulated)() + ' * ';
      break;
  }

  displayText.textContent = (0, _status.setAccumulated)().toLocaleString('es-ES', {
    maximumFractionDigits: 7
  });
  (0, _status.setCounter)((0, _status.setCounter)() + 1);
  (0, _status.setOperation)('multiply');
};

exports.multiplyNumber = multiplyNumber;

var divideNumber = function divideNumber() {
  if ((0, _status.setOperation)() === 'error') return;

  if (!display2.textContent) {
    (0, _status.setAccumulated)(formatNumber(displayText.textContent));
    display2.textContent = displayText.textContent + ' / ';
    (0, _status.setCounter)((0, _status.setCounter)() + 1);
    (0, _status.setOperation)('divide');
    return;
  }

  ;

  if (displayText.textContent === '0') {
    (0, _displayFunctions.showError)();
    return;
  }

  switch ((0, _status.setOperation)()) {
    case 'result':
      display2.textContent = (0, _status.setAccumulated)() + ' / ';
      displayText.textContent = '0';
      (0, _status.setOperation)('divide');
      return;

    case 'subtract':
      (0, _status.setAccumulated)((0, _status.setAccumulated)() - formatNumber(displayText.textContent));
      display2.textContent = (0, _status.setAccumulated)() + ' - ';
      break;

    default:
      (0, _status.setAccumulated)((0, _status.setAccumulated)() / formatNumber(displayText.textContent));
      display2.textContent = (0, _status.setAccumulated)() + ' / ';
      break;
  }

  displayText.textContent = (0, _status.setAccumulated)().toLocaleString('es-ES', {
    maximumFractionDigits: 7
  });
  (0, _status.setCounter)((0, _status.setCounter)() + 1);
  (0, _status.setOperation)('divide');
};

exports.divideNumber = divideNumber;

var percentNumber = function percentNumber() {
  if ((0, _status.setOperation)() === 'error') return;

  if (displayText.textContent === '0' && (0, _status.setOperation)() === 'divide') {
    (0, _displayFunctions.showError)();
    return;
  }

  if ((0, _status.setAccumulated)() === 0) {
    displayText.textContent = '0';
    (0, _status.setCounter)((0, _status.setCounter)() + 1);
    (0, _status.setOperation)('percent');
    return;
  }

  if (!display2.textContent) {
    display2.textContent = 0;
    (0, _status.setAccumulated)(0);
    (0, _status.setCounter)((0, _status.setCounter)() + 1);
    (0, _status.setOperation)('percent');
    return;
  }

  ;
  var displayValue = (0, _status.setAccumulated)() * formatNumber(displayText.textContent) / 100;

  switch ((0, _status.setOperation)()) {
    case 'result':
      displayText.textContent = '0';
      (0, _status.setOperation)('percent');
      return;

    case 'add':
      (0, _status.setAccumulated)((0, _status.setAccumulated)() + displayValue);
      displayText.textContent = displayValue;
      display2.textContent = display2.textContent + displayValue;
      break;

    case 'subtract':
      (0, _status.setAccumulated)((0, _status.setAccumulated)() - displayValue);
      displayText.textContent = displayValue;
      display2.textContent = display2.textContent + displayValue;
      break;

    case 'multiply':
      (0, _status.setAccumulated)((0, _status.setAccumulated)() * formatNumber(displayText.textContent) / 100);
      displayText.textContent = formatNumber(displayText.textContent) / 100;
      display2.textContent = display2.textContent + formatNumber(displayText.textContent) / 100;
      break;

    case 'divide':
      (0, _status.setAccumulated)((0, _status.setAccumulated)() / formatNumber(displayText.textContent) / 100);
      displayText.textContent = formatNumber(displayText.textContent) / 100;
      display2.textContent = display2.textContent + formatNumber(displayText.textContent) / 100;
      break;
  }

  (0, _status.setCounter)((0, _status.setCounter)() + 1);
  (0, _status.setOperation)('percent');
};

exports.percentNumber = percentNumber;

var resultNumber = function resultNumber() {
  if ((0, _status.setOperation)() === 'error') return;
  if (!(0, _status.setOperation)()) return;

  if (displayText.textContent === '0' && (0, _status.setOperation)() === 'divide') {
    (0, _displayFunctions.showError)();
    return;
  }

  switch ((0, _status.setOperation)()) {
    case 'add':
      display2.textContent.includes('=') ? display2.textContent = (0, _status.setAccumulated)() + ' + ' + displayText.textContent + ' =' : display2.textContent = display2.textContent + displayText.textContent + ' =';
      displayText.textContent = ((0, _status.setAccumulated)() + formatNumber(displayText.textContent)).toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;

    case 'subtract':
      if (display2.textContent === '- ') {
        display2.textContent = '- ' + displayText.textContent;
      } else if (display2.textContent.includes('=')) {
        display2.textContent = (0, _status.setAccumulated)() + ' - ' + displayText.textContent + ' =';
      } else {
        display2.textContent = display2.textContent + displayText.textContent + ' =';
      }

      displayText.textContent = ((0, _status.setAccumulated)() - formatNumber(displayText.textContent)).toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;

    case 'multiply':
      display2.textContent.includes('=') ? display2.textContent = (0, _status.setAccumulated)() + ' * ' + displayText.textContent + ' =' : display2.textContent = display2.textContent + displayText.textContent + ' =';
      displayText.textContent = ((0, _status.setAccumulated)() * formatNumber(displayText.textContent)).toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;

    case 'divide':
      display2.textContent.includes('=') ? display2.textContent = (0, _status.setAccumulated)() + ' / ' + displayText.textContent + ' =' : display2.textContent = display2.textContent + displayText.textContent + ' =';
      displayText.textContent = ((0, _status.setAccumulated)() / formatNumber(displayText.textContent)).toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;

    case 'percent':
      display2.textContent.includes('=') ? display2.textContent = (0, _status.setAccumulated)() + ' % ' + displayText.textContent + ' =' : display2.textContent = display2.textContent + ' =';
      displayText.textContent = (0, _status.setAccumulated)().toLocaleString('es-ES', {
        maximumFractionDigits: 7
      });
      break;
  }

  (0, _status.setAccumulated)(formatNumber(displayText.textContent));
  (0, _status.setOperation)('result');
};

exports.resultNumber = resultNumber;

var backButton = function backButton() {
  if ((0, _status.setOperation)() === 'error') return;
  if (!displayText.textContent) return;

  if (displayText.textContent.length <= 1) {
    displayText.textContent = 0;
    return;
  }

  displayText.textContent = displayText.textContent.slice(0, -1);
};

exports.backButton = backButton;
//# sourceMappingURL=operations.dev.js.map
