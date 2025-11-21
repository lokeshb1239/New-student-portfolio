const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Number or decimal
        if (button.classList.contains('number')) {
            // Prevent multiple decimals
            if (value === '.' && currentInput.includes('.')) return;
            currentInput += value;
            updateDisplay();
        }

        // Operator
        else if (button.classList.contains('operator')) {
            if(currentInput === '' && previousInput !== '') {
                operator = value; // allow changing operator
                return;
            }
            if(currentInput === '') return;
            if(previousInput !== '') {
                calculate();
            }
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }

        // Equal
        else if (button.classList.contains('equal')) {
            if(currentInput === '' || previousInput === '' || operator === '') return;
            calculate();
            operator = '';
            previousInput = '';
        }

        // Clear
        else if (button.classList.contains('clear')) {
            currentInput = '';
            previousInput = '';
            operator = '';
            updateDisplay();
        }

        // Delete
        else if (button.classList.contains('delete')) {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }
    });
});

function updateDisplay() {
    display.value = currentInput;
}

function calculate() {
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result;

    switch(operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if(curr === 0) {
                alert("Cannot divide by zero");
                result = '';
                break;
            }
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    updateDisplay();
}
