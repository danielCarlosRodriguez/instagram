
// intervalo de tiempo
$(".carousel-item").attr("data-bs-interval", "1000");



//ocultar imagenes al abrir y apretar boton cerrar

$("#sliderInstagram1").hide();
$("#sliderInstagram2").hide();
$("#sliderInstagram3").hide();
$("#sliderInstagram4").hide();
$("#sliderInstagram5").hide();
$(".botonCerrar").hide();


//botón categorías
$(".miBoton1").on("click touchstart", function () {
  $("#sliderInstagram1").show();
  $(".botonCerrar").show();
  $(".sliderPrincipal").hide();
  $(".contenidoBotonesCirculares").hide();
});

$(".miBoton2").on("click touchstart", function () {
  $("#sliderInstagram2").show();
  $(".botonCerrar").show();
  $(".sliderPrincipal").hide();
  $(".contenidoBotonesCirculares").hide();
});
//botón categorías
$(".miBoton3").on("click touchstart", function () {
  $("#sliderInstagram3").show();
  $(".botonCerrar").show();
  $(".sliderPrincipal").hide();
  $(".contenidoBotonesCirculares").hide();
});

$(".miBoton4").on("click touchstart", function () {
  $("#sliderInstagram4").show();
  $(".botonCerrar").show();
  $(".sliderPrincipal").hide();
  $(".contenidoBotonesCirculares").hide();
});
//botón categorías
$(".miBoton5").on("click touchstart", function () {
  $("#sliderInstagram5").show();
  $(".botonCerrar").show();
  $(".sliderPrincipal").hide();
  $(".contenidoBotonesCirculares").hide();
});





//botón Cerrar
$(".botonCerrar").on("click touchstart", function () {
  $(".transparente").css({ opacity: 1 });
  $(".sliderPrincipal").show();
  $(".contenidoBotonesCirculares").show();
  $("#sliderInstagram1").hide();
  $("#sliderInstagram2").hide();
  $("#sliderInstagram3").hide();
  $("#sliderInstagram4").hide();
  $("#sliderInstagram5").hide();
  $(".botonCerrar").hide();

  console.log("cierro slider");
});
