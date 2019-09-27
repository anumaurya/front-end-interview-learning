// All Objects and functions (which is an object) have prototype
var myObj = {};
console.log('myObj:', myObj);
function myFunc() { };
console.log('myFunc:', myFunc);

// To create an Object with no prototype
var noPrototypeObj = Object.create(null);
console.log('noPrototypeObj:', noPrototypeObj);




// Prototypal Inheritance
console.log('\n\n----- Prototypal Inheritance -----');
var base = {
    constructor: function (val) {
        this.val = val;
    },
    get: function () {
        return this.val;
    }
}
    console.log('base:', base);

    console.log('\n');

var parent = Object.create(base);
parent.constructor(10);
    console.log('parent:', parent);
    console.log('parent.get():', parent.get());

    console.log('\n');

var child = Object.create(parent);
child.constructor(20);
// Override get
child.get = function () {
    return 'child ' + base.get.call(this);
}
child.getExtended = function () {
    return this.get() + '!';
}

    console.log('child:', child);
    console.log('child.get() (overwritten):', child.get());
    console.log('child.getExtended():', child.getExtended());

console.log('\n');
var grandchild = Object.create(child);
grandchild.constructor(30);
// Override get
grandchild.get = function () {
    return 'grandchild ' + base.get.call(this);
}
console.log('grandchild:', grandchild);
console.log('grandchild.get() overwritten:', grandchild.get());
console.log('grandchild.getExtended():', grandchild.getExtended());

console.log('\nAdding getEnhanced to parent');
parent.getEnhanced = function () {
    return `I have ${this.get()}`;
}
console.log('parent.getEnhanced():', parent.getEnhanced());
console.log('child.getEnhanced():', child.getEnhanced());
console.log('grandchild.getEnhanced():', grandchild.getEnhanced());



// *********************** Classical Inheritance
console.log('\n\n----- Classical Inheritance WITHOUT class keyword-----');
console.log('\n\n----- Classical Inheritance WITHOUT class keyword-----');
console.log('\n\n----- Classical Inheritance WITHOUT class keyword-----');

// Define the class
var BaseClassical = function (val) {
    this.val = val;
}
BaseClassical.prototype.get = function () {
    return this.val;
}
//console.log('BaseClassical class:', BaseClassical);

// Instantiate the class
var parentClassical = new BaseClassical(10);
console.log('parentClassical:', parentClassical);
console.log('parentClassical.get():', parentClassical.get());


// Define Subclass
console.log('\n');
var BaseChildClassical = function (value) {
    // call super
    BaseClassical.call(this, value);
};
BaseChildClassical.prototype = Object.create(BaseClassical.prototype)
BaseChildClassical.prototype.constructor = BaseChildClassical;
// overwritten get
BaseChildClassical.prototype.get = function () {
    return 'child ' + BaseClassical.prototype.get.call(this);
}

BaseChildClassical.prototype.getExtended = function () {
    return this.get() + '!';
}
//console.log('BaseChildClassical class:', BaseChildClassical);

// Now instantiate the subclass
var childClassical = new BaseChildClassical(20);
console.log('childClassical:', childClassical);
console.log('childClassical.get():', childClassical.get());
console.log('childClassical.getExtended():', childClassical.getExtended());



// Define grand subclass
console.log('\n');
var BaseGrandChildClassical = function (val) {
    // call super
    BaseChildClassical.call(this, val);
}
BaseGrandChildClassical.prototype = Object.create(BaseChildClassical.prototype);
BaseGrandChildClassical.prototype.constructor = BaseGrandChildClassical;
// override
BaseGrandChildClassical.prototype.get = function () {
    return 'grandchild ' + BaseClassical.prototype.get.call(this);
}
BaseGrandChildClassical.prototype.getExtended = function () {
    return BaseChildClassical.prototype.getExtended.call(this);
}

// Now instantiate the subclass
var grandchildClassical = new BaseGrandChildClassical(30);
console.log('grandchildClassical:', grandchildClassical);
console.log('grandchildClassical.get():', grandchildClassical.get());
console.log('grandchildClassical.getExtended():', grandchildClassical.getExtended());



