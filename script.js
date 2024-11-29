function calculate(operation) {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Proszę wprowadzić prawidłowe liczby.');
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert('Nie można dzielić przez zero.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Nieznana operacja.');
            return;
    }

    document.getElementById('result').textContent = result;
}
