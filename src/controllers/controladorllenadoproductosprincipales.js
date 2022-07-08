let productosprincipalesisdecar=[
	{
		id:0,
		nombre:"Carpado Automatio Volqueta",
		fotos:[]
	},
	{
		id:1,
		nombre:"Carpado Manual Volqueta	",
		fotos:[]
	},
	{
		id:2,
		nombre:"Sistema Acordeon Automatico Mula",
		fotos:[]
	},
	{
		id:3,
		nombre:"Sistema Acordeon Manual Mula",
		fotos:[]
	},
	{
		id:4,
		nombre:"Protector Lateral (Bicicletero)",
		fotos:[]
	},
	{
		id:5,
		nombre:"Cintas Reflectivas",
		fotos:[]
	},
	{
		id:6,
		nombre:"Malacates",
		fotos:[]
	},
	{
		id:7,
		nombre:"Discos Abrasivos",
		fotos:[]
	},
	{
		id:8,
		nombre:"Repuestos",
		fotos:[]
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
    let linktienda=document.createElement('a') 
})