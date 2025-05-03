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
//4 - Ordenar el array original de productos por precio de menor a mayor, usando sort.
export const ordenarPorPrecio = (productos) => {
    const ordenarMenorAMayor = [...productos].sort((a, b) => a.precio - b.precio);
    console.log(ordenarMenorAMayor);
}

//5 - Agregar un nuevo producto al final del array (por ejemplo, { descripcion: "Parlante Bluetooth", precio: 59000.90 }).
export const agregarProducto = (productos) => {
    const nuevoProducto = { descripcion: "Parlante Bluetooth", precio: 59000.90 };
    productos.push(nuevoProducto);
    console.log(productos);
}
//6 - Eliminar el producto con el precio más bajo del array. Mostrar cómo queda el array.
export const eliminarProductoPrecioBajo = (productos) => {
    productos.sort((a, b) => a.precio - b.precio);
    const productoMenorPrecio = productos[0];
    console.log('Producto a eliminar: ${productoMenorPrecio.descripcion} - Precio: $${productoMenorPrecio.precio}')
    productos.shift();
    console.log(productos)
}