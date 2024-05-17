// index.js - Lab 10 -  Button with fake dialogue
// Author: Ella Ruiz <etruiz@ucsc.edu>
// Date: 5/16/2024
// Requirements: jQuery must be loaded for this script to work.

//helper functino that generates fake dialogue:
function generateRandomText (){
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.vSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ;
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  //Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen +1));
  //Generate random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

//click listener for button
$("#make-convo").click(function(){
  //Get text from input field
  const userInput = $("#user-input").val();
  //If input field is not empty, use user input, otherwise generate random text
  const newText = userInput.trim() !== "" ? userInput : generateRandomText();
  //Apend new div to our output div with correct class for alternating left/right alignment
  const alignmentClass = $("#output").children().length % 2 === 0 ? "left" : "right";
  $("#output").append('<div class = "text ' + alignmentClass + '"><p>' + newText + "</p></div>");
  //Clear user input field
  $("#user-input").val("");
});





