/**
 * Practice
 *
 * Serialise IDs from a nested tree of items
 *
 * 
 */


const data = [
    { 
        id: 1, 
        items: 
        [
            { 
                id: 4, 
                items: [
                    {
                        id: 5
                    }, 
                    {
                        id: 6, 
                        items: [
                            {
                                id: 8
                            }
                        ]
                    }
                ]
            }
        ]
    },
    { 
        id: 2, 
        items: 
        [
            { 
                id: 7
            }
        ]
    }, 
    { 
        id: 3 
    },  
    { 
        id: 9, 
        items: 
        [
            {
                id: 10, 
                items: 
                [
                    {
                        id: 12
                    }
                ]
            }, 
            {
                id: 11
            }
        ]
    }
];


// Should return [1, 2, 3, 9, 4, 7, 10, 11, 5, 6, 12, 8] 

function serialize(array, serializedArr=[]){

    let queue = [];
    array.forEach((v)=>{
        serializedArr.push(v.id);
        if (v.items){
            v.items.forEach((i)=>{
                queue.push(i);
            })
        }
        
    })

    if (queue.length){
        serialize(queue, serializedArr);
    }
    
    return serializedArr;
}

console.log('serialize', serialize(data));

/**
 * 
 * Outer join two arrays
 * 
 */

const a = [
  { id: 3, name: 'Matt' },
  { id: 4, name: 'Greg' },
  { id: 1, name: 'David' },
  { id: 2, name: 'John' }
];
const b = [
  { id: 7, position: 'Outlier' },
  { id: 2, position: 'Leader' },
  { id: 3, position: 'Captain' },
  { id: 6, position: 'Rogue' },
  { id: 4, position: 'VP' },
  { id: 5, position: 'Pawn'}
];

/**
 * 
 * output
 *  [ { id: 1, name: 'David', position: null }, 
   { id: 2, name: 'John', position: 'Leader' }, 
   { id: 3, name: 'Matt', position: 'Captain' }, 
   { id: 4, name: 'Greg', position: 'VP' }, 
   { id: 5, position: 'Pawn', name: null } 
   { id: 6, position: 'Rogue', name: null }, 
   { id: 7, position: 'Outlier', name: null } ]  
 */

function outerJoinArray(a, b){

    // {
    //     3:
    //     4:
    //     1:
    //     2:
    // }

    // {
    //     7:
    //     //2:
    //    // 3:
    //     6:
    //    // 4:
    //     5:

    // }


    let aFreq = {};
    for (let v of a){
        aFreq[v.id] = v;
    }

    let bFreq = {};
    for (let v of b){
        bFreq[v.id] = v;
    }

    let mergedArray = [];
    for (const key in aFreq){
        const aVal = aFreq[key];
        const bVal = bFreq[key];
        if(bVal){
            //aVal.position = bVal.position;

            const bProperties = Object.getOwnPropertyNames(bVal);
            bProperties.forEach((p)=>{
                if (p!== 'id'){
                    aVal[p] = bVal[p];
                }
            });
            // Delete this entry
            delete bFreq[key];
        }
        mergedArray.push(aVal);
    }

    // Now merge remaining values
    const reaminingValues = Object.values(bFreq);

    if (reaminingValues.length){
        mergedArray = [...mergedArray, ...reaminingValues];
    }
    
    mergedArray.sort((a1, b1)=>{
        return a1.id - b1.id;
    })
  
    return mergedArray;  
}

console.log('outerJoinArray', outerJoinArray(a, b));

/**
 * //Give me the output console for the following piece of code :
 */

 //Give me the output console for the following piece of code :
var foo = 'foo';
function bar() {
  setTimeout(() => {
    console.log('setTimeout', foo); //bar // get last value it sees in the function
  }, 0);
  console.log('foo 1', foo);  //undefined // no foo declared due to hoisting
  console.log('calling bar', bar()); // undefined // returns nothing
  console.log('foo 2', foo); //bartwo // uses value defined by bar() 
  var foo = 'bar';
  function bar() {
    foo = 'bartwo';
  }
  console.log('foo 3', foo); //bar // last value set
}
bar();
console.log('foo 4', foo);  //foo //global



/*


function bar() {
}

function bar() {
    foo = 'bartwo';
}


var foo = 'foo';


var foo = 'bar';



*/