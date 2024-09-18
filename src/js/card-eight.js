function findLargest() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;

    
    function isNumber(value) {
        return !isNaN(value) && value.trim() !== '';
    }

  
    if (!isNumber(num1) || !isNumber(num2) || !isNumber(num3)) {
        document.getElementById('result').textContent = "Please enter a number";
        return;
    }

  
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);

 
    const largest = Math.max(number1, number2, number3);

  
    document.getElementById('result').textContent = largest;
}


document.getElementById('num1').addEventListener('input', findLargest);
document.getElementById('num2').addEventListener('input', findLargest);
document.getElementById('num3').addEventListener('input', findLargest);