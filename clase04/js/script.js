
//Funciones

// function saludar() {
//     console.log("Hola Mundo");
// }
// saludar();


// function pedirNombre(){
//     let ingresaNombre = prompt("Ingrese su nombre");
//     alert("Tu nombre es " + ingresaNombre);
// }
// pedirNombre();


//Parametros

// function usandoParametros(parametro1, parametro2, parametro3) {
//     console.log(parametro1 + parametro2 + parametro3);
// };
// usandoParametros(3, 5, 7);
// usandoParametros("hola ", "a", " todos!");
// usandoParametros(true, false, true);


let resultado;
function sumar(p1, p2) {
    resultado = p1 + p2;
}

// function mostrarResultado(resultado) {
//     console.log(resultado);
// }

sumar(2, 3);
console.log(resultado);

sumar(10, 40);
console.log(resultado);

sumar(200, 300);
console.log(resultado);

//Return
function sumarConReturn(p1, p2) {
    let resultadoConReturn = p1 + p2;
    return resultadoConReturn;
}
console.log(sumarConReturn(2, 3));


function sumando(p1, p2) {
    return p1 + p2;
};
let resultados = sumando(12, 6);
console.log(resultados);


// Calculadora:

function calculadora(numero1, numero2, numero3) {
    switch(operacion) {
        case "+": 
        return numero1 + numero2;
        break;
        case "-": 
        return numero1 - numero2;
        break;
        case "*": 
        return numero1 * numero2;
        break;
        case "/": 
        if(numero2 != 0) {
            return numero1 / numero2;
        } else {
            alert("No se puede dividir por cero!");
        };
        return numero1 / numero2;
        break;
        default: 
        return 0;
        break;
    }
}

console.log(calculadora(2, 0, "/"));

//Funciones anonimas:

const suma = function(a, b) {return a + b}
console.log(suma(2, 5));

const resta = function(a, b) {return console.log(a -b)} // Aca inserto el console.log dentro del return
resta(80, 50); 

//Funciones flecha:

const multiplicar = (a, b) => {return console.log(a * b)};

const restar = (a, b) => console.log(a / b); //Tiene un return implicito(no hace falta escribirlo)

multiplicar(4, 6);
restar(8, 2);


const iva = x => x * 0.21; //Ejemplo para calcular el iva
console.log(iva(100)); // El iva de 100 es 21

const dividir = (a, b) => {
    if(b != 0) {
        return a / b }
        else {
            alert("No se pude dividir por cero!");
        }
    };
console.log(dividir(6, 0));

























