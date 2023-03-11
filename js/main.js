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
// class
class Producto {
    constructor(id, tituto, imagen, categoria, precio) {
        this.id = id;
        this.titulo = tituto;
        this.imagen = imagen;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidad = 1;
    }

}

// Funcion que trae los productos de JSON local
function obtenerProductosDelJSON() {

    fetch('./productos.json')
        .then(response => response.json())
        .then((productosJSON) => {


            for (const productoJSON of productosJSON) {

                productos.push(new Producto(
                    productoJSON.id,
                    productoJSON.titulo,
                    productoJSON.imagen,
                    productoJSON.categoria,
                    productoJSON.precio,
                ));
            }
            agregarProductos(productos);
        });
}

const contenedorProductos = document.querySelector("#contenedorProducto");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
let botonesAgregados = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
let productos = [];

obtenerProductosDelJSON();

// Funcion que crear las tarjeticas de los productos
function agregarProductos(productos) {

    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {
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

fetch('./productos.json')
    .then(response => response.json())
    .then(data => {
        const mantas = data.filter((prod) => prod.categoria === 'mantas')
        const almohadon = data.filter((prod) => prod.categoria === 'almohadon')
        const cortina = data.filter((prod) => prod.categoria === 'cortina')
        const alfombra = data.filter((prod) => prod.categoria === 'alfombra')

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
                        agregarProductos(data)
                        break;
                }
            })
        })
    })

// Funcion que muestra el hero de la pagina
function mostrarDiv() {
    let mostrar = document.getElementById("ocultar");
    mostrar.style.display = "block";
}
mostrarDiv();

// Funcion que oculta el hero de pagina
function hide() {
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

// FUNCION BUSCADOR
function buscarProductos() {
    let search = document.getElementById("buscar");
    search.addEventListener("input", () => {

        const valorBusqueda = search.value;
        const productosFiltrados = productos.filter((producto) => {
            return producto.titulo.toLowerCase().includes(valorBusqueda.toLowerCase());
        });

        agregarProductos(productosFiltrados);
    });
}
buscarProductos();

function categoria(array) {
    contenedorProductos.innerHTML = "";
    array.forEach(producto => {
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `<div class="producto">
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

function actualizarBotonesAgregados() {
    botonesAgregados = document.querySelectorAll(".producto-agregar");

    botonesAgregados.forEach(boton => {
        boton.addEventListener("click", meterAlCarrito);
    })
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

// Funcion que mete los productos al carrito
function meterAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        destination: "../pages/carrito.html",
        style: {
            color: "Beige",
            background: "linear-gradient(to right, #9a9483f5, #C7BEA2)",
            fontSize: "1rem",
        },
        offset: {
            x: "1.5rem",
            y: "1.5rem"
        },
        onClick: function () { } // Callback after click
    }).showToast();

    const idBton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBton);

    if (productosEnCarrito.some(producto => producto.id == idBton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

// Funcion que actualiza el numero que del carrito
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}



































