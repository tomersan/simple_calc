

function calc(){
    let operator = document.getElementById('operatorKey')
    let firstNumber = document.getElementById('firstNumber')
    let secondNumber = document.getElementById('secondNumber')
    let result = document.getElementById('result')



    if ( operator.value == "+" ) {
        result.innerHTML = parseInt( firstNumber.value ) + parseInt( secondNumber.value )
    }

    if ( operator.value == "-" ){
        result.innerHTML = firstNumber.value - secondNumber.value
    }

    if ( operator.value == "*" ){
        result.innerHTML = firstNumber.value * secondNumber.value
    }


    if ( operator.value == "/" ){
        result.innerHTML = firstNumber.value / secondNumber.value
    }
}

function checkInput(event){
    let value = parseInt( event.target.value )

    // שיעורי בית לעשות התאמה גם למספרים שליילים

    if (  Number.isNaN(value) ){
        // אמור להחזיר שגיאה אך ורק כשאר מזינים ערך שהוא לא מספר
        firstNumber.style.border = '1px solid red'
        document.getElementById('firstError').innerHTML = 'Wrong number'
    }
    
     else {
        firstNumber.style.border = ''
        document.getElementById('firstError').innerHTML = ''
    }

    


}
function checkInput2(event){
    let value = parseInt( event.target.value )

    // שיעורי בית לעשות התאמה גם למספרים שליילים

    if (  Number.isNaN(value) ){
        // אמור להחזיר שגיאה אך ורק כשאר מזינים ערך שהוא לא מספר
        secondNumber.style.border = '1px solid red'
        document.getElementById('secondError').innerHTML = 'Wrong number'
    }
    
     else {
        secondNumber.style.border = ''
        document.getElementById('secondError').innerHTML = ''
    }

    


}


function selectValue(event){
    // event.target שווה ערך ל this 
     console.log(event.target.value)
}

firstNumber.addEventListener(
        'change',
        checkInput
 )
 secondNumber.addEventListener(
    'change',
    checkInput2
)


