
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


function palindromeCheck(inputString) {
    const str = inputString.toLowerCase();
    // find the middle index (starting from 0)
    let middleIndex = Math.floor(str.length / 2);
    let isPalindrome = true;
    for (let i = 0; i < middleIndex; i++) {
        console.log(i);
        if (str[i] !== str[(str.length - 1) - i]) {
            isPalindrome = false;
            break;
        }
    };
    return isPalindrome
}

// Array.from(str).toString() === Array.from(str).reverse().toString()

let exercise8Form = document.getElementById('exercise8');
let exercise8Input = document.getElementById('exercise8Input');
let exercise8InputAnswer = document.getElementById('exercise8InputAnswer');
exercise8Form.addEventListener('submit', event => {
    let isPalindrome = palindromeCheck(exercise8Input.value);
    exercise8InputAnswer.innerHTML = isPalindrome;
    event.preventDefault();
});

var myTest = (function () {

    let hello = 'I am in mytest';
    function foo() {
        console.log(hello + ' foo');
    }

    function bar() {
        console.log(hello + ' bar');
    }



    function sort2DArray(array) {
        let flat = [].concat(...array)
        let count = 0;
        flat.sort((a, b) => {
            console.log(++count);
            return a - b;
        });
        console.log(flat);
        let newArray = [];
        while (flat.length > 0) {
            newArray.push(flat.splice(0, 5));
        }
        return newArray;
    }

    return {
        foo2: foo,
        helloText: hello,
        sort2DArray: sort2DArray
    };



})()


function getPairs(arr, sumVal) {
    let diffObj = {};
    let returnArr = [];
    arr.forEach((value, index) => {

        let diff = sumVal - value;

        if (diffObj[diff.toString()] !== undefined) {
            console.log('found a pair!');
            returnArr.push([value, diff]);
        } else {
            diffObj[value.toString()] = true;
        }

    });
    return returnArr;
}

console.log(getPairs([4, 1, 3, 9, 6], 10));

console.log(myTest.foo2());


let array = [
    [5, 12, 17, 21, 23],
    [1, 2, 4, 6, 8],
    [12, 14, 18, 19, 27],
    [3, 7, 9, 15, 25]];
console.log(myTest.sort2DArray(array));





//facebook
// items = [
//     { color: 'red', type: 'tv', age: 18 },
//     { color: 'silver', type: 'phone', age: 20 } //
// ];

// excludes = [
//     { k: 'color', v: 'silver' },
//     { k: 'type', v: 'tv' },
// ];

// function excludeItems(items, excludes) {
//     // excludes.forEach(pair => {
//     //     items = items.filter(item => item[pair.k] === item[pair.v]);
//     // });
//     // return items;

//     excludes.forEach(pair => {
//         items = items.filter(item => item[pair.k] !== pair.v);
//     });
//     return items;


// }

// console.log('excludeItems', excludeItems(items, excludes));

// Given 2 identical DOM trees (but not equal) and one element  
// of the first DOM tree, how would you find this element in the second DOM tree?

var findNode = (function(){
    // find the path of this node to the root parent.

    function getPath(node, path = []){
       
        if (node.parentNode === null){
            return path;
        }

        path.push(Array.prototype.indexOf.call(node.parentNode.children, node));
        return getPath(node.parentNode, path);

    }

    function findChild(path, parent = document){
        // stack, first in last out
        if (path.length === 0) {
            return parent;
        }

        let foundChild = parent.children[path.pop()];
        
        return findChild(path, foundChild);
    }

    return {
        getPath: getPath,
        findChild: findChild
    }

})();

let node = document.getElementById('findMe1');
let path = findNode.getPath(node);
console.log('findNode.getPath', path);
console.log('findNode.findChild', findNode.findChild(path));

// Write an array flatten function.  

let nestedArray = [
    [[5, 12], [17, 21], [23]],
    [[1, 2], [4, 6], [8]],
    [[12, 14], [18, 19, 27]],
    [[[3, 7], [9, 15]], [25]]
];

var flat = nestedArray.toString().split(',').map(Number);

console.log(flat);

console.log('flat!', nestedArray.flat(3));

var flattenArray = (function(){

    function flatten(array, flatArray = []){

        array.forEach((a)=> {
            if (Array.isArray(a)){
                return flatten(a, flatArray);
            }
            else {
               flatArray.push(a);
            }
        })

        return flatArray;
    }
    return flatten;

})(array)

