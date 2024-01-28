"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showDisplay2Bg = exports.disableEffect = exports.enableDisableAudio = exports.clearDisplayText = exports.clearDisplay = exports.showDisplay = exports.addComa = exports.formatDisplayNumber = exports.styleButton = void 0;

var _operations = require("./operations.js");

var displayText = document.querySelector('#displayText');
var display2 = document.querySelector('#display2');

var styleButton = function styleButton(items, _ref) {
  var target = _ref.target;

  if (target.tagName === 'DIV') {
    target.classList.toggle("pressButton");
  } else {
    target.parentElement.classList.toggle("pressButton");
  }

  ;
  setTimeout(function () {
    items.forEach(function (item) {
      item.classList.remove("pressButton");
    });
  }, 150);
};

exports.styleButton = styleButton;

var formatDisplayNumber = function formatDisplayNumber(displayText, content) {
  // PASO EL STRING A ARRAY
  var displayTextArray = displayText.split(''); // QUITO LOS PUNTOS

  var arrayClear = displayTextArray.filter(function (word) {
    return word !== '.';
  }); // SI HAY COMAS LAS CAMBIO POR PUNTO PARA PODER FORMATEARLO A ESPAÑOL

  if (arrayClear.indexOf(',') > -1) arrayClear.splice(arrayClear.indexOf(','), 1, '.'); //DETECTO SI HAY UN .0

  var decimal0 = false;
  if ((arrayClear.join('') + content).indexOf('.0') > -1) decimal0 = true; // CONVIERTO EL ARRAY EN STRING, LE CONCATENO EL VALOR NUEVO, LO CONVIERTO A NUMERO Y LE DOY FORMATO DE NUMERO ESPAÑOL
  // CREO EL IF PARA RESOLVER EL PROBLEMA CON EL .0

  var result;

  if (!decimal0) {
    result = parseFloat(arrayClear.join('') + content).toLocaleString('es-ES', {
      maximumFractionDigits: 7
    });
  } else {
    result = arrayClear.join('').replace('.', ',') + content;
  }

  return result;
};

exports.formatDisplayNumber = formatDisplayNumber;

var addComa = function addComa() {
  //SI HAY MAS DE UNA COMA TIRO ERROR
  if (parseInt(displayText.textContent.split(',').length - 1) >= 2) {
    (0, _operations.showError)();
    return;
  } // ( displayText.textContent === '0' ) ? displayText.textContent =  displayText.textContent + ',' : displayText.textContent = '0,'


  displayText.textContent = displayText.textContent + ',';
};

exports.addComa = addComa;

var showDisplay = function showDisplay(e) {
  if (displayText.textContent.length >= 11) return;
  var content = e.target.innerText;
  displayText.textContent = formatDisplayNumber(displayText.textContent, content);
};

exports.showDisplay = showDisplay;

var clearDisplay = function clearDisplay() {
  displayText.textContent = '0';
  display2.textContent = '';
  display2.classList.remove('display2-bg');
  (0, _operations.setAccumulated)(0);
  (0, _operations.setCounter)(0);
  (0, _operations.setOperation)('');
};

exports.clearDisplay = clearDisplay;

var clearDisplayText = function clearDisplayText() {
  // EL COUNTER LO USO PARA LIMPIAR EL DISPLAY LUEGO QUE COMIENZO UNA OPERACION
  if ((0, _operations.setCounter)() >= 1) {
    displayText.textContent = '0';
    (0, _operations.setCounter)(0);
  }
};

exports.clearDisplayText = clearDisplayText;

var enableDisableAudio = function enableDisableAudio(audio) {
  audio.volume === 0 ? audio.volume = 1 : audio.volume = 0;
};

exports.enableDisableAudio = enableDisableAudio;

var disableEffect = function disableEffect(sound) {
  sound.classList.toggle('disableAudioButton');
};

exports.disableEffect = disableEffect;

var showDisplay2Bg = function showDisplay2Bg() {
  display2.classList.add('display2-bg');
};

exports.showDisplay2Bg = showDisplay2Bg;
//# sourceMappingURL=displayFunctions.dev.js.map
