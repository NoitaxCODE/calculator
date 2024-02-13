import {
  addComa,
  clearDisplay,
  clearDisplayText,
  disableEffect,
  enableDisableAudio,
  showDisplay,
  showDisplay2Bg,
  styleButton,
  backButton,
} from "./helpers/displayFunctions.js";
import { getAudioUrl } from "./helpers/getAudio.js";
import {
  addNumber,
  resultNumber,
  subtractNumber,
  multiplyNumber,
  divideNumber,
  percentNumber,
} from "./helpers/operations.js";
import { resetPreviusValue, setOperationStatus, setPreviusValue } from "./helpers/status.js";

const numbers = document.querySelectorAll(".number");
const items = document.querySelectorAll(".item");
const clear = document.querySelector("#clear");
const coma = document.querySelector("#coma");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const result = document.querySelector("#result");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const percent = document.querySelector("#percent");
const sound = document.querySelector("#sound");
const back = document.querySelector("#back");
const audio = new Audio(await getAudioUrl());

document.addEventListener("keydown", ({ key }) => {

  if (key === "Enter") {
    result.click();
    return;
  }
  if (key === "+") {
    add.click();
    return;
  }
  if (key === "-") {
    subtract.click();
    return;
  }
  if (key === ".") {
    coma.click();
    return;
  }
  if (key === "Delete") {
    clear.click();
    return;
  }

  if (key === "Escape") {
    clear.click();
    return;
  }

  if (key === "*") {
    multiply.click();
    return;
  }

  if (key === "/") {
    divide.click();
    return;
  }

  if (key === "%") {
    percent.click();
    return;
  }
  if (key === "Backspace") {
    backButton();
    return;
  }

  if (isNaN(key)) return;

  numbers.forEach((number) => {
    if (number.textContent === key) number.click();
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    setOperationStatus(false);
    clearDisplayText();
    showDisplay(e);
  });
});

items.forEach((item) => {
  item.addEventListener("click", styleButton.bind(this, items));
  item.addEventListener("click", (e) => { setPreviusValue(e) });
  item.addEventListener("click", () => {
    audio.play();
  });
});

clear.addEventListener("click", () => {
  setOperationStatus(false);
  clearDisplay();
  resetPreviusValue();
});

coma.addEventListener("click", (e) => {
  setOperationStatus(false);
  addComa(e);
});

add.addEventListener("click", () => {
  setOperationStatus(true);
  showDisplay2Bg();
  addNumber();
});

result.addEventListener("click", () => {
  setOperationStatus(false);
  resultNumber();
});

subtract.addEventListener("click", () => {
  setOperationStatus(true);
  showDisplay2Bg();
  subtractNumber();
});

multiply.addEventListener("click", () => {
  setOperationStatus(true);
  showDisplay2Bg();
  multiplyNumber();
});

divide.addEventListener("click", () => {
  setOperationStatus(true);
  showDisplay2Bg();
  divideNumber();
});

percent.addEventListener("click", () => {
  setOperationStatus(true);
  percentNumber();
});

sound.addEventListener("click", () => {
  enableDisableAudio(audio);
  disableEffect(sound);
});

back.addEventListener("click", () => {
  backButton();
});

if ("serviceWorker" in navigator) {
  (async () => {
    try {
      let { active } = await navigator.serviceWorker.register("./sw.js");

      active.state === "activated" && console.log("Registro de SW exitoso");
    } catch (error) {
      console.log(error);
    }
  })();
}

console.log("actualizo")