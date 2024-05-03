// index.js - Lab 8 Anon Functions and Callbacks
// Author: Ella Ruiz <etruiz@ucsc.edu>
// Date: 2nd May


function isEven(x){
  return (x % 2 == 0) ;
}

//test function
console.log("Is 1 even?", isEven(1)) ;
console.log("Is 2 even?", isEven(2)) ;

array = [200, 33, 8, 18, 27, 333]
console.log("My array", array) ;

var result = array.map(isEven) ;
//should return [true, false, true, true, false, false]
console.log("Test of evenness of array:", result) ;

var result = array.map(function(x){
    return x ** 0.5 ;
})

//should return [14.142135623730951, 5.744562646538029, 2.8284271247461903,
// 4.242640687119285, 5.196152422706632, 18.24828759089466]
console.log("Squareroot of array:", result) ;


