export function ampliarproductostienda(evento){
	let objetoproducto={
		foto:evento.target.parentElement.querySelector("img").src,
		nombre:evento.target.parentElement.querySelector("div").textContent,
		precio:evento.target.parentElement.querySelector("h2").textContent,
		descripcion:evento.target.parentElement.querySelector("p").textContent
		}
	return(objetoproducto)
}