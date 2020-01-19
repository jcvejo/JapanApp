var citas,json,compartirCita,compartirKana,compartirSign,citaRandom,citaKana,citaSign,ocultar,contador,cantRepasadas=0;


function inicio(){
json=JSON.parse(texto);
mostrar();
contador= json.citas.length;
var cantTotal=document.getElementById('cantTotal');
var boton=document.getElementById('boton');
var kana=document.getElementById('kana');
cantTotal.innerHTML=contador;
kana.addEventListener('click',ver);
boton.addEventListener('click',function(){
  mostrar();
  fondo();
});
}
function mostrar(){
  contador= json.citas.length;
  var i=Math.round(Math.random()*contador);
  compartirCita=json.citas[i].quote;
  compartirKana=json.citas[i].kana;
  compartirSign=json.citas[i].sign;
  citaRandom=document.querySelector('p');
  citaRandom.innerHTML=compartirCita;
  citaKana=document.querySelector('cite');
  citaKana.innerHTML='- '+compartirKana;
  citaSign=document.querySelector('b');
  citaSign.innerHTML='- '+compartirSign;
  citaKana.classList.add('oculto');
  citaSign.classList.add('oculto');
  sumarPalabrasEstudiadas();
  }
  function sumarPalabrasEstudiadas(){
var cantLeidas=document.getElementById('cantLeidas');
cantRepasadas= cantRepasadas+1;
cantLeidas.innerHTML=cantRepasadas;
  }
function fondo(){
var colores=['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var color=Math.floor(Math.random()*colores.length);
var fondo=document.querySelector('body');
fondo.style.backgroundColor=colores[color];
}
$(function () {   //funcion de boostrap para abrir ventana del icono con los créditos
  $('.example-popover').popover({
    html:true,
    placement:'left',
    container:'body'
  })
})
/*function compartir(){

    window.open('http://twitter.com/intent/tweet?text='+encodeURIComponent(compartirCita+' - '+compartirAutor),'_blank');

}*/

function ver(){
  citaKana=document.querySelector('cite');
  citaSign=document.querySelector('b');
  citaKana.classList.toggle('oculto');
  citaSign.classList.toggle('oculto');
}
function importarScript(nombre) {
    var s = document.createElement("script");
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}
importarScript('js/db/base.js');
window.addEventListener('load',inicio);
window.addEventListener('load',fondo);
