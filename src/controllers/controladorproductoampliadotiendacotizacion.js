

console.log(JSON.parse(localStorage.getItem('infoProducto')))



let producto=JSON.parse(localStorage.getItem('infoProducto'))




let imagenprincipal=document.getElementById('imagenprincipalproductostienda')
imagenprincipal.src=producto.foto

let textonombreproducto=document.getElementById('nombreproductostienda')
textonombreproducto.textContent=producto.nombre

let precioproducto=document.getElementById('precioproducto')
precioproducto.textContent=producto.precio

let descripcionproducto=document.getElementById('descripcionproducto')
descripcionproducto.textContent=producto.descripcion








