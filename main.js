import { productos } from "./stock.js";
import {carritoInicio} from "./carritoInicio.js"

const contProductos = document.getElementById("producto-contenedor");

const mostrarProductos = (productos) => {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('container');
        div.innerHTML += `<div class="card prod">
        <img src=${producto.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.tamaño}</p>
          <p class="card-text">$${producto.precio}</p>
          <a class="btn-floating halfway-fab wabes-effect waves-light yellow" id="boton${producto.id}"><img src="img/carrito2.webp" width="35"></a>
        </div>
      </div>`
        
        contProductos.appendChild(div)

      const boton = document.getElementById(`boton${producto.id}`);
      boton.addEventListener('click', () =>{
        carritoInicio(producto.id);
      })
    });
}
mostrarProductos(productos);

