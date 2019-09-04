

function searchUsers(query){
    let promise = new Promise((resolve, reject)=> {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else if (this.readyState === 4 && this.status !== 200){
                reject('call failed');
            }
        }
        const url = `http://5d2a68693d83340014b0c1bb.mockapi.io/users?search=${query}`;
        xhttp.open('GET', url, true);
        xhttp.send();
    });
    return promise;
}


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
    }
}

let usersWithDatalistInputNode;

function keyUpHandler(){
    let value = usersWithDatalistInputNode.value;
    console.log('input value', value);
    // Fetch
    searchUsers(value).then((response)=> {
        console.log('response');
        const dataList = document.getElementById('usersList');
        dataList.innerHTML=''
        let fragment = document.createDocumentFragment();
        response.forEach((user)=>{
            let option = document.createElement('option');
            option.value = user.name;
            fragment.appendChild(option);
        })
        dataList.appendChild(fragment);
    });



}

window.addEventListener('load', (event)=>{
    usersWithDatalistInputNode = document.getElementsByName('users')[0];

    usersWithDatalistInputNode.addEventListener('keyup', debounce(keyUpHandler, 500));
})