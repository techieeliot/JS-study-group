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

  ///*********** Basic JavaScript: Using Objects for Lookups



  // Setup
function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line
  var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago", 
      "delta": "Denver",
      "echo": "Easy",
       "foxtrot": "Frank",
    };
  
    result = lookup[val];
  
    // Only change code above this line
    return result;
  }
  
  // Change this value to test
  console.log(phoneticLookup("foxtrot"));

  //********* */Basic JavaScript: Manipulating Complex Objects


  var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [ 
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
  
      {
      "artist": "Elton John",
      "title": "I'm Still Standing",
      "release_year": 1983,
      "formats": [ 
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
    // Add record here
  ];
  
  console.log(myMusic[1]["artist"]);

////******** */Basic JavaScript: Accessing Nested Arrays
  // Setup
var myPlants = [
    { 
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }  
  ];
  
  // Only change code below this line
  
  var secondTree = myPlants[1].list[1]; // Change this line
  console.log(secondTree);