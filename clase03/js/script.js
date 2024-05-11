let a;
a = 0;
console.log(a);
a = a + 1;
console.log(a);
a = a + 1;
console.log(a);
a = a + 1;
console.log(a);

for(let i = 0; i < 10; i++) {
    console.log(i);
}

/*
1ra vuelta:
i = 0
console.log(i) = 0

2da vuelta:
i = 1
console.log(i) = 1

i = 1 + 1 es lo mismo que decir i++
*/

// Ciclo for:(Un ciclo for se repite hasta que una condicion especificada se evalue como false)
// for(let i = 0; i <= 10; i++) {
//     console.log(i + " usando i++");
// };

// let ingreseSuNombre = prompt("Ingrese sus nombre");

// for(let i = 0; i < 5; i++) {
//     console.log("El nombre ingresado es " + ingreseSuNombre + " " + i);
// };

// Sentencia Break: (rompe en la sentencia indicada)
// for(let i = 0; i < 15; i++){
//     if(i == 5){
//         break;
//     }
//     console.log("El nombre ingresado es " + ingreseSuNombre + " " + i);
// };

// Sentencia Continue: (salta la sentencia indicada)
// for(let i = 0; i < 15; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log("El nombre ingresado es " + ingreseSuNombre + " " + i);
// };

// utilizando el metodo "length"
let nombre = "Julian";
for(let i = 0; i < nombre.length; i++){
    console.log("Su nombre es: " + nombre + " iteracion Nro: " + i);
};

// Ciclo While:(Para que se ejecute se tiene que cumplir la condicon indicada)
// let i = 0;
// while(i < 10){
//     console.log("Imprimiendo desde el While " + i);
// };     // Se produce un bucle infinito!!

let i = 0;  // Variable global
while(i < 10) {
    console.log("Imprimiendo desde el While " + i);
    i++;
}; 

// Ciclo Do While:( El bloque de codigo se ejecuta al menos una vez, porque la condicion la ejecuta al final)
do {
    console.log("Imprimiendo desde el Do While " + i);
    i++;
} while(i < 10);



















