//1 - Mostrar en consola cada producto en el formato: "Producto: [descripción] - Precio:$[precio]", usando forEach.

export const mostrarProductos = (productos) => {
    productos.forEach(({ descripcion, precio }) => {
        console.log(`Producto: ${descripcion} - Precio: $${precio}`)
    })
}

//2 - Crear un nuevo array con los productos cuyo precio sea mayor a $20, usando filter.
export const filtrarMayorA20 = (productos) => {
    const productosMayorA20 = productos.filter(prod => prod.precio > 20000);
    console.log(productosMayorA20);
}
//3 - Crear un array con los productos, pero con el precio con IVA incluido (21%), usando map.
export const precioConIVA = (productos) => {
    const precioModificadoConIVA = productos.map(prod => ({
        descripcion: prod.descripcion,
        precio: (prod.precio * 1.21).toFixed(2)
    }));
    console.log(precioModificadoConIVA);
}