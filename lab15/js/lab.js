// index.js - Lab 
// Author: Ella Ruiz <etruiz@ucsc.edu>
// Date: May 31st, 2024
$(document).ready(function(){
    const YESNO_URL = "https://yesno.wtf/api";
    const NASA_URL = "https://api.nasa.gov/planetary/apod?api_key=EgjUuig7yk9aMHteXk8QPGMrFUsxReQONTeg4OV4";

    //Click action for button
    $('#activate').click(function(){
        //get data from ajx from numbersapi
             $.ajax({
                 //ENDPOINT
                    url: YESNO_URL,
                     type: "GET",
                     dataType: "json"
             })
         //if the request succeeds
              .done(function(data){
                  console.log(data);
                  //printable JSON data
                 var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
                 // Put data in webpage
                 $("#output").html("<p>The spirits have come together to bring you this answer...<b>" + data.answer + "</b></p>");
                 $("#output").append("<img src ='" + data.image + "'>");
             })
                 //If the request fails
                  .fail(function() {
                    $("#output").html("<p> You have failed to reach the spirits. </p>");
             });
    });

    //click action for NASA picture of the Day Button
    $('#nasa-activate').click(function(){
        $.ajax({
            url: NASA_URL,
            type: "GET",
            dataType: "json"

        })
        .done(function(data){
            console.log(data);
            $("#nasa-output").empty();
            $("#nasa-output").html("<h2>" + data.title + "</h2>");
            $("#nasa-output").append("<p>"+data.explanation + "</p>");
            $("#nasa-output").append("<img src ='" + data.url + "'alt='" + data.title + "'>");

        })
        .fail(function(){
            $("#nasa-output").html("<p>Failed to fetch data from the NASA API. </p>");

        });
    });

});
