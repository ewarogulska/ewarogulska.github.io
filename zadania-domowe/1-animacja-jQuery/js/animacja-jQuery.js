'use strict';

$ (function () {
 
    var przycisk = $("button");
//    console.log(przycisk);
    
    var kwadrat = $("#square");
//    console.log(kwadrat);
      
    $("button").click(function() {
        
    $("#square").animate({left: "100px", "height": "100px", "width" : "100px"}, 3000).delay(5000).queue (function (next) {
    
    $("#square").css({"background": "blue"}).append("Animacja zakończona!")
        ;
        
    });

});
    });

    