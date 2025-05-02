//1 - Mostrar en consola cada producto en el formato: "Producto: [descripción] - Precio:$[precio]", usando forEach.

export const mostrarProductos = (productos) => {
    productos.forEach(({ descripcion, precio }) => {
        console.log(`Producto: ${descripcion} - Precio: $${precio}`)
    })
}