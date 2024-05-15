/*
Variables y Constantes
1-Declara una variable llamada nombre y asígnale tu nombre.
2-Declara una constante llamada PI y asígnale el valor de π (pi).
*/

let nombre = "Julian";
const PI = 3.14;

/*
Booleanos
3-Declara una variable llamada esMayorDeEdad y asígnale true si tienes más de 18 años, o false si tienes 18 años o menos.
*/
// let edadDeUsuario = prompt("Ingrese su edad por favor");
// let esMayorDeEdad = edadDeUsuario > 18 ;
// console.log(esMayorDeEdad);

/*
Prompt, Alert y Console.log
4-Pide al usuario que ingrese su edad utilizando prompt y almacena el valor en una variable llamada edadUsuario.
5-Muestra un mensaje de alerta que diga "¡Hola!".
6-Imprime en la consola el mensaje "La edad ingresada es: [valor de edadUsuario]".
*/

// let edadUsuario = prompt("Ingrese su edad");
// alert("¡Hola!");
// console.log("La edad ingresada es " + edadUsuario);

/*
Control de Flujo con if y if else
7-Utilizando un if, verifica si un número ingresado por el usuario es positivo, negativo o cero, e imprime un mensaje correspondiente.
8-Utilizando un if else, verifica si un número ingresado por el usuario es par o impar, e imprime un mensaje correspondiente.
9-Utilizando un if else, verifica si un número ingresado por el usuario es mayor que 100, menor que 100 o igual a 100, e imprime un mensaje correspondiente.
*/

// let numeroIngresado = prompt("Ingrese un numero aqui!");

// if(numeroIngresado > 0) {
//     alert("El numero ingresado es positivo");
// } if(numeroIngresado < 0) {
//     alert("El numero ingresado es negativo");
// } if(numeroIngresado == 0) {
//     alert("El numero ingresado es 0");
// }

// if(numeroIngresado % 2 == 0) {
//     alert("El numero ingresado es par");
// } else {
//     alert("El numero ingresado es impar");
// }

// if(numeroIngresado > 100) {
//     alert("El numero ingresado es mayor a 100");
// }  else if(numeroIngresado < 100) {
//     alert("El numero ingresado es menor a 100");
// } else if(numeroIngresado = 100) {
//     alert("El numero ingresado es igual a 100");
// }

/*
Operadores Lógicos
10-Utilizando operadores lógicos, verifica si un número ingresado por el usuario es divisible tanto por 2 como por 3.
11-Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 0 y menor que 100.
12-Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 10 o menor que -10.
*/

// let numeroIngresado = parseInt(prompt("Ingrese un numero"));

// if(numeroIngresado % 2 === 0 && numeroIngresado % 3 === 0){
//     console.log("El numero " + numeroIngresado + "ingresado es divisible por dos y por tres a la vez.");
// } else {
//     console.log("el numero " + numeroIngresado + " no es divisible ni por dos ni por tres.");
// };

// if(numeroIngresado > 0 && numeroIngresado < 100) {
//     console.log("El numero " + numeroIngresado + " es mayor que cero y menor que 100");
// } else {
//     console.log("El numero " + numeroIngresado + " no cumple con las condiciones pedidas");
// };

// if(numeroIngresado > 10 || numeroIngresado < -10) {
//     console.log("El numero " + numeroIngresado + " es mayor a 10 o menor que  -10");
// } else {
//     console.log("El numero " + numeroIngresado + " no cumple con la condicion");
// };

/*
Ejercicios Adicionales
13-




18-Pide al usuario que ingrese su nombre utilizando prompt, luego verifica si comienza con la letra "A" o "a" e imprime un mensaje correspondiente.
19-Declara una variable llamada temperatura y asígnale un valor numérico que represente la temperatura actual. Luego, utilizando un if, imprime un mensaje que indique si hace frío, templado o caliente.

*/

// Ejercicio 13: Pide al usuario que ingrese un número utilizando prompt, luego verifica si es un número primo e imprime un mensaje correspondiente.

// let numeroIngresado = parseInt(prompt("Ingrese un numero para verificar si es primo o no!"));
// let esPrimo = true;

// for(let i = 2; i < numeroIngresado; i++) {
//     if(numeroIngresado % i  === 0) {
//         esPrimo = false;
//         break;
//     }
// }
// if(esPrimo) {
//     console.log("El numero " + numeroIngresado +  " es primo");
// } else {
//     console.log("El numero " + numeroIngresado + " no es primo");
// }

/*
Ingreso 4:

2 < 4
4 % 2 === 0 ?
esPrimo = false

Ingreso 7:

2 < 7
7 % 2 === 0 ?
esPrimo = true
*/

//14-Crea una variable llamada hora y asígnale un valor numérico que represente una hora del día. Luego, utilizando un if else, imprime un mensaje que indique si es mañana, tarde o noche.

// let hora = 13;

// if(hora <= 12 && hora > 5) {
//     console.log("Es la mañana!");
// } else if(hora >= 13 && hora < 19) {
//     console.log("Es la tarde!");
// } else {
//     console.log("Es la noche");
// };

//15-Pide al usuario que ingrese dos números utilizando prompt, luego verifica si el primero es divisible por el segundo e imprime un mensaje correspondiente.

// let numero1 = parseInt(prompt("Ingresa un numero"));
// let numero2 = parseInt(prompt("Ingresa otro numero"));
// if(numero1 % numero2 ) {
//     console.log("El numero " + numero1 + " es divisible por el numero " + numero2);
// } else {
//     console.log("El numero " + numero1 + " no es divisible por el numero " + numero2);
// };

//16-Crea una variable llamada nombreUsuario y asígnale un nombre. Luego, verifica si el nombre tiene más de 6 caracteres e imprime un mensaje correspondiente.

// let nombreUsuario = "Roberto";
// if(nombreUsuario.length > 6) {
//     console.log("el nombre " + nombreUsuario + " tiene mas de 6 caracteres.");
// } else {
//     console.log("el nombre " + nombreUsuario + " tiene 6 caracteres o menos.");
// };

//17-Utilizando un if else, verifica si un año ingresado por el usuario es bisiesto o no, e imprime un mensaje correspondiente.

let anio = parseInt(prompt("Ingrese un año aqui"));
if(anio % 4 === 0 && anio % 100 !== 0 || anio % 400 === 0) {
    console.log("El año ingresado es bisiesto");
} else {
    console.log("El año ingresado no es bisiesto");
};







//Contador:
// let numeroContador = prompt("Ingrese un numero para el contador");
// for(let contador = 0; contador < 10; contador ++) {
//     console.log(contador);
// };


//20-Pide al usuario que ingrese tres números utilizando prompt, luego verifica si la suma de los dos primeros números es igual al tercer número e imprime un mensaje correspondiente.


// let numero1 = parseInt(prompt("Ingrese el 1er numero"));
// let numero2 = parseInt(prompt("Ingrese el 2do numero"));
// let numero3 = parseInt(prompt("Ingrese el 3er numero"));

// if(numero1 + numero2 === numero3) {
//     console.log("El numero" + numero1 + "La suma de los dos primeros es igual al tercero! Ambos suman" + (numero1 + numero2));
// } else {
//     console.log("La suma de los dos primeros no es igual al tercero" + (numero1 + numero2) + ", y deberia sumar: " + numero3);
// };




