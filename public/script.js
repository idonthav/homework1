function CaculateSum() {
    const firstNum = parseFloat(document.getElementById('firstNum').value)
    const secondNum = parseFloat(document.getElementById('secondNum').value)


    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert("Please input a valid number")
        document.getElementById('result').textContent = "?"
    } else {
        var sum = firstNum + secondNum
        document.getElementById('result').textContent = sum
    }    
}


function ConvertToBinary() {
    const resultValue = parseFloat(document.getElementById('result').textContent);

    if (!isNaN(resultValue)) {
        const binaryResult = resultValue.toString(2);
        document.getElementById('result-binary').textContent = binaryResult;
    } else {
        alert("Please calculate the sum first.");
    }
}

function clearAll() {
    document.getElementById('firstNum').value = "";
    document.getElementById('secondNum').value = "";
    document.getElementById('result').textContent = "?";
    document.getElementById('result-binary').textContent = "?";
}
