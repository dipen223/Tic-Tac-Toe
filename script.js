let gameBoard = {
    board:["","","","","","","","",""],

}
let winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

function chooseSymbol(){
    let playerSymbol = prompt("Please pick your symbol: X or O ?");
    let computerSymbol;

    if(playerSymbol === "X"){
        computerSymbol = "O";
    }
    else{
        computerSymbol = "X";
    }
    
    function chooseSpot(){
    let userSpot = prompt("Please enter a spot number to place your symbol");
    gameBoard.board[userSpot] = playerSymbol;
    let computerSpot = Math.floor(Math.random() * gameBoard.board.length);
    console.log(computerSpot);
    if(computerSpot != userSpot){
        gameBoard.board[computerSpot] = computerSymbol;
    

    }
}
chooseSpot();

}






// based on the choice of player,computer has options on board to choose random cells from the remaining cells
// let's say I start the game and pick one cell to place
// In computer turn it chooses one random cell on it's turn