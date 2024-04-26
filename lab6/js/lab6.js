// index.js - Lab 6 - Arrays and Objects
// Author: Ella Ruiz <etruiz@ucsc.edu>
// Date: 25 April

//Define Variables
myTransport = ["Mazda Miata", "my bfs car", "walking"]

//create an object for my main ride
myMainRide = {
    make: "Mazda",
    model: "Miata",
    color: "purple and white",
    year: 1990,
    age: function() {
        return 2024 - this.year;
    }
}

//output
document.writeln("Types of transportation I use:", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");






















// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