console.log('flattenArray', flattenArray(nestedArray));

// Write an emitter

var Emitter = function(){
    this.events = {};
}
Emitter.prototype.on = function(event, listener){
    if (!this.events[event]){
        this.events[event] = [];
    }
    this.events[event].push(listener);
}

Emitter.prototype.removeListener = function(event, listener){

    // remove from events
    let listeners = this.events[event];
    if (!listeners){
        return;
    }
    this.events[event] = listeners.filter(l => l !== listener);


    // or 
    // let index  = listeners.indexOf(listener);
    // listeners.splice(index, 1);
}

Emitter.prototype.emit = function(event){

    // execute each listener
    let listeners = this.events[event];
    if (!listeners){
        return;
    }
    listeners.forEach((l)=>{
        l.apply(this, arguments)
    })
    
}

let myEmitter = new Emitter();
let onClick1Listener1 = function onClick1(){
    console.log('click listener1', arguments);
}
myEmitter.on('click', onClick1Listener1)

let onClick1Listener2 = function onClick2(){
    console.log('click listener2', arguments);
}
myEmitter.on('click', onClick1Listener2)

myEmitter.emit('click');

myEmitter.removeListener('click', onClick1Listener1);

console.log(myEmitter.events);

class EmitterClass{

    constructor(){
        this.events = {};
        // {
        //     on: [func1, func2]
        // }
    }

    on(eventName, listener){
        if (!this.events[eventName]){
            this.events[eventName] = [];
        }

        this.events[eventName].push(listener);
    }

    removeListener(eventName, listener){
        if (!this.events[eventName]){
            return;
        }

        this.events[eventName] = this.events[eventName].filter((l)=> l !== listener);
        

        // let index = this.events[eventName].indexOf(listener);
        // this.events[eventName].splice(index, 1);
    }

    emit(eventName){
        if (!this.events[eventName]){
            return;
        }
        this.events[eventName].forEach((l) => {
            l.call(this, arguments);
        })

        
    }
}

let myEmitter2 = new EmitterClass();

myEmitter2.on('click', onClick1Listener1)

myEmitter2.on('click', onClick1Listener2)

myEmitter2.emit('click');

myEmitter2.removeListener('click', onClick1Listener1);

console.log('myEmitter2', myEmitter2.events);


// let message = [
//     ['I', 'B', 'C', 'A', 'K', 'E', 'A', 'A', 'B', 'C'],
//     ['D', 'R', 'F', 'C', 'A', 'E', 'A', 'A', 'B', 'C'],
//     ['G', 'H', 'O', 'E', 'L', 'A', 'D', 'A', 'B', 'C'],
//     ['D', 'R', 'F', 'C', 'A', 'E', 'A', 'A', 'B', 'C'],
//   ];

  let message = [
    ['I', 'B', 'C', 'A', 'K', 'E', 'A'],
    ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
    ['G', 'H', 'O', 'E', 'L', 'A', 'D']
  ];

