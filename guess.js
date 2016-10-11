var userNumber = document.getElementById("number");

var printNumber = document.querySelector('h2');

var guess = document.getElementById('guess');

guess.addEventListener('click', function(){
  var lastGuess = userNumber.value;
  printNumber.innerText = lastGuess;
  compNumber();
  compare();
});

var numberOne = function(){
  return parseInt(userNumber.value);
};

var compNumber = function(){
   var rand = Math.floor((Math.random()*100)+1);
   return rand;
 };
console.log(numberOne());
console.log(compNumber());
 var compare = function(){
    if (numberOne > compNumber){
     console.log("That is too high");
   }
   else if (numberOne < compNumber) {
     console.log("That is too low");
   }
   else if (numberOne === compNumber){
     console.log("Winner winner chicken dinner");
   }
   else{
     console.log("Make sure your number is between 0 & 100");
   }
 };
