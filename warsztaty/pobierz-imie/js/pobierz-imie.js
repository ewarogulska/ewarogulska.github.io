'use strict';

var przycisk = document.getElementById('pobierzImie(event)');
console.log(przycisk);

var imie = document.getElementById('imie');
//console.log(imie);

var nazwisko = document.getElementById('nazwisko');
//console.log(nazwisko);

function wysylanieFormularza (e) {
     e.preventDefault();
         
    if(e.type == 'click') {
        console.log('Imie' + e.type);
    } else {
        console.log('nic');
       }
     }

przycisk.onclick = wysylanieFormularza;
przycisk.addEventListener('click,', wysylanieFormularza);