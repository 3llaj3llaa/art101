// index.js - Lab 12 - Conditionals
// Requirements: jQuery must be loaded for this script to work.
// Author: Ella Ruiz <etruiz@ucsc.edu>
// Date: May 17th, 2024


// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  let house = "";
  let description = "";

  if (mod == 0) {
    house = "Gryffindor";
    description = "Gryffindor house is where you would find the pluckiest and most daring students. The house colors are scarlet and gold, and the emblem a lion, and being placed here means you have demonstrated qualities like courage, bravery, and determination.";
  }
  else if (mod == 1) {
    house = "Ravenclaw";
    description = "This is where you will find the brainiest students! The colors are blue and bronze, the emblem an eagle, and being placed here means you have demonstrated excellent wisdom, wit, and a skill for learning!";
  }
  else if (mod == 2) {
    house = "Slytherin";
    description = "This house has a rather unfortunate reputation...The house colors are silver and green and the emblem is a serpent. Being placed in this house means you are likely ambitious, shrewd, and possibly even destined for greatness!";
  }
  else if (mod == 3) {
    house = "Hufflepuff";
    description = "Here you will find the most trustworthy and hardworking students. The colors are yellow and black, and the emblem is a badger, you are likely very humble, have a strong moral compass, always work hard, and the most loyal friend!";
  }

  return {house: house, description: description };
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function () {
    var name = document.getElementById("input").value;
    var result = sortingHat(name);
    var house = result.house;
    var description = result.description;
    newText = "<p> The Sorting Hat has sorted you into " + house + "!</p><p>" + description + "</p>";
    document.getElementById("output").innerHTML = newText;
});
