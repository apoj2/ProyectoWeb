import { productostiendasisdecar} from '../helpers/databaseproductostienda.js'
import { llenarProductosdeproductosindex } from "./controladorproductosdeproductoindex.js";
import{productosprincipalesisdecar} from "../helpers/databasetienda.js"
import {buscarProductosindex} from './controladorBuscarindex.js'
import{ampliarproductostienda} from './controladorproductostienda.js'

llenarProductosdeproductosindex(productosprincipalesisdecar)

buscarProductosindex(productosprincipalesisdecar)

let fila2= document.getElementById('productosprincipalesindex')
fila2.addEventListener("click",function(evento){
	let producto=ampliarproductostienda(evento)
    console.log(producto)

	localStorage.setItem('infoProductoindex',JSON.stringify(producto))
	window.location.href='./src/views/tiendaproducto.html'
	
})
console.log(productostiendasisdecar)