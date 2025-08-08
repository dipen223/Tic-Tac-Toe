let cells = document.querySelectorAll(".cell");
let turnO = true;
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container")
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

cells.forEach((cell) => {
    cell.addEventListener("click",() => {
        if(turnO){
            cell.innerText = "O";
            turnO = false;
        }
        else{
            cell.innerText = "X";
            turnO = true;
        }
        cell.disabled = true;
         checkWinner();
    });
  
});

const  disableCells = () =>{
    for(let cell of cells){
        cell.disabled = true;
    }
}
const enableCells = () =>{
      for(let cell of cells){
        cell.disabled = false;
    }

}
const showWinner = (winner) =>{

    msgContainer.innerHTML = `<p>${winner} won the game</p>`
    disableCells();

}
const checkWinner = () => {
    for(let pattern of winningPatterns){
    let pos1Val = cells[pattern[0]].innerText;
    let pos2Val = cells[pattern[1]].innerText;
    let pos3Val = cells[pattern[2]].innerText;
    if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
    }
}
   
}
   

const resetGame = () => {
    for(let cell of cells){
        cell.innerText = "";
        turnO = true;
        
    }
    msgContainer.innerHTML = ""; 
    enableCells();

}
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);