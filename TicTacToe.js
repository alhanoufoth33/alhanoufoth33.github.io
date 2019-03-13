
var turn = true;  // true means x = joey(player 1) turn 
var squares =[];

  

 function checkWinner(){
    
      for (var i=1; i <=9; i++){
          squares[i]=document.getElementById('A'+i).innerHTML;
      }

     // check horizantal
     if (squares[1] == squares[2] && squares[2]== squares[3] && squares[1] !=""){
        swal({
            title: "Congrats!",
            text: "Player" + "  " + squares[1]+"   "+ "is win!",
            icon: "giphy.gif",
            button: "wohooo!",
          });
         
         
      }
        if (squares[4] == squares[5] && squares[5]== squares[6] && squares[4] !=""){
        swal({
            title: "Congrats!",
            text: "Player" + "   " + squares[4]+"  "+ "is win!",
            icon: "giphy.gif",
            button: "wohooo!",
          });
         
      }
        if (squares[7] == squares[8] && squares[8]== squares[9] && squares[7] !=""){
        swal({
            title: "Congrats!",
            text: "Player" + "   " + squares[7]+"   "+ "is win!",
            icon: "giphy.gif",
            button: "wohooo!",
          });
        
      }

      // check vertical 
        if (squares[1] == squares[4] && squares[4]== squares[7] && squares[1] !=""){
        swal({
            title: "Congrats!",
            text: "Player" +"  " + squares[1]+"   "+ "is win!",
            icon: "giphy.gif",
            button: "wohooo!",
          });
         
     }
        if (squares[2] == squares[5] && squares[5]== squares[8] && squares[2] !=""){
        swal({
            title: "Congrats!",
            text: "Player" +"   " + squares[2]+"   "+ "is win!",
            icon: "giphy.gif",
            button: "wohooo!",
          });
        
     }
       if (squares[3] == squares[6] && squares[6]== squares[9] && squares[3] !=""){
        swal({
            title: "Congrats!",
            text: "Player" +"    " + squares[3]+"   "+ "is win!",
            icon: "giphy.gif",
            button: "wohooo!",
          });
        
     }

     // check digonal 
       if (squares[1] == squares[5] && squares[5]== squares[9] && squares[1] !=""){
        swal({
            title: "Congrats!",
            text: "Player" +"    " + squares[1] + "      " +  "is win!",
            icon: "giphy.gif",
            button: "wohooo!",
          });
         
     }
       if (squares[3] == squares[5] && squares[5]== squares[7] && squares[3] !=""){
        swal({
            title: "Congrats!",
            text: "Player" + "   " + squares[3]+"     "+ "is win!",
            icon: "giphy.gif",
            button: "wohooo!",
          });
        
     }
      if (moves == 9)
      {
         swal("Thers no winner!!");
        };
      }
      var moves= 0 
function insert(id){
    var whosWin = document.getElementById(id);
if(turn && whosWin.innerHTML ==""){
    turn= !turn;
    
    moves++
    console.log(moves);
    whosWin.innerHTML="X";
    
} else if (!turn && whosWin.innerHTML==""){
    whosWin.innerHTML="O";
    turn= !turn;
    moves++
    console.log(moves);
}
checkWinner();
}
function restGame(){
    location.reload();
}

