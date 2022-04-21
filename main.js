import { actualizarCarrito } from "./actualizarCarrito.js";
import { productos } from "./stock.js";

const contenedorCarrito = document.querySelector('.contenido');
let carritoDeCompras = [];

export const carritoInicio = (productoId) => {
  if (localStorage.getItem("carrito")) {
    carritoDeCompras = JSON.parse(localStorage.getItem("carrito"));
  }
  let productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);
  contarProductosRepetidos(productoRepetido, productoId);
  eliminarProducto(productoId);
}

export const eliminarProducto = (productoId) => {
  if (localStorage.getItem("carrito")) {
    carritoDeCompras = JSON.parse(localStorage.getItem("carrito"));
  }
  let botonEliminar = document.getElementById(`eliminar${productoId}`);
  botonEliminar.addEventListener('click', () => {
      botonEliminar.parentElement.remove();
      carritoDeCompras = carritoDeCompras.filter(el => el.id != productoId);
      actualizarCarrito(carritoDeCompras);
  });
}

const contarProductosRepetidos = (prodRepetido, productoId) => {
  if (prodRepetido) {
    prodRepetido.cantidad++
    document.getElementById(`cantidad${prodRepetido.id}`).innerHTML = `<p id="cantidad${prodRepetido.id}" class="t-carrito">cantidad: ${prodRepetido.cantidad}</p>`;
    actualizarCarrito(carritoDeCompras);
  } else {
    renderProductosCarrito(productoId);
  }
}

const renderProductosCarrito = (productoId) => {
    let producto = productos.find(producto => producto.id == productoId);
    carritoDeCompras.push(producto);

    producto.cantidad = 1;

    let div = document.createElement('div');
    div.classList.add('articuloCarrito');
    div.innerHTML = `<div class="img-carrito"><img src=${producto.img} width="70px"></div>
                    <p class="t-carrito">${producto.nombre}</p>
                    <p class="t-carrito">$${producto.precio}</p>
                    <p id="cantidad${producto.id}" class="t-carrito">cantidad: ${producto.cantidad}</p>
                    <button id="eliminar${producto.id}" class="btn-eliminar">Eliminar</button>
    `;
    contenedorCarrito.appendChild(div);
  actualizarCarrito(carritoDeCompras);
}