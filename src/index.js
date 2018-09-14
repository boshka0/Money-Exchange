// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) return {};
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var object = {}, balance = 0;
    if(currency >= 50){
        balance = Math.floor(currency/50);
        currency -= balance*50;
        object["H"] = balance;
    }
    if(currency >= 25){
        currency -= 25;
        object["Q"] = 1;
    }
    if(currency >= 10){
        object["D"] = 0;
        while(currency >= 10){
            currency -=10;
            object["D"]++;
        }
    }
    if(currency >= 5){
        currency -=5;
        object["N"] = 1;
    }
    if(currency >= 1){
        object["P"] = 0;
        while(currency){
            currency--;
            object["P"]++;
        }
    }
    return object;
}