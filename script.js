
let num1 = ''
let num2 = ''
let operator = ''
let displayNumber = ''
let answer



function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'Invalid operator';
    }
}


function myFunction(value) {
    if (value == "clear"){
        num1 = ''
        num2 = ''
        operator = ''
        displayNumber = ''
        displayInput('')
    }else if ((value == '+' || value == '-' || value =='*' || value =='/')&&num1 == ''){
        console.log("cant start with operator") 
        displayInput('cannot start with operator')
    }else if ((value == '+' || value == '-' || value =='*' || value =='/') && num1 != '' && operator != '' && num2 != ''){
        console.log("your here")
        calculate()
        operator = value;
    }
    else if ((value == '+' || value == '-' || value =='*' || value =='/')&&num1 != ''){
        console.log("operator") 
        operator = value
        displayNumber = ''
        displayInput(operator)
    }else if(operator == ''){
        console.log("num1 inputed")
        displayNumber = displayNumber.concat(value)
        num1 = num1.concat(value)
        displayInput(displayNumber)
    }else if (operator != ''){
        console.log("num2 inputed")
        displayNumber = displayNumber.concat(value)
        num2 = num2.concat(value)
        displayInput(displayNumber)
    }
}

function calculate(){
    if(num1 != '' && operator != '' && num2 != ''){
        displayInput('')
        operate(operator, num1, num2)
        num2 = ''
        operator = ''
        displayNumber = ''
    }else{
        console.log("cant calculate yet")
    }
}

function add(number1, number2){
    displayInput(parseFloat(number1)+parseFloat(number2))
    num1 = (parseFloat(number1)+parseFloat(number2)).toString()
}
function subtract(number1, number2){
    displayInput(parseFloat(number1)-parseFloat(number2))
    num1 = parseFloat(number1)-parseFloat(number2)
}
function multiply(number1, number2){
    displayInput(parseFloat(number1)*parseFloat(number2))
    num1 = parseFloat(number1)*parseFloat(number2)
}
function divide(number1, number2){
    displayInput(parseFloat(number1)/parseFloat(number2))
    num1 = parseFloat(number1)/parseFloat(number2)
}

function displayInput(value){
    document.getElementById("displayScreen").innerHTML = value
    }

