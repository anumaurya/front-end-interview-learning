
 /* Balanced Brackets 
 * -----------------
 * A bracket is considered to be any one of the following characters:
 * ( )  { }  [ ]
 *
 * Two brackets are a matched pair if the opening bracket occurs to the left
 * of a closing bracket of the exact same type.
 *
 * A matching pair of brackets is not balanced if the enclosing set of brackets
 * are NOT matched.
 *
 * Implement a function called "isBalanced" that returns a boolean value
 * indicating if the given string has all balanced brackets.
 *
 * Examples:
 * isBalanced("{[()]}") // true
 * isBalanced("{[(])}") // false
 */
 
console.log( isBalanced("{[()]}") );
console.log( isBalanced("{[(])}") );

console.log( isBalanced("") ); // true
console.log( isBalanced("]") ); // false
console.log( isBalanced("{{[[(())]]}}") ); // true
console.log( isBalanced("[]{()()[[{}]]}") ); // true
console.log( isBalanced("a b [d] { (g) (h) i [-[ {;} ]-] }") ); // true

// 'kljk{i[a(a)k]p)l}jkjkjk'

// ( [ ) ]


function isOpenBracketType(string){
    return (string === '(' || string ==='[' || string === '{')
}

function isCloseBracketType(string){
    return (string === ')' || string ===']' || string === '}')
}

function getMyOpenPair(string){
    switch(string){
        case ')':
            return '(';
        case ']':
            return '[';
        case '}':
            return '{';
    }
}

function isBalanced(inputString){
    const array = inputString.split('');
    let stack = []; // {']' : true}
    
    for (let i = 0; i<array.length; i++){
        const a = array[i];
        if (isOpenBracketType(a)){
            stack.push(a);
        } else if (isCloseBracketType(a)){
            const lastBracket = stack.pop();
            if (lastBracket === getMyOpenPair(a)){
                // pair is complete
                continue;
            } else {
                return false;
            }
        }
       
        
    };
    return array.length ===0 || stack.length ===0;    
}

