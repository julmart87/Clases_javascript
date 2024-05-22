// ARRAYS
//Es un tipo de dato que sirve para almacenar valores en forma de lista

const arrayVacio = [];

// Tipos de datos dentro del Array

// Tipo Numerico
const arrayNumerico = [1, 2, 3, 4, 5]; 
// Tipo Caracter
const arrayConLetras = ['a', 'b', 'c',]; 
// Tipo String
const arrayConString = ["Hola", "mundo", "como", "va?"]; 
// Tipo Booleano
const arrayBoolean = [true,false]; 
// TipoMixto
const arrayMixto = ['a', 23, "hola", true]; 
// Tipo Objetos
const arrayObjetos = [
    {nombre: "producto1", cantidad: 5},
    {nombre: "producto2", cantidad: 10}
];  

const arrayMixtoConObjetos = ['b', 15, "chau", true, {nombre: "producto3", cantidad: 8}]; // Tipo mixto con objetos


console.log(arrayNumerico[5]);
console.log(arrayObjetos[1]);

// for (let index = 0; index < 5; index++) {
//     alert(arrayNumerico[index]);
// };

// for (let index = 0; index < 5; index++) {
//     alert(arrayMixtoConObjetos[index]);
// };

// console.log(arrayNumerico.length);
// console.log(arrayMixtoConObjetos.length);

// for (let index = 0; index < arrayMixtoConObjetos; index++) {
//     alert(arrayMixtoConObjetos[index]);
// };


// Agregar elementos a un Array

// Push
// agregar un elemento array al final
arrayMixto.push("al final"); 
console.log(arrayMixto);
// Unshift 
//Agrega un elemento array al principio
arrayMixto.unshift("al principio"); 
console.log(arrayMixto);
// Pop
// Elimina un elemento del final
arrayMixto.pop(); 
console.log(arrayMixto);
// Shift
// Elimina un elemento al principio
arrayMixto.shift(); 
console.log(arrayMixto);


//Splice
// Este metodo permite eliminar uno o varios elementos de una array en cualquier posicion.
arrayMixto.splice(1, 2); 
console.log(arrayMixto);


// Join
//Mediante un metodo Join podemos generar un string con todos los elementos de array, separados por el valor que pasamos por parametro
const arrayConJoin = ["Hola", "como va?", "todo bien?"];
console.log(arrayConJoin.join(","));


// Concat
// Mediante el metodo Concat podemos combinar dos arrays en un unico array resultante
const arrayConString2 = ["Hola", "mundo", "como", "va?"]; 
const arrayMixto2 = ['a', 23, "hola", true];
console.log(arrayConString2.concat(arrayMixto2));

// Slice
// Este metodo devuelve una copia de una parte de un array dentro de un nuevo array
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3);
//Masculinos contiene ['Pedro', 'Miguel']


// IndexOf
// Este metodo nos pertime obtener el indice de un elemento en un array.
console.log(nombres.indexOf("Rita"));
console.log(nombres.indexOf("Ana"));


// Includes
// Me permite saber si un elemento que recibo por parametro existe o no dentro de un array, retomando un valo booleano.
console.log(nombres.includes("Rita")); // True
console.log(nombres.includes("Ana"));  // True
console.log(nombres.includes("Auto")); // false


// Reverse
// El metodo reverse invierte el orden de los elementos dentro de un array
console.log(arrayConString);
console.log(arrayConString.reverse());



// Array de objetos
//Pueden usarse para almacenar objetos personalizados.


const arrayObjetos2 = [
    {nombre: "producto1", cantidad: 5},
    {nombre: "producto2", cantidad: 10}
];

arrayObjetos2.push({nombre: "Producto5", cantidad: 60});

console.log(arrayObjetos2);

const productos = [
    { id: 1, producto: "Arroz" },
    { id: 2, producto: "Fideo" },
    { id: 3, producto: "Pan" }, 
];

for(const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
};

























