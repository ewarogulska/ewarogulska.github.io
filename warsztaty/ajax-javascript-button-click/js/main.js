"use strict";

function ajax() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {

                var data = xhttp.responseText;

                var userData = JSON.parse(data);

//                console.log(data);
                console.log(userData);
                
        var nowyElement = document.createElement('p');
        var parText = document.createTextNode(userData.userName);
        document.body.appendChild(nowyElement);
        nowyElement.appendChild(parText);
                
        var nowyElement = document.createElement('p');
        var parText = document.createTextNode(userData.userId);
        document.body.appendChild(nowyElement);
        nowyElement.appendChild(parText);
  
            }
            xhttp = null;

        }

    }

    xhttp.send();
}


document.getElementById("przycisk").onclick = ajax;



//przycisk.onclick = ;

//przycisk.addEventListener = ("click");

//przycisk.addEventListener("userID", "userName", "userURL", function ()  {
//    function pobierzDane() {
//    console.log("click");
//}
//});

//