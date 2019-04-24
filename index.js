
var cuenta = 0;
if(document.cookie[8] != undefined){
  cuenta = document.cookie[7] + document.cookie[8]
  document.querySelectorAll('body > div > main > p:nth-child(9) > a')[0].innerHTML = cuenta;

}
else if(document.cookie[7] != undefined){
  cuenta = document.cookie[7]
  document.querySelectorAll('body > div > main > p:nth-child(9) > a')[0].innerHTML = cuenta;

}
const botonMas = document.querySelectorAll('body > div > main > p:nth-child(6) > a')[0];
botonMas.addEventListener('click', function(incremento){
cuenta++;
document.querySelectorAll('body > div > main > p:nth-child(9) > a')[0].innerHTML = cuenta;
 document.cookie = "cuenta="+cuenta;
})


const botonPaso = document.querySelectorAll('body > div > main > p:nth-child(8) > a')[0];
botonPaso.addEventListener('click', function(pasandeiro){
cuenta--;
document.querySelectorAll('body > div > main > p:nth-child(9) > a')[0].innerHTML = cuenta;
 document.cookie = "cuenta="+cuenta;
})


const botonMenos = document.querySelectorAll('body > div > main > p:nth-child(7) > a')[0];
botonMenos.addEventListener('click', function(decremento){
cuenta = cuenta -2;
document.querySelectorAll('body > div > main > p:nth-child(9) > a')[0].innerHTML = cuenta;
 document.cookie = "cuenta="+cuenta;
})
