// Prototypal Inheritance
// http://www.objectplayground.com/
// James Shore

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
