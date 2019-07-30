
// Write a program that asks the user for a number n 
// and prints the sum of the numbers 1 to n
// eg. 2 => 1 + 2 = 3
// eg. 3 => 1 + 2 + 3 = 6
function summation(inputValue) {
    let sum = 0;
    for (let i = 1; i <= inputValue; i++) {
        sum = i + sum;
    }
    return sum;
}
let exercise1Form = document.getElementById('exercise1');
let exercise1InputAnswer = document.getElementById("exercise1InputAnswer");
exercise1Form.addEventListener('submit', event => {
    let exercise1Input = exercise1Form.elements['exercise1Input'];
    let result = summation(Number.parseInt(exercise1Input.value));

    exercise1InputAnswer.innerHTML = result;
    event.preventDefault();
})

// Modify the previous program such that only multiples of three or five 
// are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
function summation2(inputValue) {
    let sum = 0;
    for (let i = 3; i <= inputValue; i++) {
        if (isDivisible(i, 3) || isDivisible(i, 5)) {
            sum = i + sum;
        }
    }
    return sum;
}
function isDivisible(inputValue, divisor) {
    return (inputValue % divisor === 0);
}
let exercise2Form = document.getElementById('exercise2');
let exercise2InputAnswer = document.getElementById("exercise2InputAnswer");
exercise2Form.addEventListener('submit', event => {
    let exercise2Input = exercise2Form.elements['exercise2Input'];
    let result = summation2(Number.parseInt(exercise2Input.value));

    exercise2InputAnswer.innerHTML = result;
    event.preventDefault();
})

// Write a program that asks the user for a number n and gives them the possibility to 
// choose between computing the sum and computing the product of 1,…,n.
function product(inputValue) {
    let result = 1;
    for (let i = 1; i <= inputValue; i++) {
        result = result * i;
    }
    return result;
}
let exercise3Form = document.getElementById('exercise3');
let exercise3InputAnswer = document.getElementById("exercise3InputAnswer");
exercise3Form.addEventListener('submit', event => {
    let exercise3Input = exercise3Form.elements['exercise3Input'];

    let exercise3Option = exercise3Form.elements['exercise3Option'];

    let result;
    if (exercise3Option.value === 'sum') {
        result = summation(Number.parseInt(exercise3Input.value));
    } else {
        result = product(Number.parseInt(exercise3Input.value));
    }

    exercise3InputAnswer.innerHTML = result;
    event.preventDefault();
})



// Write a program that prints a multiplication table for numbers up to 12.
function multiplier(inputValue) {
    let results = [];
    for (let i = 1; i <= 12; i++) {
        results.push(`${i} * ${inputValue} = ${(i * inputValue)}`);
    }
    return results;
}
let exercise4Form = document.getElementById('exercise4');
let exercise4InputAnswer = document.getElementById("exercise4InputAnswer");
exercise4Form.addEventListener('submit', event => {
    let exercise4Input = exercise4Form.elements['exercise4Input'];

    let results = multiplier(Number.parseInt(exercise4Input.value));

    exercise4InputAnswer.innerHTML = results.join('<br>');
    event.preventDefault();
})


// Write a program that prints all prime numbers. 
// (Note: if your programming language does not support arbitrary size numbers, 
// printing all primes up to the largest number you can easily represent is fine too.)

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


function getPrimeNumbers(inputValue) {
    let results = [];
    for (let i = 2; i < inputValue; i++) {
        if (isPrime(i)) {
            results.push(i);
        }
    }

    return results;
}

let exercise5Form = document.getElementById('exercise5');
let exercise5InputAnswer = document.getElementById("exercise5InputAnswer");
exercise5Form.addEventListener('submit', event => {
    let exercise5Input = exercise5Form.elements['exercise5Input'];

    let results = getPrimeNumbers(Number.parseInt(exercise5Input.value));

    exercise5InputAnswer.innerHTML = results.join(', ');
    event.preventDefault();
})

// Write a guessing game where the user has to guess a secret number. 
// After every guess the program tells the user whether their number was too large or too small. 
// At the end the number of tries needed should be printed. 
// It counts only as one try if they input the same number multiple times consecutively.
function GuessingGame(max) {
    // start
    if (!max) {
        max = 10;
    }
    this.secretNumber = Math.floor(Math.random() * Math.floor(max));
    this.guessMap = {};
    this.message = '';
}

GuessingGame.prototype.end = function () {
    // Reset the guess
    this.secretNumber = null;
    this.guessMap = {};
    this.message = 'Thank you for playing';
}

GuessingGame.prototype.makeAGuess = function (guess) {
    if (!this.guessMap.hasOwnProperty(guess)) {
        Object.defineProperty(this.guessMap, guess, { value: true });
        this.checkGuess(guess);
    } else {
        this.message = 'You have already made that guess. Maybe try another?';
    }
}

GuessingGame.prototype.checkGuess = function (guess) {
    if (guess > this.secretNumber) {
        this.message = '🐘Your guess is too large';
    } else if (guess < this.secretNumber) {
        this.message = '🐭 Your guess is too small';
    } else {
        this.message = '🎉 You guessed it!'
    }
}
let myGuessingGame = new GuessingGame();
let exercise6Form = document.getElementById('exercise6');
let exercise6InputAnswer = document.getElementById("exercise6InputAnswer");
exercise6Form.addEventListener('submit', event => {
    let exercise6Input = exercise6Form.elements['exercise6Input'];

    myGuessingGame.makeAGuess(Number.parseInt(exercise6Input.value));

    exercise6InputAnswer.innerHTML = myGuessingGame.message;
    event.preventDefault();
})


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function printLeapYears() {
    let currentYear = new Date().getFullYear();
    let leapYears = [];

    while (leapYears.length < 20) {
        if (isLeapYear(currentYear)) {
            leapYears.push(currentYear);
        }
        ++currentYear;
    }
    return leapYears;
}
let exercise7Form = document.getElementById('exercise7');
let exercise7InputAnswer = document.getElementById("exercise7InputAnswer");
exercise7Form.addEventListener('submit', event => {
    exercise7InputAnswer.innerHTML = printLeapYears().join(', ');
    event.preventDefault();
});
