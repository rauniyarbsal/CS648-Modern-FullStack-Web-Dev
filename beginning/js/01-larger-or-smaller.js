var firstNum = parseInt(window.prompt("Enter first num"));
var secondNum = parseInt(window.prompt("Enter second num"));

if(firstNum > secondNum){
    window.document.write("Larger number: " + firstNum );

}else if(secondNum > firstNum){
    document.write("Larger number: " + secondNum);

}else{
    document.write("Both numbers are equal: " + firstNum);

}