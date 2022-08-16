import {sistemaautomaticovolqueta} from '../helpers/databasesistemaautomaticovolqueta.js'
import {sistemamanualvolqueta} from '../helpers/databasesistemamanualvolqueta.js'
import {sistemaautomaticommula} from '../helpers/databasesistemaautomaticomula.js'
import {sistemamanualmula} from '../helpers/databasesistemamanualmula.js'
import {protectoreslaterales,protectoreslateralesproductos} from '../helpers/databaseprotectoreslaterales.js'
import {cintareflectiva,cintareflectivaproductos} from '../helpers/databasecintareflectiva.js'
import {discosabrasivos,discosabrasivosproductos} from '../helpers/databasediscosabrasivos.js'
import {malacates} from '../helpers/databasemalacates.js'
import {repuestos} from '../helpers/databaserepuestos.js'

import { llenarproductodeproductos } from './controladorllenadoproductodeproductos.js'
import { llenarproductodeproducto } from './controladorllenadoproductodeproducto.js'
import { llenarproductosprincipales } from './controladorllenadoproductosprincipales.js'
import { llenarproductosprincipales1 } from './controladorllenadoproductosprincipales1.js'
import { llenarproductosprincipales2 } from './controladorllenadoproductosprincipales2.js'
import { llenarproductosprincipales3 } from './controladorllenadoproductosprincipales3.js'
import { llenarproductosprincipales4 } from './controladorllenadoproductosprincipales4.js'
import { llenarproductosprincipales5 } from './controladorllenadoproductosprincipales5.js'
import { llenarproductosprincipales6 } from './controladorllenadoproductosprincipales6.js'
import { llenarproductosprincipales7 } from './controladorllenadoproductosprincipales7.js'
import { llenarproductosprincipales8 } from './controladorllenadoproductosprincipales8.js'


import {productostiendasisdecar} from '../helpers/databaseproductostienda.js'
import{productosprincipalesisdecar} from "../helpers/databasetienda.js"

import{ampliarproductostienda} from './controladorproductostienda.js'

import{llenarproductossecundarios} from './controladorllenadoproductossecundarios.js'

llenarproductosprincipales(sistemaautomaticovolqueta)
llenarproductosprincipales1(sistemamanualvolqueta)
llenarproductosprincipales2(sistemaautomaticommula)
llenarproductosprincipales3(sistemamanualmula)
llenarproductosprincipales4(protectoreslaterales)
llenarproductosprincipales5(cintareflectiva)
llenarproductosprincipales6(discosabrasivos)
llenarproductosprincipales7(malacates)
llenarproductosprincipales8(repuestos)




let fila= document.getElementById('productosprincipales')
fila.addEventListener("click",function(evento){
	window.location.href='./tienda.html#productoprincipaldeproducto'
	llenarproductodeproductos(sistemaautomaticovolqueta)
	llenarproductossecundarios(productostiendasisdecar)
})
let fila1= document.getElementById('productosprincipales1')
fila1.addEventListener("click",function(evento){
	window.location.href='./tienda.html#productoprincipaldeproducto'
	llenarproductodeproductos(sistemamanualvolqueta)
	llenarproductossecundarios(productostiendasisdecar)
})
let fila2= document.getElementById('productosprincipales2')
fila2.addEventListener("click",function(evento){
	window.location.href='./tienda.html#productoprincipaldeproducto'
	llenarproductodeproductos(sistemaautomaticommula)
	llenarproductossecundarios(productostiendasisdecar)
})
let fila3= document.getElementById('productosprincipales3')
fila3.addEventListener("click",function(evento){
	window.location.href='./tienda.html#productoprincipaldeproducto'
	llenarproductodeproductos(sistemamanualmula)
	llenarproductossecundarios(productosprincipalesisdecar)
})
let fila4= document.getElementById('productosprincipales4')
fila4.addEventListener("click",function(evento){
	window.location.href='./tienda.html#productoprincipaldeproducto'
	llenarproductodeproductos(protectoreslaterales)
	llenarproductossecundarios(protectoreslateralesproductos)
})
let fila5= document.getElementById('productosprincipales5')
fila5.addEventListener("click",function(evento){
	window.location.href='./tienda.html#productoprincipaldeproducto'
	llenarproductodeproductos(cintareflectiva)
	llenarproductossecundarios(cintareflectivaproductos)
})
let fila6= document.getElementById('productosprincipales6')
fila6.addEventListener("click",function(evento){
	window.location.href='./tienda.html#productoprincipaldeproducto'
	llenarproductodeproductos(discosabrasivos)
	llenarproductossecundarios(discosabrasivosproductos)
})
let fila7= document.getElementById('productosprincipales7')
fila7.addEventListener("click",function(evento){
	window.location.href='./tienda.html#productoprincipaldeproducto'
	llenarproductodeproductos(malacates)
	llenarproductossecundarios(productostiendasisdecar)
})
let fila8= document.getElementById('productosprincipales8')
fila8.addEventListener("click",function(evento){
	window.location.href='./tienda.html#productoprincipaldeproducto'
	llenarproductodeproductos(repuestos)
	llenarproductossecundarios(productostiendasisdecar)
})



let productosdeproducto =document.getElementById('productosdeproducto')

productosdeproducto.addEventListener("click",function(evento){
    let producto = ampliarproductostienda(evento)
    console.log(producto)
    //almacenar en el local storage la informacion del producto seleccionado
    localStorage.setItem('infoProducto',JSON.stringify(producto) )
    window.location.href='./tiendaproducto.html'

})
console.log(productostiendasisdecar)
