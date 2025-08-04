const gameBoard = [[],[],[]];


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
   console.log(computerOption);
   console.log(userOption);
   
}