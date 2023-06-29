let ingreso = (prompt("¡Bienvenido a Breaking Bar" + " " + "\n\n" + "Por favor ingrese el número de la opción que " + "\n\n" + "1 - Reservar Mesa" + "\n" + "2 - Ordenar Algo" + "\n" + "3 - Registrarme en Breaking Bar" +"\n" + "4 - Solo estoy de paso"));

if (ingreso == 1) {
  reservarMesas();
} else if (ingreso == 2) {
  generarCarritoCompras();
} else if (ingreso == 3) {
  let usuarios = [];

function solicitarDatosUsuario() {
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  let email = prompt("Ingrese su correo electrónico:");

  if (nombre && apellido && email) {
    let usuario = {
      nombre: nombre,
      apellido: apellido,
      email: email
    };

    usuarios.push(usuario);

    alert("Usuario registrado exitosamente!" + "\n\n" + "Bienvenenido" + " " + nombre + " " + apellido + " " + "!");
  } else {
    alert("Por favor, complete todos los campos.");
    solicitarDatosUsuario();
  }
}

solicitarDatosUsuario();

console.log("Usuarios registrados:");
console.log(usuarios);

}





function reservarMesaEnSede(sede) {
   let mesasDisponibles = 8;
   let mesasReservadas = [];

  while (true) {
   let respuesta = prompt("¿Desea hacer una reserva en la sede " + sede + "? (Sí/No)").toLowerCase();

     if (respuesta === "no" || respuesta === "No" || respuesta === "N") {
       console.log ("No deseas realizar reservaciones en la sede" + sede)
       break;
     }

     if (respuesta === "sí" || respuesta === "si") {
       let numPersonas = parseInt(prompt("Ingrese el número de personas para la reserva:"));

       if (!isNaN(numPersonas) && numPersonas > 0) {
         if (mesasReservadas.length < mesasDisponibles) {
           mesasReservadas.push(numPersonas);

           console.log("Mesa reservada en la sede " + sede + " para " + numPersonas + " personas.");

           if (mesasReservadas.length === mesasDisponibles) {
             console.log("Todas las mesas en la sede " + sede + " han sido reservadas.");
             break;
           }
         } else {
           console.log("No hay mesas disponibles en la sede " + sede + ".");
         }
       } else {
         alert("El número de personas ingresado no es válido. Por favor, intente nuevamente.");
       }
     } else {
       alert("Respuesta inválida. Por favor, ingrese 'Sí' o 'No'.");
     }
   }

 }

 function reservarMesas() {
   let sedes = ["Moreno", "San Isidro"];

   for (let i = 0; i < sedes.length; i++) {
     reservarMesaEnSede(sedes[i]);
   }
 }



 
function calcularTotalCompra(carrito) {
  let total = 0;

  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }

  return total;
}

function generarCarritoCompras() {
  let carrito = [];
  let continuarComprando = true;

  while (continuarComprando) {
    console.log("Menú de comida:");
    console.log("1. Chifrijo - $1000");
    console.log("2. Ceviche - $800");
    console.log("3. Salchipapas - $600");
    console.log("4. Bastones de Queso - $850");
    console.log("5. Nachos Mixtos - $750");
    console.log("6. Ensalada Tuco - $875");
    console.log("7. Heisenburgers - $1000");
    console.log("8. Bife a Caballo - $1850");
    console.log("9. Napolitana X4 - $1750");
    console.log("10. Mila Breaking - $1800");
    console.log("11. Asado Banderita - $1640");
    console.log("12. Pollos Hermanos - $1825");
    console.log("13. Pizza de Atun - $2000");
    console.log("14. Bondiola a la criolla - $1100");
    console.log("15. Pechuga al verdeo - $1250");
    console.log("16. Salir");

    let opcion = parseInt(prompt("Seleccione una opción (1-16):" + "\n\n" + "1. Chifrijo - 1000$" + "\n" + "2. Ceviche - 800$" + "\n" + "3. Salchipapas - 600$" + "\n" + "4. Bastones de Queso - 850$" + "\n" + "5. Nachos Mixtos - 750$" + "\n" + "6.Ensalada 'Tuco' - 875$" + "\n" + "7. Heisenburgers - 1000$" + "\n" + "8. Bifes a Caballo - 1850$" + "\n" + "9. Napolitana X4 - 1750$" + "\n" + "10. Mila Breaking - 1800$" + "\n" + "11. Asado Banderitas - 1640 $" + "\n" + "12. Pollos Hermanos - 1850$" + "\n" + "13. Pizza de Atún - 2000$" + "\n" + "14. Bondiola a la criolla - 1100$" + "\n" + "15. Pollo al Verdeo - 1250$" + "\n" + "16. Salir"));

    if (!isNaN(opcion) && opcion >= 1 && opcion <= 15) {
      let producto;

      if (opcion === 1) {
        producto = { nombre: "Chifrijo", precio: 1000 };
      } else if (opcion === 2) {
        producto = { nombre: "Ceviche", precio: 800 };
      } else if (opcion === 3) {
        producto = { nombre: "Salchipapas", precio: 600 };
      } else if (opcion === 4) {
        producto = { nombre: "Bastones de Queso", precio: 850 };
      } else if (opcion === 5) {
        producto = { nombre: "Nachos Mixtos", precio: 750 };
      } else if (opcion === 6) {
        producto = { nombre: "Ensalada 'TUCO'", precio: 875 };
      } else if (opcion === 7) {
        producto = { nombre: "Heisenburgers", precio: 1000 };
      } else if (opcion === 8) {
        producto = { nombre: "Bife a Caballo", precio: 1850 };
      } else if (opcion === 9) {
        producto = { nombre: "Napolitana X4", precio: 1750 };
      } else if (opcion === 10) {
        producto = { nombre: "Mila BREAKING", precio: 1800 };
      } else if (opcion === 11) {
        producto = { nombre: "Asado Banderita", precio: 1640 };
      } else if (opcion === 12) {
        producto = { nombre: "Pollos Hermanos", precio: 1825 };
      } else if (opcion === 13) {
        producto = { nombre: "Pizza de Atún", precio: 2000 };
      } else if (opcion === 14) {
        producto = { nombre: "Bondiola a la Criolla", precio: 1100 };
      } else if (opcion === 15) {
        producto = { nombre: "Pechuga al Verdeo", precio: 1250 };
      }
      

      carrito.push(producto);
      console.log(producto.nombre + " agregada al carrito.");

      let continuar = prompt("¿Desea agregar otro producto al carrito? (Sí/No)").toLowerCase();

      if (continuar === "no") {
        continuarComprando = false;
      }
    } else if (opcion === 16) {
      continuarComprando = false;
    } else {
      alert("Su opción es inválida. Por favor, seleccione una opción válida.");
    }
  }

  console.log("Su orden:");

  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre + " - $" + carrito[i].precio);
    alert("Acabas de ordenar" + " " + carrito[i].nombre + ". El monto a pagar es de " + carrito[i].precio + "$" + "\n\n" + "¡Gracias por elegirnos! Tu orden llegará en 30 minútos aproximadamente.")

  }

  let totalCompra = calcularTotalCompra(carrito);
  console.log("Total: $" + totalCompra);
}















































