let prendido = true;
let estaLavando = false;
let nivelAguaContador = -1;
let nivelLavadoContador = -1;
let tiempoLavadoContador = -1;
let tiempoEnjuageContador = -1;

function encendidoClick() {
  $(".botonEncendido").toggle();
  prenderApagar();
}


function prenderApagar() {

  $('#lavarBoton').prop('disabled', prendido);
  $('#nivelAguaBoton').prop('disabled', prendido);
  $('#nivelLavadoBoton').prop('disabled', prendido);
  $('#tiempoLavadoBoton').prop('disabled', prendido);
  $('#tiempoEnjuageBoton').prop('disabled', prendido);


  prendido = !prendido;

  if (!prendido) {
    $(".activo").removeClass("activo");
    nivelAguaContador = -1;
    nivelLavadoContador = -1;
    tiempoLavadoContador = -1;
    tiempoEnjuageContador = -1;
    $("#opciones").show();
    $("#lavando").hide();
  }

}

function actualizarCuadros(cantidadNiveles, nombreCuadro) {
  for (let i = 0; i < cantidadNiveles; i++) {
    $("#" + nombreCuadro + i).removeClass("activo");
  }

  switch (nombreCuadro) {
    case "nivelAgua":
      nivelAguaContador = (nivelAguaContador + 1) === cantidadNiveles ? 0 : (nivelAguaContador + 1);
      $("#" + nombreCuadro + nivelAguaContador).addClass("activo");
      break;
    case "nivelLavado":
      nivelLavadoContador = (nivelLavadoContador + 1) === cantidadNiveles ? 0 : (nivelLavadoContador + 1);
      $("#" + nombreCuadro + nivelLavadoContador).addClass("activo");
      break;
    case "tiempoLavado":
      tiempoLavadoContador = (tiempoLavadoContador + 1) === cantidadNiveles ? 0 : (tiempoLavadoContador + 1);
      $("#" + nombreCuadro + tiempoLavadoContador).addClass("activo");
      break;
    case "tiempoEnjuage":
      tiempoEnjuageContador = (tiempoEnjuageContador + 1) === cantidadNiveles ? 0 : (tiempoEnjuageContador + 1);
      $("#" + nombreCuadro + tiempoEnjuageContador).addClass("activo");
      break;
  }

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
