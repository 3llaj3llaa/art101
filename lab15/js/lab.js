// index.js - Lab 
// Author: Ella Ruiz <etruiz@ucsc.edu>
// Date: May 31st, 2024
$(document).ready(function(){
    const URL = "https://yesno.wtf/api";

//Click action for button
$('#activate').click(function(){
    //get data from ajx from numbersapi
    $.ajax({
        //ENDPOINT
        url: URL,
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

});
