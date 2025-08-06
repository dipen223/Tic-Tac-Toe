let gameBoard =(function() {
    let board = ["","","","","","","","",""];

    function getBoard(){
        return board
    }

    function setCell(index,symbol){
        if(board[index] === ""){
            board[index] = symbol;
            return true;
        }
        return false;
    }

    function reset(){
        board = ["","","","","","","","",""];
    }

    return {getBoard,setCell,reset};

})();



function Player(symbol){
    return {symbol};
}


const gameController = (function(){
    const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let player1, player2, currentPlayer;
  function start(){
    gameBoard.reset();

    let player1Symbol = prompt("Please pick your symbol: X or O ?").toUpperCase();
    while(player1Symbol !== "X" && player1Symbol !== "O"){
        player1Symbol = prompt("Invalid! Choose X or O:").toUpperCase();
    }

    player1 = Player(player1Symbol);
    player2 = Player(player1Symbol === "X"? "O" : "X");

    console.log(`Player1 is ${player1.symbol} , Player 2 is ${player2.symbol}`);
    playRound();

  }

  function getEmptySpots(){
    return gameBoard.getBoard().map((val,index) => (val === "" ? index:null)).filter(idx => idx !== null);
  }

  function checkWinner(symbol){
    const board = gameBoard.getBoard();
    const positions = board.map((val,idx) => val === symbol ? idx:null).filter(idx => idx !== null);

return winningPatterns.some(pattern => pattern.every(idx => positions.includes(idx)));
  }

  function playRound(){
    printBoard();
    const emptySpots = getEmptySpots();
     if (emptySpots.length === 0) {
            console.log("It's a draw!");
            return;
        }

    let spot = Number(prompt(`Player ${currentPlayer.symbol}`)) ;
    while(!emptySpots.includes(spot)){
        spot = Number(prompt(`Invalid spot! Choose one of : ${emptySpots.join(",")}`));
    }   

    gameBoard.setCell(spot,currentPlayer.symbol);

    if(checkWinner(currentPlayer.symbol)){
        printBoard();
        console.log(`Player ${currentPlayer.symbol} wins`);
        return;
    }
   if(getEmptySpots().length === 0){
    printBoard();
    console.log("It's a draw");
    return;
   }
   currentPlayer = currentPlayer === player1 ? player2: player1;
   playRound();
  }

})();


gameController.start();




