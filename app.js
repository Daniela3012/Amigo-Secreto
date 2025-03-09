// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const arrayNombresAmigos = [];

function agregarAmigo() {
    let inputFriend = document.getElementById("amigo");
    let nombreAmigo = inputFriend.value.trim();
    console.log(nombreAmigo);
    
    if (nombreAmigo == '') {
        alert("Ingresa el nombre de tu amigo");
        inputFriend.value = '';
        return;
    }

    const listaNombres = document.getElementById("listaAmigos");
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.innerText = nombreAmigo;
    listaNombres.appendChild(nuevoAmigo);
    arrayNombresAmigos.push(nombreAmigo);

    inputFriend.value = '';
    return arrayNombresAmigos;
}

function sortearAmigo() {
    const randomNumber = Math.floor(Math.random()*arrayNombresAmigos.length);
    for (let i = 0; i < arrayNombresAmigos.length; i++) {
        console.log(arrayNombresAmigos[i]);
    }
    const title = document.getElementById("mostrarAmigoSecreto");
    title.innerText = `El nombre del amigo ganador es: ${arrayNombresAmigos[randomNumber]}`;
}