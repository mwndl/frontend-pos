function calculateOperation(number1, number2, operation) {

    switch (operation) {
    case '+':
        console.log(`Result: ${number1 + number2}`);
        break;
    case '-':
        console.log(`Result: ${number1 - number2}`);
        break;
    case '*':
        console.log(`Result: ${number1 * number2}`);
        break;
    case '/':
        console.log(`Result: ${number1 / number2}`);
        break;
    default:
        console.log("Invalid operation");
        break;
}} 

calculateOperation(12, 20, '+');