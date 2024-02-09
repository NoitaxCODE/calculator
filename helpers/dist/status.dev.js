"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOperationStatus = exports.setOperation = exports.setAccumulated = exports.setCounter = void 0;
var accumulated = 0;
var operation;
var counter = 0;
var operationStatus = 0;

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

var setOperationStatus = function setOperationStatus() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : operationStatus;
  console.log(value);

  if (value === true) {
    operationStatus += 1;
  } else if (value === false) {
    operationStatus = 0;
  }

  ;
  console.log(operationStatus);
  if (operationStatus === 2) return true;
};

exports.setOperationStatus = setOperationStatus;
//# sourceMappingURL=status.dev.js.map
