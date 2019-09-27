onsole.log('\n\n----- Classical Inheritance WITH class keyword-----');
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

