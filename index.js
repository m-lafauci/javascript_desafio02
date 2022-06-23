const suma = (a , b) => a + b;
const resta = (a , b) => a - b;
const iva = x => x * 0.21;
const descuento = x => x * 0.90;
const interes = x => x * 1.10;

alert("Bienvenido al SIMULADOR DE FACTURACION ONLINE")
let medioPago = prompt("Seleccione el medio de pago (las opciones disponibles son EFECTIVO o TARJETA). Para salir ESC.");

while (medioPago.toLowerCase() != "esc") {
    let precio;
    let nuevoPrecio;
    switch (medioPago.toLowerCase()) {
    case "efectivo":
        precio = parseInt(prompt("Ingrese el precio bruto del producto (sin IVA)"));
        nuevoPrecio = resta(suma(precio, iva(precio)), resta(precio, descuento(precio)));
        alert (`El importe a abonar es: ${nuevoPrecio} (Precio con IVA menos un descuento del 10%)`);
        break;
    case "tarjeta":
        precio = parseInt(prompt("Ingrese el precio bruto del producto (sin IVA)"));
        nuevoPrecio = suma(suma(precio, iva(precio)), resta(interes(precio), precio));
        alert (`El importe a abonar es: ${nuevoPrecio} (Precio con IVA más un recargo del 10%)`);
        break;
    default:
        alert("Ingrese una operación válida");
        break;
    }
      medioPago = prompt("Seleccione el medio de pago (las opciones disponibles son EFECTIVO o TARJETA). Para salir ESC.");
}
