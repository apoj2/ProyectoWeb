export function llenarproductosprincipales5(productos){
	
	let productoprincipal=document.getElementById('productosprincipales5')
	productoprincipal.innerHTML=''

	productos.forEach(function(productoprincipalI){
	
		//creacionn de la columna
		let columna = document.createElement("div")
		columna.classList.add("col","my-3")
	
		//creacioon de la tarjeta
		let tarjeta=document.createElement("div")
		tarjeta.classList.add("card","w-100","text-center","shadow")
	
		//creeando fotos de ls tarjetas
		let fotoproductoprincipal=document.createElement("img")
		fotoproductoprincipal.classList.add("img-fluid","w-100")
		fotoproductoprincipal.src=productoprincipalI.fotos
	
		//creando el nombre dle producto
		let nombreproductoprincipal=document.createElement("div")
		nombreproductoprincipal.textContent=productoprincipalI.nombre

	
		
	
		
		
	
		tarjeta.appendChild(fotoproductoprincipal)
		tarjeta.appendChild(nombreproductoprincipal)
		columna.appendChild(tarjeta)
		productoprincipal.appendChild(columna)	
	})
}
