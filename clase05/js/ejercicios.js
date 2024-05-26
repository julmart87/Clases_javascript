// 1. Crea un objeto llamado `persona` con las propiedades `nombre`, `edad` y `ciudad`. Imprime en la consola el nombre de la persona.



// let nombre = "Julian";
// let edad = 36;
// let ciudad = "Mar del Plata";

// const julian = {
//     nombre: "Julian",
//     edad: 36,
//     ciudad: "Mar del Plata",
// };
// console.log(nombre);

// 2. Agrega una propiedad `telefono` al objeto `persona` y asigna un número de teléfono. Luego, imprime en la consola el teléfono.

// let telefono = 2235468877;
// const persona = {
//     telefono: 2235468877,
// };
// console.log(telefono);

// 3. Crea un objeto llamado `coche` con las propiedades `marca`, `modelo` y `año`. Imprime en la consola el modelo del coche.

// let marca = "Citroen";
// let modelo = "C3"
// let anio = 2007;

// const coche = {
//     marca: "Citroen",
//     modelo: "C4",
//     anio: 2007,
// };
// console.log(modelo);

// 4. Agrega una propiedad `color` al objeto `coche` y asigna un color. Luego, imprime en la consola el color.

let color = "Negro";
const coche = {
    marca: "Citroen",
    modelo: "C4",
    anio: 2007,
    color: "Negro",
};
console.log(color);

// 5. Crea un constructor llamado `Producto` con las propiedades `nombre`, `precio` y `cantidad`. Crea un objeto nuevo utilizando este constructor.

function producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
};

const productoUno = new producto("Alfajor Tito", 200, 10);
console.log(productoUno);

// 6. Crea un constructor llamado `Persona` con las propiedades `nombre`, `edad` y `ciudad`. Crea un objeto nuevo utilizando este constructor.

function persona(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
};

const roberto = new persona("Roberto", 60, "La Plata");
console.log(roberto);

// 7. Crea un constructor llamado `Libro` con las propiedades `titulo`, `autor` y `año`. Crea un objeto nuevo utilizando este constructor.

function libro(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
};

const libroNuevo = new libro("La oscuridad de tus ojos me cautiva", "Pedro Lokomotora Castrol", 2024);
console.log(libroNuevo);

// 8. Crea un objeto llamado `rectangulo` con las propiedades `base` y `altura`. Agrega un método llamado `calcularArea` que calcule y devuelva el área del rectángulo.























// 9. Crea un objeto llamado `circulo` con la propiedad `radio`. Agrega un método llamado `calcularPerimetro` que calcule y devuelva el perímetro del círculo.
// 10. Crea un objeto llamado `estudiante` con las propiedades `nombre`, `edad` y `curso`. Agrega un método llamado `presentarse` que imprima en la consola una presentación del estudiante.