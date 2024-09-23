function appendToScreen(value) {
    document.getElementById('calculator-screen').value += value;
}

function clearScreen() {
    document.getElementById('calculator-screen').value = '';
}

function deleteLast() {
    const currentValue = document.getElementById('calculator-screen').value;
    document.getElementById('calculator-screen').value = currentValue.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(document.getElementById('calculator-screen').value);
        document.getElementById('calculator-screen').value = result;
    } catch {
        document.getElementById('calculator-screen').value = 'Error';
    }
}
