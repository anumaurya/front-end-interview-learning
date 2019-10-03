function debounce(fn, delay){
    let timerId;
    return function() {
        const args = arguments;
        const context = this;
        if (timerId){
            console.log('clearing', timerId, fn);
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(context, args);
            timerId = null;
        }, delay);
    };
}

// window.addEventListener('load', (event)=>{
//     usersWithDatalistInputNode = document.getElementsByName('users')[0];

//     usersWithDatalistInputNode.addEventListener('keyup', debounce(keyUpHandler, 500));
// })
window.addEventListener('load', (event)=>{
    console.log('debounce tests')

    debounce(function(){
        console.log('fn1');
    }, 0)();

    debounce(function(){
        console.log('fn1');
    }, 0)();

    debounce(function(){
        console.log('fn1');
    }, 0)();

    debounce(function(){
        console.log('fn1');
    }, 0)();

    debounce(function(){
        console.log('fn1');
    }, 0)();

    debounce(function(){
        console.log('fn1');
    }, 0)();


    // setTimeout(()=>{
    //     debounce(function(){
    //         console.log('fn1');
    //     },)();
    // }, 500);

    // setTimeout(()=>{
    //     debounce(function(){
    //         console.log('fn2');
    //     }, 300)();
    // }, 1000);


    // debounce(function(){
    //     console.log('fn3');
    // }, 500)();

})