// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreParticipantes = [];
function agregarAmigo () {
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor ingresa un nombre");
    } else {
        nombreParticipantes.push(nombre);
        document.getElementById("amigo").value = "";
        mostrarParticipantes();
    }
}
function mostrarParticipantes() {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    for (let i = 0; i < nombreParticipantes.length; i++) {
        lista.innerHTML += `<li>${nombreParticipantes[i]}</li>`;
    }
}

function sortearAmigo() {
    resultado = document.getElementById("resultado");
    lista = document.getElementById("listaAmigos");
    resultado.innerHTML = "";
    if (nombreParticipantes.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }
    indiceAleatorio = Math.floor(Math.random() * nombreParticipantes.length);
    amigoSorteado = nombreParticipantes[indiceAleatorio];
    resultado.innerHTML = "<li>El amigo sorteado es: " + amigoSorteado + "</li>";
    lista.innerHTML = "";
}
