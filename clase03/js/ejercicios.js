//1. Declara una variable llamada `edad` y asígnale un valor numérico. Utiliza un `if else` para imprimir en la consola si la persona es mayor de edad o no, basándote en el valor de `edad`.
let edad = 30;
// if(edad >= 18) {
//     console.log("Usted tiene " + edad + " años de edad, por lo tanto es mayor de edad");
// } else {
//     console.log("Usted tiene " + edad + " años de edad, por lo tanto es menor de edad");
// };

//2. Utilizando un `if else` y operadores lógicos, verifica si un número ingresado por el usuario es positivo y par, e imprime un mensaje correspondiente.
// let numeroUsuario = parseInt(prompt("Ingrese un numero"));
// if(numeroUsuario >= 0 && numeroUsuario % 2 == 0) {
//     console.log("El numero ingresado " + numeroUsuario + " es positivo y par!");
// } else if(numeroUsuario < 0) {
//     console.log("El numero ingresado es negativo");
// } else {
//     console.log("El numero ingresado " + numeroUsuario + " no cumple con ambas consiciones!");
// };

//3. Pide al usuario que ingrese dos números utilizando `prompt`. Luego, utiliza un `if else` y operadores lógicos para determinar si el primer número es mayor, menor o igual al segundo, e imprime un mensaje correspondiente.
// let numero1 = parseInt(prompt("Ingrese un numero aqui"));
// let numero2 = parseInt(prompt("Ingrese otro numero aqui"));
// if(numero1 > numero2) {
//     console.log("el numero " + numero1 + " es mayor a " + numero2);
// } else if(numero1 < numero2) {
//     console.log("el numero " + numero1 + " es menor a " + numero2);
// } else if(numero1 === numero2) {
//     console.log("el numero " + numero1 + " es igual a " + numero2);
// } else {
//     console.log("El numero ingresado es incorrecto");
// }

//4. Utiliza un bucle `for` para imprimir en la consola los números del 1 al 10.

// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// };

//5. Pide al usuario que ingrese un número utilizando `prompt`. Utiliza un bucle `while` para imprimir en la consola los números desde 1 hasta el número ingresado por el usuario.

// let numeroIngresado = parseInt(prompt("Ingrese un numero aqui!"));
// let contador = 0; 
// while(contador <= numeroIngresado) {
//     console.log(contador);
//     contador++;
// };

//6. Utiliza un bucle `do while` para imprimir en la consola los números del 10 al 1.
// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while(i > 0);

//7. Declara una constante llamada `TEMPERATURA_MAXIMA` y asígnale un valor numérico que represente la temperatura máxima permitida. Luego, pide al usuario que ingrese la temperatura actual utilizando `prompt`. Utiliza un `if else` para imprimir un mensaje en la consola indicando si la temperatura actual supera la temperatura máxima permitida.
// let temperaturaActual = parseInt(prompt("Ingrese la temperatura actual"));
// const TEMPERATURA_MAXIMA = 50;
// const TEMPERATURA_MINIMA = -20;

// if(temperaturaActual <= TEMPERATURA_MAXIMA && temperaturaActual >= TEMPERATURA_MINIMA) {
//         console.log("La tempratura de " + temperaturaActual + " grados esta dentro del rango permitido");
// } else if(temperaturaActual < TEMPERATURA_MINIMA) {
//     console.log("CUIDADO! La temperatura ingresada Supero a la minima permitida!!");
// }
// else {
//     console.log("La temperatura ingresada " + temperaturaActual + " grados, supera los " + TEMPERATURA_MAXIMA + " grados, que es la maxima permitida..");
// };

//8. Pide al usuario que ingrese su edad utilizando `prompt`. Utiliza un `if else` y operadores lógicos para imprimir en la consola si la persona es un adolescente (entre 13 y 19 años), un adulto (mayor de 19 años) o un niño (menor de 13 años).
// let edadDeUsuario = parseInt(prompt("Por favor ingrese su edad."));
// if(edadDeUsuario >= 13 && edadDeUsuario <= 19) {
//     console.log("Usted es un adolecente!");
// } else if(edadDeUsuario > 19) {
//     console.log("Usted es mayor de edad!");
// } else {
//     console.log("Usted es menor de edad!");
// };

//9. Utiliza un bucle `for` para imprimir en la consola los números pares del 1 al 20.
// for(let i = 1; i <= 20; i % 2) {
//     console.log(i++);
// };

//10. Pide al usuario que ingrese un número utilizando `prompt`. Utiliza un bucle `while` para imprimir en la consola los números desde el número ingresado por el usuario hasta 1.
// let numeroUsuario = parseInt(prompt("Ingrese un numero aqui:"));
// while(numeroUsuario >= 1) {
//     console.log(numeroUsuario);
//     numeroUsuario--;
// };

//11. Utiliza un bucle `do while` para imprimir en la consola la tabla del 5 (del 5 al 50).
// let i = 5;
// do {
//     console.log(i);
//     i += 5;
// } while(i <= 50);

//12. Declara dos variables, `numero1` y `numero2`, y asígnales valores numéricos diferentes. Utiliza un `if else` para imprimir en la consola cuál de los dos números es mayor.
// let numero1 = 20;
// let numero2 = 40;
// if(numero1 > numero2) {
//     console.log("el numero " + numero1 + " es mayor que " + numero2);
// } else if(numero1 < numero2) {
//     console.log("el numero " + numero2 + " es mayor que " + numero1);
// } else {
//     console.log("Los numeros ingresados son invalidos!!!");
// };

