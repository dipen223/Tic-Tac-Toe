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
     let emptySpots = [];

    if(playerSymbol === "X"){
        computerSymbol = "O";
    }
    else{
        computerSymbol = "X";
    }

    function getEmptySpots(){
        
    for(let  i = 0; i<gameBoard.board.length;i++){
        if(gameBoard.board[i] === null || gameBoard.board[i] === ''){
            emptySpots.push(i)
        }
    }
    if(emptySpots.length === 0){
        console.log("No empty slots left");
        return
    }
    return emptySpots;

    }
    
    
    
    function chooseSpot(){
    let userSpot = prompt("Please enter a spot number to place your symbol");
    gameBoard.board[userSpot] = playerSymbol;

    let randomIndex = Math.floor(Math.random() * getEmptySpots().length);
    let computerSpot = emptySpots[randomIndex];
    gameBoard.board[computerSpot] = computerSymbol;
    
}



chooseSpot();



}






// based on the choice of player,computer has options on board to choose random cells from the remaining cells
// let's say I start the game and pick one cell to place
// In computer turn it chooses one random cell on it's turn