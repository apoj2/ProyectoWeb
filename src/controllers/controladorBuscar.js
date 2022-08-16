import {sistemaautomaticovolqueta} from '../helpers/databasesistemaautomaticovolqueta.js'
import {sistemamanualvolqueta} from '../helpers/databasesistemamanualvolqueta.js'
import {sistemaautomaticommula} from '../helpers/databasesistemaautomaticomula.js'
import {sistemamanualmula} from '../helpers/databasesistemamanualmula.js'
import {protectoreslaterales} from '../helpers/databaseprotectoreslaterales.js'
import {cintareflectiva} from '../helpers/databasecintareflectiva.js'
import {discosabrasivos} from '../helpers/databasediscosabrasivos.js'
import {malacates} from '../helpers/databasemalacates.js'
import {repuestos} from '../helpers/databaserepuestos.js'

import { llenarproductosprincipales } from './controladorllenadoproductosprincipales.js'
import { llenarproductosprincipales1 } from './controladorllenadoproductosprincipales1.js'
import { llenarproductosprincipales2 } from './controladorllenadoproductosprincipales2.js'
import { llenarproductosprincipales3 } from './controladorllenadoproductosprincipales3.js'
import { llenarproductosprincipales4 } from './controladorllenadoproductosprincipales4.js'
import { llenarproductosprincipales5 } from './controladorllenadoproductosprincipales5.js'
import { llenarproductosprincipales6 } from './controladorllenadoproductosprincipales6.js'
import { llenarproductosprincipales7 } from './controladorllenadoproductosprincipales7.js'
import { llenarproductosprincipales8 } from './controladorllenadoproductosprincipales8.js'

export function buscarProductos(){
    
    let buscador=document.getElementById("buscador")

    //detectamos que el usuario escribe y capturamos lo quee escriba
    buscador.addEventListener("keyup",function(evento){
        let productoBuscado=evento.target.value

        let filtro1=sistemaautomaticovolqueta.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
        let filtro2=sistemamanualvolqueta.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
        let filtro3=sistemaautomaticommula.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
        let filtro4=sistemamanualmula.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
        let filtro5=protectoreslaterales.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
        let filtro6=cintareflectiva.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
        let filtro7=discosabrasivos.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
        let filtro8=repuestos.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
        let filtro9=malacates.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
        
     

        llenarproductosprincipales(filtro1)
        llenarproductosprincipales1(filtro2)
        llenarproductosprincipales2(filtro3)
        llenarproductosprincipales3(filtro4)
        llenarproductosprincipales4(filtro5)
        llenarproductosprincipales5(filtro6)
        llenarproductosprincipales6(filtro7)
        llenarproductosprincipales7(filtro8)
        llenarproductosprincipales8(filtro9)

    })

}