const contador = document.getElementById('contador-carrito');
const total = document.getElementById('precio-total');

export const actualizarCarrito = (carritoDeCompras) => {
    contador.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
    total.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}