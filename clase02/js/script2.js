let ingreseSuNombre = prompt("Ingrese su nombre");
let ingreseSuApellido = prompt("Ingrese su apellido");
// let ingreseSuEdad = prompt("Ingrese su edad");
const VACIO = ""; // Esta constante esta vacia

// if(ingreseSuNombre != VACIO && ingreseSuApellido != VACIO) {
//     if(ingreseSuEdad != VACIO) {
//         alert("Su nombre es " + ingreseSuNombre + " " + ingreseSuApellido + " y tienes " + ingreseSuEdad + " años de edad!");
//     } else {
//         alert("Su nombre es " + ingreseSuNombre + " " + ingreseSuApellido);
//     }
// } else {
//     alert("Falta ingresar informacion");
// }


if(ingreseSuNombre != VACIO || ingreseSuApellido != VACIO) { 
    let ingreseSuEdad = prompt("Ingrese su edad");
    if(ingreseSuEdad != VACIO) {
        alert("Su nombre es " + ingreseSuNombre + " " + ingreseSuApellido + " y tiene " + ingreseSuEdad + " años de edad!");
    } else {
        alert("Su nombre es " + ingreseSuNombre + " " + ingreseSuApellido);
    }
} else {
    alert("Falta informacion");
}