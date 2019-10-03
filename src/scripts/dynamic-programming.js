/**
 * Fibonacci Sequence
 * Memoization
 * (top-down)
 */

var fib = function fibonacci(n, memory = {}) {

    if (memory[n] !== undefined) {
        return memory[n];
    }

    if (n <= 2) {
        return 1;
    }

    let result = fib(n-1, memory) + fib(n-2, memory);
    memory[n] = result;

    return result;

};

//console.log('fib 4', fib(4));

/**
 * Fibonacci Sequence
 * Tabulation
 * (bottom-up)
 */

var fib2 = function fibonacci2(n) {
    if (n <= 2) {
        return 1;
    }

    let fibNumbers = [0, 1, 1];

    for (let i=3; i <= n; i++){
        fibNumbers[i] = fibNumbers[i-1] + fibNumbers[i-2];
    }

    return fibNumbers[n];
};

// Coin change

function coinChnage(denominations, value, memo = [1, 1]){

    if (memo[value]){
        return memo[value];
    }

    for (let i=denominations.length-1; i>=0; i++){
        let denomination = denominations[i];

        if (denomination < value ){
            let remainder = value % denomination;
            if (!remainder){

            }
        }
    }

}

const denominations = [1, 5, 10, 25];

