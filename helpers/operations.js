import { setAccumulated, setCounter, setOperation } from "./status.js";
import { validateAdd, validateDivide, validateMultiply, validatePercent, validateResult, validateSubtract } from "./validateOperations.js";

const display2 = document.querySelector("#display2");

export const formatNumber = (displayTextContent) => {
  // CON ESTA FUNCION CORRIJO EL BUG DEL PUNTO EN NUMEROS ENTEROS EN ESPAÑOL
  return parseFloat(displayTextContent.replaceAll(".", "").replace(",", "."));
};

export const addNumber = () => {

  if (validateAdd()) return;

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
      console.log("entro aca")

      setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
      break;
  }
  display2.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  }) + " + ";
  displayText.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  });
  setCounter(1);
  setOperation("add");
};

export const subtractNumber = () => {

  if (validateSubtract()) return;

  switch (setOperation()) {
    case "result":
      display2.textContent = setAccumulated().toLocaleString("es-ES", {
        maximumFractionDigits: 7,
      }) + " - ";
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

  display2.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  }) + " - ";
  displayText.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  });
  setCounter(1);
  setOperation("subtract");
};

export const multiplyNumber = () => {

  if (validateMultiply()) return;

  switch (setOperation()) {
    case "result":
      display2.textContent = setAccumulated().toLocaleString("es-ES", {
        maximumFractionDigits: 7,
      }) + " * ";
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

  display2.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  }) + " * ";
  displayText.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  });
  setCounter(1);
  setOperation("multiply");
};

export const divideNumber = () => {

  if (validateDivide()) return;

  switch (setOperation()) {
    case "result":
      display2.textContent = setAccumulated().toLocaleString("es-ES", {
        maximumFractionDigits: 7,
      }) + " / ";
      displayText.textContent = "0";
      setOperation("divide");
      return;
    case "subtract":
      setAccumulated(setAccumulated() - formatNumber(displayText.textContent));
      break;
    case "add":
      setAccumulated(setAccumulated() + formatNumber(displayText.textContent));
      break;
    case "multiply":
      setAccumulated(setAccumulated() * formatNumber(displayText.textContent));
      break;
    default:
      setAccumulated(setAccumulated() / formatNumber(displayText.textContent));
      break;

  }

  displayText.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  });
  display2.textContent = setAccumulated().toLocaleString("es-ES", {
    maximumFractionDigits: 7,
  }) + " / ";
  setCounter(1);
  setOperation("divide");
};

export const percentNumber = () => {

  if (validatePercent()) return;

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
      display2.textContent = display2.textContent + formatNumber(displayText.textContent) / 10;
      break;
    case "divide":
      setAccumulated(
        (setAccumulated() / formatNumber(displayText.textContent)) * 100,
      );
      displayText.textContent = formatNumber(displayText.textContent) / 100;
      display2.textContent = display2.textContent + formatNumber(displayText.textContent) / 10;
      break;
  }

  setCounter(1);
  setOperation("percent");
};

export const resultNumber = () => {

  if (validateResult()) return;

  switch (setOperation()) {
    case "add":
      display2.textContent.includes("=")
        ? (display2.textContent =
          setAccumulated().toLocaleString("es-ES", {
            maximumFractionDigits: 7,
          }) + " + " + displayText.textContent + " =")
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
          setAccumulated().toLocaleString("es-ES", {
            maximumFractionDigits: 7,
          }) + " - " + displayText.textContent + " =";
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
          setAccumulated().toLocaleString("es-ES", {
            maximumFractionDigits: 7,
          }) + " * " + displayText.textContent + " =")
        : (display2.textContent =
          display2.textContent + displayText.textContent + " =");
      displayText.textContent = (
        setAccumulated() * formatNumber(displayText.textContent)
      ).toLocaleString("es-ES", { maximumFractionDigits: 7 });
      break;
    case "divide":
      display2.textContent.includes("=")
        ? (display2.textContent =
          setAccumulated().toLocaleString("es-ES", {
            maximumFractionDigits: 7,
          }) + " / " + displayText.textContent + " =")
        : (display2.textContent =
          display2.textContent + displayText.textContent + " =");
      displayText.textContent = (
        setAccumulated() / formatNumber(displayText.textContent)
      ).toLocaleString("es-ES", { maximumFractionDigits: 7 });
      break;
    case "percent":
      display2.textContent.includes("=")
        ? (display2.textContent =
          setAccumulated().toLocaleString("es-ES", {
            maximumFractionDigits: 7,
          }) + " % " + displayText.textContent + " =")
        : (display2.textContent = display2.textContent + " =");
      displayText.textContent = setAccumulated().toLocaleString("es-ES", {
        maximumFractionDigits: 7,
      });
      break;
  }

  setAccumulated(formatNumber(displayText.textContent));
  setOperation("result");
};

console.log("actualizo")

