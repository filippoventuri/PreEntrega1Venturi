function calcularPrecioFinal() {
    
    let precioProducto = parseInt(prompt("Ingresa el precio del producto:"));
    let porcentajeImpuesto = parseInt(prompt("Ingresa el porcentaje de impuestos (sin %):"));
    let porcentajeDescuento = parseInt(prompt("Ingresa el porcentaje de descuento (sin %):"));

    if (isNaN(precioProducto) || isNaN(porcentajeImpuesto) || isNaN(porcentajeDescuento)) {
        alert("Por favor, ingresa valores válidos.");
        return; 
    }

    let impuesto = (precioProducto * porcentajeImpuesto) / 100;
    let descuento = (precioProducto * porcentajeDescuento) / 100;
    let precioFinal = precioProducto + impuesto - descuento;

    alert(`Precio inicial: $${precioProducto.toFixed(2)}\nImpuesto: $${impuesto.toFixed(2)}\nDescuento: $${descuento.toFixed(2)}\nPrecio final: $${precioFinal.toFixed(2)}`);
}
calcularPrecioFinal();
