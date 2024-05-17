// index.js - Lab 11 - JavaScript Events and Forms
// lab.js - This simple script gets a value from an input field and outputs a modified version.
// Requirements: jQuery must be loaded for this script to work.
// Author: Ella Ruiz <etruiz@ucsc.edu>
// Date: May 17th, 2024

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // Convert the string to an array and back again to sort it.
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  // sort it
  userNameSorted = sortString(userName);
  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

