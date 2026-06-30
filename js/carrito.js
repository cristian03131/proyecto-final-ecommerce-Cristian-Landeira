import { obtenerCarrito } from "./storage.js";
import { eliminarProducto,vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarCarrito } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarCarrito(carrito.length);

    const contenedor = document.getElementById("contenedor-carrito")
    const contenedorAcciones = document.getElementById("acciones-carrito");

    contenedor.innerHTML = "";
    contenedorAcciones.innerHTML = "";

    if(!carrito.length){
       const mensaje = document.createElement("p");
       mensaje.classList.add("mensaje-carrito-vacio");
       mensaje.textContent = "Tu carrito esta vacio 😕";
       contenedor.appendChild(mensaje);
       return;
    }

    carrito.forEach((alfajor,index)=> {
       const tarjetaAlfajores = document.createElement("article");
       tarjetaAlfajores.classList.add("productos__card");
       
       const imagenCajaAlfajores = document.createElement("img");
       imagenCajaAlfajores.classList.add("productos__imagen");
       imagenCajaAlfajores.src = `../${alfajor.img}`;
       imagenCajaAlfajores.alt = `Caja de ${alfajor.nombre}`;

       const tituloAlfajor = document.createElement("h2");
       tituloAlfajor.classList.add("productos__titulo-producto");
       tituloAlfajor.textContent = alfajor.nombre;

       const descripcionAlfajor = document.createElement("p");
       descripcionAlfajor.classList.add("productos__descripcion");
       descripcionAlfajor.textContent = alfajor.descripcion;

        const alfajoresCompra = document.createElement("div");
       alfajoresCompra.classList.add("productos__compra");

       const precioAlfajor = document.createElement("h3");
       precioAlfajor.classList.add("productos__precio");
       precioAlfajor.textContent = `$${alfajor.precio.toLocaleString('es-AR')}`;

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn");
        btnEliminar.classList.add("btn-eliminar-carrito");
        btnEliminar.textContent = "Eliminar producto";

        btnEliminar.addEventListener("click", () => {
           eliminarProducto(index);
           renderizarCarrito();
        })

        alfajoresCompra.appendChild(precioAlfajor);
        tarjetaAlfajores.appendChild(imagenCajaAlfajores);
        tarjetaAlfajores.appendChild(tituloAlfajor);
        tarjetaAlfajores.appendChild(descripcionAlfajor);
        tarjetaAlfajores.appendChild(alfajoresCompra);
        tarjetaAlfajores.appendChild(btnEliminar);

        contenedor.appendChild(tarjetaAlfajores);

        
        

    })

    const btnVaciar = document.createElement("button");
        btnVaciar.classList.add("btn");
        btnVaciar.classList.add("btn-vaciar-carrito");
        btnVaciar.textContent = "Vaciar carrito";

        btnVaciar.addEventListener("click", () => {
            vaciarCarrito();
            renderizarCarrito();
        })

        contenedorAcciones.appendChild(btnVaciar);


    
}

document.addEventListener("DOMContentLoaded", () => {
        renderizarCarrito();
    })