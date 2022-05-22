import { productos } from "./stock.js";
import {carritoInicio} from "./main.js"

export const mostrarProductos = (productos) => {

  const contProductos = document.getElementById("producto-contenedor");

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('container');
        div.innerHTML += `<div class="card prod">
        <img src=${producto.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.tamaño}</p>
          <p class="card-text">$${producto.precio}</p>
          <button class="btn-floating halfway-fab wabes-effect waves-light yellow" id="boton${producto.id}"><img src="img/carrito2.webp" width="35"></button>
        </div>
      </div>`
        
        contProductos.appendChild(div)

      const boton = document.getElementById(`boton${producto.id}`);
      boton.addEventListener('click', () =>{
        carritoInicio(producto.id);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-start',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Añadido Correctamente'
        })
      })
    });
}
mostrarProductos(productos);


fetch('compradores.json',{

})
.then(response => response.json())
.then(data => {
  data.forEach(data =>{
    let nombre = document.querySelector('.name');
    let precio = document.querySelector('.precios');
    let objet = data;

     console.log(data);

    nombre.innerHTML= `${data.tipo}`
    precio.innerHTML= `${data.gastos}`
  });
})