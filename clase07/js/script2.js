function porCadaElemento(myArray, myFunction) {
    for(const elemento of myArray) {
        myFunction(elemento);
    };
};

const numeros = [1, 2, 3, 4, 5];
porCadaElemento(numeros, console.log);

let total = 0;
function acumuladora(numero) {
    total += numero;
};
porCadaElemento(numeros, acumuladora); 
console.log(total);


const numerosDuplicados = [];
porCadaElemento(numeros, (elemento) => {
    numerosDuplicados.push(elemento * 2);
})
console.log(numerosDuplicados);


// For each:
//Este metodo itera sobre el array y por cada elemento ejecuta la funcion que enviemos por parametro
numerosDuplicados.forEach( (numero) => {
    console.log(numero);
});

let nuevoArray = [];

numerosDuplicados.forEach( (numeros) => {
    nuevoArray.push(numeros - 1);
});

console.log(nuevoArray);


// Find
// Este metodo recibe una funcion de comparacion por parametro. Captura el elemento que esta corriendo y retorna true o false.
//Este metodo solo el primer elemento que cumpla con esa funcion.
const cursos = [
    {nombre: "JavaScript", cantidadDeAlumnos: 120},
    {nombre: "JavaScript", cantidadDeAlumnos: 110},
    {nombre: "React", cantidadDeAlumnos: 90},
    {nombre: "PHP", cantidadDeAlumnos: 60},
];
const resultado = cursos.find( (elemento) => elemento.nombre === "JavaScript");
console.log(resultado);


// Filter
// Recibe al igual que el Find una funcion comparadora por parametro y retoma un nuevo arraycon todos los elementos que cumplan esa condicion.
const resultadoFilter = cursos.filter( (elemento) => elemento.nombre.includes("JavaScript"));
console.log(resultadoFilter);


// Some
// funciona igual que el Find recibiendo una funcion de busqueda . En vez de retornar el elemento encontrado,
// some() retorna true o false.
const resultadoSome = cursos.some( (elemento) => elemento.nombre === "JavaScript");
console.log(resultadoSome);  // Retorna true


// Map
/* El metodo Map() crea un nuevo array con todos los elementos del original transformados segun
las operaciones de la funcion enviada por parametro. Tiene la misma cantidad de elementos pero los almacenados
son el return de la funcion.
*/
const resultadoMap = cursos.map( (elemento) => elemento.nombre);
console.log(resultadoMap);

// Ejemplo 2
const actualizarCantidadDeAlumnos = cursos.map( (elemento) => {
    return {
        nombreNuevo: elemento.nombre,
        cantidadNueva: elemento.cantidadDeAlumnos + 20
    };
});
console.log(actualizarCantidadDeAlumnos);


// Reduce
/* Nos permite obtener un unico valor tras iterar sobre el array.
Funciona como un metodo que resume el array a un unico valor de retorno.
*/
const numeros2 = [1, 2, 3, 4, 5, 6];
const totalEnNumeros = numeros.reduce( (acumulador, elemento) => acumulador + elemento,);
console.log(totalEnNumeros);


// Sort
/* El metodo Sort nos permite reordenar u array segun un criterio que definamos.
Recibe una una funcion de comparacion por parametro que a la vez, recibe dos elementos del array.
ESTE METODO ES DESTRUCTIVO!!!!! CUIDADO!!!! 
*/
const numerosDesordenados = [102, 25, 30, 80, 64];
console.log(numerosDesordenados);

numerosDesordenados.sort((a, b) => a - b); // Lo va a ordenar de forma ascendente
console.log(numerosDesordenados);

numerosDesordenados.sort((a, b) => a + b); // Lo va a ordenar de forma descendente
console.log(numerosDesordenados);




















