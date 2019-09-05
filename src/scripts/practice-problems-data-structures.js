
// Write a function that returns the largest element in a list.

function FindLargest(arr) {
    if (!arr.length) {
        return '-1';
    }
    let max = Number.parseInt(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        let currentValue = Number.parseInt(arr[i]);
        if (currentValue > max) {
            max = currentValue;
        }
    }
    return max;
}

let exercise1Form = document.getElementById('exercise1');
let exercise1InputAnswer = document.getElementById("exercise1InputAnswer");
exercise1Form.addEventListener('submit', event => {
    let exercise1Input = exercise1Form.elements['exercise1Input'];
    let arr = exercise1Input.value.split(',');
    let result = FindLargest(arr);

    exercise1InputAnswer.innerHTML = `For array: ${arr.join(',')} the largest value is ${result} (and check against Math.max ${Math.max(...arr)})`;
    event.preventDefault();
})




let constructedBT = {};
function constructTree(binaryTreeArr, nodeIndex, currentNode){

    console.log('nodeIndex', nodeIndex, 'currentNode', currentNode);
    // to do edge case
    if (!nodeIndex){ // root
        nodeIndex = 0;
        constructedBT = { 
            value: binaryTreeArr[nodeIndex],
            left: {},
            right: {}
        };
        depthIndex = 1;
        console.log('root case....');
        constructTree(binaryTreeArr, nodeIndex+1, constructedBT.left);
        constructTree(binaryTreeArr, nodeIndex+2, constructedBT.right);
       
    }

    if (nodeIndex < binaryTreeArr.length && currentNode){
        currentNode.value = binaryTreeArr[nodeIndex];
        currentNode.left = {};
        currentNode.right = {};
        //++depthIndex;
        // constructTree(binaryTreeArr, nodeIndex + depthIndex, depthIndex, currentNode.left);
        // constructTree(binaryTreeArr, nodeIndex + depthIndex + 1, depthIndex, currentNode.right);

        constructTree(binaryTreeArr, 2 * nodeIndex + 1, currentNode.left);
        constructTree(binaryTreeArr, 2 * nodeIndex + 1 + 1, currentNode.right);
    } 
    // else {

    //     console.log('done! left:', constructedBT)
    // }

}


function flattenBranches(btree, array, sum){
    if (btree.left && btree.left.value !== undefined && btree.left.value !== -1 ){
        array.push(btree.left.value);
        //sum += btree.left.value;
        flattenBranches(btree.left, array, sum);
        flattenBranches(btree.right, array, sum);
    }
    if (btree.right && btree.right.value !== undefined && btree.right.value !== -1){
        array.push(btree.right.value);
       // sum += btree.right.value;
        flattenBranches(btree.left, array, sum);
        flattenBranches(btree.right, array, sum);
    } 
    // else {
    //     //console.log('done?', sum);
    //     return sum;
    // }
    
}

// if (binaryTree.length === 0 || binaryTree.length === 1){
//     console.log('nothing');
// } else {

//     splitTree(binaryTree);
// }

function sumArray(array){
    return array.reduce((a, b)=>{
        return a + b;
    }, 0);
}


function findLargestBinaryTreeBranch(binaryTreeArr){

    console.log('going to construct tree.....');

    //let binaryTreeArr =  [3, 6, 2, 9, -1, 10];
    //let binaryTreeArr =  [3, 6, 2, 9, -1, 10, 12, 13, 14];

    constructTree(binaryTreeArr);
    console.log('tree', constructedBT);
    console.log('tree', JSON.stringify(constructedBT, null, 2));

    let leftBranchArr = [];
    if (constructedBT && constructedBT.left && constructedBT.left.value !== undefined){
        leftBranchArr.push(constructedBT.left.value);
        flattenBranches(constructedBT.left, leftBranchArr, leftBranchArr[0]);
    }

    let rightBranchArr = [];
     if (constructedBT && constructedBT.right && constructedBT.right.value !== undefined){
        rightBranchArr.push(constructedBT.right.value);
        flattenBranches(constructedBT.right, rightBranchArr, rightBranchArr[0]);
    }

    console.log('left:', leftBranchArr, 'right:', rightBranchArr);

    let leftSum = sumArray(leftBranchArr);
    let rightSum = sumArray(rightBranchArr);

    console.log('leftSum:', leftSum, 'rightSum:', rightSum);

    if (leftSum > rightSum){
        return 'Left';
    } else if (leftSum < rightSum){
        return 'Right';
    } else if (leftSum === rightSum){
        return 'Same';
    } 
};


window.addEventListener('load', function(event){
    let exercise2Form = document.getElementById('exercise2');
    let exercise2InputAnswer = document.getElementById("exercise2InputAnswer");
    exercise2Form.addEventListener('submit', event => {
        let exercise2Input = exercise2Form.elements['exercise2Input'];
        let inputStrObj = `{"treeArr":${exercise2Input.value}}`;
        let inputObj = JSON.parse(inputStrObj);

        let answer = findLargestBinaryTreeBranch(inputObj.treeArr);

        exercise2InputAnswer.innerHTML = answer;
        event.preventDefault();
    })

})