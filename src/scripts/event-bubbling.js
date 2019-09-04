window.addEventListener('load', (event) => {
    let parentElement = document.getElementById('parent');
    let childElement = document.getElementById('child');
    let linkElement = document.getElementById('link');


    linkElement.addEventListener('click', (event)=>{
        console.log('link got clicked', event.eventPhase, event);

        event.preventDefault();
        //event.stopPropagation();
    }, true);

    childElement.addEventListener('click', (event)=> {
        console.log('child event listener 1 got clicked!', event.eventPhase, event);
       // event.stopImmediatePropagation();
        event.preventDefault();
    }, true)

    childElement.addEventListener('click', (event)=> {
        console.log('child event listener 2 got clicked!', event.eventPhase,event);
       
    }, true)


    parentElement.addEventListener('click', (event)=> {
        console.log('parent got clicked!', event.eventPhase, event);
        //event.stopPropagation();
        //event.preventDefault();
    }, true)

    window.addEventListener('click', (event) => {
        console.log('window click', event.eventPhase, event);
    }, true)

});

