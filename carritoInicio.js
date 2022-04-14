import { productos } from "./stock.js";

let carritoCompras = [];

const carritoInicio = (productoId) => {

    const contenedorCarrito = document.querySelector('.contenido');

    const productosCarrito = () =>{
        let producto = productos.find(producto => producto.id == producto.id);
        carritoCompras.push(producto);

        producto.stock = 1;

        let div = document.createElement('div');
        div.classList.add('articuloCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>$${producto.precio}</p>
                        <p id="cantidad${producto.id}">cantidad: ${producto.stock}</p>
                        <button id="eliminar${producto.id}" class="btn-eliminar">Eliminar</button>
        `;
        contenedorCarrito.appendChild(div);
    }

    productosCarrito();
}


export {carritoInicio};