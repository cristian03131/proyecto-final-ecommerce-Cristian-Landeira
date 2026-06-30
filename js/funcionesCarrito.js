import { obtenerCarrito,guardarCarrito, vaciarCarritoStorage} from "./storage.js";
import { actualizarCarrito, mostrarMensaje } from "./ui.js";

const agregarCarrito = (alfajor) => {
   const carrito = obtenerCarrito();
   carrito.push(alfajor);
   guardarCarrito(carrito);
   actualizarCarrito(carrito.length);
   mostrarMensaje(`${alfajor.nombre} agregados exitosamente 🎉`)
}

const eliminarProducto = (index) => {
   const carrito = obtenerCarrito();

   carrito.splice(index,1);
   guardarCarrito(carrito);
   actualizarCarrito(carrito.length);
   mostrarMensaje(`Producto eliminado ✅`)
}

const vaciarCarrito = () => {
    vaciarCarritoStorage();
    guardarCarrito([]);
    mostrarMensaje("Carrito vaciado")
}




export {agregarCarrito,eliminarProducto,vaciarCarrito}