// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// crear un array para almacenar el nombre de los amigos
let amigos = [];

// funcion para agregar amigo
function agregarAmigo(){
    let amigoActual = document.getElementById('amigo').value;
    if (amigoActual !== ''){
        amigos.push(amigoActual);
        limpiarElemento('#amigo');
        actualizarAmigos();
    } else {
        alert('Por favor, inserte un nombre.');
    }
    return;
}

// funcion para limpiar la entrada de amigos a la lista
function limpiarElemento(elem){
    document.querySelector(elem).value = '';
    return;
}

// funcion para actualizar la lista de amigos
function actualizarAmigos(){
    let amigosHtml = document.getElementById('listaAmigos');
    amigosHtml.innerHTML = '';

    for (let i =0;i<amigos.length;i++){
        const amigo = document.createElement('li');
        amigo.textContent = amigos[i];
        amigosHtml.appendChild(amigo);
    }
    return;
}

// funcion para sortear amigos
function sortearAmigo(){
    if (amigos.length > 0){
        let numeroGenerado = Math.floor(Math.random()*amigos.length)+1;
        let amigoGenerado = amigos[numeroGenerado];
        let elementoHTML = document.getElementById('resultado');
        elementoHTML.innerHTML = amigoGenerado;
    } else {
        alert('No hay amigos en la lista');
    }
    return;
}
