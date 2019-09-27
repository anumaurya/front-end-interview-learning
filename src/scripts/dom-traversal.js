// Given 2 identical DOM trees (but not equal) and one element  
// of the first DOM tree, how would you find this element in the second DOM tree?

var findNode = (function(){
    // find the path of this node to the root parent.

    function getPath(node, path = []){
       
        if (node.parentNode === null){
            return path;
        }

        path.push(Array.prototype.indexOf.call(node.parentNode.children, node));
        return getPath(node.parentNode, path);

    }

    function findChild(path, parent = document){
        // stack, first in last out
        if (path.length === 0) {
            return parent;
        }

        let foundChild = parent.children[path.pop()];
        
        return findChild(path, foundChild);
    }

    return {
        getPath: getPath,
        findChild: findChild
    }

})();

let node = document.getElementById('findMe1');
let path = findNode.getPath(node);
console.log('findNode.getPath', path);
console.log('findNode.findChild', findNode.findChild(path));