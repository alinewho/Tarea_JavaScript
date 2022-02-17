//Te han contratado en una empresa de venta de ropa. Se llegó el buen fin y una de tus tareas es que calcules 
  //¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
  //¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%.
 
   //Los valores deben de ser capturados con promt y mostrados con alertas.
 
   
let costo = prompt("Ingresa el costo del saco super padrísimo");
let descuento =prompt("Ingresa el descuento");
let descuentoPrecio = costo * descuento /100 ;
let precioFinal = costo - descuentoPrecio;
alert("El precio final es de: " + precioFinal);

 