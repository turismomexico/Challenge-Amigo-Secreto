// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigo = [];

function limpiarCaja(){
    document.querySelector("#amigo").value = "";
  }

//agregar un nombre a la lista
function agregarAmigo(){
  //se guarda el nombre que ingreso el usuario en la variable inputAgregarNombre
  let inputAgregarNombre = document.getElementById("amigo").value;

  //Se hace la validacion
  if (inputAgregarNombre === ""){
    alert ("Por favor, inserte un nombre");
  }
  else{
    // Agregamos el nombre al array
    amigo.push(inputAgregarNombre);

    //limpiar el input
    limpiarCaja();
  }

  mostrarListar();
}



//Actualizar la lista de amigo
function mostrarListar(){

  let obtenerLista = document.getElementById("listaAmigos");

  // Limpiar la lista antes de volver a mostrarla
  obtenerLista.innerHTML = "";

  // Recorremos el array amigos con un ciclo for
  //amigos.length es el número total de elementos en el array amigos.
  for(let i =0; i < amigo.length; i ++){

    //Se crea nuevo elemneto lista
    let lista = document.createElement("li");

    // Se asigna el nombre del amigo como texto dentro del <li>
    lista.textContent = amigo[i];

    //Agregamos el elemento <li> al elemento <ul>
    obtenerLista.appendChild(lista);


  }
}


//sortear amigo
function sortearAmigo(){
  //verificar si el array amigo tiene elementos
  //.length indica cuantos elementos hay en un array
  if ( amigo.length > 0){

    document.querySelector("#listaAmigos").innerHTML = "";

    //generar indice aleatorio del array amigo
    let indice = Math.floor(Math.random()*amigo.length);
    let amigoSeleccionado = amigo[indice];
    
    //resultado es el id del elemento RESULTADO
    resultado.textContent = ("El amigo secreto sorteado es: " + amigoSeleccionado);

  }
  
}



