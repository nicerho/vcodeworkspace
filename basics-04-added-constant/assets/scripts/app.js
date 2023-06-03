const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function craeteAndWriteLog(parameter, resultBeforeCalc, calcNumber){
    const description = `${currentResult}+${enteredNumber}`;
}

function add() {
  const enteredNumber = getUserNumberInput;
  const description = `${currentResult}+${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, description);
}
function subtract() {
  const enteredNumber = getUserNumberInput;
  const description = `${currentResult}-${enteredNumber}`;
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult, description);
}

function multiply() {}

function divide() {}

addBtn.addEventListener('click', add);
