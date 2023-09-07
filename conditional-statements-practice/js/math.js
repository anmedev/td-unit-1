// Edit the math.js file to accomplish these 4 goals:

// 1. Move all of your variable declarations to the top of the script.

// 2. Add an if statement to test that the 2nd input is not zero. You can't divide by 0,
//    so notify the user with an alert, that they need to reload and try again.
//    Here's one possible alert message:
//    ""The second number is 0. You can't divide by zero. Reload and try again."

// 3. Check to see if the first OR second input are numbers.
//    Use JavaScript's isNaN() method to check. See the
//    Teacher's Notes for information on this method. If one is NOT a number
//    then send an alert message. For example:
//    "At least one of the values you typed is not a number. Reload and try again."

// 4. Don't build the message variable, or write the message to the doc, if
//    either case 2 or 3 above fails.

let firstNumber = parseFloat(prompt("Please enter your first number: "));
let secondNumber = parseFloat(prompt("Please enter your second number: "));
let message = `<h1>Math with the numbers ${firstNumber} and ${secondNumber}</h1>`;

alert("Woo hoo! Let's do some math!");

if (secondNumber === 0) {
  alert("The second number is 0. You can't divide by zero. Reload and try again.");
} else if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("At least one of the values you typed is not a number. Reload and try again.");
} else {
message += `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;
message += "<br>";
message += `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`;
message += "<br>";
message += `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
message += "<br>";
message += `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`;
message += "<br>";
document.write(message);
}

