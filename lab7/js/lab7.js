// index.js - Lab 7 - Functions
// Author: Ella Ruiz <etruiz@ucsc.edu>
// Date: 2nd May

//sortUserName - function that takes user input and sorts
// the letters of their name
function sortUserName() {
  var userName = window.prompt("Hello! I'm botty! What is your name? I have a surprise for you.");
  console.log("userName =", userName) ;
  //split to array
  var nameArray = userName.split('') ;
  console.log("nameArraySort =", nameArray) ;
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort) ;
  //join back to a string
  var nameSorted = nameArraySort.join('') ;
  console.log("nameSorted =", nameSorted) ;
  return nameSorted ;

}

//output
document.writeln("Surprise! I shuffled your name: ",
        sortUserName(), "</br>") ;