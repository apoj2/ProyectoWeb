
import { llenarproductosprincipales } from "./controladorllenadoproductosprincipales.js";
import{productosprincipalesisdecar} from "../helpers/databasetienda.js"
import {buscarProductos} from './controladorBuscar.js'

llenarproductosprincipales(productosprincipalesisdecar)

buscarProductos(productosprincipalesisdecar)