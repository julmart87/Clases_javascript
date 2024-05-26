// Clases
class Vehiculo{
    constructor(tipo, marca, condicion, color) {
        this.tipo = tipo;
        this.marca = marca;
        this.condicion = condicion;
        this.color = color;
    }
    // Creamos metodos
    enciende() {
        console.log("El vehiculo " + this.tipo + " esta encendido");
    }
}

// Para construir un vehiculo, hago una instancia de la clase

const auto = new Vehiculo("auto", "Nissan", "Usando", "Fucsia");
console.log(auto);
auto.enciende();


const lancha = new Vehiculo("Lancha", "Honda", "Nueva", "Blanca");
console.log(lancha);


class Producto {
    constructor(nombre, descripcion, categoria, precio, stock) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = parseFloat(precio); 
        this.stock = parseInt(stock);
    }

    agregamosIva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        console.log("El producto " + this.nombre + " fue vendido.");
    }
}

const producto1 = new Producto("Azucar", "Azucar Blanca", "Almacen", 1000.50, 50);
console.log(producto1);
producto1.agregamosIva();
producto1.vender();

