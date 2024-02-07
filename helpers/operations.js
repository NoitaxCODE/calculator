import { showError } from "./displayFunctions.js";
import { setAccumulated, setCounter, setOperation } from "./status.js";

const display2 = document.querySelector("#display2");

const formatNumber = (displayTextContent) => {
  // CON ESTA FUNCION CORRIJO EL BUG DEL PUNTO EN NUMEROS ENTEROS EN ESPAÑOL
  return parseFloat(displayTextContent.replaceAll(".", "").replace(",", "."));
};

export const addNumber = () => {

  if (setOperation() === "error") return;

  if (display2.textContent === "0 - " || display2.textContent === "0 * ") {
    setOperation() === "subtract"
      ? setAccumulated(setAccumulated() - formatNumber(displayText.textContent))
      : setAccumulated(setAccumulated() * formatNumber(displayText.textContent));
    display2.textContent = `${setAccumulated()} + `;
    setCounter(1);
    setOperation("add");
    return;
  }

  if (displayText.textContent === "0" && setOperation() === "divide") {
    showError();
    return;
  }

  if (!display2.textContent && displayText.textContent === "0") {
    display2.textContent = "0 + ";
    setCounter(1);
    setOperation("add");
    return;
  }

  if (!display2.textContent) {
    display2.textContent = displayText.textContent + " + ";
    setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
    setCounter(1);
    setOperation("add");
    return;
  }

  switch (setOperation()) {
    case "result":
      display2.textContent = setAccumulated() + " + ";
      displayText.textContent = "0";
      setOperation("add");
      return;
    case "subtract":
      setAccumulated(setAccumulated() - formatNumber(displayText.textContent));
      break;
    case "divide":
      setAccumulated(setAccumulated() / formatNumber(displayText.textContent));
      break;
    case "multiply":
      setAccumulated(setAccumulated() * formatNumber(displayText.textContent));
      break;
    default:
      setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
      break;
  }
  display2.textContent = setAccumulated() + " + ";
  displayText.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  });
  setCounter(1);
  setOperation("add");
};

export const subtractNumber = () => {

  if (setOperation() === "error") return;

  if (display2.textContent === "0 + " || display2.textContent === "0 * ") {
    setOperation() === "add"
      ? setAccumulated(setAccumulated() + formatNumber(displayText.textContent))
      : setAccumulated(setAccumulated() * formatNumber(displayText.textContent));
    display2.textContent = `${setAccumulated()} - `;
    setCounter(1);
    setOperation("subtract");
    return;
  }

  if (displayText.textContent === "0" && setOperation() === "divide") {
    showError();
    return;
  }

  if (!display2.textContent && displayText.textContent === "0") {
    display2.textContent = "0 - ";
    setCounter(1);
    setOperation("subtract");
    return;
  }

  if (!display2.textContent) {
    display2.textContent = displayText.textContent + " - ";
    setAccumulated(formatNumber(displayText.textContent));
    setCounter(1);
    setOperation("subtract");
    return;
  }

  switch (setOperation()) {
    case "result":
      display2.textContent = setAccumulated() + " - ";
      displayText.textContent = "0";
      setOperation("subtract");
      return;
    case "add":
      setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
      break;
    case "divide":
      setAccumulated(setAccumulated() / formatNumber(displayText.textContent));
      break;
    case "multiply":
      setAccumulated(setAccumulated() * formatNumber(displayText.textContent));
      break;
    default:
      setAccumulated(setAccumulated() - formatNumber(displayText.textContent));
      break;
  }

  display2.textContent = setAccumulated() + " - ";
  displayText.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  });
  setCounter(1);
  setOperation("subtract");
};

export const multiplyNumber = () => {
  if (setOperation() === "error") return;

  if (display2.textContent === "0 + " || display2.textContent === "0 - ") {
    setOperation() === "subtract"
      ? setAccumulated(setAccumulated() - formatNumber(displayText.textContent))
      : setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
    display2.textContent = `${setAccumulated()} * `;
    setCounter(1);
    setOperation("multiply");
    return;
  }

  if (displayText.textContent === "0" && setOperation() === "divide") {
    showError();
    return;
  }

  if (!display2.textContent && displayText.textContent === "0") {
    display2.textContent = "0 * ";
    setCounter(1);
    setOperation("multiply");
    return;
  }

  if (!display2.textContent) {
    console.log("entro en el multi")
    setAccumulated(formatNumber(displayText.textContent));
    display2.textContent = setAccumulated() + " * ";
    setCounter(1);
    setOperation("multiply");
    return;
  }

  switch (setOperation()) {
    case "result":
      display2.textContent = setAccumulated() + " * ";
      displayText.textContent = "0";
      setOperation("multiply");
      return;
    case "subtract":
      setAccumulated(setAccumulated() - formatNumber(displayText.textContent));
      break;
    case "divide":
      setAccumulated(setAccumulated() / formatNumber(displayText.textContent));
      break;
    case "add":
      setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
      break;
    default:
      setAccumulated(setAccumulated() * formatNumber(displayText.textContent));
      break;
  }

  display2.textContent = setAccumulated() + " * ";
  displayText.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  });
  setCounter(1);
  setOperation("multiply");
};

