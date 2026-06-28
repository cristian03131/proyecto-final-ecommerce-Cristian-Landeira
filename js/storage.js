const key = "CARRITO";

const guardarCarrito = (carrito) => {localStorage.setItem(key,JSON.stringify(carrito))}

const obtenerCarrito = () => {return JSON.parse(localStorage.getItem(key)) || []}

const vaciarCarritoStorage = () => {localStorage.removeItem(key)}

export {guardarCarrito, obtenerCarrito, vaciarCarritoStorage}