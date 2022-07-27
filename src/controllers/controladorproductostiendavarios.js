export function tarjetasproductosampliados(evento){

	let tarjetasproductos={
		foto:evento.target.parentElement.querySelector("img"),
        nombre:evento.target.parentElement.querySelector("h3"),
		precio:evento.target.parentElement.querySelector("h2"),
		descripcion:evento.target.parentElement.querySelector("p"),
		categoria:evento.target.parentElement.querySelector("p")
	}
	return tarjetasproductos

}