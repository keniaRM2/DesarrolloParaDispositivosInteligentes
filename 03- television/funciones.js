let volumen = 3;
let canal= 7;
let prendido=true;

function encendidoClick() {
  $(".botonEncendido").toggle();
  prenderApagar();
}


function prenderApagar() {
  
  $('#nivelVolumenMax').prop('disabled', prendido);
  $('#nivelVolumenMin').prop('disabled', prendido);
  $('#CanalSiguiente').prop('disabled', prendido);
  $('#CanalAnterior').prop('disabled', prendido);
  $('#Silenciar').prop('disabled', prendido);
   prendido = !prendido;
  

  if (!prendido) {
    $(".activo").removeClass("activo");
    console.log(" Televisión Apagada ");
    volumen=3;
    document.getElementById("nivelVolumenMax").textContent = "Volumen +";
    document.getElementById("nivelVolumenMin").textContent = "Volumen -";
    document.getElementById("CanalSiguiente").textContent = "Canal +";
    document.getElementById("CanalAnterior").textContent = "Canal -";
  }else{
    console.log("volumen al "+volumen);
    console.log("canal al "+ canal);
  }

}

function subirVolumen(){
  if(volumen == 10){
    console.log("Volumen al máximo");
    volumen = 10;
  }else{
    volumen = volumen + 1;
    document.getElementById("nivelVolumenMax").textContent = volumen;
    imprimir();
  }
  
}
 function bajarVolumen(){
  if(volumen == 1){
    volumen = 3;
  }else{
    volumen = volumen - 1;
    document.getElementById("nivelVolumenMin").textContent = volumen;
    imprimir();
  }
 }
 function canalSiguiente(){
  if(canal == 100){
    canal = 7;
  }else{
    canal = canal + 1;
    document.getElementById("nivelVolumenMax").textContent = canal;
    imprimir();
  }
  
}
function canalAnterior(){
  if(canal == 1){
    canal = 7;
  }else{
    canal = canal - 1;
    document.getElementById("nivelVolumenMax").textContent = canal;
    imprimir();
  }
 }

 function silenciar(){
    document.getElementById("Silenciar").textContent = "Mute";
    volumen=0;
    imprimir();
  
 }



function imprimir(){
  console.log("///////////////////////////////////////");
  console.log("Volumen --> "+ volumen);
  console.log("Canal --> "+ canal);
  console.log("///////////////////////////////////////");
}






function lavarClick() {


  if (nivelAguaContador === -1 ||
    nivelLavadoContador === -1 ||
    tiempoLavadoContador === -1 ||
    tiempoEnjuageContador === -1) {
    alert("Verifique los niveles y tiempo seleccionado.")
  } else {
    estaLavando = !estaLavando;
    if(estaLavando){
      $("#opciones").hide();
      $("#lavando").show();
    }else{
      $("#opciones").show();
      $("#lavando").hide();
    }
  }
}


$(".botonEncendido").click(encendidoClick);
$('#lavarBoton').click(lavarClick);

$('#nivelAguaBoton').click(() => actualizarCuadros(5, "nivelAgua"));
$('#nivelLavadoBoton').click(() => actualizarCuadros(3, "nivelLavado"));
$('#tiempoLavadoBoton').click(() => actualizarCuadros(5, "tiempoLavado"));
$('#tiempoEnjuageBoton').click(() => actualizarCuadros(3, "tiempoEnjuage"));
prenderApagar();
