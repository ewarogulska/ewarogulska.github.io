'use strict';

$(document).ready(function () {

    $("#count-sum").click(function () {

        //    $(".salary").each(function() {
        //         console.log($(this).text());
        //     });

        $(".salary").each(function () {
            var suma = 0;

            $(".salary").each(function () {
                suma += +$(this).text() || 0;
            });

            $("#sum").text(suma);
        });

    });
});

//żeby mieć pewność, że zamieni nam string na liczbę można użyć parsenInt