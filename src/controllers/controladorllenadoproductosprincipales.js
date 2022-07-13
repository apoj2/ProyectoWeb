let productosprincipalesisdecar=[
	{
		id:0,
		nombre:"Carpado Automatio Volqueta",
		fotos:['../../assets/img/LogosIndexyServicios/SistemaAutomaticoVolquetaLogo.png'],
		linktiendaA:'../../hola.html'
	},
	{
		id:1,
		nombre:"Carpado Manual Volqueta	",
		fotos:['../../assets/img/LogosIndexyServicios/'],
		linktiendaA:'../../hola.html'
	},
	{
		id:2,
		nombre:"Sistema Acordeon Automatico Mula",
		fotos:['../../assets/img/LogosIndexyServicios/SistemaAutomaticoMulaLogo.png'],
		linktiendaA:'../../hola.html'
	},
	{
		id:3,
		nombre:"Sistema Acordeon Manual Mula",
		fotos:['../../assets/img/LogosIndexyServicios/SistemaManualMulaLogo.png'],
		linktiendaA:'../../hola.html'
	},
	{
		id:4,
		nombre:"Protector Lateral (Bicicletero)",
		fotos:['../../assets/img/LogosIndexyServicios/ProtectorLateralLogo.png'],
		linktiendaA:'../../hola.html'
	},
	{
		id:5,
		nombre:"Cintas Reflectivas",
		fotos:['../../assets/img/LogosIndexyServicios/CintasReflectivasLogo.png'],
		linktiendaA:'../../hola.html'
	},
	{
		id:6,
		nombre:"Malacates",
		fotos:['../../assets/img/LogosIndexyServicios/MalacateLogo.png'],
		linktiendaA:'../../hola.html'
	},
	{
		id:7,
		nombre:"Discos Abrasivos",
		fotos:['../../assets/img/LogosIndexyServicios/DiscosAbrasivosLogo.png'],
		linktiendaA:'../../hola.html'
	},
	{
		id:8,
		nombre:"Repuestos",
		fotos:[],
		linktiendaA:'../../hola.html'
	}
]
let productoprincipal=document.getElementById('productosprincipales')

productosprincipalesisdecar.forEach(function(productoprincipalI){

	//creacionn de la columna
	let columna = document.createElement("div")
	columna.classList.add("col","my-3")

	//creacioon de la tarjeta
	let tarjeta=document.createElement("div")
	tarjeta.classList.add("card","w-100","text-center")

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