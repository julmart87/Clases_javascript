// Declaraciones de variables usando ES5

// declaro y asigno una variable
var palabra = "Hola";
console.log(palabra); // Imprimo la variable palabra 

// Reasigno una variable
palabra = "como estan";
console.log(palabra); // Imprimo la variabla palabra resignada

var palabra // Declaro
palabara = "mundo"  // Asigno la variable
console.log(palabra) // Imprimo otra variable

// Declaracion de variable a partir de ECMAScript 6

let palabra1 = "hola"; // Asigno "hola" a la variable palabra1
console.log(palabra1);
palabra1 = "chau";     // Reasigno "chau" a la variable palabra 1
console.log(palabra1);

// Declaracion de Constantes

const CODER = "coderhouse";
console.log(CODER);
// las constantes no pueden ser reasignadas, porque nunca van a cambiar su valor!!

// Malas practicas  (nunca usar tildes, ñ )
let nombre1 = "Julian";
let nombre2 = "Alberto";

// Buenas practicas
let primerNombre = "Julian";
let segundoNombre = "Alberto";

let nombreCompletaDeLaPersona = "Julian Alberto Martinez";

const MAYUSCULA = "en mayuscula";

// Formas de declarar Numbers

let numero1 = 200; // Numero Entero
let numero2 = 20.5;  // Numero Flotante
const NUMERO = 200;

// Operaciones basicas (suma, resta, multiplicacion y division)

let a = 10;
let b = 2;

const RESULTADO1 = a + b;
const RESULTADO2 = a - b;
const RESULTADO3 = a * b;
const RESULTADO4 = a / b;

console.log(RESULTADO1);
console.log(RESULTADO2);
console.log(RESULTADO3);
console.log(RESULTADO4);

// Para concatenar dos o mas caracteres usamos el operador de suma (+)

const NOMBRE_COMPLETO = primerNombre + " " + segundoNombre;
console.log(NOMBRE_COMPLETO);


