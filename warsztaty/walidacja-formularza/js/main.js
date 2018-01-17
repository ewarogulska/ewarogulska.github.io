'use strict'

var imie = document.getElementById("name");
//console.log(imie);

var mail = document.getElementById("email");
//console.log(mail);

var checkBox1 = document.getElementById('zgoda-marketingowa-1');
//console.log(checkBox1);

var checkBox2 = document.getElementById('zgoda-marketingowa-2');
//console.log(checkBox2);

var checkBox3 = document.getElementById('wszystkie-zgody');
//console.log(checkBox3);

var wysylanieFormularza = document.getElementById('wyslij');
//console.log(wysylanieFormularza);

//checkbox3.addEventListener

wysylanieFormularza.addEventListener('click', function(e) {
//    var checkBox1 = document.getElementById('wyslij');
    var imie = document.getElementById("name");
    var mail = document.getElementById("email");
 
if (imie.value.length <= 0 || mail.value.length <=0) {
   
    e.preventDefault();    
//    alert('te pola nie mogą być puste');
//    !== 'nie wypelniono') 
        
//        checkBox1.setCustomValidity('');
    console.log('nie wypelniono');
    } else {
//        checkBox1.setCustomValidity('zgoda-marketingowa-1');
//    }
        e.preventDefault(); 
    console.log('ok');
}

