"use strict";

var paragraf = document.getElementById("p");

$("button").click(function() {
    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data) {
        
        $("body").append("<p></p>");
        $("<p></p>").append(data.userId);
        
        console.log(data);
        
    })
});

