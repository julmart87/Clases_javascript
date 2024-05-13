let a = 1;   //Formato numerico
let b = "1"; //Formato string

let suma = a + b;
console.log(suma);
// el resultado es 11 porque la operacion suma me concateno

let sumaParceada = parseInt(a) + parseInt(b);
console.log(sumaParceada);
// el resultado es  2 (la suma)

//Utilizando parseInt:
// let ingreseUnNumeroA = prompt("Ingrese el 1er Numero");
// let ingreseUnNumeroB = prompt("Ingrese el 2do Numero");
// let resultado = ingreseUnNumeroA + ingreseUnNumeroB;
// console.log(resultado);

// Utilizando parseInt: (para numeros enteros)
// let ingreseUnNumeroA = prompt("Ingrese el 1er Numero");
// let ingreseUnNumeroB = prompt("Ingrese el 2do Numero");
// let resultado = parseInt(ingreseUnNumeroA) + parseInt(ingreseUnNumeroB);
// console.log(resultado);

// Utilizando parseFloat: (para numeros decimales)
// let ingreseUnNumeroD = prompt("Ingrese el 1er Numero");
// let ingreseUnNumeroE = prompt("Ingrese el 2do Numero");
// let resultado2 = parseFloat(ingreseUnNumeroD) + parseFloat(ingreseUnNumeroE);
// console.log(resultado2);

// Switch (esta diseñada para manejar multiples condiciones sobre la misnma variebale)
// let edadIngresada = parseInt(prompt("Ingrese su edad aqui"));

// switch(edadIngresada) {
//     case edadIngresada >= 18:
//         alert("Usted es mayor de edad");
//     case edadIngresada > 0 && edadIngresada < 18:
//         alert("Usted es menor de edad");
//     case edadIngresada <= 0:
//         alert("Ingrese un numero mayor a 0");
//     default:
//         alert("La edad ingresada es incorrecta");
// }

let numero = parseInt(prompt("Ingrese un numero"));

switch(numero) {
    case 1:
        console.log("El numero ingresado es uno");
        break;
    case 2:
        console.log("El numero ingresado es dos");
        break;
    default:
        console.log("El numero no es ni uno ni dos");
        break;
}
