let decoder = (function(){
    function goDown(array, decodedArray){
        if (!decodedArray){
            decodedArray = [];
            index = 0;
        } else {
            index = 1;
        }
        let decodeIndex = decodedArray.length;
        for (let i=index; i<array.length; i++){
            decodedArray.push(array[i][decodeIndex]);
            decodeIndex++;
        }
        if (decodedArray.length !== array[0].length){
            return goUp(array, decodedArray);
        } else {
            return decodedArray;
        }

    }

    function goUp(array, decodedArray){
        
        //let index = array.length-2;
        let decodeIndex = decodedArray.length;
        for (let i = array.length-2; i>= 0; i--){
            decodedArray.push(array[i][decodeIndex])
            decodeIndex++;
        }

        if (decodedArray.length !== array[0].length){
            return goDown(array, decodedArray);
        } else {
            return decodedArray;
        }
    }


    function decode(array){
        return goDown(array);
    }

    function decode2(array){
        let messageLength = array[0].length;
        let decodeIndex = 0;
        let decodeArray = [];
        let goingDown = true;
        let arrayIndex = 0;

        let iteration = Math.floor((array[0].length-1) / (array.length-1));
        // even iteration = going down
        // odd iteration = going up


        for (let i = 0; i<iteration ; i++){

            let isEven = (i % 2 === 0);
            if (isEven){
                // going down
                for(let j=0; j<array.length && decodeIndex<messageLength; j++){
                    decodeArray.push(array[j][decodeIndex]);
                    decodeIndex++;
                }
            } else {
                // going up
                for(let j=array.length-2; j>0 && decodeIndex<messageLength; j--){
                    decodeArray.push(array[j][decodeIndex]);
                    decodeIndex++;
                }
            }
           

        }

        // for (let i=0; i<messageLength; i++){
            
        //     decodeArray.push(array[arrayIndex][decodeIndex]);

        //     // if (i >= array.length-1 && arrayIndex>0){
        //     //     arrayIndex--;
        //     //     goingDown = false;
        //     // } else if (i <= array.length-1 || !goingDown){
        //     //     arrayIndex++;
        //     //     goingDown = true;
        //     // }

            
        //     let remainder = i % (array.length-1);
        //     if (arrayIndex === 0){
        //         goingDown = !goingDown;
        //     }
            
        //     if (arrayIndex === 0 && !goingDown){
        //         arrayIndex = array.length-1;
        //     }


        //     // if (i< array.length){
        //     //     arrayIndex = i;
        //     // } else {
        //     //     arrayIndex = i % (array.length-1);
        //     //     if (arrayIndex === 0){
        //     //         goingDown = !goingDown;
        //     //     }
                
        //     //     if (arrayIndex === 0 && !goingDown){
        //     //         arrayIndex = array.length-1;
        //     //     }
        //     // }
             
            
        //     decodeIndex++
        // }
        return decodeArray;

    }

    return {
        decode : decode,
        decode2: decode2
    }
})();

//console.log('decode', decoder.decode(message));
console.log('decode2', decoder.decode2(message));







// Write an emitter

class EmitterClassFB{

    constructor(){
        this.events = {};
        // {
        //     'click': [func1, func2]
        // }
    }

    subscribe(eventName, listener){
        if (!this.events[eventName]){
            this.events[eventName] = [];
        }

        this.events[eventName].push(listener);

        return {
            release: () => {
                this.release(eventName, listener);
            }
        }
    }

    release(eventName, listener){
        if (!this.events[eventName]){
            return;
        }

        this.events[eventName] = this.events[eventName].filter((l)=> l !== listener);
        

        // let index = this.events[eventName].indexOf(listener);
        // this.events[eventName].splice(index, 1);

    }

    emit(eventName, ...params){
        if (!this.events[eventName]){
            return;
        }
        this.events[eventName].forEach((l) => {
            l.call(this, params);
        })

        
    }
}

const myEmitterFB = new EmitterClassFB();

// let onClick1Listener1 = function onClick1(){
//     console.log('click listener1', arguments);
// }
// let onClick1Listener2 = function onClick2(){
//     console.log('click listener2', arguments);
// }

const sub1 = myEmitterFB.subscribe('click', onClick1Listener1);

const sub2 = myEmitterFB.subscribe('click', onClick1Listener2);

myEmitterFB.emit('click', 'foo', 'bar');

sub1.release();

console.log('myEmitterFB events', myEmitterFB.events);


//////

function isOpenBracketType(string){
    return (string === '(' || string ==='[' || string === '{')
}

function isCloseBracketType(string){
    return (string === ')' || string ===']' || string === '}')
}

function getMyOpenPair(string){
    switch(string){
        case ')':
            return '(';
        case ']':
            return '[';
        case '}':
            return '{';
    }
}

function isBalanced(inputString){
    const array = inputString.split('');
    let stack = []; // {']' : true}
    
    for (let i = 0; i<array.length; i++){
        const a = array[i];
        if (isOpenBracketType(a)){
            stack.push(a);
        } else if (isCloseBracketType(a)){
            const lastBracket = stack.pop();
            if (lastBracket === getMyOpenPair(a)){
                // pair is complete
                continue;
            } else {
                return false;
            }
        }
       
        
    };
    return array.length ===0 || stack.length ===0;    
}

console.log(isBalanced("{[()]}")) // true
console.log(isBalanced("{[(])}")) // false

console.log( isBalanced("") ); // true
console.log( isBalanced("]") ); // false
console.log( isBalanced("{{[[(())]]}}") ); // true
console.log( isBalanced("[]{()()[[{}]]}") ); // true
console.log( isBalanced("a b [d] { (g) (h) i [-[ {;} ]-] }") ); // true
