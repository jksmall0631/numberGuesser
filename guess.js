//identify the number input field
var userNumber = document.getElementById("number");

//identify the 'guess' button
var guess = document.getElementById('guess');

//identify the 'clear' button
var clear = document.getElementById('clear');

//identify lines to print messages to
var printIntro  = document.getElementById('intro');
var printMessage = document.getElementById('higherLower');
var printNumber = document.querySelector('h2');

//event listeners that activate disabled buttons at appropriate time
number.addEventListener('input', function(){
  clear.disabled = false;
  guess.disabled = false;
  reset.disabled = false;
});

//function to collect the value from input field and store it as variable 'userNumber'
//also creates an alert window if number is outside of variable range
function collectUserNumber() {
  var lastGuess = userNumber.value;
  if (lastGuess > getMax() || lastGuess < getMin()) {
    alert("pick a number within the range");
  }
  else {
  printNumber.innerText = lastGuess;
  }
}
//on 'guess' button click, run collectUserNumber
guess.addEventListener('click', collectUserNumber);
//convert value of userNumber to numeric from string, store as new variable numberOne
function numberOne() {
  return parseInt(userNumber.value);}

//function to clear text field
function clearUserNumber() {
  document.getElementById("number").value = "";
}
//on 'clear' button click, run clearUserNumber
clear.addEventListener('click', clearUserNumber);

// retrieves value of userMin input field as numeric value
function getMin(){
  if ((document.getElementById("userMin").value)===""){
    return 1;
  }
  else {
  return Number(document.getElementById("userMin").value);
}
}
// retrieves value of userMax input field as numeric value
function getMax(){
  if ((document.getElementById("userMax").value)===""){
    return 100;
  }
  else {
    return Number(document.getElementById("userMax").value);
  }
}

//whenever newRange button is clicked a new random number is generated with
//the user declared variables.
newRange.addEventListener('click', function(){
  randNumber = compNumber();
});

// generate random number in specified range to variable compNumber
 function compNumber() {
   min = getMin();
   max = getMax();
   return Math.floor(Math.random() * (max - min)) + min;
 }
 // variable that runs random number function
 var randNumber = compNumber();

//functions that work together to expand the range by 20 integers every time
//the user guesses the correct number
 function m(){
   newMin = Number(document.getElementById("userMin").value)-10;
   min = newMin;
   return min;
 }
 function a(){
   newMax = getMax()+10;
   max = newMax;
   return max;
 }

// compare userGuess to randNumber;
 var compare = function(){
    if (numberOne() > randNumber){
     return("That is too high");
   }
   else if (numberOne() < randNumber) {
     return("That is too low");
   }
   else if (numberOne() === randNumber){
    document.getElementById('userMax').value = a();
    document.getElementById('userMin').value = m();
    randNumber = compNumber();
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

//prints appropriate messages on button click
guess.addEventListener('click', printMessageHere);

//function that resets inputs, number, min, max, and message fields
function resetIt (){
  document.getElementById("number").value = "";
  printNumber.innerText = "";
  printMessage.innerText = "";
  printIntro.innerText = "";
  clear.disabled = true;
  guess.disabled = true;
  reset.disabled = true;
  document.getElementById('userMin').value = "";
  document.getElementById('userMax').value = "";
  randNumber = compNumber();
}

//runs resetIt function on reset button click
reset.addEventListener('click', resetIt);
