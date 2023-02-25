// NAV
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// PRODUCTOS

class Producto {
    constructor (id, tituto, imagen, categoria, precio){
        this.id = id;
        this.titulo = tituto;
        this.imagen = imagen;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidad = 1;
    }

}

// mantas
const manta1 = new Producto("manta-1", "Manta 1","./img/manta1.jpg", "mantas", 1000); 
const manta2 = new Producto("manta-2", "Manta 2","./img/manta2.jpg", "mantas" , 1000);
const manta3 = new Producto("manta-3", "Manta 3","./img/manta3.jpg", "mantas" , 1000);
const manta4 = new Producto("manta-4", "Manta 4","./img/manta4.jpg", "mantas" , 1000);
const manta5 = new Producto("manta-5", "Manta 5","./img/manta5.jpg", "mantas", 1000);
const manta6 = new Producto("manta-6", "Manta 6","./img/manta6.jpg", "mantas" , 1000);
// almohadones
const almohadon1 = new Producto("almohadon1", "Almohadon 1", "./img/almohadon1.jpg", "almohadon", 1000);
const almohadon2 = new Producto("almohadon2", "Almohadon 2", "./img/almohadon2.jpg", "almohadon", 1000);
const almohadon3 = new Producto("almohadon3", "Almohadon 3", "./img/almohadon3.jpg", "almohadon", 1000);
const almohadon4 = new Producto("almohadon4", "Almohadon 4", "./img/almohadon4.jpg", "almohadon", 1000);
const almohadon5 = new Producto("almohadon5", "Almohadon 5", "./img/almohadon5.jpg", "almohadon", 1000);
const almohadon6 = new Producto("almohadon6", "Almohadon 6", "./img/almohadon6.jpg", "almohadon", 1000);
const almohadon7 = new Producto("almohadon7", "Almohadon 7", "./img/almohadon7.jpg", "almohadon", 1000);
// alfombras
const alfombra1 = new Producto("alfombras1", "Alfombra 1", "./img/alfombra1.jpg", "alfombra", 1000);
const alfombra2 = new Producto("alfombras2", "Alfombra 2", "./img/alfombra2.jpg", "alfombra", 1000);
const alfombra3 = new Producto("alfombras3", "Alfombra 3", "./img/alfombra3.jpg", "alfombra", 1000);
const alfombra4 = new Producto("alfombras4", "Alfombra 4", "./img/alfombra4.jpg", "alfombra", 2000);
const alfombra5 = new Producto("alfombras5", "Alfombra 5", "./img/alfombra5.jpg", "alfombra", 1000);
const alfombra6 = new Producto("alfombras6", "Alfombra 6", "./img/alfombra6.jpg", "alfombra", 1000);
// cotinas
const cortina1 = new Producto("cortina1", "Cortina 1", "./img/cortina1.jpg", "cortina", 1000);
const cortina2 = new Producto("cortina2", "Cortina 2", "./img/cortina2.jpg", "cortina", 1000);
const cortina3 = new Producto("cortina3", "Cortina 3", "./img/cortina3.jpg", "cortina", 1000);

// array de productos

const productos = [manta1, manta2, manta3, manta4, manta5, manta6, almohadon1, almohadon2, almohadon3, almohadon4, almohadon5,
    almohadon6, almohadon7, alfombra1, alfombra2, alfombra3, alfombra4, alfombra5, alfombra6, cortina1, cortina2, cortina3]

const contenedorProductos = document.querySelector("#contenedorProducto");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
let botonesAgregados = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function agregarProductos() {

    contenedorProductos.innerHTML = "";

    productos.forEach(producto =>
        {
            let div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `   <div class="producto">
                                    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                                    <div class="producto-detalle">
                                        <h3 class="producto-titulo">${producto.titulo}</h3>
                                        <p class="producto-precio"> $${producto.precio}</p>
                                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                                    </div>
                                </div>
                            `
        contenedorProductos.append(div);
        })

        actualizarBotonesAgregados();
}

agregarProductos(productos);

const mantas = productos.filter((prod) => prod.categoria === 'mantas')
const almohadon = productos.filter((prod) => prod.categoria === 'almohadon')
const cortina = productos.filter((prod) => prod.categoria === 'cortina')
const alfombra = productos.filter((prod) => prod.categoria=== 'alfombra')
botonesCategoria.forEach((boton, idx) => {
    boton.addEventListener('click', () => {
        let botonDinamico = boton.id
        switch (botonDinamico) {
            case 'cortina':
                categoria(cortina)
                break;
            case 'mantas':
                categoria(mantas)
                break;
            case 'alfombra':
                categoria(alfombra)
                break;
            case 'almohadon':
                categoria(almohadon)
                break;
            default:
                agregarProductos()
                break;
        }
    })
})

function mostrarDiv() {
    let mostrar = document.getElementById("ocultar");
    mostrar.style.display = "block";
}
mostrarDiv();

function hide(){
    let hide1 = document.getElementById("productos");
    hide1.addEventListener("click", () => {
        let ocultar = document.getElementById("ocultar");
        ocultar.style.display = "none";
    });
}
hide();

function mostrarInicio() {
    let botonMostrarTodo = document.getElementById("todos");
    botonMostrarTodo.addEventListener("click", () => {
        mostrarDiv();
    });
}
mostrarInicio();

function categoria(array) {
    contenedorProductos.innerHTML = "";
    array.forEach(producto => {
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `   <div class="producto">
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalle">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio"> $${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        </div>
        `
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregados();
}

function actualizarBotonesAgregados(){
    botonesAgregados = document.querySelectorAll(".producto-agregar");

    botonesAgregados.forEach(boton => {
        boton.addEventListener("click", meterAlCarrito);
    })
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else{
    productosEnCarrito = [];
}

function meterAlCarrito(e){

    const idBton= e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBton);

    if(productosEnCarrito.some(producto => producto.id == idBton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}



































