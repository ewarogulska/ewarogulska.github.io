'use strict';


var przycisk = document.getElementById('button');
console.log(przycisk);

var paragraf = document.getElementById('paragraph1');
console.log(paragraf);

var paragraf = document.getElementById('paragraph2');
console.log(paragraf);

function ustawTlo(e) {

    if (e.type == 'click') {
        paragraph1.style.color = "#11aa22";
    } else {
        paragraph2.style.color = '#DC143C';
    }
    
    console.log('typ eventu: ' + e.type);
}

przycisk.onclick = ustawTlo;

przycisk.addEventListener('click,', ustawTlo);
paragraph1.addEventListener('click', ustawTlo);
paragraph2.addEventListener('click', ustawTlo);
