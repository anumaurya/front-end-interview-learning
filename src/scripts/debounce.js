function debounce(fn, delay){
    let timerId;
    return function() {
        const args = arguments;
        const context = this;
        if (timerId){
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