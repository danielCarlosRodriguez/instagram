
$(".miBoton1").on("click touchstart", function () {
  $("#sliderInstagram").show();
  //$("#botonCerrar").show();
  $(".sliderPrincipal").hide();
    $(".contenidoBotonesCirculares").hide();
    console.log("hago click en mi boton")
});










// intervalo de tiempo
$(".carousel-item").attr("data-bs-interval", "1000")


//ocultar imagenes al abrir y apretar boton cerrar
$('#sliderInstagram').hide();
//$(".fullFondoNegro").css("background-color", "white");
//$('#botonCerrar').hide();






//botón Cerrar
$("#botonCerrar").on("click touchstart", function () {
  
   $('.transparente').css({ 'opacity' : 1 });
   $('.ocultar').show();
   $('#sliderInstagram').hide();
   $('#botonCerrar').hide();
   //$('body').css('background', 'white');
  //$(".fullFondoNegro").hide();
   
   console.log("cierro slider");
  
 });


 //botón Cerrar
// $("#sliderInstagram").on("click touchstart", function () {
//   $(".transparente").css({ opacity: 1 });
//   $(".ocultar").show();
//   $("#sliderInstagram").hide();
//   $("#botonCerrar").hide();
//   //$("body").css("background", "white");

//   console.log("cierro slider");
// });