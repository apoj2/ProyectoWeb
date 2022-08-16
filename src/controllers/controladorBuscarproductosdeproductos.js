import {llenarproductodeproducto} from "./controladorllenadoproductosdeproducto.js";
import{productostiendasisdecar} from "../helpers/databaseproductostienda.js";

export function buscarProductosdeproductos(){
    
    let buscador=document.getElementById("buscador1")

    //detectamos que el usuario escribe y capturamos lo quee escriba
    buscador.addEventListener("keyup",function(evento){
        let productoBuscado=evento.target.value

        let filtro=productostiendasisdecar.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
     console.log(filtro)
	 llenarproductodeproducto(filtro)

    })

}