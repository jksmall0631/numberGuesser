//identify the input field
var userNumber = document.getElementById("number");

//identify the 'guess' button
var guess = document.getElementById('guess');

//identify the 'clear' button
var clear = document.getElementById('clear');

//identify lines to print messages to
var printIntro  = document.getElementById('intro');
var printMessage = document.getElementById('higherLower');
var printNumber = document.querySelector('h2');

//function to collect the value from input field and store it as variable 'userNumber'
//also creates an alert window if number is outside of variable range
function collectUserNumber() {
  var lastGuess = userNumber.value;
  if (lastGuess > 100 || lastGuess < 1) {
    alert("pick a number between 1 and 100");
  }
  else {
  printNumber.innerText = lastGuess;
  }
}

//event listeners that activate disabled buttons at appropriate time
number.addEventListener('input', function(){
  clear.disabled = false;
  guess.disabled = false;
});
guess.addEventListener('click', function(){
  reset.disabled = false;
});

//on 'guess' button click, run collectUserNumber
guess.addEventListener('click', collectUserNumber);

//convert value of userNumber to numeric from string, store as new variable numberOne
 function numberOne() {
  return parseInt(userNumber.value);
}

//function to clear text field
function clearUserNumber() {
  document.getElementById("number").value = "";
}

//on 'clear' button click, run clearUserNumber
clear.addEventListener('click', clearUserNumber);

// function to generate random number to variable compNumber
 function compNumber(){
   var rand = Math.floor((Math.random()*100)+1);
   return rand;
 }
 // variable that runs random number function
 var randNumber = compNumber();

// compare userGuess to randNumber;
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

//declare function to print message
function printMessageHere () {
  var message1 = compare();
  printMessage.innerText = message1;
  printIntro.innerText = "Your last guess was";
}

//prints appropriate messages on button click
guess.addEventListener('click', printMessageHere);

//function that resets input, number, and message fields
function resetIt (){
  document.getElementById("number").value = "";
  printNumber.innerText = "";
  printMessage.innerText = "";
  printIntro.innerText = "";
  clear.disabled = true;
  guess.disabled = true;
  reset.disabled = true;
  randNumber = compNumber();
}

//runs resetIt function on reset button click
reset.addEventListener('click', resetIt);
