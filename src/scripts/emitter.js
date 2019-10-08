// Write an emitter

class EmitterClass{

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
            release: function(eventName, listener){
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

let myEmitter1 = new EmitterClass();

let onClick1Listener1 = function onClick1(){
    console.log('click listener1', arguments);
}
let onClick1Listener2 = function onClick2(){
    console.log('click listener2', arguments);
}

let sub1 = myEmitter2.subscribe('click', onClick1Listener1);

let sub2 = myEmitter2.subscribe('click', onClick1Listener2);

myEmitter1.emit('click', 'foo', 'bar');

sub1.myEmitter1.release();

console.log('myEmitter1', myEmitter1.events);