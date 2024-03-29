/**
 * Design a Tic-tac-toe game that is played between two players on a n x n grid.
 * 
 * You may assume the following rules:
 * 1. A move is guaranteed to be valid and is placed on an empty block.
 * 2. Once a winning condition is reached, no more moves is allowed.
 * 3. A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
 * 
 * Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

TicTacToe toe = new TicTacToe(3);

toe.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

toe.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

toe.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

toe.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

toe.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

toe.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|
 */

/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function (n) {
    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.diag1 = 0;
    this.diag2 = 0;
    this.size = n;
    // this.board = new Array(n).fill(new Array(n).fill(0));
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
    const value = player === 1 ? 1 : -1;

    this.rows[row] += value;
    this.cols[col] += value;

    if (row === col) {
        this.diag1 += value;
    }

    if (col === (this.size - row - 1)) {
        this.diag2 += value;
    }

    if (Math.abs(this.rows[row]) === this.size ||
        Math.abs(this.cols[col]) === this.size ||
        Math.abs(this.diag1) === this.size ||
        Math.abs(this.diag2) === this.size) {
        return player;
    } else {
        return 0;
    }

};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

 var toe = new TicTacToe(3);
 console.log(toe.move(0, 0, 1)); 
 console.log(toe.move(0, 2, 2));

console.log(toe.move(2, 2, 1));

console.log(toe.move(1, 1, 2)); 

console.log(toe.move(2, 0, 1)); 

console.log(toe.move(1, 0, 2)); 

console.log(toe.move(2, 1, 1)); 