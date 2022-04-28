const contador = document.querySelector('.contador-carrito');
const total = document.querySelector('.precio-total');

export const actualizarCarrito = (carritoDeCompras) => {
    contador.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
    total.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}