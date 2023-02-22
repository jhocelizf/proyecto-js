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

// // PRODUCTOS
// const productos = [
// // MANTAS
// {
//     "id": "manta-1",
//     "titulo": "manta 1",
//     "imagen": "./img/manta1.jpg",
//     "categoria": {
//         "nombre": "Mantas",
//         "id": "mantas"
//     },
//     "precio": 1000
// },
// {
//     "id": "manta-2",
//     "titulo": "manta 2",
//     "imagen": "./img/manta2.jpg",
//     "categoria": {
//         "nombre": "Mantas",
//         "id": "mantas"
//     },
//     "precio": 1000
// },
// {
//     "id": "manta-3",
//     "titulo": "manta 3",
//     "imagen": "./img/manta3.jpg",
//     "categoria": {
//         "nombre": "Mantas",
//         "id": "mantas"
//     },
//     "precio": 1000
// },
// {
//     "id": "manta-4",
//     "titulo": "manta 4",
//     "imagen": "./img/manta4.jpg",
//     "categoria": {
//         "nombre": "Mantas",
//         "id": "mantas"
//     },
//     "precio": 1000
// },
// {
//     "id": "manta-5",
//     "titulo": "manta 5",
//     "imagen": "./img/manta5.jpg",
//     "categoria": {
//         "nombre": "Mantas",
//         "id": "mantas"
//     },
//     "precio": 1000
// },
// {
//     "id": "manta-6",
//     "titulo": "manta 6",
//     "imagen": "./img/manta6.jpg",
//     "categoria": {
//         "nombre": "Mantas",
//         "id": "mantas"
//     },
//     "precio": 1000
// },
// // Almohadones
// {
//     "id": "almohadon-1",
//     "titulo": "almohadon 1",
//     "imagen": "./img/almohadon1.jpg",
//     "categoria": {
//         "nombre": "Almohadon",
//         "id": "almohadon"
//     },
//     "precio": 1000
// },
// {
//     "id": "almohadon-2",
//     "titulo": "almohadon 2",
//     "imagen": "./img/almohadon2.jpg",
//     "categoria": {
//         "nombre": "Almohadon",
//         "id": "almohadon"
//     },
//     "precio": 1000
// },
// {
//     "id": "almohadon-3",
//     "titulo": "almohadon 3",
//     "imagen": "./img/almohadon3.jpg",
//     "categoria": {
//         "nombre": "Almohadon",
//         "id": "almohadon"
//     },
//     "precio": 1000
// },
// {
//     "id": "almohadon-4",
//     "titulo": "almohadon 4",
//     "imagen": "./img/almohadon4.jpg",
//     "categoria": {
//         "nombre": "Almohadon",
//         "id": "almohadon"
//     },
//     "precio": 1000
// },
// {
//     "id": "almohadon-5",
//     "titulo": "almohadon 5",
//     "imagen": "./img/almohadon5.jpg",
//     "categoria": {
//         "nombre": "Almohadon",
//         "id": "almohadon"
//     },
//     "precio": 1000
// },
// {
//     "id": "almohadon-6",
//     "titulo": "almohadon 6",
//     "imagen": "./img/almohadon6.jpg",
//     "categoria": {
//         "nombre": "Almohadon",
//         "id": "almohadon"
//     },
//     "precio": 1000
// },
// {
//     "id": "almohadon-7",
//     "titulo": "almohadon 7",
//     "imagen": "./img/almohadon7.jpg",
//     "categoria": {
//         "nombre": "Almohadon",
//         "id": "almohadon"
//     },
//     "precio": 1000
// },
// // Alfombras
// {
//     "id": "alfombras1",
//     "titulo": "alfombra 1",
//     "imagen": "./img/alfombra1.jpg",
//     "categoria": {
//         "nombre": "Alfombra",
//         "id": "alfombra"
//     },
//     "precio": 1000
// },
// {
//     "id": "alfombras2",
//     "titulo": "alfombra 2",
//     "imagen": "./img/alfombra2.jpg",
//     "categoria": {
//         "nombre": "Alfombra",
//         "id": "alfombra"
//     },
//     "precio": 1000 
// },
// {
//     "id": "alfombras3",
//     "titulo": "alfombra 3",
//     "imagen": "./img/alfombra3.jpg",
//     "categoria": {
//         "nombre": "Alfombra",
//         "id": "alfombra"
//     },
//     "precio": 1000
// },
// {
//     "id": "alfombras4",
//     "titulo": "alfombra 4",
//     "imagen": "./img/alfombra4.jpg",
//     "categoria": {
//         "nombre": "Alfombra",
//         "id": "alfombra"
//     },
//     "precio": 1000
// },
// {
//     "id": "alfombras5",
//     "titulo": "alfombra 5",
//     "imagen": "./img/alfombra5.jpg",
//     "categoria": {
//         "nombre": "Alfombra",
//         "id": "alfombra"
//     },
//     "precio": 1000
// },
// {
//     "id": "alfombras6",
//     "titulo": "alfombra 6",
//     "imagen": "./img/alfombra6.jpg",
//     "categoria": {
//         "nombre": "Alfombra",
//         "id": "alfombra"
//     },
//     "precio": 1000
// },
// // CORTINAS
// {
//     "id": "cortina1",
//     "titulo": "cortina 1",
//     "imagen": "./img/cortina1.jpg",
//     "categoria": {
//         "nombre": "Cortina",
//         "id": "cortina"
//     },
//     "precio": 1000
// },
// {
//     "id": "cortina2",
//     "titulo": "cortina 2",
//     "imagen": "./img/cortina2.jpg",
//     "categoria": {
//         "nombre": "Cortina",
//         "id": "cortina"
//     },
//     "precio": 1000
// },
// {
//     "id": "cortina3",
//     "titulo": "cortina 3",
//     "imagen": "./img/cortina3.jpg",
//     "categoria": {
//         "nombre": "Cortina",
//         "id": "cortina"
//     },
//     "precio": 1000
// }
// ];

