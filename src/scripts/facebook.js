Welcome to Facebook!

This is just a simple shared plaintext pad, with no execution capabilities.

When you know what language you would like to use for your interview,
simply choose it from the dropdown in the top bar.

Enjoy your interview!
  
/*
const emitter = new Emitter();

// 1. Support subscribing to events.
const sub = emitter.subscribe('event_name', callback);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', 'foo', 'bar');

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above

*/
  
class Emitter {

  constructor(){
    this.events = {}; 
    /*
      {
        'click': [callback1, callback2,...]
      }
    */
    
      /*
      {
        eventName: [subscription1, subscription2]
      }
    */
  }
  
  subscribe(eventName, callback){
    if (!this.events[eventName]){
      this.events[eventName] = [];
    }
    
    // Create a subscription
    
    let sub = new Subcription(this, eventName, callback)
    this.events[eventName].push(sub);
    
    return sub;
  }
  
  emit(eventName, ...params){
    if (!this.events[eventName]){
      // TO DO - error handling?
      return;
    }
    
    this.events[eventName].forEach((subscription)=> {
      subscription.callback.apply(this, ...params); // need to think
    });
  }
  
  release(eventName, subscription){
    if (!this.events[eventName]){
      // TO DO - error handling?
      return;
    }
    
    this.events[eventName].filter((sub)=>{ sub != subscription});
  }
  
}


class Subscription {
  
  constructor(emitter, eventName, callback){
      this.eventName = eventName;
      this.callback = callback
      this.emitter = emitter;
  }
  
  
  release(){
    emitter.release(this.eventName, this);
  }
  

}


const emitter = new Emitter();
const sub = emitter.subscribe('event_name', callback);
emitter.emit('event_name', 'foo', 'bar');
sub.release();


===
const input = [1, [2, [3]], {x:4}];
const output = [1, 2, 3, {x:4}];


var flattenArray = (function(){
  
  function flatten(array, flatArray = []){ 
    
    array.forEach((a)=>{             // i = 2, v: {x:4} 
      if (Array.isArray(a)){
      
        // flatten
        return flatten(a, flatArray);
        
      } else {
        flatArray.push(a);          // flatArray: [1, 2, 3, {x:4}]
      }
      
    });
    
    return flatArray; // flatArray: [1, 2, 3, {x:4}]
  
  }
  
  return flatten;
  
  
})(array)

flattenArray(input);