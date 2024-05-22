
// Vamos a simular a un carrito de compras:

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }

    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const carrito = [];

carrito.push(new Producto(1, "Arroz", 1000.5));
carrito.push(new Producto(2, "Azucar", 1200.5));
carrito.push(new Producto(3, "Leche", 850));
console.log(carrito);

for(const porCadaProducto of carrito) {
    porCadaProducto.sumarIva();
}









