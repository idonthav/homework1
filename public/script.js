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