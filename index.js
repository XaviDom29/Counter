
var cuenta = 0;
const botonPaso = document.querySelectorAll('body > div > main > p:nth-child(8) > a')[0];
const botonMas = document.querySelectorAll('body > div > main > p:nth-child(6) > a')[0];
const botonMenos = document.querySelectorAll('body > div > main > p:nth-child(7) > a')[0];



if(document.cookie[8] != undefined){
  cuenta = document.cookie[7] + document.cookie[8]
  document.querySelectorAll('body > div > main > p:nth-child(9) > a')[0].innerHTML = cuenta;

}
else if(document.cookie[7] != undefined){
  cuenta = document.cookie[7]
  document.querySelectorAll('body > div > main > p:nth-child(9) > a')[0].innerHTML = cuenta;

}

botonMas.addEventListener('click', function(incremento){
cuenta++;
document.querySelectorAll('body > div > main > p:nth-child(9) > a')[0].innerHTML = cuenta;
 document.cookie = "cuenta="+cuenta;
})


botonPaso.addEventListener('click', function(pasandeiro){
cuenta--;
document.querySelectorAll('body > div > main > p:nth-child(9) > a')[0].innerHTML = cuenta;
 document.cookie = "cuenta="+cuenta;
})


botonMenos.addEventListener('click', function(decremento){
cuenta = cuenta -2;
document.querySelectorAll('body > div > main > p:nth-child(9) > a')[0].innerHTML = cuenta;
 document.cookie = "cuenta="+cuenta;
})
