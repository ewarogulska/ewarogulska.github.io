'use strict';

var przycisk = document.getElementById('formularz');
console.log(przycisk);

var imie = document.getElementById('imie');
console.log(imie);

var nazwisko = document.getElementById('nazwisko');
console.log(nazwisko);

function wysylanieFormularza (e) {
     e.preventDefault();
         
    if(e.type == 'click') {
        console.log('Imie: ' + imie.value + ' Nazwisko: ' + nazwisko.value);
    } else {
        console.log('nic');
       }
     }

przycisk.onclick = wysylanieFormularza;
przycisk.addEventListener('click,', wysylanieFormularza);