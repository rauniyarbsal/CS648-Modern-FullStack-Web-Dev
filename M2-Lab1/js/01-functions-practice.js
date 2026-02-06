//STEP 1

function halfNumber(number){

    var result = number / 2;
    window.console.log("Half of " + number + " is " + result);
    return result;

}

//STEP 2

function squareNumber(number){

    var result = number * number;
    window.console.log("The result of squaring the number " + number + " is " + result + ".");
    return result;

}

//STEP 3

function percentOf(firstNumber, secondNumber){

    var result = (firstNumber / secondNumber) * 100; 
    window.console.log(firstNumber + " is " + result + "% of " + secondNumber + ".");
    return result;

}

//STEP 4

function findModulus(firstNum, secondNum){

    var result = secondNum % firstNum;
    window.console.log(result + " is the modulus of " + firstNum + " and " + secondNum + ".");
    return result;

}



function main(){

    // step 1: halfNumber
    var number = Number(window.prompt("Enter a number for halfNumber"));
    halfNumber(number);

    // step 2: squareNumber
    //var num = Number(window.prompt("Enter a number for squareNumber"));
    //squareNumber(num);

    // step 3: percentOf
    //var firstNumber = Number(window.prompt("Enter first number for percentOf"));
    //var secondNumber = Number(window.prompt("Enter second number for percentOf"));
    //percentOf(firstNumber, secondNumber);

    // step 4: findModulus
    //var firstNum = Number(window.prompt("Enter first number for findModulus"));
    //var secondNum = Number(window.prompt("Enter second number for findModulus"));
    //findModulus(firstNum, secondNum);

}

main();