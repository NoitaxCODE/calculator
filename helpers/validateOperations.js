import { showError } from "./displayFunctions.js";
import { formatNumber } from "./operations.js";
import { setAccumulated, setCounter, setOperation, setOperationStatus } from "./status.js";

export const validateAdd = () => {

  if (setOperation() === "error") return true;

  if (display2.textContent === "0 - " || display2.textContent === "0 * ") {
    setOperation() === "subtract"
      ? setAccumulated(setAccumulated() - formatNumber(displayText.textContent))
      : setAccumulated(setAccumulated() * formatNumber(displayText.textContent));
    display2.textContent = `${setAccumulated().toLocaleString("es-ES", {
      maximumFractionDigits: 7,
    })} + `;
    setCounter(1);
    setOperation("add");
    return true;
  }

  if (displayText.textContent === "0" && setOperation() === "divide") {
    showError();
    return true;
  }

  if (!display2.textContent && displayText.textContent === "0") {
    display2.textContent = "0 + ";
    setCounter(1);
    setOperation("add");
    return true;
  }

  if (!display2.textContent) {
    display2.textContent = displayText.textContent + " + ";
    setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
    setCounter(1);
    setOperation("add");
    return true;
  }

  if (displayText.textContent === "0" && setOperation() === "multiply") {
    displayText.textContent = 0;
    display2.textContent = display2.textContent + " 0 =";
    setOperation("add");
    setAccumulated(0);
    return true;
  }

  if (setOperation() !== "add" && setOperationStatus()) {
    displayText.textContent = 0
    setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
    setCounter(1);
    setOperation("add");
    display2.textContent = setAccumulated().toLocaleString("es-ES", {
      maximumFractionDigits: 7,
    }) + " + ";
    return true;
  }
}

export const validateSubtract = () => {

  if (setOperation() === "error") return true;

  if (display2.textContent === "0 + " || display2.textContent === "0 * ") {
    setOperation() === "add"
      ? setAccumulated(setAccumulated() + formatNumber(displayText.textContent))
      : setAccumulated(setAccumulated() * formatNumber(displayText.textContent));
    display2.textContent = `${setAccumulated().toLocaleString("es-ES", {
      maximumFractionDigits: 7,
    })} - `;
    setCounter(1);
    setOperation("subtract");
    return true;
  }

  if (displayText.textContent === "0" && setOperation() === "divide") {
    showError();
    return true;
  }

  if (!display2.textContent && displayText.textContent === "0") {
    display2.textContent = "0 - ";
    setCounter(1);
    setOperation("subtract");
    return true;
  }

  if (!display2.textContent) {
    display2.textContent = displayText.textContent + " - ";
    setAccumulated(formatNumber(displayText.textContent));
    setCounter(1);
    setOperation("subtract");
    return true;
  }

  if (displayText.textContent === "0" && setOperation() === "multiply") {
    displayText.textContent = 0;
    display2.textContent = display2.textContent + " 0 =";
    setOperation("subtract");
    setAccumulated(0);
    return true;
  }

  if (setOperation() !== "subtract" && setOperationStatus()) {
    displayText.textContent = 0
    setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
    setCounter(1);
    setOperation("subtract");
    display2.textContent = setAccumulated().toLocaleString("es-ES", {
      maximumFractionDigits: 7,
    }) + " - ";
    return true;
  }
}

export const validateMultiply = () => {

  if (setOperation() === "error") return true;

  if (display2.textContent === "0 + " || display2.textContent === "0 - ") {
    setOperation() === "subtract"
      ? setAccumulated(setAccumulated() - formatNumber(displayText.textContent))
      : setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
    display2.textContent = `${setAccumulated().toLocaleString("es-ES", {
      maximumFractionDigits: 7,
    })} * `;
    setCounter(1);
    setOperation("multiply");
    return true;
  }

  if (displayText.textContent === "0" && setOperation() === "divide") {
    showError();
    return true;
  }

  if (!display2.textContent && displayText.textContent === "0") {
    display2.textContent = "0 * ";
    setCounter(1);
    setOperation("multiply");
    return true;
  }

  if (!display2.textContent) {
    setAccumulated(formatNumber(displayText.textContent));
    display2.textContent = setAccumulated().toLocaleString("es-ES", {
      maximumFractionDigits: 7,
    }) + " * ";
    setCounter(1);
    setOperation("multiply");
    return true;
  }

  if (displayText.textContent === "0" && setOperation() === "multiply") {
    displayText.textContent = 0;
    display2.textContent = display2.textContent + " 0 =";
    setOperation("multiply");
    setAccumulated(0);
    return true;
  }

  if (setOperation() !== "multiply" && setOperationStatus()) {
    displayText.textContent = 0
    setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
    setCounter(1);
    setOperation("multiply");
    display2.textContent = setAccumulated().toLocaleString("es-ES", {
      maximumFractionDigits: 7,
    }) + " * ";
    return true;
  }
}

export const validateDivide = () => {

  if (setOperation() === "error") return true;

  if (!display2.textContent) {
    setAccumulated(formatNumber(displayText.textContent));
    display2.textContent = displayText.textContent + " / ";
    setCounter(1);
    setOperation("divide");
    return true;
  }

  if (displayText.textContent === "0") {
    showError();
    return true;
  }

  if (setOperation() !== "divide" && setOperationStatus()) {
    displayText.textContent = 0
    setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
    setCounter(1);
    setOperation("divide");
    display2.textContent = setAccumulated().toLocaleString("es-ES", {
      maximumFractionDigits: 7,
    }) + " / ";
    return true;
  }
}

export const validatePercent = () => {
  if (setOperation() === "error") return true;

  if (displayText.textContent === "0" && setOperation() === "divide") {
    showError();
    return true;
  }

  if (setAccumulated() === 0) {
    displayText.textContent = "0";
    setCounter(1);
    setOperation("percent");
    return true;
  }

  if (!display2.textContent) {
    display2.textContent = 0;
    setAccumulated(0);
    setCounter(1);
    setOperation("percent");
    return true;
  }
}

export const validateResult = () => {
  if (setOperation() === "error") return true;

  if (!setOperation()) return true;

  if (displayText.textContent === "0" && setOperation() === "multiply") {
    displayText.textContent = 0;
    display2.textContent = display2.textContent + " 0 =";
    setAccumulated(0);
    return true;
  }

  if (displayText.textContent === "0" && setOperation() === "divide") {
    showError();
    return true;
  }
}
