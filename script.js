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
const optionPicker = () =>{
   let options = ["X","O"];
   let  computerOption = options[Math.floor(Math.random() * 2)];
   let userOption;
   if(computerOption == options[0]){
    userOption = options[1];

   }
   else{
    userOption = options[0];
   }
  gameBoard.push(userOption);
  gameBoard.push(computerOption);
  
   
}   
