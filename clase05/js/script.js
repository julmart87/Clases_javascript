// Objetos

let nombre = "Marcos";
let edad = 18;
let colorDeOjos = "Azules";
let altura = 1.78;
let estadoCivil = "Soltero";

//Vamos a armar un objeto
const marcos =  { 
    nombre: "Marcos", 
    edad: 18, 
    colorDeOjos: "Azules", 
    altura: 1.78, 
    estadoCivil: "Soltero"
};
console.log(marcos);


console.log(marcos.nombre); //imprimiendo el atributo nombre
console.log(marcos.edad); //imprimiendo el atributo edad
console.log(marcos.colorDeOjos); //imprimiendo el atributo colorDeOjos
console.log(marcos["altura"]); //imprimiendo el atributo altura
console.log(marcos["estadoCivil"]); //imprimiendo el atributo estadoCivil

// Modificando atributos del objeto

marcos.estadoCivil = "Casado";
console.log("Marcos: ", marcos);
marcos["Nombre"] = "Marcos Mellobovsky";
console.log("Marcos: ", marcos);
marcos.edad = 19;
console.log("Marcos ", marcos);


//Constructores
function persona(nombre, edad, colorDeOjos, altura, estadoCivil){
    this.nombre = nombre;
    this.edad = edad;
    this.colorDeOjos = colorDeOjos;
    this.altura = altura;
    this.estadoCivil = estadoCivil;
}

//Vamo a hcer una instancia del objeto persona
//¿como lo hacemos?? Usando new
const ernesto = new Persona("Ernesto", 36, "Marrones", 1.73, "Es Complicado");
console.log("Ernesto; ", ernesto);

const victoria = new Persona("Victoria", 32, "Marrones", 1.63, "Noviazgo");
console.log("Victoria: ", victoria);

//Construccion literal de un objeto
function PersonaLiteral(literal) {
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.colorDeOjos = literal.colorDeOjos;
    this.altura = literal.altura;
    this.estadoCivil = literal.estadoCivil;
}
const marcos = new PersonaLiteral({
    nombre: "Marcos", 
    edad: 18, 
    colorDeOjos: "Azules", 
    altura: 1.78, 
    estadoCivil: "Soltero"
})


// Diferecncia entre funcion y metodo

//Funcion
function hola() {
    return console.log("Hola");
}
hola();

// Metodo constructor (Solo el metodo constructor empieza con mayuscula)
function PersonaLiteral(literal) {
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.colorDeOjos = literal.colorDeOjos;
    this.altura = literal.altura;
    this.estadoCivil = literal.estadoCivil;
}

//El string es un objeto

function persona2(nombre, edad, colorDeOjos, altura, estadoCivil){
    this.nombre = nombre;
    this.edad = edad;
    this.colorDeOjos = colorDeOjos;
    this.altura = altura;
    this.estadoCivil = estadoCivil;
    this.saludar = function() {
        console.log("Hola mi nombre es: " + this.nombre)
    }
}
const juana = new Persona("Juana", 32, "Marrones", 1.63, "Noviazgo");
console.log("Juana: ", juana);
victoria.saludar();

// Operador IN y FOR...IN

//Usando IN
console.log("nombre" in juana);

//Usando Iterador FOR IN (Con esto recorremos un objeto y accedemos a sus atributos)
for (const dat in juana) {
    console.log(juana[dato]);
}






























