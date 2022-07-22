export function llenarproductosprincipales(productos){
	
	let productoprincipal=document.getElementById('productosprincipales')
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
		fotoproductoprincipal.src=productoprincipalI.fotos[0]
	
		//creando el nombre dle producto
		let nombreproductoprincipal=document.createElement("div")
		nombreproductoprincipal.textContent=productoprincipalI.nombre
	
		//creando botnos
	
		let linkportafolio=document.createElement("a") 
		linkportafolio.textContent="Ver"
		linkportafolio.classList.add("btn","btn-secondary","w-75","justify-content-center","mx-5", "my-4")
		
		let linktienda=document.createElement("a") 
		linktienda.textContent="Ver"
		linktienda.classList.add("btn","btn-secondary","w-50","justify-content-center","mx-5")
		
		
	
		tarjeta.appendChild(fotoproductoprincipal)
		tarjeta.appendChild(nombreproductoprincipal)
		tarjeta.appendChild(linkportafolio)
		columna.appendChild(tarjeta)
		productoprincipal.appendChild(columna)	
	})
}
