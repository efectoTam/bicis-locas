function validateForm(){
	/* Escribe tú código aquí */
	var nombre= document.getElementById('name').value;
	var apellido= document.getElementById('lastname').value;
	var correo = document.getElementById('input-email').value;
	var contrasena= document.getElementById('input-password').value;
	var indice = document.getElementsByTagName('select')[0].selectedIndex;

	//Todos los campos son obligatorios, excepto los dos últimos.
	function camposRellenados(){
		if(nombre==null || nombre.length==0 || /^\s+$/.test(nombre)){
			alert("ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco");
			return false;
		}

		else if(apellido==null || apellido.length==0 || /^\s+$/.test(apellido)){
			alert("ERROR: El campo apellido no debe ir vacío o lleno de solamente espacios en blanco");
			return false;
		}

		else if(!(/\S+@\S+\.\S+/.test(correo))){
			alert("ERROR: Debe escribir un correo válido valido");
			return false;
		}

		else if(contrasena==null || contrasena.length==0 || /^\s+$/.test(contrasena)){
			alert("ERROR: El campo contraseña no debe ir vacío o lleno de solamente espacios en blanco");
			return false;
		}

		else if(indice == null || indice == 0) {
			alert("ERROR: Debes seleccionar un elemento de la lista.");
	  		return false;
		}
		else{
			return true;
		}
 	}camposRellenados();

 	//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
 	function validaSoloTextoNombre(nombre){
  		var patron = /^[a-zA-Z]*$/;
  		if(!nombre.search(patron)){
  			return true;
  		} else{
  			alert("ERROR: Solo se permitir caracteres de la A-Z");
  		    return false;
  		}
	}validaSoloTextoNombre(nombre);

	function validaSoloTextoApellido(apellido){
  		var patron = /^[a-zA-Z]*$/;
  		if(!apellido.search(patron)){
  			return true;
  		} else{
  			alert("ERROR: Solo se permitir caracteres de la A-Z");
  		    return false;
  		}
	}validaSoloTextoApellido(apellido);

	//Para los campos nombre y apellido la primera letra debe ser mayúscula
	//Validar que el campo email tenga un formato válido. Ej: name@domain.com
	//El campo password debe tener al menos 6 caracteres
	//El campo password no puede ser igual a "password" ó "123456" ó "098754"
	//El valor seleccionado de bicis, debe ser una de las opciones presentadas

}

