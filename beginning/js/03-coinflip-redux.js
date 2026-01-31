var coinFlip;

var i;
for(i = 1; i <= 10; i += 1){
    coinFlip = Math.round(Math.random());

    if(coinFlip === 0){
        window.console.log("Heads");
    }else if(coinFlip === 1){
        window.console.log("Tails");
    }

}