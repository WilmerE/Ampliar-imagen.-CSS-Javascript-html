//Constantes para insertar la imgen y mostrarla
const prev 		 = document.querySelector("#zoom")
const put_image  = document.querySelector("#image")

//Bonton para cerrar la imagen
const btn_cerrar = "<a href=\"#\" id=\"cerrar-imagen\">x<i class=\"fa fa-times\" aria-hidden=\"true\"></i></a>"
put_image.insertAdjacentHTML("beforebegin", btn_cerrar)
const btn_imagen = document.querySelector("#cerrar-imagen")

/*
//Estilos para el boton
btn_imagen.style.width = "30px"
btn_imagen.style.height = "30px"
btn_imagen.style.color = "white"
btn_imagen.style.borderRadius = "50%"
btn_imagen.style.backgroundColor = "rgba(0,0,0, 0.4)"
btn_imagen.style.fontSize = "2rem"
btn_imagen.style.position = "relative"
btn_imagen.style.top = "100px"
btn_imagen.style.left = "580px"
btn_imagen.style.textAlign = "center"
*/

//Deshabilitamos la vista del prev
prev.style.display = "none"

//Evento cuando el mouse esté fuera del elemento
btn_imagen.addEventListener("click", e => {
	//Formateamos el div que se le colocó la imagen
	put_image.innerHTML = ""
	//Desahabilitamos nuevamente la vista de prev
	prev.style.display = "none"
})

document.body.addEventListener("keydown", function(event) {
	//Si la tecla presionada fue ESC
	if (event.code === 'Escape' || event.keyCode === 27) {
		event.preventDefault();
		//Formateamos el div que se le colocó la imagen
		put_image.innerHTML = ""
		//Desahabilitamos nuevamente la vista de prev
		prev.style.display = "none"

	}
})

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
			//Accedemos a la data que contiene el id de la imagen y la enviamos a la función
			//mouse_event(el.getAttribute('data-idFoto'))
			mouse_event(el.id)
		}
	)
}

//Funcion para el evento mouse que recibe el id de la imagen
function mouse_event(id_image){
	//Seleccionamos la imagen con el id recibido
	var id_element = "#"+id_image
	var image = document.querySelector(id_element)
	//Clonamos la imagen y la almacenamos en otra variable
	var cln = image.cloneNode(true)
	//Evento cuando el mouse esté encima del elemento
	image.addEventListener("click", e => {
		//Agregamos la imagen clonada al div correspondiente
		put_image.appendChild(cln)
		//Le damos las dimesiones al contenedor de la imagen
		cln.style.width = "600px"
		cln.style.height = "600px"
		//Cambiamos el display a grid de prev
		prev.style.display = "grid"
	})
}