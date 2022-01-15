//Constantes para insertar la imgen y mostrarla
const prev 		= document.querySelector("#zoom");
const put_image = document.querySelector("#image");

//Deshabilitamos la vista del prev
prev.style.display = "none";

function inicializarPrev(elemento){
	var numClase = []
	if(elemento) {
		numClase = elemento.classList
		for(var x=0; x < numClase.length; x++){
			numClase.value == "foto" ? recorridoLista(numClase.value) : alert("No se encontró la clase {foto}")
		}
	} else {
		console.error("No se ha seleccionado ningún elemento, verifique si el elemento existe o que haya sido cargado en el DOM antes de inicializar la función 'inicializarPrev(elemento)'.")
	}
}

function recorridoLista(class_name){
	var name_class = "."+class_name;
	//Recorremos todos los divs que contienen las imagenes
	[].forEach.call(
		//Podemos seleccionar la imagen o el div que los contiene por medio de la clase
		//document.querySelectorAll('.content-foto'),
		document.querySelectorAll(name_class),
		function (el) {
			//Accedemos a la data del div que contiene el id de la imagen y la enviamos a la función
			//mouse_event(el.getAttribute('data-idFoto'))
			mouse_event(el.id)
		}
	)
}

//Funcion para el evento mouse que recibe el id de la imagen
function mouse_event(id_image){
	//Seleccionamos la imagen con el id recibido
	var id = "#"+id_image
	var image = document.querySelector(id)
	//Clonamos la imagen y la almacenamos en otra variable
	var cln = image.cloneNode(true)
	//Evento cuando el mouse esté encima del elemento
	image.addEventListener("mouseover", e => {
		//put_image.childNodes.length > 1 ? put_image.innerHTML = "" : put_image.appendChild(cln)
		//Agregamos la imagen clonada al div correspondiente
		put_image.appendChild(cln)
		//Cambiamos el display a grid de prev
		prev.style.display = "grid"
	})
	//Evento cuando el mouse esté fuera del elemento
	image.addEventListener("mouseleave", e => {
		//Formateamos el div que se le colocó la imagen
		put_image.innerHTML = ""
		//Desahabilitamos nuevamente la vista de prev
		prev.style.display = "none"
	})
}