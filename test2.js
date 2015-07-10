// A function that uses the map method to square each number of an array.


var numbers = [1,2,3,4,5];

var results = numbers.map(function(eachNumber){
  return eachNumber * eachNumber;
});

console.log(results);

// function declaration
forestFright function() {

}


//Anonymous function (don't need diffOfSquares)

var diff = function diffOfSquares (a,b ) {
  return a * a - b * b;
};

diff(4,5);
// returns answer

console.log(diff);
// prints entire function


//Function Expression have flexibility to select functionality
var greeting;

// some code that determines if a customer is true or false.
if (newCustomer){
  greeting = function(){
  alert("thanks for visiting the badlands!\n Hope your stay is better than most");
};
  else
}




var customer = true

var greeting = function(){
  if customer == true;
  alert("thanks for visiting the badlands!\n Hope your stay is better than most");
 else customer
  alert("thanks for visiting the badlands!\n Hope your stay is better than most");
};

closeTerminal(greeting);

function closeTerminal(message){
  message();
}
