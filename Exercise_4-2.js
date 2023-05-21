const setErrorText = element => element.innerText = 'Input Error!';

const displayTimes (){
    const number = document.getElementById('number').value;
    const parsedNumber = parseInt(number);
    const timesResult = document.getElementById('times-result');

    if (parsedNumber != number) return setErrorText(timesResult); 
    if (!isFinite(parsedNumber) || isNaN(parsedNumber)) return setErrorText(timesResult);
    if (parsedNumber < 1 || parsedNumber > 9) return setErrorText(timesResult);

    const result = [];
    for (let i = 1; i <= 9; i++) {
        result.push(parsedNumber + ' X ' + i + ' = ' + parsedNumber * i);
    }
    
    timesResult.innerText = result.join('\n');
};