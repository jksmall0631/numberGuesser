//identify the input field
var userNumber = document.getElementById("number");
//identify the 'last guess' output area
var printNumber = document.querySelector('h2');
//identify the 'guess' button
var guess = document.getElementById('guess');
//function to collect the value from input field and store it as variable 'userNumber'
function collectUserNumber () {
  var lastGuess = userNumber.value;
  printNumber.innerText = lastGuess;
}
//convert value of userNumber to numeric from string, store as new variable numberOne
 function numberOne() {
  return parseInt(userNumber.value);
}
//on 'guess' button click, run collectUserNumber
guess.addEventListener('click', collectUserNumber);
// generate random number to variable compNumber
 function compNumber(){
   var rand = Math.floor((Math.random()*100)+1);
   return rand;
 }
 var randNumber = compNumber();
//compare userGuess to randNumber;
 var compare = function(){
    if (numberOne() > randNumber){
     return("That is too high");
   }
   else if (numberOne() < randNumber) {
     return("That is too low");
   }
   else if (numberOne() === randNumber){
     return("Winner winner chicken dinner");
   }
   else{
     return("Make sure your input is a number");
   }
 };
//identify line to print message to
var printMessage = document.getElementById('higherLower');
//declare function to print message
function printMessageHere () {
  var message1 = compare();
  printMessage.innerText = message1;
}
//add event listener
guess.addEventListener('click', printMessageHere);

console.log(userGuess);
