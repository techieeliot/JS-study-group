alert("Hello")

//Basic JavaScript: Return Early Pattern for Functions

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
      return undefined;
    }
    
    
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  // Change values below to test your code
  console.log(abTest(-1,2));
  
  console.log(typeof abTest(-1,-1));


  // counting cards (Jemal used a ternarary operator for the hold and bet)

  var count = 0;

function cc(card) {
  // Only change code below this line
  
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }


  //return current count and bet if positive


  //hold if zero or negative current count and hold

return (count + " " + (count > 0 ? 'Bet':'Hold'));
 // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(2)); cc(3); cc(7); 
console.log(cc('K')); 
console.log(cc('A'));

//*******Basic JavaScript: Accessing Object Properties with Dot Notation
// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  
  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line

  /// ********* // Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  ourDog.name = "Happy Camper";
  
  // Setup
  var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  console.log(myDog.name);
  
  // Only change code below this line.
  myDog.name = "Happy Coder";
  
  console.log(myDog.name);

  // Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  ourDog.name = "Happy Camper";
  
  // Setup
  var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  console.log(myDog.name);
  
  // Only change code below this line.
  myDog.name = "Happy Coder";
  
  console.log(myDog.name);