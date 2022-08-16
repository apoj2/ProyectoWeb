export function llenarproductossecundarios(productos){
	
	let productodeproducto=document.getElementById('productosdeproducto')
	productodeproducto.innerHTML=''

	productos.forEach(function(productodeproductoI){
		let columna = document.createElement("div")
		columna.classList.add("col","my-3")
		
	
		//creacioon de la tarjeta
		let tarjeta=document.createElement("div")
		tarjeta.classList.add("w-100","shadow","d-flex","row","row-cols-1","row-cols-md-1")
        

		let columna2 = document.createElement("div")
		columna2.classList.add("col","my-3","col-12","col-md-5","pointernone","border-end")
		let columna3 = document.createElement("div")
		columna3.classList.add("col","my-3","col-12","col-md-6")
	
		//creeando fotos de ls tarjetas
		let fotoproductoprincipal=document.createElement("img")
		fotoproductoprincipal.classList.add("img-fluid","w-100")
		fotoproductoprincipal.src=productodeproductoI.fotos
	
		//creando el nombre dle producto
		let nombreproductoprincipal=document.createElement("div")
		nombreproductoprincipal.textContent=productodeproductoI.nombre
	    let nombreproductoprincipali=document.createElement("div")
		nombreproductoprincipali.textContent=productodeproductoI.nombre
	    nombreproductoprincipali.classList.add("invisible")

		let descripcionproductoprincipal=document.createElement("p")
		descripcionproductoprincipal.textContent=productodeproductoI.descripcion
		
		let precioproducto=document.createElement("h2")
		precioproducto.textContent=productodeproductoI.precio

		
		
		columna2.appendChild(fotoproductoprincipal)
		columna2.appendChild(nombreproductoprincipali)
	    columna3.appendChild(nombreproductoprincipal)
		columna3.appendChild(precioproducto)
		columna3.appendChild(descripcionproductoprincipal)
		tarjeta.appendChild(columna2)
		tarjeta.appendChild(columna3)
		columna.appendChild(tarjeta)
		productodeproducto.appendChild(columna)		
	})
}
