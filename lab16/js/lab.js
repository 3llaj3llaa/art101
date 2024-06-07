// index.js - Lab 16 = output a comic from the site
// Author: Ella Ruiz <etruiz@ucsc.edu>
// Requirements: Must have jQuery loaded in order for this to work
// Date: June 6th, 2024

var proxyURL = "https://api.allorigins.win/get?url=";
var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";
var comicNum = 0;

// A helper function to turn single and double quotes into
// HTML symbols so they don't mess up the HTML tags
function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
 var numStr = num ? num + "/" : "";
 var ourURL = URLpre + numStr + URLpost;
 var finalURL = proxyURL + encodeURIComponent(ourURL);
 console.log("Our new URL:", finalURL);
 

  // Using the core $.ajax() method
  $.ajax({
    
    url: finalURL,
    type: "GET",
    dataType: "json",
  })
    // If the request succeeds
    .done(function (data) {
      var parsedData = JSON.parse(data.contents);

      // debugging stuff
      console.log(parsedData);

      // add to webpage with correct tags
      var title = parsedData.title;
      var imgUrl = parsedData.img;
      var alt = parsedData.alt;

      // update comicNum to current comic's number
      comicNum = parsedData.num;

      // Create the HTML output
      var htmlOutput = `
        <h2>${make_safe(title)}</h2>
        <img src="${imgUrl}" alt="${make_safe(alt)}" title="${make_safe(alt)}">
        <p>${make_safe(alt)}</p>
      `;

      // Add the HTML output to the output section
      $("#output").html(htmlOutput);
    })
    .fail(function () {
      console.log("uh oh looks like we've encountered an error");
    });
}

// Event listeners for nav buttons
$("#prev").click(function() {
    getComic(comicNum - 1);
});

$("#next").click(function() {
    getComic(comicNum + 1);
});


// Start things off
getComic();
