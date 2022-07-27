import {llenarProductosdeproductosindex} from "./controladorproductosdeproductoindex.js";
import{productosprincipalesisdecar} from "../helpers/databasetienda.js";

export function buscarProductosindex(){
    
    let buscador=document.getElementById("buscador")

    //detectamos que el usuario escribe y capturamos lo quee escriba
    buscador.addEventListener("keyup",function(evento){
        let productoBuscado=evento.target.value

        let filtro=productosprincipalesisdecar.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
     console.log(filtro)
	 llenarProductosdeproductosindex(filtro)

    })

}