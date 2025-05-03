import { mostrarProductos } from "./ejerciciosAdicionales.js";
import { filtrarMayorA20 } from "./ejerciciosAdicionales.js";
import { precioConIVA } from "./ejerciciosAdicionales.js";
import { ordenarPorPrecio } from "./ejerciciosAdicionales.js";
import { agregarProducto } from "./ejerciciosAdicionales.js";
import { eliminarProductoPrecioBajo } from "./ejerciciosAdicionales.js";

const productos = [
    { descripcion: "Teclado", precio: 150000.75 },
    { descripcion: "Mouse Inalámbrico", precio: 15000.50 },
    { descripcion: "Auriculares Gamer", precio: 102315.99 },
    { descripcion: "Monitor", precio: 115750.25 },
    { descripcion: "Cámara", precio: 90000.45 }
]

//mostrar
mostrarProductos(productos);
//mostrar mayor a 20000
console.log("Mayores a 20000");
filtrarMayorA20(productos);
//mostrar precio con IVA
console.log("Precio con IVA");
precioConIVA(productos);
//mostrar con precio ordenado
console.log("Precio de Menor a Mayor");
ordenarPorPrecio(productos);
//agregar producto
console.log("Agregar nuevo producto");
agregarProducto(productos);
//eliminar producto
console.log("Eliminar Producto");
eliminarProductoPrecioBajo(productos);