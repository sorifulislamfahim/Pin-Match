
function getPin(){
    const pin = getGenaratePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('Pin 3 digit Not Found', pin);
        return getPin();
    }
}

function getGenaratePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const generatePin = getPin();
    
    const displayPinFiled = document.getElementById('display-filed');
    displayPinFiled.value = generatePin;
})


document.getElementById('calulator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumbersFiled = document.getElementById('typed-numbers-filed');
    const priviousTypedNumber = typedNumbersFiled.value;

    if(isNaN(number)){
        if(number == 'C'){
            typedNumbersFiled.value = '';
        }
        else if(number == '<'){
            const digits = priviousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumbersFiled.value = remainingDigits;
        }
    }
    else{
        const newTypedNumbers = priviousTypedNumber + number;
        typedNumbersFiled.value = newTypedNumbers;
    }
})


document.getElementById('verify-btn').addEventListener('click', function(){
    const displayPinFiled = document.getElementById('display-filed');
    const currentPin = displayPinFiled.value;

    const typedNumbersFiled = document.getElementById('typed-numbers-filed');
    const typedNumber = typedNumbersFiled.value;

    const pinSuccesedMassage = document.getElementById('success-msg');
    const pinIncorectMassage = document.getElementById('incorect-msg');
    if(typedNumber == currentPin){
        pinSuccesedMassage.style.display = 'block';
        pinIncorectMassage.style.display = 'none';
    }
    else{  
        pinIncorectMassage.style.display = 'block';
        pinSuccesedMassage.style.display = 'none';
    }
})