// Add to Parent Class
BaseClassical.prototype.getEnhanced = function(){
    return 'I have ' + this.get();
}
console.log('\n');
console.log('parentClassical.getEnhanced():', parentClassical.getEnhanced());
console.log('childClassical.getEnhanced():', childClassical.getEnhanced());
console.log('grandchildClassical.getEnhanced():', grandchildClassical.getEnhanced());




console.log('\n\n');
console.log('parentClassical instanceof BaseGrandChildClassical ', parentClassical instanceof BaseGrandChildClassical); //false
console.log('parentClassical instanceof BaseChildClassical ', parentClassical instanceof BaseChildClassical); //false
console.log('parentClassical instanceof BaseClassical ', parentClassical instanceof BaseClassical);
console.log('\n');
console.log('childClassical instanceof BaseGrandChildClassical ', childClassical instanceof BaseGrandChildClassical); // false
console.log('childClassical instanceof BaseChildClassical ', childClassical instanceof BaseChildClassical);
console.log('childClassical instanceof BaseClassical ', childClassical instanceof BaseClassical);
console.log('\n');
console.log('grandchildClassical instanceof BaseGrandChildClassical ', grandchildClassical instanceof BaseGrandChildClassical);
console.log('grandchildClassical instanceof BaseChildClassical ', grandchildClassical instanceof BaseChildClassical);
console.log('grandchildClassical instanceof BaseGrandClassical ', grandchildClassical instanceof BaseClassical);





// ********************* Classical Inheritance
console.log('\n\n----- Classical Inheritance WITH class keyword-----');
class ParentClass {
    constructor(val) {
        this.val = val;
    }
    get() {
        return this.val;
    }
}

var parentInstance = new ParentClass(10);
console.log('parentInstance:', parentInstance);
console.log('parentInstance.get():', parentInstance.get());
console.log('\n');

class ChildClass extends ParentClass {
    constructor(val) {
        super(val);
    }
    get() {
        return 'child ' + super.get();
    }
    getExtended() {
        return this.get() + '!';
    }
}

var childInstance = new ChildClass(20);
console.log('childInstance:', childInstance);
console.log('childInstance.get():', childInstance.get());
console.log('childInstance.getExtended():', childInstance.getExtended());
console.log('\n');

class GrandchildClass extends ChildClass {
    constructor(val){
        super(val);
    }
    get() {
        return 'grandchild ' + ParentClass.prototype.get.call(this);
    }
}

var grandchildInstance = new GrandchildClass(30);
console.log('grandchildInstance:', grandchildInstance);
console.log('grandchildInstance.get():', grandchildInstance.get());
console.log('grandchildInstance.getExtended():', grandchildInstance.getExtended());
console.log('\n');

// Add to Parent Class
ParentClass.prototype.getEnhanced = function(){
    return 'I have ' + this.get();
}

console.log('parentInstance.getEnhanced():', parentInstance.getEnhanced());
console.log('childInstance.getEnhanced():', childInstance.getEnhanced());
console.log('grandchildInstance.getEnhanced():', grandchildInstance.getEnhanced());

console.log('\n\n');
console.log('parentInstance instanceof GrandchildClass ', parentInstance instanceof GrandchildClass); //false
console.log('parentInstance instanceof ChildClass ', parentInstance instanceof ChildClass); //false
console.log('parentInstance instanceof ParentClass ', parentInstance instanceof ParentClass);
console.log('\n');
console.log('childInstance instanceof GrandchildClass ', childInstance instanceof GrandchildClass); // false
console.log('childInstance instanceof ChildClass ', childInstance instanceof ChildClass);
console.log('childInstance instanceof ParentClass ', childInstance instanceof ParentClass);
console.log('\n');
console.log('grandchildInstance instanceof GrandchildClass ', grandchildInstance instanceof GrandchildClass);
console.log('grandchildInstance instanceof ChildClass ', grandchildInstance instanceof ChildClass);
console.log('grandchildInstance instanceof ParentClass ', grandchildInstance instanceof ParentClass);

