import { obtenerCarrito,guardarCarrito} from "./storage.js";
import { mostrarMensaje } from "./ui.js";

const agregarCarrito = (alfajor) => {
   const carrito = obtenerCarrito();
   carrito.push(alfajor);
   guardarCarrito(carrito);
   mostrarMensaje(`${alfajor.nombre} agregados exitosamente 🎉`)
}





export {agregarCarrito}