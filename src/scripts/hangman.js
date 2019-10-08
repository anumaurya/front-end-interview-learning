/**
 * Hang man
 * 
 * coder
 * 5 guesses
 * 
 * _ _ _ _ _ 
 * 
 * Wrong guesses: x y
 * Tries left: 3
 * 
 * handle medium (two m)
 */

 var HangMan = function(secretWord, guessCount){
    this.secretWord = secretWord;
    this.maxGuesses = guessCount;
    this.answer = new Array(secretWord.length).fill('_');
    this.wrongGuesses = new Array();

    this.indexes = {};
    for (let i=0; i<this.secretWord.length; i++){
        if (!this.indexes[this.secretWord.charAt(i)]){
            this.indexes[this.secretWord.charAt(i)] = [];   
        }
        this.indexes[this.secretWord.charAt(i)].push(i);
    }
 }

 HangMan.prototype.makeGuess = function(letter){
    console.log('\n New guess', letter);

    if (this.maxGuesses === this.wrongGuesses.length){
        console.log('Sorry, you have reached the max guesses');
        return;
    }


    //let foundIndex = this.secretWord.indexOf(letter);
     
    let foundIndexes = this.indexes[letter];
    if (foundIndexes && foundIndexes.length){
        foundIndexes.forEach((i)=>{
            this.answer[i] = letter;
        })
    } else {
        this.wrongGuesses.push(letter);
    }

    console.log(this.answer.toString());

    let dashCount = this.answer.filter((l)=>{
        return l === '_';
    })

    if (!dashCount.length){
        console.log('Yay! you have won the game');
        return;
    }

    console.log('Wrong guesses:', this.wrongGuesses.toString());
    console.log('Tries left:', this.maxGuesses - this.wrongGuesses.length);

 }

 var hangman = new HangMan('medium', 5);
 hangman.makeGuess('x');
 hangman.makeGuess('y');
 hangman.makeGuess('m');
 hangman.makeGuess('e');
 hangman.makeGuess('d');
 hangman.makeGuess('i');
 hangman.makeGuess('u');


//  hangman.makeGuess('m');
//  hangman.makeGuess('e');
//  hangman.makeGuess('d');
//  hangman.makeGuess('i');
//  hangman.makeGuess('u');
//  hangman.makeGuess('c');
//  hangman.makeGuess('o');
//  hangman.makeGuess('d');
//  hangman.makeGuess('e');
//  hangman.makeGuess('r');





 /**
  * Two users
  * 1. Readers
  * 2. Writers
  * 
  * 
  * Highlight some text
  * 
  * User
  * 1. user highlight
  * 2. friend highlight
  * 3. top 10 highlights
  * 
  * Visitor
  * 1. top 10 highlights
  */
 


