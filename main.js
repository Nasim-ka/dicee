let player1= prompt('enter your name');
let player2= prompt('enter your name');
document.getElementById('Player-1').innerHTML=player1
document.getElementById('Player-2').innerHTML=player2
function result(){
   if(oneValue>twoValue){
      document.getElementById('total').innerHTML= player1+' is win'
      document.getElementById('Player-1').style.backgroundColor= 'green'
      document.getElementById('Player-2').style.backgroundColor= 'red'
   }
   else if(twoValue>oneValue){
      document.getElementById('total').innerHTML= player2+' is win'
      document.getElementById('Player-1').style.backgroundColor= 'red'
      document.getElementById('Player-2').style.backgroundColor= 'green'
   }
   else{
      document.getElementById('total').innerHTML='Both are equal'
      document.getElementById('Player-1').style.backgroundColor= 'green'
      document.getElementById('Player-2').style.backgroundColor= 'green'
   }

}
function roll(){
   let diceNum1 = document.getElementById('img1')
   let diceNum2 = document.getElementById('img2')
   diceNum1.src='images/5.gif'
   diceNum2.src='images/5.gif'
   setTimeout(function(){
      oneValue = Math.floor(Math.random()*6)+1;
      twoValue = Math.floor(Math.random()*6)+1;
      if(oneValue == 1){
         diceNum1.src='images/dice1.png';
      }
      else if(oneValue== 2){
         diceNum1.src='images/dice2.png';
      }
      else if(oneValue== 3){
         diceNum1.src='images/dice3.png';
      }
      else if(oneValue== 4){
         diceNum1.src='images/dice4.png';
      }
      else if(oneValue== 2){
         diceNum1.src='images/dice5.png';
      }
      else {
         diceNum1.src='images/dice6.png';
      }
      if(twoValue == 1){
         diceNum2.src='images/dice1.png';
      }
      else if(twoValue== 2){
         diceNum2.src='images/dice2.png';
      }
      else if(twoValue== 3){
         diceNum2.src='images/dice3.png';
      }
      else if(twoValue== 4){
         diceNum2.src='images/dice4.png';
      }
      else if(twoValue== 2){
         diceNum2.src='images/dice5.png';
      }
      else {
         diceNum2.src='images/dice6.png';
      }
   
       result();
   }, 1000);
 }
