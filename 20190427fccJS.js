//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line



for(var index = 0;index<contacts.length;index++){
var contact = contacts[index];
//console.log(contact);
  console.log(contact.firstName)
if(contact.firstName === name){
  if(contact.hasOwnProperty(prop)){
      return contact[props];
  }else{
    return "No";
  }
}


}
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");

console.log(lookUpProfile("Akira", "likes"));
