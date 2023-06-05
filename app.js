let play=confirm("Would you like to play rock-paper-scissors?");
if(play){
while(play){
const playerChoice=prompt("Choose rock, paper or scissors.");
if(playerChoice||playerChoice===""){
const playerOne=playerChoice.trim().toLowerCase();
if(playerOne==="rock"||
   playerOne==="paper"||
   playerOne==="scissors"){
   let computerChoice=Math.floor(Math.random()*3);
   const rpsarray=["rock", "paper", "scissor"];
   const computer=rpsarray[computerChoice];

   const result=playerOne===computer?"Tie!":
              playerOne==="rock"&&computer==="scissors"?`playerOne:${playerOne}\ncomputer:${computer}\nplayerOne wins!`:
              playerOne==="scissors"&&computer==="paper"?`playerOne:${playerOne}\ncomputer:${computer}\nplayerOne wins!`:
              playerOne==="paper"&&computer==="rock"?`playerOne:${playerOne}\ncomputer:${computer}\nplayerOne wins!`:
              `playerOne:${playerOne}\ncomputer:${computer}\ncomputer wins!`;

    alert(result);

    play=confirm("Wanna play again?");
    if(!play){
        alert("Thanks for playing!");
        continue;
    }
   }
   else{
    alert("You didn't make a valid choice!");
    continue;
   }
}
else{
    alert("You changed your mind? Okay, maybe next time!");
    break;
}
}
}
else{
    alert("Ok, maybe next time!");
}