const modalContenedor = document.querySelector('.modal');
const abrirCarrito = document.getElementById('btn-modal');

abrirCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('modal-active')
})
