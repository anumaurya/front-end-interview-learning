import { Vehicle } from './vehicle.js';

export class Car extends Vehicle {
    constructor(id) {
        super();
        // do something
        this.type = 'car';
        this.id = id;
    }
    start() {
        return 'in Car start: ' + super.start();
    }
}