window.addEventListener("load", function() {
	var boton = document.getElementById("enviar");
	boton.addEventListener("click", function() {
		var name = document.getElementById("name").value;
		var edad = parseInt(document.getElementById("edad").value);
		var sexo = document.getElementById("sexo").value
		
		var perfilPersona = new perfil(name,edad,sexo);
		document.getElementById("resultado").innerHTML = perfilPersona.presentacion(); 
	});
});
	function perfil(name,edad,sexo){
		this.name = name;
		this.edad = edad;
		this.sexo = sexo;
		this.mayorDeEdad = (this.edad >= 18);
		this.presentacion = function (){
			return "Hola! soy " + this.name + ", tengo " + this.edad + " " + "años y soy" + " " + ((this.mayorDeEdad) ? "mayor" : "menor") + " de edad.";
			};
	}
		