// *********************** Classical Inheritance
// http://www.objectplayground.com/
// James Shore


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
