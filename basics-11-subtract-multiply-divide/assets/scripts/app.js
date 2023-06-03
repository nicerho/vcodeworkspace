const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

/*This is a comment*/

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD',initialResult,enteredNumber,currentResult)
  /*const logEntry = {
    operation: 'ADD',
    number1: initialResult,
    number2: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);*/
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult)
  /*const logEntry = {
    operation: 'SUBTRACT',
    number1: initialResult,
    number2: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);*/
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult)
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE',initialResult,enteredNumber,currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
