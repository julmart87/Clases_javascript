// Funciones de orden superior
/**
 * Se declara uma variable que a travez de un itirador, va acumulando la suma del contador.
 */

// function sumarRango(inicio, fin) {
//     let total = 0;
//     for (let i = inicio; i <= fin; i++) {
//         total += i;
//     };
//     return total;
// };


// console.log(sumarRango(1, 5));
// console.log(sumarRango(1, 500));
// console.log(sumarRango(20, 30));


function mayorQue(numero) {
    return (numeroAComparar) => numeroAComparar > numero; //retorna una funcion anonima
};

const mayorQueDiez = mayorQue(10); //funcion del tipo flecha
console.log(mayorQueDiez(12)); // Numero a comparar = 12 true
console.log(mayorQueDiez(8)); // Numero a comparar = 8  false


function asignarOperacion(operacion) {
    if(operacion == "sumar") {
        return (a, b) => a + b;
    } else if (operacion == "restar") {
        return (a, b) => a - b;
    }
}

const functionSumar = asignarOperacion("sumar");
const functionRestar = asignarOperacion("restar");

console.log(functionSumar(4, 5)); // Se espera 9
console.log(functionRestar(8, 3)); // se espera 5


//Recibir una funcion por parametro
function porCadaElemento(myArray, myFunction) {
    for(const elemento of myArray) {
        myFunction(elemento);
    };
};

const numeros = [1, 2, 3, 4, 5];
porCadaElemento(numeros, console.log); // Cuando paso una funcion como parametro no lleva parentesis

// ejemplo 2
let total = 0;
function acumuladora(numero) {
    total += numero;
};
porCadaElemento(numeros, acumuladora); 
console.log(total);

//ejemplo 3
const numerosDuplicados = [];
porCadaElemento(numeros, (elemento) => {
    numerosDuplicados.push(elemento * 2);
})
console.log(numerosDuplicados);



















































