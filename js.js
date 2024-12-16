const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");
const buttonThree = document.querySelector(".button-three");
const buttonFour = document.querySelector(".button-four");
const buttonFive = document.querySelector(".button-five");
const buttonSix = document.querySelector(".button-six");
const buttonSeven = document.querySelector(".button-seven");
const buttonEight = document.querySelector(".button-eight");
const buttonNine = document.querySelector(".button-nine");
const buttonZero = document.querySelector(".button-zero");
const buttonClear = document.querySelector(".button-clear");
const buttonEqual = document.querySelector(".button-equal");
const buttonDivide = document.querySelector(".button-divide");
const buttonAdd = document.querySelector(".button-plus");
const buttonMultiply = document.querySelector(".button-multiply");
const buttonSubtract = document.querySelector(".button-subtract");
const screen = document.querySelector(".screen");

let currentInput = "";
let lastOperator = "";
let firstNum = "";

let handleNumber = function(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        updateScreen();
    }
}

const multiplyButton = function(num1, num2) {
    return num1 * num2;
}

const addButton = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const divide = function(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "CANT DIVIDE BY 0 LOSER";
    }
}

const operate = function() {
    let result;
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(currentInput);

    switch (lastOperator) {
        case "+":
            result = addButton(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "x":
            result = multiplyButton(num1, num2);
            break;
        case "÷":
            result = divide(num1, num2);
            break;
        default:
            result = "ERROR";
    }

    currentInput = result.toString();
    firstNum = "";
    lastOperator = "";
    updateScreen();
}

const updateScreen = function() {
    screen.textContent = currentInput;
}

document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
        handleNumber("1");
    }
    if (event.key === "2") {
        handleNumber("2");
    }
    if (event.key === "3") {
        handleNumber("3");
    }
    if (event.key === "4") {
        handleNumber("4");
    }
    if (event.key === "5") {
        handleNumber("5");
    }
    if (event.key === "6") {
        handleNumber("6");
    }
    if (event.key === "7") {
        handleNumber("7");
    }
    if (event.key === "8") {
        handleNumber("8");
    }
    if (event.key === "9") {
        handleNumber("9");
    }
    if (event.key === "0") {
        handleNumber("0");
    }
    if (event.key === "=" || event.key === "Enter") {
        if (firstNum !== "") {
            operate();
            currentInput = ""
        }
    }
    if (event.key === "-") {
        if (firstNum === "") {
            firstNum = currentInput;
        }
        lastOperator = '-';
        currentInput = "";
    }
    if (event.key === "+") {
        if (firstNum === "") {
            firstNum = currentInput;
        }
        lastOperator = '+';
        currentInput = "";
    }
    if (event.key === "x" || event.key === "*") {
        if (firstNum === "") {
            firstNum = currentInput;
        }
        lastOperator = 'x';
        currentInput = "";
    }
    if (event.key === "/") {
        if (firstNum === "") {
            firstNum = currentInput;
        }
        lastOperator = '÷';
        currentInput = "";
    }
});

buttonOne.addEventListener('click', () => handleNumber('1'));
buttonTwo.addEventListener('click', () => handleNumber('2'));
buttonThree.addEventListener('click', () => handleNumber('3'));
buttonFour.addEventListener('click', () => handleNumber('4'));
buttonFive.addEventListener('click', () => handleNumber('5'));
buttonSix.addEventListener('click', () => handleNumber('6'));
buttonSeven.addEventListener('click', () => handleNumber('7'));
buttonEight.addEventListener('click', () => handleNumber('8'));
buttonNine.addEventListener('click', () => handleNumber('9'));
buttonZero.addEventListener('click', () => handleNumber('0'));

buttonAdd.addEventListener('click', () => {
    if (firstNum === "") {
        firstNum = currentInput;
    }
    lastOperator = '+';
    currentInput = "";
});

buttonSubtract.addEventListener('click', () => {
    if (firstNum === "") {
        firstNum = currentInput;
    }
    lastOperator = '-';
    currentInput = "";
});

buttonMultiply.addEventListener('click', () => {
    if (firstNum === "") {
        firstNum = currentInput;
    }
    lastOperator = 'x';
    currentInput = "";
});

buttonDivide.addEventListener('click', () => {
    if (firstNum === "") {
        firstNum = currentInput;
    }
    lastOperator = '÷';
    currentInput = "";
});

buttonEqual.addEventListener('click', () => {
    if (firstNum !== "") {
        operate();
        currentInput = ""
    }
});

buttonClear.addEventListener('click', () => {
    currentInput = '';
    firstNum = '';
    lastOperator = '';
    updateScreen();
});
