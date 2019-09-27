class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value, node) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            // if (this.root.value < value){
            //     // Go to the left
            //     if (!this.root.left){
            //         this.root.left = new Node(value);
            //     } else {
            //         // now do the check again
            //         insert(value, this.root.left);
            //     }
            // } else if (this.root.value > value){
            //     if (!this.root.right){
            //         this.root.right = new Node(value);
            //     }

            // }
            if (!node) {
                node = this.root;
            }
            if (value < node.value) {
                // Go to the left
                if (!node.left) {
                    node.left = new Node(value);
                } else {
                    // now do the check again
                    this.insert(value, node.left);
                }
            } else if (value > node.value) {
                if (!node.right) {
                    node.right = new Node(value);
                }
                else {
                    // now do the check again
                    this.insert(value, node.right);
                }

            }
        }
    }

    find(value, node) {
        if (value === this.root.value) {
            return this.root;
        } else {
            if (!node) {
                node = this.root;
            }
            if (value === node.value) {
                return node;
            } else if (value < node.value) {
                // Go to the left
                if (!node.left) {
                    return null;
                } else {
                    return this.find(value, node.left);
                }
            } else if (value > node.value) {
                if (!node.right) {
                    return null;
                } else {
                    return this.find(value, node.right);
                }
            }
        }

    }

    breathFirstSearch() {
        // queue - first in first out

        /*
                  10
            6           15
        3     8    13     20

        [10, 6, 15, 3, 8, 13, 20]
        
        queue: [10]
        output: []

        queue: [6, 15]
        output: [10]

        queue: [15, 3, 8]
        output: [10, 6]

        queue: [3, 8, 13, 20]
        output: [10, 6, 15]
        */
        let queue = [this.root]; //!!!! IMPORTANT
        let output = [];

        while (queue.length) {
            const node = queue.shift(); //!!!! IMPORTANT
            output.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        return output;

    }

    depthFirstSearchPreOrder(node, output = []) {
        
        /*
                  10
            6           15
        3     8    13     20

        [10, 6, 3, 8, 15, 13, 20]
        
        current: root of tree
        output: [10]
        */


        if (!node){
            node = this.root;
        }

        output.push(node.value); //!!!! IMPORTANT
        if (node.left){
            this.depthFirstSearchPreOrder(node.left, output);
        }

        if (node.right){
            this.depthFirstSearchPreOrder(node.right, output);
        }
        
        return output;
    }


    depthFirstSearchPostOrder(node, output = []) {
        
        /*
                  10
            6           15
        3     8     13      20

        [3, 8, 6, 13, 20, 15, 10]
        
        current: root of tree
        output: [10]
        */


        if (!node){
            node = this.root;
        }
        
        if (node.left){
            this.depthFirstSearchPostOrder(node.left, output);
        }

        if (node.right){
            this.depthFirstSearchPostOrder(node.right, output);
        }
        output.push(node.value); //!!!! IMPORTANT
        
        return output;
    }


    depthFirstSearchInOrder(node, output = []) {
        
        /*
                  10
            6           15
        3     8     13      20

        [3, 6, 8, 10, 13, 15, 20]
        
        current: root of tree
        output: [10]
        */


        if (!node){
            node = this.root;
        }
        
        if (node.left){
            this.depthFirstSearchPostOrder(node.left, output);
        }
        
        output.push(node.value); //!!!! IMPORTANT

        if (node.right){
            this.depthFirstSearchPostOrder(node.right, output);
        }
        
        
        return output;
    }

}

let myTree = new BinarySearchTree();
myTree.insert(10);
myTree.insert(6);
myTree.insert(15);
myTree.insert(3);
myTree.insert(8);
myTree.insert(13);
myTree.insert(20);

myTree.insert(10);

// myTree.insert(2);
// myTree.insert(7);


console.log(myTree);

console.log('find 6', myTree.find(6));

console.log('breath first search', myTree.breathFirstSearch());

console.log('depth first search pre order', myTree.depthFirstSearchPreOrder());
console.log('depth first search post order', myTree.depthFirstSearchPostOrder());
console.log('depth first search in order', myTree.depthFirstSearchInOrder());