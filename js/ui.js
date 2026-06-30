const actualizarCarrito = (cantidad) => {
    const contador = document.getElementById("contador-carrito")
    
   if (contador) {
        contador.textContent = cantidad;
    }
}


const mostrarMensaje = (texto) =>{
    alert(texto);
}

export{mostrarMensaje,actualizarCarrito};