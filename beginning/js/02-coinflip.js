var coinFlip;
var choice;

coinFlip = Math.floor(Math.random() * 2);

choice = window.prompt("select 'heads or tails'").toLowerCase();

var isHead = (coinFlip === 0); // true = heads, false = tails

if(isHead && choice === "heads"){
    window.alert("The flip was heads and you chose heads...you win!");

}else if(isHead && choice === "tails"){
    window.alert("The flip was tails and you chose tails...you win!");

}else if(!isHead && choice === "heads"){
    window.alert("The flip was tails but you chose heads...you lose!");

}else if(isHead && choice === "tails"){
    window.alert("The flip was heads but you chose tails...you lose!");

}

