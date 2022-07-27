export function llenarproductossecundarios(productos){
	
	let productodeproducto=document.getElementById('productosdeproducto')
	productodeproducto.innerHTML=''

	productos.forEach(function(productodeproductoI){
	
		//creacionn de la columna
		let columna = document.createElement("div")
		columna.classList.add("col","my-3","productos")
	
		//creacioon de la tarjeta
		let tarjeta=document.createElement("div")
		tarjeta.classList.add("card","w-100","text-center","shadow")
	
		//creeando fotos de ls tarjetas
		let fotoproductoprincipal=document.createElement("img")
		fotoproductoprincipal.classList.add("img-fluid","w-100")
		fotoproductoprincipal.src=productodeproductoI.fotos
	
		//creando el nombre dle producto
		let nombreproductoprincipal=document.createElement("div")
		nombreproductoprincipal.textContent=productodeproductoI.nombre
	
	
		
		
	
		tarjeta.appendChild(fotoproductoprincipal)
		tarjeta.appendChild(nombreproductoprincipal)
		columna.appendChild(tarjeta)
		productodeproducto.appendChild(columna)	
	})
}
