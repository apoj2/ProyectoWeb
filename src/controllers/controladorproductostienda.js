export function ampliarproductostienda(evento){
	let objetoproducto={
		foto:evento.target.parentElement.querySelector("img").src,
		nombre:evento.target.parentElement.querySelector("div").textContent
		}
	return(objetoproducto)
}