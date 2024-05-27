// index.js - Lab 13: Loops
// Requirements: jQuery must be loaded for this script to work.
// Author: Ella Ruiz <etruiz@ucsc.edu>
// Date: May 17th, 2024

var maxFactors = 4;

var outputE1 = document.getElementById("output");

// Get values from the webpage and write them to an object
// Returns an object that will look like this:
// {3: "Fizz", 5: "Buzz", 7: "Boom"}
function getFactorObj() {
  var factorObj = {};
  for (var factor = 0; factor < maxFactors; factor++) {
    var numId = "num" + factor;
    var textId = "text" + factor;
    var numValue = document.getElementById(numId).value;
    var textValue = document.getElementById(textId).value;
    console.log(factor + ") num:", numValue, "text:", textValue);
    // If any value is blank, do not use it
    if (numValue && textValue) {
      factorObj[numValue] = textValue;
    }
  }
  return factorObj;
}

function outputToPage(str) {
  var newE1 = document.createElement("p");
  newE1.innerHTML = str;
  outputE1.appendChild(newE1);
}

// Given a number and an object that looks like this:
// {3: "Fizz", 5: "Buzz", 7: "Boom"}
// Loops over the numbers and outputs the number and the matching text
// for factors
function fizzBuzzBoom(maxNums, factorObj) {
  // Iterate over all of our numbers
  for (var num = 0; num <= maxNums; num++) {
    // Resets output string
    var outputStr = "";
    // Iterate over the factors we got from the HTML
    for (var factor in factorObj) {
      // Check to see if this num is a multiple of factor
      if (num % Number(factor) === 0) {
        // If yes, then add the text to output string
        outputStr += factorObj[factor];
      }
    }
    // Now if we have words in outputStr, format it like this
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr);
  }
}

function reportError(str) {
  outputE1.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function () {
  var max = document.getElementById("max").value;
  console.log("max:", max);
  if (!max) {
    reportError("You must provide a maximum");
    return;
  }
  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (Object.keys(factorObj).length === 0) {
    reportError("You must provide at least one factor and text");
    return;
  }
  // Clear error if one is there
  outputE1.innerHTML = "";
  fizzBuzzBoom(Number(max), factorObj);
  outputE1.classList.add("cols");
});