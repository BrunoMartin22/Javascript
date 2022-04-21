import { actualizarCarrito } from "./actualizarCarrito.js";
import { eliminarProducto } from "./main.js";
import { mostrarProductos} from "./app.js"
import { productos } from "./stock.js";

    const contenedorCarrito = document.querySelector('.contenido');
    let carritoStorage = [];

    document.addEventListener("DOMContentLoaded", () => {

    mostrarProductos(productos);

    if (localStorage.getItem("carrito")) {
        carritoStorage = JSON.parse(localStorage.getItem("carrito"))
        carritoStorage.map((producto) =>{

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

      actualizarCarrito(carritoStorage);
      console.log(producto.id)
      eliminarProducto(producto.id);
    })
  }
})

