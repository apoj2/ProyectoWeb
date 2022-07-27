console.log(JSON.parse(localStorage.getItem('infoProducto')))
console.log(JSON.parse(localStorage.getItem('productos')))


let producto=JSON.parse(localStorage.getItem('infoProducto'))
let productos=JSON.parse(localStorage.getItem('productos'))


let imagenprincipal=document.getElementById('imagenprincipalproductostienda')
imagenprincipal.src=producto.foto

let textonombreproducto=document.getElementById('nombreproductostienda')
textonombreproducto.textContent=producto.nombre

let textonombretienda=document.getElementById('nombretiendaproductos')
textonombretienda.classList.add("text-light","fs-3")
textonombretienda.textContent=producto.nombre

let productosagregar=[]




