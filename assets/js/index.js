// La idea es hacer un sistema para cargar el stock de la tienda.

/* alert("Ingresaste al panel de administrador");

let bebida;
let cantidadEnAlmacen;
let precioBebida;

class Bebidas {
    constructor(nombre, cantidad, precio) {
        this.nombre = bebida;
        this.stock = cantidadEnAlmacen;
        this.precio = precioBebida;
    }
    sumarIva (){
        return (this.precio * 1.21);
    }
}

const stock = [];

function sumarStock(){
    stock.push (new Bebidas(bebida = prompt("Ingrese el nombre de la bebida a ingresar"),cantidadEnAlmacen = +(prompt("Ingrese la cantidad de botellas que sumará al stock")), precioBebida = +(prompt("Ingrese el precio por unidad de la bebida ingresada"))  ))
}

let cantidadIngresos;

do{
    cantidadIngresos = +(prompt("Ingrese la cantidad de productos a ingresar"));
} while(isNaN(cantidadIngresos));

for (let i = 0; i < cantidadIngresos; i++){
    sumarStock ();
};


function listarProductos() { //Utilizar esta funcion en consola
    console.clear()
    console.table(stock)
}

function consultarStock(){
    alert("Actualmente, disponemos de un total de " + stock.length + " productos en stock ") ///Utilizar esta funcion en consola
} */

function cargarProductos() {
    listadoBebidas.innerHTML = ""
    for (const producto of productos) {
        const li = document.createElement("li")
            li.className = "collection-item blue-text"
            li.innerText = producto
            li.id = producto + "Prod"

            li.addEventListener("click", ()=> { agregar(`${li.innerText}`) } )
            listadoFrutas.append(li)
    }
}

cargarProductos()