//13. Pide al usuario que ingrese tres números utilizando `prompt`. Utiliza un `if else` y operadores lógicos para imprimir en la consola el número más grande de los tres.
// let n1 = parseInt(prompt("Ingrese el primer numero"));
// let n2 = parseInt(prompt("Ingrese el segundo numero"));
// let n3 = parseInt(prompt("Ingrese el tercer y ultimo numero"));
// if(n1 > n2 && n1 > n3) {
//     console.log(n1);
// } else if(n2 > n1 &&  n2 > n3) {
//     console.log(n2);
// } else if(n3 > n1 && n3 > n2) {
//     console.log(n3);
// } else {
//     console.log("Ingrese numeros distintos!");
// };

//14. Utiliza un bucle `for` para imprimir en la consola los números del 1 al 100 que son divisibles por 3.
// let i =1;
// for( i % 3 === 0; i <= 100;i++) {
//     console.log(i);
// };

//15. Pide al usuario que ingrese un número utilizando `prompt`. Utiliza un bucle `while` para imprimir en la consola los números desde el número ingresado por el usuario hasta el doble de ese número.
// let numeroIngresado = parseInt(prompt("Ingrese un numero aqui!"));
// let contador = numeroIngresado;
// while(contador <= numeroIngresado * 2) {
//     console.log(contador);
//     contador++;
// };

//16. Utiliza un bucle `do while` para imprimir en la consola los números impares del 1 al 25.
// let i = 1;
// do {
//     console.log(i);
//     i += 2;
// } while(i <= 25);

// Ejercicio 16:
// Utiliza un bucle `do while` para imprimir en la consola los números impares del 1 al 25.
// let i = 1;

// do {
//     if(i % 2 !==0) { // q   ue no sea divisible por 2
//         console.log(i);
//         i++;
//     } while(i <= 25);
// }

// Ejercicio 17:
//Pide al usuario que ingrese un día de la semana utilizando `prompt`. Utiliza una declaración `switch` para imprimir en la consola si es un día laboral o un día de descanso.
// let ingreseUnDia = prompt("Ingrese un dia de la semana!");
// switch(ingreseUnDia.toLowerCase()) { // toLowerCases siempre convierte el string ingresado en minuscula
//     case "lunes":
//     case "martes":
//     case "miercoles":
//     case "jueves":
//     case "viernes":
//         console.log("Es un dia laboral")
//         break;
//         case "sabado":
//         case "domingo":
//             console.log("Es un dia de descanso")
//             break;
//         default:
//             console.log("Dia invalido")
//             break;
// }

//18. Pide al usuario que ingrese un número del 1 al 7 utilizando `prompt`, donde 1 sea domingo y 7 sea sábado. Utiliza una declaración `switch` para imprimir en la consola el nombre del día de la semana correspondiente al número ingresado por el usuario.
// let numeroI = parseInt(prompt("Ingrese un numero del 1 al 7 :)"));
// switch(numeroI) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Lunes");
//         break;
//     case 3:
//         console.log("Martes");
//         break;
//     case 4:
//         console.log("Miercoles");
//         break;
//     case 5:
//         console.log("Jueves");
//         break;  
//     case 6:
//         console.log("Viernes");
//         break;
//     case 7:
//         console.log("Sabados");
//         break; 
//     default:
//         console.log("El numero ingresado es invalido");
// };

// 19. Pide al usuario que ingrese el nombre de un mes utilizando `prompt`. Utiliza una declaración `switch` para imprimir en la consola la cantidad de días que tiene ese mes.
// let mes = prompt("Ingrese el nombre de un mes");
// switch(mes.toLowerCase()) {
//     case "enero":
//         console.log("Enero tiene 31 dias");
//         break;
//     case "febrero":
//         console.log("Febrero tiene 28 dias");
//         break;
//     case "marzo":
//         console.log("Marzo tiene 31 dias");
//         break;
//     case "abril":
//         console.log("Abril tiene 30 dias");
//         break;
//     case "mayo":
//         console.log("Mayo tiene 31 dias");
//         break;
//     case "junio":
//         console.log("Junio tiene 30 dias");
//         break;
//     case "julio":
//         console.log("Julio tiene 31 dias");
//         break;
//     case "agosto":
//         console.log("Agosto tiene 31 dias");
//         break;
//     case "septiembre":
//         console.log("Septiembre tiene 30 dias");
//         break;
//     case "octubre":
//         console.log("Octubre tiene 31 dias");
//         break;
//     case "noviembre":
//         console.log("Noviembre tiene 30 dias");
//         break;
//     case "diciembre":
//         console.log("Diciembre tiene 30 dias");
//         break;
//     default:
//         console.log("No se ingreso un mes correcto.");
// };
// Ejercicio 19 (Mas corto)
// let nombreMes = prompt("Ingresa el nombre de un mes:");
// switch (nombreMes.toLowerCase()) {
//     case "enero":
//     case "marzo":
//     case "mayo":
//     case "julio":
//     case "agosto":
//     case "octubre":
//     case "diciembre":
//         console.log("Este mes tiene 31 días.");
//         break;
//     case "abril":
//     case "junio":
//     case "septiembre":
//     case "noviembre":
//         console.log("Este mes tiene 30 días.");
//         break;
//     case "febrero":
//         console.log("Este mes tiene 28 o 29 días.");
//         break;
//     default:
//         console.log("Nombre de mes inválido.");
//         break;
// }

//20. Pide al usuario que ingrese un número del 1 al 12 utilizando `prompt`, donde 1 sea enero y 12 sea diciembre. Utiliza una declaración `switch` para imprimir en la consola el nombre del mes correspondiente al número ingresado por el usuario.

let num = parseInt(prompt("Ingrese un numero del 1 al 12  :)"));
switch(num) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    default:
        console.log("Mes incorrecto!!!");
};

