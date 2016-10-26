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
			alert("ERROR: El campo nombre no debe ir vacío.");
			return false;
		}

		else if(apellido==null || apellido.length==0 || /^\s+$/.test(apellido)){
			alert("ERROR: El campo apellido no debe ir vacío.");
			return false;
		}

		else if(!(/\S+@\S+\.\S+/.test(correo))){
			alert("ERROR: Debe escribir un correo válido valido. Ejemplo: name@domain.com");
			return false;
		}

		else if(contrasena==null || contrasena.length==0 || /^\s+$/.test(contrasena)){
			alert("ERROR: El campo contraseña no debe ir vacío.");
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
  		var patronNombre = /^[a-zA-Z]*$/;
  		if(!nombre.search(patronNombre)){
  			return true;
  		} else{
  			alert("ERROR: Solo se permitir caracteres de la a-z");
  		    return false;
  		}
	}validaSoloTextoNombre(nombre);

	function validaSoloTextoApellido(apellido){
  		var patronApellido = /^[a-zA-Z]*$/;
  		if(!apellido.search(patronApellido)){
  			return true;
  		} else{
  			alert("ERROR: Solo se permitir caracteres de la a-z");
  		    return false;
  		}
	}validaSoloTextoApellido(apellido);

	/*Para los campos nombre y apellido la primera letra debe ser mayúscula. ATENCIÓN HAY QUE HACERLO. SI PONE EN MAYÚSCULAS
	HAY QUE DEJARLO TODO EN MINÚSCULA. LUEGO EN MAYÚSCULA LA PRIMERA LETRA*/

	function mayusculaNombre(nombre){
		var nombreMinuscula= document.getElementById('name').value.toLowerCase();
		document.getElementById('name').value=nombreMinuscula;
		//Ahora que todas están en minúscula hay que hacer que la primera sea mayúscula

	}mayusculaNombre(nombre);

	function mayusculaApellido(apellido){
		var apellidoMinuscula= document.getElementById('lastname').value.toLowerCase();
		document.getElementById('lastname').value=apellidoMinuscula;
		//Ahora que todas están en minúscula hay que hacer que la primera sea mayúscula
		
	}mayusculaApellido(apellido);



	//Validar que el campo email tenga un formato válido. Ej: name@domain.com. ATENCIÓN: ¿ESTÁ BIEN HECHO?


	//El campo password debe tener al menos 6 caracteres.
	function seisCaracteres(contrasena){
		if (contrasena.length < 6){
			alert("ERROR: La contraseña debe tener al menos 6 caracteres.")
			return false;
    	} else{
    		return true;
    	}
	}seisCaracteres(contrasena);


	//El campo password no puede ser igual a "password" ó "123456" ó "098754"
	function noPermitido(contrasena){
		if(contrasena=="password"){
			alert("ERROR: El campo contrasena no puede ser igual a 'password' o '123456' o '098754'");
			return false;
		} 
		else if(contrasena==123456){
			alert("ERROR: El campo contrasena no puede ser igual a 'password' o '123456' o '098754'");
			return false;
		}
		else if(contrasena==098754){
			alert("ERROR: El campo contrasena no puede ser igual a 'password' o '123456' o '098754'");
			return false;
		}
		else{
			return true;
		}
	}noPermitido(contrasena);


	//El valor seleccionado de bicis, debe ser una de las opciones presentadas. ATENCIÓN: ¿ESTÁ BIEN HECHO?

}

