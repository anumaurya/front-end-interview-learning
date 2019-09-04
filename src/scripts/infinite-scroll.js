// Make API call.

// Get scrolling div and add scroll listener

let scrollNode = document.getElementById('infinite-scrolling-container');
const visibleClientHeight = scrollNode.clientHeight;

let getData = function (page, limit) {
    let promise = new Promise((resolve, reject) => {

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if (this.responseText && this.responseText.length) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    resolve([]);
                }

            } else if (this.readyState === 4 && this.status !== 200) {
                reject('call failed');
            }
        }
        const url = `http://5d2a68693d83340014b0c1bb.mockapi.io/users?page=${page}&limit=${limit}`;
        xhttp.open('GET', url, true);
        xhttp.send();

    });

    return promise;
}


let prevAmountScrolled;
let scrollHandler = function (event) {
    console.log(event);


    const amountScrolled = scrollNode.scrollTop; // amount scrolled

    const totalHeight = scrollNode.scrollHeight;

    // child size - take an average?
    const itemHeight = scrollNode.children[0].clientHeight;

    console.log('items', scrollNode.childElementCount, 'amountScrolled(scrollTop)', amountScrolled, 'visibleClientHeight', visibleClientHeight, 'totalHeight (scrollHeight)', totalHeight);


    if (!prevAmountScrolled || amountScrolled > prevAmountScrolled) {
        // Scrolling Down
        const bufferHeight = totalHeight - (visibleClientHeight + amountScrolled);

        const bufferItems = bufferHeight / itemHeight;

        console.log('bufferHeight', bufferHeight);
        console.log('~itemHeight', itemHeight, '~bufferItems', bufferItems);

        // If the buffer height is less than 1/2 of visible client height, then fetch
        if (bufferHeight <= (visibleClientHeight / 2)) {
            console.log('fetch!')
            getItems(++pageToFetch, amountToFetch);
            // remove event listener
            //scrollNode.removeEventListener('scroll', scrollHandler);
        }
    } else {
        // Scrolling up
        // Check how many items are in the amount scrolled. the amount scrolled should be the buffer hieght


        if (amountScrolled <= visibleClientHeight / 2) {

            // Fetch if there we aren't at 0.
            let firstChild = scrollNode.children[0];
            let firstChildIndex = firstChild.getAttribute('data-index');
            if (firstChildIndex !== 0) {
                console.log('fetch!');
                if (firstChildIndex >= amountToFetch) {

                }
            }

        }

    }




    prevAmountScrolled = amountScrolled;
}


/* Template
    <div data-id="1" class="item">
        <div class="item-container">
            <img class="avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/vitorleal/128.jpg">
            <div class="name-container">
                <div>First LastName</div>
                <div>created at date</div>
            </div>
        </div>
    </div>
*/
/* reference: https://codingrepo.com/javascript/2015/10/10/javascript-infinite-scroll-with-cross-browser/ */


// Item height ~ 80
var amountToFetch = Math.round(visibleClientHeight / 80 * 2);
console.log('amountToFetch', amountToFetch);
var pageToFetch = 1;



function getItems(pageToFetch, amountToFetch) {
    getData(pageToFetch, amountToFetch).then(
        (data) => {
            renderItems(data);
            //scrollNode.addEventListener('scroll', scrollHandler);
        }
    );
}


function renderItems(data) {
    // remove the loading text.
    //scrollNode.innerHTML = '';
    // clean up nodes
    if (scrollNode.childElementCount >= amountToFetch) {
        console.log('childElementCount', scrollNode.childElementCount, 'amountToFetch', amountToFetch);
        // a half of the previous nodes
        for (let i = Math.round((scrollNode.scrollTop / 80) / 2); i >= 0; i--) {
            console.log('removing', scrollNode.children[i]);
            scrollNode.removeChild(scrollNode.children[i]);
        }
    }

    data.forEach((item, index) => {
        let itemNode = document.createElement('div');
        itemNode.setAttribute('data-id', item.id);
        itemNode.setAttribute('data-index', index);
        itemNode.className = 'item';

        itemNode.innerHTML = `<div class="item-container">
        <img class="avatar" src="${item.avatar}">
        <div class="name-container">
            <div>${item.id} ${item.name}</div>
            <div>${item.createdAt}</div>
        </div>
    </div>`;


        scrollNode.appendChild(itemNode);
    });
}

function throttle(fn, wait) {
    var time = Date.now();
    return function () {
        const args = arguments;
        const context = this;
        if ((time + wait - Date.now()) < 0) {
            //fn();
            fn.apply(context, args)
            time = Date.now();
        }
    }
}

scrollNode.addEventListener('scroll', throttle(scrollHandler, 1000));




window.addEventListener('load', (event)=>{
    getItems(pageToFetch, amountToFetch);
})