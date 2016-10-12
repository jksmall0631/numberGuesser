//identify the input field
var userNumber = document.getElementById("number");

//identify the 'last guess' output area
var printNumber = document.querySelector('h2');

//identify the 'guess' button
var guess = document.getElementById('guess');

//identify the 'clear' button
var clear = document.getElementById('clear');

//function to collect the value from input field and store it as variable 'userNumber'
function collectUserNumber() {
  var lastGuess = userNumber.value;
  if (lastGuess > 100 || lastGuess < 1) {
    alert("pick a number between 1 and 100");
  }
  else {
  printNumber.innerText = lastGuess;
}
}
//clears text field
function clearUserNumber() {
  document.getElementById("number").value = "";
}

//convert value of userNumber to numeric from string, store as new variable numberOne
 function numberOne() {
  return parseInt(userNumber.value);
}
//on 'guess' button click, run collectUserNumber
guess.addEventListener('click', collectUserNumber);

//on 'clear' button click, run clearUserNumber
clear.addEventListener('click', clearUserNumber);

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
     return("Winner winner chicken dinner!");
   }
   else{
     return("Make sure your input is a number");
   }
 };
//identify line to print messages to
var printIntro  = document.getElementById('intro');
var printMessage = document.getElementById('higherLower');
//declare function to print message
function printMessageHere () {
  var message1 = compare();
  printMessage.innerText = message1;
  printIntro.innerText = "Your last guess was";
}
//add event listener
guess.addEventListener('click', printMessageHere);


//function that resets input, number, and message fields
function resetIt (){
  document.getElementById("number").value = "";
  printNumber.innerText = "";
  printMessage.innerText = "";
  printIntro.innerText = "";

  randNumber = compNumber();
}

//runs resetIt function on reset button click
reset.addEventListener('click', resetIt);
