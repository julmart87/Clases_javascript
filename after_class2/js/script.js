
/* 
Declarar una clase Jugador que permita registrar nombre, 
número de camiseta, edad, y si está lesionado. 
Luego instanciar al menos cinco (5) objetos usando 
esta clase, y asociarlos a un array.
*/

const jugadores = [];

class Jugador {
    constructor(nombre, numeroDeCamiseta, edad, lesionado){
        this.nombre = nombre;
        this.numeroDeCamiseta = numeroDeCamiseta;
        this.edad = parseInt(edad);
        this.lesionado = lesionado || false;
    };

    estadoLesionado(){
        this.lesionado = true;
        console.log("El jugador " + this.nombre + " esta lecionado!");
    }
};

function crearJugador() {
    const nombre = prompt("Ingrese ele numero del jugador: ");
    const numeroDeCamiseta = parseInt(prompt("Ingrese el numero de camiseta"));
    const edad = parseInt(prompt("Ingrese la edad:" ));
};

for (let i = 0; i < 3; i++) {
    const nuevoJugador = crearJugador();
    jugadores.push(nuevoJugador);
}

const jugador1 = new Jugador("Agustin", 10, 20);
const jugador2 = new Jugador("Alejandro", 9, 22);
const jugador3 = new Jugador("Tomas", 7, 30);
const jugador4 = new Jugador("Emiliano", 4, 20);
const jugador5 = new Jugador("Fernando", 8, 25);

jugadores.push(jugador1);
jugadores.push(jugador2);
jugadores.push(jugador3);
jugadores.push(jugador4);
jugadores.push(jugador5);


console.log(jugadores);


















