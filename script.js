let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function arithmetic(str) {
    const regex = /([-+]?\d*\.?\d+)/g;
    const numList = str.match(regex).map(Number);

    if (numList.length !== 2) {
        throw new Error('Invalid expression');
    }

    const operator = str.match(/[+-/*]/)[0];

    switch (operator) {
        case '+':
            return numList[0] + numList[1];
        case '-':
            return numList[0] - numList[1];
        case '/':
            return numList[0] / numList[1];
        case '*':
            return numList[0] * numList[1];
        default:
            throw new Error('Operation not found');
    }
}

function calculateResult() {
    try {
        const result = arithmetic(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}
