export function llenarproductodeproductos(productos){
	
	let productodeproducto=document.getElementById('productoprincipaldeproducto')
	productodeproducto.innerHTML=''

	productos.forEach(function(productodeproductoI){
	
		//creacionn de la columna
	    
		if((productodeproductoI.nombre=="Carpado Automatio Volqueta") || (productodeproductoI.nombre=="Carpado Manual Volqueta")){
			let columna = document.createElement("div")
			columna.classList.add("col","my-3")
			
		
			//creacioon de la tarjeta
			let tarjeta=document.createElement("div")
			tarjeta.classList.add("w-100","shadow","d-flex","row","row-cols-1","row-cols-md-1")
	
			let columna2 = document.createElement("div")
			columna2.classList.add("col","my-3","col-12","col-md-5")
			let columna3 = document.createElement("div")
			columna3.classList.add("col","my-3","col-12","col-md-6")
		
			//creeando fotos de ls tarjetas
			let fotoproductoprincipal=document.createElement("img")
			fotoproductoprincipal.classList.add("img-fluid","w-100")
			fotoproductoprincipal.src=productodeproductoI.fotos
		
			//creando el nombre dle producto
			let nombreproductoprincipal=document.createElement("div")
			nombreproductoprincipal.classList.add("mx-2")
			nombreproductoprincipal.textContent=productodeproductoI.nombre
			
			let boton=document.createElement("a")
			boton.classList.add("btn","btn-primary","mx-2","my-2")
			boton.textContent="Cotizar Con Frontal"
			boton.setAttribute("href","https://api.whatsapp.com/send?phone=573117789012&text=Hola%20quiero%20realizar%20una%20cotizacion%20de%20un%20Sistema%20de%20carpado%20con%20frontal")

			let boton2=document.createElement("a")
			boton2.classList.add("btn","btn-primary","mx-2","my-2")
			boton2.textContent="Cotizar Sin Frontal"
			boton2.setAttribute("href","https://api.whatsapp.com/send?phone=573117789012&text=Hola%20quiero%20realizar%20una%20cotizacion%20de%20un%20Sistema%20de%20carpado%20sin%20frontal")
			
			columna2.appendChild(fotoproductoprincipal)
			columna3.appendChild(nombreproductoprincipal)
			columna3.appendChild(boton)
			columna3.appendChild(boton2)
			tarjeta.appendChild(columna2)
			tarjeta.appendChild(columna3)
			columna.appendChild(tarjeta)
			productodeproducto.appendChild(columna)	
		}else{
			let columna = document.createElement("div")
			columna.classList.add("col","my-3")
			
		
			//creacioon de la tarjeta
			let tarjeta=document.createElement("div")
			tarjeta.classList.add("w-100","shadow","d-flex","row","row-cols-1","row-cols-md-1")
	
			let columna2 = document.createElement("div")
			columna2.classList.add("col","my-3","col-12","col-md-5")
			let columna3 = document.createElement("div")
			columna3.classList.add("col","my-3","col-12","col-md-6")
		
			//creeando fotos de ls tarjetas
			let fotoproductoprincipal=document.createElement("img")
			fotoproductoprincipal.classList.add("img-fluid","w-100")
			fotoproductoprincipal.src=productodeproductoI.fotos
		
			//creando el nombre dle producto
			let nombreproductoprincipal=document.createElement("div")
			nombreproductoprincipal.textContent=productodeproductoI.nombre
			
			let boton3=document.createElement("a")
			boton3.classList.add("btn","btn-primary","mx-2","my-2")
			boton3.textContent="Cotizar"
			boton3.setAttribute("href","https://api.whatsapp.com/send?phone=573117789012&text=Hola%20quiero%20realizar%20una%20consulta")

			columna2.appendChild(fotoproductoprincipal)
			columna3.appendChild(nombreproductoprincipal)
			columna3.appendChild(boton3)
			tarjeta.appendChild(columna2)
			tarjeta.appendChild(columna3)
			columna.appendChild(tarjeta)
			productodeproducto.appendChild(columna)	
		}	
	
		

	})
}
