// Ejercicio 1 
/*
Imprime "Hola, mundo" en la consola.
Imprime tu nombre en la consola.
Muestra un mensaje de error en la consola.
*/

// console.log("Hola mundo");
// console.log("Julian");
// console.log(hola);

//Ejercicio 2
/*
Pide al usuario que ingrese su nombre y muestra su nombre en la consola.
Solicita al usuario que ingrese su edad y luego muestra un mensaje en la consola con esa edad.
*/

// let nombreDeUsuario = prompt("Ingrese su nombre aqui");
// console.log(nombreDeUsuario);

// let edadDeUsuario = prompt("Ingrese su edad");
// console.log(edadDeUsuario);

// Ejercicio 3
/*
Muestra un mensaje de bienvenida usando alert.
Pregunta al usuario su comida favorita y luego muestra un mensaje de alerta con esa comida.
*/

// alert("Binvenido");
// let comidaFavorita = prompt("Ingrese aqui su comida favorita");
// alert(comidaFavorita);

// Ejercicio 4
/*
Pide al usuario que ingrese su nombre y su edad utilizando un prompt.
Saluda al usuario utilizando un mensaje de alerta que contenga su nombre y su edad.
Calcula el año de nacimiento del usuario utilizando su edad ingresada y muestra este año en la consola.
Muestra un mensaje de alerta que indique si el usuario es menor de edad o mayor de edad, dependiendo de su edad ingresada.
*/

// let nombreDeUsuario = prompt("Ingrese su nombre aqui");
// let edadDeUsuario = prompt("Ingrese su edad aqui");
// alert("Hola " + nombreDeUsuario + " su edad es de " + edadDeUsuario + " años");

// let añoActual = 2024;
// let nacimientoUsuario = añoActual - edadDeUsuario;
// console.log(nacimientoUsuario);

// let resultado;
// if(edadDeUsuario >= 18) {
//     resultado = "Usted es mayor de edad";
// } else {
//     resultado = "Usted es menor de edad";
// }
// alert(resultado);

let edadIngresada = prompt("Ingrese su edad");

if(edadIngresada >= 18){
    alert("Usted es mayor de edad");
} else if(edadIngresada > 0 && edadIngresada < 18) {
    alert("Usted es menor de edad");
} else if(edadIngresada <= 0 ) {
    alert("La edad ingresada debe ser mayor a 0");
}
else {
    alert("Debe ingresar su edad");
}



