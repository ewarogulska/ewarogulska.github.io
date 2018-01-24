'use strict';

//var przycisk = document.getElementById("button");

$("button").click(function() {
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
        console.log(data);
        
$("body").append('<div id="dane-programisty">');
$('div').append(data.imie).append("<br/>");
$('div').append(data.nazwisko).append("<br/>");
$('div').append(data.zawod).append("<br/>");
$('div').append(data.firma);
    });
});

