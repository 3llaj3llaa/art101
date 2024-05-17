// index.js - Lab 9 - Libraries and jQuery - it makes some buttons to modify elements on the page
// Author: Ella Ruiz <etruiz@ucsc.edu>
// Requirements: jQuery must be loaded for this script to work
// Date: 5/11/2024

//add button to challenge section
$("#challenge").append("<button id= 'button-challenge'>Click Me! </button>");
//add a click listener to the challenge button
$("#button-challenge").click(function(){
    //add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special1");
});


//add button to problems section
$("#problems").append("<button id= 'button-problems'>Click Me. </button>");
//add a click listener
$("#button-problems").click(function(){
    //add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special2");
});

//add button to results section
$("#results").append("<button id= 'button-results'>Click Me? </button>");
//add a click listener
$("#button-results").click(function(){
   //add (or subtract) the "special" class to the section
   $("#results").toggleClass("special3");
});