class producto {
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
const manta1 = new producto("manta-1", "manta 1","./img/manta1.jpg", "mantas", 1000); 
const manta2 = new producto("manta-2", "Manta 2","./img/manta2.jpg", "mantas" , 1000);
const manta3 = new producto("manta-3", "Manta 3","./img/manta3.jpg", "mantas" , 1000);
const manta4 = new producto("manta-4", "Manta 4","./img/manta4.jpg", "mantas" , 1000);
const manta5 = new producto("manta-5", "Manta 5","./img/manta5.jpg", "mantas", 1000);
const manta6 = new producto("manta-6", "Manta 6","./img/manta6.jpg", "mantas" , 1000);
// almohadones
const almohadon1 = new producto("almohadon1", "Almohadon 1", "./img/almohadon1.jpg", "almohadon", 1000);
const almohadon2 = new producto("almohadon2", "Almohadon 2", "./img/almohadon2.jpg", "almohadon", 1000);
const almohadon3 = new producto("almohadon3", "Almohadon 3", "./img/almohadon3.jpg", "almohadon", 1000);
const almohadon4 = new producto("almohadon4", "Almohadon 4", "./img/almohadon4.jpg", "almohadon", 1000);
const almohadon5 = new producto("almohadon5", "Almohadon 5", "./img/almohadon5.jpg", "almohadon", 1000);
const almohadon6 = new producto("almohadon6", "Almohadon 6", "./img/almohadon6.jpg", "almohadon", 1000);
const almohadon7 = new producto("almohadon7", "Almohadon 7", "./img/almohadon7.jpg", "almohadon", 1000);
// alfombras
const alfombra1 = new producto("alfombras1", "Alfombra 1", "./img/alfombra1.jpg", "alfombra", 1000);
const alfombra2 = new producto("alfombras2", "Alfombra 2", "./img/alfombra2.jpg", "alfombra", 1000);
const alfombra3 = new producto("alfombras3", "Alfombra 3", "./img/alfombra3.jpg", "alfombra", 1000);
const alfombra4 = new producto("alfombras4", "Alfombra 4", "./img/alfombra4.jpg", "alfombra", 1000);
const alfombra5 = new producto("alfombras5", "Alfombra 5", "./img/alfombra5.jpg", "alfombra", 1000);
const alfombra6 = new producto("alfombras6", "Alfombra 6", "./img/alfombra6.jpg", "alfombra", 1000);
// cotinas
const cortina1 = new producto("cortina1", "Cortina 1", "./img/cortina1.jpg", "cortina", 1000);
const cortina2 = new producto("cortina2", "Cortina 2", "./img/cortina2.jpg", "cortina", 1000);
const cortina3 = new producto("cortina3", "Cortina 3", "./img/cortina3.jpg", "cortina", 1000);

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
                Categoria(cortina)
                break;
            case 'mantas':
                Categoria(mantas)
                break;
            case 'alfombra':
                Categoria(alfombra)
                break;
            case 'almohadon':
                Categoria(almohadon)
                break;
            default:
                agregarProductos()
                break;
        }
    })
})
function Categoria(array) {
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



































