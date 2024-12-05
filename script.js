document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const userNumber = document.getElementById('userNumber').value;
    const resultDiv = document.getElementById('result');
    
    if (userNumber && !isNaN(userNumber) && userNumber > 10) {
        resultDiv.innerHTML = `You entered the number: ${userNumber}`;
    } else {
        resultDiv.innerHTML = 'Please enter a valid number greater than 10.';
    }
});
