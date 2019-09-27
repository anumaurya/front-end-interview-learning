/**
 * 1032. Stream of Characters
 * 
 * Implement the StreamChecker class as follows:
 * StreamChecker(words): Constructor, init the data structure with the given words.
 * query(letter): returns true if and only if for some k >= 1, 
 * the last k characters queried (in order from oldest to newest, 
 * including this letter just queried) spell one of the words in the given list.
 * 
 * StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.
 * streamChecker.query('a');          // return false
 * streamChecker.query('b');          // return false
 * streamChecker.query('c');          // return false
 * streamChecker.query('d');          // return true, because 'cd' is in the wordlist
 * streamChecker.query('e');          // return false
 * streamChecker.query('f');          // return true, because 'f' is in the wordlist
 * streamChecker.query('g');          // return false
 * streamChecker.query('h');          // return false
 * streamChecker.query('i');          // return false
 * streamChecker.query('j');          // return false
 * streamChecker.query('k');          // return false
 * streamChecker.query('l');          // return true, because 'kl' is in the wordlist
 * 
 * 
 * 1 <= words.length <= 2000
 * 1 <= words[i].length <= 2000
 * Words will only consist of lowercase English letters.
 * Queries will only consist of lowercase English letters.
 * The number of queries is at most 40000.
 */


var StreamChecker = function (words) {
    this.index = {};
    /**
     * [cd, f, kl, klm, to, too, ac]
     * a: [ac]
     * a,c: [ac]
     * c: [cd]
     * c,d: [cd]
     * f: [f]
     * k: [kl, klm]
     * k,l: [kl, klm]
     * k,l,m: [kl, klm]
     * t: [to, too],
     * t,o: [to, too]
     * t,o,o: [too]
     */
    this.stream = [];
    words.forEach(w => {
        for (let i = 0; i < w.length; i++) {
            let sub = w.substring(0, i + 1);
            let indexVal = this.index[sub];
            if (!indexVal) {
                this.index[sub] = [];
            }
            this.index[sub].push(w);
        }
    });

};

StreamChecker.prototype.query = function (letter) {
    this.stream.push(letter);
    const streamLength = this.stream.length;
    const current = [];
    for (let i = streamLength - 1; i >= 0; i--) {
        current.splice(0, 0, this.stream[i]);
        const found = this.checkIndex(current);
        if (found){
            return true;
        } 

        // const indexVal = this.index[letter];
        // if (indexVal && indexVal === letter){
        //     return true;
        // } else if (i>0) {
        //     //current.push(letter);
        //     current.splice(0, 0, this.stream[i-1]);
        //     const found = this.checkIndex(current);
        //     if (found){
        //         return true;
        //     }
        // }

    }

    // function checkPrev(array){
    //     const letters = array.join(',').replace(',', '');
    //     const indexVal = this.index[letters];
    //     for (let i=0; i<indexVal.length; i++){
    //         const val = indexVal[0];
    //         if (val === letters){
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    return false;
};

StreamChecker.prototype.checkIndex = function(array) {
    const letters = array.join('');
        const indexVal = this.index[letters];
        if (!indexVal){
            return false;
        }
        for (let i=0; i<indexVal.length; i++){
            const val = indexVal[i];
            if (val === letters){
                return true;
            }
        }
        return false;
};

// let array = ['cd', 'f', 'kl', 'klm', 'to', 'too', 'oo', 'ac'];
// let streamChecker = new StreamChecker(array);
// console.log(array.toString());
// console.log('a?', streamChecker.query('a'));
// console.log('c?', streamChecker.query('c'));
// console.log('d?', streamChecker.query('d'));
// console.log('k?', streamChecker.query('k'));
// console.log('l?', streamChecker.query('l'));
// console.log('m?', streamChecker.query('m'));
// console.log('x?', streamChecker.query('x'));
// console.log('t?', streamChecker.query('t'));
// console.log('o?', streamChecker.query('o'));
// console.log('o?', streamChecker.query('o'));
// console.log('y?', streamChecker.query('y'));
// console.log('o?', streamChecker.query('o'));
// console.log('o?', streamChecker.query('o'));

// l["StreamChecker","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query"]
// [[["abaa","abaab","aabbb","bab","ab"]],["a"],["a"],["b"],["b"],["b"],["a"],["a"],["b"],["b"],["a"],["a"],["a"],["a"],["b"],["a"],["b"],["b"],["b"],["a"],["b"],["b"],["b"],["a"],["a"],["a"],["a"],["a"],["b"],["a"],["b"],["b"],["b"],["a"],["a"],["b"],["b"],["b"],["a"],["b"],["a"]]



function runChecker(){
    const input = [[["abaa","abaab","aabbb","bab","ab"]],["a"],["a"],["b"],["b"],["b"],["a"],["a"],["b"],["b"],["a"],["a"],["a"],["a"],["b"],["a"],["b"],["b"],["b"],["a"],["b"],["b"],["b"],["a"],["a"],["a"],["a"],["a"],["b"],["a"],["b"],["b"],["b"],["a"],["a"],["b"],["b"],["b"],["a"],["b"],["a"]];
    const words = input[0][0];
    console.log('words', words);
    let streamChecker = new StreamChecker(words);
    console.log('index', streamChecker.index);
    console.log('stream', streamChecker.stream);

    for (let i =1; i<input.length; i++){
        const letter = input[i][0];
        console.log(letter, streamChecker.query(letter));
    }


}
runChecker();