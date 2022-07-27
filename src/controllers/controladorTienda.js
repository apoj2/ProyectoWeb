import {productostiendasisdecar} from '../helpers/databaseproductostienda.js'
import { llenarproductosprincipales } from './controladorllenadoproductosprincipales.js'
import{productosprincipalesisdecar} from "../helpers/databasetienda.js"
import {buscarProductos} from './controladorBuscar.js'
import{ampliarproductostienda} from './controladorproductostienda.js'
import{tarjetasproductosampliados} from './controladorproductostiendavarios.js'
import{llenarproductossecundarios} from './controladorllenadoproductossecundarios.js'

llenarproductosprincipales(productosprincipalesisdecar)
llenarproductossecundarios(productostiendasisdecar)

buscarProductos(productosprincipalesisdecar)



let fila= document.getElementById('productosprincipales')
fila.addEventListener("click",function(evento){
	let producto=ampliarproductostienda(evento)
    console.log(producto)

	localStorage.setItem('infoProducto',JSON.stringify(producto))
	window.location.href='./tiendaproducto.html'
	
})


console.log(productostiendasisdecar)



