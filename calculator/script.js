class Calculator {
    constructor(previousText, currentText) {
        this.previousText = previousText;
        this.currentText = currentText;
        this.clear();
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand != '') this.compute();
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const perv = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if (isNaN(perv) || isNaN(curr)) return;
        switch (this.operation) {
            case '+':
                computation = perv + curr;
                break;

            case '-':
                computation = perv - curr;
                break;

            case '*':
                computation = perv * curr;
                break;

            case '÷':
                computation = perv / curr;
                break;

            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) integerDisplay = '';
        else integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });

        if (decimalDigits != null) return `${integerDisplay}.${decimalDigits}`;
        else return integerDisplay;
    }

    updateDisplay() {
        this.currentText.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousText.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }
        else this.previousText.innerText = '';
    }
}



const numberButtons = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalButton = document.querySelector('[data-equal]');
const previousText = document.querySelector('[data-previous-operand]');
const currentText = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousText, currentText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

// adding keypress functionality to the calculator
document.onkeydown = (e) => {
    if (
        e.key == 1 ||
        e.key == 2 ||
        e.key == 3 ||
        e.key == 4 ||
        e.key == 5 ||
        e.key == 6 ||
        e.key == 7 ||
        e.key == 8 ||
        e.key == 9 ||
        e.key == 0
    ) {
        calculator.appendNumber(e.key);
        calculator.updateDisplay();
    }
    if (e.key == '+' || e.key == '-' || e.key == '*') {
        calculator.chooseOperation(e.key);
        calculator.updateDisplay();
    }
    if (e.key == '/') {
        calculator.chooseOperation('÷');
        calculator.updateDisplay();
    }
    if (e.key == 'Enter') {
        calculator.compute();
        calculator.updateDisplay();
    }
    if (e.key == 'Backspace') {
        calculator.delete();
        calculator.updateDisplay();
    }
}
