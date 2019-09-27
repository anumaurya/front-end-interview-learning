function throttle(fn, wait) {
    var time = Date.now();
    return function () {
        const args = arguments;
        const context = this;
        if ((time + wait - Date.now()) < 0) {
            //fn();
            fn.apply(context, args);
            time = Date.now();
        }
    };
}

//scrollNode.addEventListener('scroll', throttle(scrollHandler, 1000));

function one(){
    console.log('function one');
}