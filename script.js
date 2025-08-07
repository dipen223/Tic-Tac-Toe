let cells = document.querySelectorAll(".cell");
let turnO = true;
let resetBtn = document.querySelector(".reset");
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

const showWinner = (winner) =>{
    

}
const checkWinner = () => {
    for(let pattern of winningPatterns){
    let pos1Val = cells[pattern[0]].innerText;
    let pos2Val = cells[pattern[1]].innerText;
    let pos3Val = cells[pattern[2]].innerText;
    if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log(`Winner ${pos1Val}`);
        }
    }
}
   
}
   

resetBtn.addEventListener("click",() =>{
    for(let cell of cells){
        cell.innerText = "";
        turnO = true;
    }
})