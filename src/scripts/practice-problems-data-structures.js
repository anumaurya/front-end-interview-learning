
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
function constructTree(binaryTreeArr, nodeIndex, currentNode) {

    console.log('nodeIndex', nodeIndex, 'currentNode', currentNode);
    // to do edge case
    if (!nodeIndex) { // root
        nodeIndex = 0;
        constructedBT = {
            value: binaryTreeArr[nodeIndex],
            left: {},
            right: {}
        };
        depthIndex = 1;
        console.log('root case....');
        constructTree(binaryTreeArr, nodeIndex + 1, constructedBT.left);
        constructTree(binaryTreeArr, nodeIndex + 2, constructedBT.right);

    }

    if (nodeIndex < binaryTreeArr.length && currentNode) {
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


function flattenBranches(btree, array, sum) {
    if (btree.left && btree.left.value !== undefined && btree.left.value !== -1) {
        array.push(btree.left.value);
        //sum += btree.left.value;
        flattenBranches(btree.left, array, sum);
        flattenBranches(btree.right, array, sum);
    }
    if (btree.right && btree.right.value !== undefined && btree.right.value !== -1) {
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

function sumArray(array) {
    return array.reduce((a, b) => {
        return a + b;
    }, 0);
}


function findLargestBinaryTreeBranch(binaryTreeArr) {

    console.log('going to construct tree.....');

    //let binaryTreeArr =  [3, 6, 2, 9, -1, 10];
    //let binaryTreeArr =  [3, 6, 2, 9, -1, 10, 12, 13, 14];

    constructTree(binaryTreeArr);
    console.log('tree', constructedBT);
    console.log('tree', JSON.stringify(constructedBT, null, 2));

    let leftBranchArr = [];
    if (constructedBT && constructedBT.left && constructedBT.left.value !== undefined) {
        leftBranchArr.push(constructedBT.left.value);
        flattenBranches(constructedBT.left, leftBranchArr, leftBranchArr[0]);
    }

    let rightBranchArr = [];
    if (constructedBT && constructedBT.right && constructedBT.right.value !== undefined) {
        rightBranchArr.push(constructedBT.right.value);
        flattenBranches(constructedBT.right, rightBranchArr, rightBranchArr[0]);
    }

    console.log('left:', leftBranchArr, 'right:', rightBranchArr);

    let leftSum = sumArray(leftBranchArr);
    let rightSum = sumArray(rightBranchArr);

    console.log('leftSum:', leftSum, 'rightSum:', rightSum);

    if (leftSum > rightSum) {
        return 'Left';
    } else if (leftSum < rightSum) {
        return 'Right';
    } else if (leftSum === rightSum) {
        return 'Same';
    }
};


window.addEventListener('load', function (event) {
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



let postContent = {
    paragraphs:
        [{ id: 'aaa', text: 'aaa' },
        { id: 'bbb', text: 'bbb' },
        { id: 'ccc', text: 'ccc' },
        { id: 'ddd', text: 'ddd' },
        { id: 'eee', text: 'eee' },
        { id: 'fff', text: 'fff' }],
    sections:
        [{ id: 's0', startIndex: 0 },
        { id: 's1', startIndex: 2 },
        { id: 's2', startIndex: 4 }]
};


//console.log(printPost());


let deltas = [
    {
        "type": "updateParagraph",
        "paragraphIndex": 0,
        "paragraph": {
            "text": "aaaAAA"
        }
    },
    {
        "type": "addParagraph",
        "paragraphIndex": 1,
        "paragraph": {
            "text": "new"
        }
    },
    {
        "type": "deleteParagraph",
        "paragraphIndex": 5,
    },
    {
        "type": "deleteParagraph",
        "paragraphIndex": 3,
    },
    {
        "type": "deleteParagraph",
        "paragraphIndex": 3,
    }
];

// Assumption:
// // 1. Sections have unique startIndices and the array is ordered.

// let deltas = [{ "type": "deleteParagraph", "paragraphIndex": -1 },
//  { "type": "addParagraph", "paragraphIndex": 11, "paragraph": { "text": "new" } }, 
//  { "type": "updateParagraph", "paragraphIndex": 13, "paragraph": { "text": "update" } }, 
//  { "type": "invalidType", "paragraphIndex": -1 }];


function processDeltas(postContentData, deltasData) {
    deltasData.forEach((delta) => {
        if (delta.paragraphIndex < 0 || delta.paragraphIndex >= postContentData.paragraphs.length) {
            return;
        }
        switch (delta.type) {
            case 'updateParagraph':
                postContentData.paragraphs[delta.paragraphIndex].text = delta.paragraph.text;
                break;

            case 'addParagraph':
                postContentData.paragraphs.splice(delta.paragraphIndex, 0, {
                    id: delta.paragraph.text,
                    text: delta.paragraph.text
                });
                // Update sections index by adding 1 to all the sections that have start index after the delta's paragraph index
                for (let i = 0; i < postContentData.sections.length; i++) {
                    let section = postContentData.sections[i];
                    if (section.startIndex > delta.paragraphIndex) {
                        section.startIndex++;
                    }
                }
                break;

            case 'deleteParagraph':
                postContentData.paragraphs.splice(delta.paragraphIndex, 1);

                for (let i = postContentData.sections.length - 1; i >= 0; i--) {
                    let section = postContentData.sections[i];
                    // If the index is greater than number of paragraphs, the section doesn't exist
                    if (section.startIndex === delta.paragraphIndex && section.startIndex >= postContentData.paragraphs.length) {
                        postContentData.sections.splice(i, 1);
                    }

                    // Check if the previous section exists and if the indexes are consecutive and the previous section starts at the deleted paragraph
                    // then delete it (to avoid empty sections)
                    if (i - 1 >= 0) {
                        let prevSection = postContentData.sections[i - 1];
                        if (prevSection.startIndex === delta.paragraphIndex && prevSection.startIndex === section.startIndex - 1) {
                            postContentData.sections.splice(i - 1, 1);
                        }
                    }

                    // Now Subtract 1 from all the sections that have start index after the delta's paragraph index
                    if (section.startIndex > delta.paragraphIndex) {
                        section.startIndex--;
                    }
                }
                break;
        }
    });
}

function appendNewline(currentIndex, array, prefix) {
    if (!prefix) {
        prefix = '';
    }
    return (currentIndex !== array.length - 1) ? prefix + '\n' : '';
}

function printPost(data) {
    let formattedPost = '';
    data.sections.forEach((section, i) => {

        let sectionStartIndex = section.startIndex;
        let sectionEndIndex;
        // Set the section's end index to be next section's start index (if exists)
        // If it doesn't exist, then its the end of the paragraph's array
        if (i + 1 < data.sections.length) {
            sectionEndIndex = data.sections[i + 1].startIndex;
        } else {
            sectionEndIndex = data.paragraphs.length;
        }
        for (let j = sectionStartIndex; j < sectionEndIndex; j++) {
            formattedPost += data.paragraphs[j].text + appendNewline(j, data.paragraphs);
        }
        formattedPost += appendNewline(i, data.sections, '-');
    });
    return formattedPost;
}


processDeltas(postContent, deltas);
console.log(postContent);
console.log(printPost(postContent));






let Game = {
    constructor: function (columns, rows) { // 1=1x1 2: 2x4
        this.board = new Array(columns); // [ col1, col2, ....]

        for (let i = 0; i < columns; i++) {

            this.board[i] = new Array(rows);
            for (let j = 0; j < rows; j++) {

                this.board[i][j] = '.';
               
                    // [ [row1, row2,...], [row1, row2. ...], ... ]
            }
     }
     console.log(this.board);
    },

    dropTile: function (col, color) { // [ 0, 1, 2, 3, 4]
        // [ col1 , col2, col3, .... ]
        // [ [red, blue], [....], [...] ]


        for (let i = 0; i < this.board[col].length; i++){
            if (this.board[col][i] === '.'){
                this.board[col][i] = color;
                break;
            }
        }
    },

    display: function () {
        this.board.forEach(function (col, i) {
            console.log('printing for col: ', i);
            col.forEach(function (row) {
                console.log(row);
            });
        });
    }
}
let game = Object.create(Game);
game.constructor(4, 4);
game.dropTile(1, 'red');
game.dropTile(1, 'blue');
game.dropTile(1, 'yellow');
game.dropTile(1, 'green');
game.display();
