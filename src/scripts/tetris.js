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