document.getElementById("confirmform").addEventListener("submit" , function (e){
    e.preventDefault();
   // evita que el formulario se envie de forma funcional (eso significa que recargeue la pagina)
  //
    const nombre = document.getElementById("nombre").value.trim(); // 
    const respuesta = document.getElementById("respuesta").value;

// capturamos la referencia  el div donde  monstramos html
    const container = document.getElementById("respuestacontainer");

    if (nombre && respuesta) {


        container.innerHTML = `
        <div class="alert alert-success" role=!alery">
            gracias ${nombre}, has respondido que ${respuesta},
        </div>
        `;

        this.reset();

    }

})


