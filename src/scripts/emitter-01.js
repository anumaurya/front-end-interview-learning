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