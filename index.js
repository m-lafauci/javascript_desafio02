alert("Bienvenido al SIMULADOR DE FACTURACION ONLINE")
let medioPago = prompt("Seleccione el medio de pago (las opciones disponibles son EFECTIVO o TARJETA). Para salir ESC.");

while (medioPago.toLowerCase() != "esc") {
    switch (medioPago.toLowerCase()) {
    case "efectivo":
        let precioEfectivo = parseInt(prompt("Ingrese el precio bruto del producto (sin IVA)"));
        const sumaEfectivo = (a , b) => a + b;
        const restaEfectivo = (a , b) => a - b;
        const ivaEfectivo = x => x * 0.21;
        const descuento = x => x * 0.90;
        let nuevoPrecioEfectivo = restaEfectivo(sumaEfectivo(precioEfectivo, ivaEfectivo(precioEfectivo)), restaEfectivo(precioEfectivo, descuento(precioEfectivo)));
        alert (`El importe a abonar es: ${nuevoPrecioEfectivo} (Precio con IVA menos un descuento del 10%)`);
        break;
    case "tarjeta":
        let precioTarjeta = parseInt(prompt("Ingrese el precio bruto del producto (sin IVA)"));
        const sumaTarjeta = (a, b) => a + b;
        const restaTarjeta = (a , b) => a - b;
        const ivaTarjeta = x => x * 0.21;
        const interes = x => x * 1.10
        let nuevoPrecioTarjeta = sumaTarjeta(sumaTarjeta(precioTarjeta, ivaTarjeta(precioTarjeta)), restaTarjeta(interes(precioTarjeta), precioTarjeta));
        alert (`El importe a abonar es: ${nuevoPrecioTarjeta} (Precio con IVA más un recargo del 10%)`);
        break;
    default:
        alert("Ingrese una operación válida");
        break;
    }
      medioPago = prompt("Seleccione el medio de pago (las opciones disponibles son EFECTIVO o TARJETA). Para salir ESC.");
}
