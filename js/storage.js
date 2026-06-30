const key = "CARRITO";

const guardarCarrito = (carrito) => {localStorage.setItem(key,JSON.stringify(carrito))}

const obtenerCarrito = () => {
    const datos = JSON.parse(localStorage.getItem(key));

    if(datos && !Array.isArray(datos)){
        localStorage.removeItem(key);
        return [];
    }

    return datos || [];
}

const vaciarCarritoStorage = () => {localStorage.removeItem(key)}

export {guardarCarrito, obtenerCarrito, vaciarCarritoStorage}