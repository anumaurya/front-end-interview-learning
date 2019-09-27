// Write an array flatten function.  

let nestedArray = [
    [[5, 12], [17, 21], [23]],
    [[1, 2], [4, 6], [8]],
    [[12, 14], [18, 19, 27]],
    [[[3, 7], [9, 15]], [25]]
];

var flat = nestedArray.toString().split(',').map(Number);

console.log(flat);

console.log('flat!', nestedArray.flat(3));

var flattenArray = (function(){

    function flatten(array, flatArray = []){

        array.forEach((a)=> {
            if (Array.isArray(a)){
                return flatten(a, flatArray);
            }
            else {
               flatArray.push(a);
            }
        })

        return flatArray;
    }
    return flatten;

})()

console.log('flattenArray', flattenArray(nestedArray));

// 1 level: let flat = [].concat(...array)