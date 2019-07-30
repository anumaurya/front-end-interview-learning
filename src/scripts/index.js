import '../styles/index.scss';

console.log('Hello World!!!!');
console.log('webpack starterkit');


let carIds = [1, 2, 5]; // Can be any interable, like a string 'abc'

let car1, car2, car3, remainingCars;

[car1, car2, car3] = carIds;
console.log(car1, car2, car3); // 1 2 5

[car1, ...remainingCars] = carIds;
console.log(car1, remainingCars);  // 1 [2, 5]

[, ...remainingCars] = carIds;
console.log(remainingCars);  // [2, 5]

[, , , , ...remainingCars] = carIds;
console.log(remainingCars);  // []


let car = { id: 5000, style: 'convertible' };
let id, style;
({ id, style } = car);
console.log(id, style); // 5000 convertible 

function startCars(car1, car2, car3, ...rest) {
    console.log(car1, car2, car3, rest);
}
let carIds2 = [100, 300, 500];
startCars(...carIds2); // 100 300 500

let carCodes = 'abcdef';
startCars(...carCodes); // a b c

console.log(Number.parseInt('55'));


let carIds3 = [
    { carId: 123, style: 'sedan' },
    { carId: 456, style: 'convertible' },
    { carId: 789, style: 'sedan' },
    { carId: 456, style: 'convertible2' },
];

let isCarFound = carIds3.some((car) => { // every will run for all items in the array
    console.log('searching...', car.carId);
    if (car.carId === 456) {
        return true;
    }
});

console.log('isCarFound', isCarFound);

let foundCar = carIds3.find((car) => {
    return (car.carId === 456);
});

console.log('foundCar', foundCar); // get first occruence of it

let filteredCars = carIds3.filter((car) => {
    return (car.carId === 456);
});

console.log('filteredCars', filteredCars); // get array of all that match the id


import { Car } from './models/car.js';

let car4 = new Car(123);
console.log('car4.category', car4.category); // vehicle
console.log('car4.type', car4.type); // car
console.log('car4.id', car4.id); // 123
console.log('car4.start()', car4.start()); // in Car start: Starting car

let element = document.getElementById('first');
console.log(element);
element.textContent = `updated ${element.id} paragraph`;
//element.innerHTML = 'boo!';
element.setAttribute('name', 'nameValue');
element.classList.add('myClassName');
element.style.color = 'pink';

try {
    throw new Error('My new error');
    let car5 = newCar;
    try {
        let car6 = boo;
    }
    finally {
        console.log('inner finally...');
    }
}
catch (error) {
    console.log('error: ', error);
}
finally {
    console.log('outter finally will always execute');
}
console.log('continue on...');

let promise = new Promise(
    (resolve, reject) => {
        setTimeout(resolve, 2000, 'someValue');
    }
);


promise.then(
    (value) => console.log('successful', value),
    (error) => console.log('failed', error)
);

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
};
xhttp.open('GET', 'http://5d2a68693d83340014b0c1bb.mockapi.io/users', true);
xhttp.send();

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    let user = form.elements['user'];
    console.log(user.value);
    // skip submission
    event.preventDefault();
});


let DogObj = {
    constructor: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    }
};
let myDog = Object.create(DogObj);
myDog.constructor("CreateDog");
myDog.salutation = 'Mr';
myDog.getName = function () {
    return `My name is ${this.salutation} ${DogObj.getName.call(this)}`;
};
console.log(myDog.getName());

let myPuppy = Object.create(myDog);
myPuppy.constructor("Puppy");
myPuppy.getName = function () {
    return myDog.getName.call(this) + '!!!';
};
console.log(myPuppy.getName());


let Dog = function (salutation) {
    this.name = 'Dog';
    this.salutation = salutation;
    this.getName = function () {
        return this.salutation + ' ' + this.name;
    };
};

let myNewDog = new Dog('Sir');
myNewDog.name = "NewDog";
console.log(myNewDog.getName());

class ClassDog {
    consturctor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let myClassDog = new ClassDog('ClassDog');

var mySingleton = (function () {
    var instance;
    function init() {
        function somePrivateMethod() {
            return 'privateMethod1';
        }
        return {
            publicMethod: function () {
                return 'publicMethod1 calling' + ' ' + somePrivateMethod();
            },
            publicProperty: 'My name is public property'
        };
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

console.log(mySingleton.getInstance().publicMethod());


