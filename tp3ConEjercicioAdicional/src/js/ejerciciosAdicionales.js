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