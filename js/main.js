import {actualizarCarrito} from "./ui.js";
import {obtenerCarrito} from "./storage.js"

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarCarrito(carrito.length);
})

