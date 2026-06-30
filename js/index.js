import { obtenerCarrito } from "./storage.js";
import { agregarCarrito } from "./funcionesCarrito.js";

const renderizarProductos = async() => {
    const contenedor = document.getElementById("productos");


    const response = await fetch("../data/productos.json")
    const coleccionAlfajores = await response.json();

    coleccionAlfajores.forEach((alfajor) => {

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

       const botonAgregarCarrito = document.createElement("button");
       botonAgregarCarrito.classList.add("productos__boton-carrito");
       botonAgregarCarrito.setAttribute("aria-label",`Agregar ${alfajor.nombre} al carrito`);
       botonAgregarCarrito.textContent = "Agregar al carrito";

       const iconoCarrito = document.createElement("img");
       iconoCarrito.classList.add("productos__icono-carrito");
       iconoCarrito.src = `../${alfajor.icon}`;
       iconoCarrito.alt = `Icono de carrito de compras`;

      botonAgregarCarrito.addEventListener("click", ()=>{
        agregarCarrito(alfajor);
      })
       
       botonAgregarCarrito.appendChild(iconoCarrito);
       alfajoresCompra.append(precioAlfajor,botonAgregarCarrito);

       tarjetaAlfajores.append(imagenCajaAlfajores,tituloAlfajor,descripcionAlfajor,alfajoresCompra);

       contenedor.appendChild(tarjetaAlfajores);
       


    })

  
    
}

renderizarProductos();