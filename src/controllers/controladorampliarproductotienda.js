export function productostiendavarios(evento){
	let objetoproducto={
		foto:evento.target.parentElement.querySelector("img").src,
		objeto:evento.target.parentElement.querySelector("div").textContent,
		precio:evento.target.parentElement.querySelector("h2").textContent,
		descripcion:evento.target.parentElement.querySelector("p").textContent,
        categoria:evento.target.parentElement.querySelector("").textContent
		}
	return(objetoproducto)
}