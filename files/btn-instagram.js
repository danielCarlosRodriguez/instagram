

// intervalo de tiempo
$(".carousel-item").attr("data-bs-interval", "1000")


//ocultar imagenes al abrir y apretar boton cerrar
$('#sliderInstagram').hide();
//$(".fullFondoNegro").css("background-color", "white");
//$('#botonCerrar').hide();


$(".miBoton").on("click touchstart", function () {
 
  //$('.transparente').css({ 'opacity' : 0.3 });
  //$('.ocultar').hide();
  
 
  //$('.ocultar').css('background', 'black' );
  
  $("#sliderInstagram").show();
  $("#botonCerrar").show();
  $(".ocultar").hide();
 //$(".fullFondoNegro").css("background-color", "black");
  
  //$("body").css("background","#000")

});



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