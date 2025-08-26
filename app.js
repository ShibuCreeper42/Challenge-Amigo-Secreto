//Declaracion de variable/array
let amigos = [];                                                           

//funcion para cambiar el texto reflejado en el html
function asignarTextoElemento(elemento, texto) {       
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//funcion para mostrar la lista de nombres ingresados en pantalla
function mostrarLista() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';
//forEach repite la accion por la cantida de elementos almacenados
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    })
}

//verificamos la entrada que no este vacia o un nombre con menos de 3 letras o un nombre ya almacenado
function agregarAmigo() {
    let entrada = document.getElementById('amigo').value.trim();
    if (entrada == '' || entrada.length < 3 || amigos.includes(entrada)) {
        alert("Por favor, inserte un nombre valido o que no se repita");
    }
//si todo esta bien con el nombre se almacena en el array y se borra la caja de entrada
    else {
        amigos.push(entrada);
        mostrarLista();
        document.querySelector('#amigo').value = '';
        return;
    }
}

//se verifica si hay mas de dos nombres para poder sortear
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes colocar por lo menos dos amigos para sortear');
    }
//se genera un numero aleatorio por la cantidad de nombres ingresados y se compara con el numero correspondiente al array
//se cambian los mensajes en pantalla para dar a conocer el nombre elegido 
    else {
let sorteo = Math.floor(Math.random()*amigos.length);
let amigoSecreto = amigos[sorteo];
asignarTextoElemento('h2', 'FELICIDADES!!!')
asignarTextoElemento('#resultado', `Tu amigo secreto es ${amigoSecreto}.`);
    }
}