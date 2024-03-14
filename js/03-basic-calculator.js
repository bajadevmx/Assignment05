// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
let num1, num2, usrOperator
let calcResult

switch (operation) {
    case "+":
        calcResult= (num1 + num2)
        break;
    case "-":
        calcResult= (num1 - num2)
    break;

    case "*":
        calcResult= (num1 * num2)
    break;

    case "/":
        calcResult= (num1/ num2)
    break;
    
    default:
        calcResult= "Invalid operator."
        break;
}
}
// COLLECT FIRST NUMBER FROM USER
num1 = Number(prompt('Enter one number: '));

// COLLECT SECOND NUMBER FROM USER
num2 = Number(prompt('Enter a second number: '));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
usrOperator = prompt('Calculation to perform, valid options: add (+), substract (-), multiply (*), divide (/)');

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT

function main() {
    calculate(num1, num2, usrOperator);
    alert(`The result of ${num1}  ${usrOperator} ${num2} is ${calcResult}.`);

    let startAgain = 'y';
    while (startAgain === 'y') {
        calculate((num1, num2, usrOperator));
        startAgain = prompt('Do you want to start again? (y or n)');
    }
}
main();