export const divideNumber = () => {
  if (setOperation() === "error") return;

  if (!display2.textContent) {
    setAccumulated(formatNumber(displayText.textContent));
    display2.textContent = displayText.textContent + " / ";
    setCounter(1);
    setOperation("divide");
    return;
  }

  if (displayText.textContent === "0") {
    showError();
    return;
  }

  switch (setOperation()) {
    case "result":
      display2.textContent = setAccumulated() + " / ";
      displayText.textContent = "0";
      setOperation("divide");
      return;
    case "subtract":
      setAccumulated(setAccumulated() - formatNumber(displayText.textContent));
      display2.textContent = setAccumulated() + " - ";
      break;
    default:
      setAccumulated(setAccumulated() / formatNumber(displayText.textContent));
      break;

  }

  displayText.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  });
  display2.textContent = setAccumulated() + " / ";
  setCounter(1);
  setOperation("divide");
};

export const percentNumber = () => {
  if (setOperation() === "error") return;

  if (displayText.textContent === "0" && setOperation() === "divide") {
    showError();
    return;
  }

  if (setAccumulated() === 0) {
    displayText.textContent = "0";
    setCounter(1);
    setOperation("percent");
    return;
  }

  if (!display2.textContent) {
    display2.textContent = 0;
    setAccumulated(0);
    setCounter(1);
    setOperation("percent");
    return;
  }

  let displayValue =
    (setAccumulated() * formatNumber(displayText.textContent)) / 100;

  switch (setOperation()) {
    case "result":
      displayText.textContent = "0";
      setOperation("percent");
      return;
    case "add":
      setAccumulated(setAccumulated() + displayValue);
      displayText.textContent = displayValue;
      display2.textContent = display2.textContent + displayValue;
      break;
    case "subtract":
      setAccumulated(setAccumulated() - displayValue);
      displayText.textContent = displayValue;
      display2.textContent = display2.textContent + displayValue;
      break;
    case "multiply":
      setAccumulated(
        (setAccumulated() * formatNumber(displayText.textContent)) / 100,
      );
      displayText.textContent = formatNumber(displayText.textContent) / 100;
      display2.textContent =
        display2.textContent + formatNumber(displayText.textContent) / 10;
      break;
    case "divide":
      setAccumulated(
        (setAccumulated() / formatNumber(displayText.textContent)) * 100,
      );
      displayText.textContent = formatNumber(displayText.textContent) / 100;
      display2.textContent =
        display2.textContent + formatNumber(displayText.textContent) / 10;
      break;
  }

  setCounter(1);
  setOperation("percent");
};

export const resultNumber = () => {
  if (setOperation() === "error") return;

  if (!setOperation()) return;

  if (displayText.textContent === "0" && setOperation() === "divide") {
    showError();
    return;
  }

  switch (setOperation()) {
    case "add":
      display2.textContent.includes("=")
        ? (display2.textContent =
          setAccumulated() + " + " + displayText.textContent + " =")
        : (display2.textContent =
          display2.textContent + displayText.textContent + " =");
      displayText.textContent = (
        setAccumulated() + formatNumber(displayText.textContent)
      ).toLocaleString("es-ES", { maximumFractionDigits: 7 });
      break;
    case "subtract":
      if (display2.textContent === "- ") {
        display2.textContent = "- " + displayText.textContent;
      } else if (display2.textContent.includes("=")) {
        display2.textContent =
          setAccumulated() + " - " + displayText.textContent + " =";
      } else {
        display2.textContent =
          display2.textContent + displayText.textContent + " =";
      }
      displayText.textContent = (
        setAccumulated() - formatNumber(displayText.textContent)
      ).toLocaleString("es-ES", { maximumFractionDigits: 7 });
      break;
    case "multiply":
      display2.textContent.includes("=")
        ? (display2.textContent =
          setAccumulated() + " * " + displayText.textContent + " =")
        : (display2.textContent =
          display2.textContent + displayText.textContent + " =");
      displayText.textContent = (
        setAccumulated() * formatNumber(displayText.textContent)
      ).toLocaleString("es-ES", { maximumFractionDigits: 7 });
      break;
    case "divide":
      display2.textContent.includes("=")
        ? (display2.textContent =
          setAccumulated() + " / " + displayText.textContent + " =")
        : (display2.textContent =
          display2.textContent + displayText.textContent + " =");
      displayText.textContent = (
        setAccumulated() / formatNumber(displayText.textContent)
      ).toLocaleString("es-ES", { maximumFractionDigits: 7 });
      break;
    case "percent":
      display2.textContent.includes("=")
        ? (display2.textContent =
          setAccumulated() + " % " + displayText.textContent + " =")
        : (display2.textContent = display2.textContent + " =");
      displayText.textContent = setAccumulated().toLocaleString("es-ES", {
        maximumFractionDigits: 7,
      });
      break;
  }

  setAccumulated(formatNumber(displayText.textContent));
  setOperation("result");
};

export const backButton = () => {
  if (setOperation() === "error") return;

  if (!displayText.textContent) return;

  if (displayText.textContent.length <= 1) {
    displayText.textContent = 0;
    return;
  }
  displayText.textContent = displayText.textContent.slice(0, -1);
};
