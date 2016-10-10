var button = document.querySelector('#guess');


button.addEventListener('click', function(){
  var input = document.getElementById('#number');
  console.log('input.innerText')
  *//var display = document.getElementById('#lastGuess');
  *//var userNumber = parseInt(input);
  *//display.innerText = userNumber;
  *//return finalInput;
})

var compNumber = function(){
   var rand = Math.floor((Math.random()*100)+1);
   return rand;
 }

 var compare = function(){
   if (userNumber === compNumber){
     console.log("Winner winner chicken dinner");
   }
   else if(userNumber > compNumber && userNumber < 101){
     console.log("That is too high");
   }
   else if (userNumber < compNumber && userNumber > 0) {
     console.log("That is too low");
   }
   else{
     console.log("Make sure your number is between 0 & 100")
   }

 }
