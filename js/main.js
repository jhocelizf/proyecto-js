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
const productos = [
// MANTAS
{
    "id": "manta-1",
    "titulo": "manta 1",
    "imagen": "./img/manta1.jpg",
    "categoria": {
        "nombre": "Mantas",
        "id": "mantas"
    },
    "precio": 1000
},
{
    "id": "manta-2",
    "titulo": "manta 2",
    "imagen": "./img/manta2.jpg",
    "categoria": {
        "nombre": "Mantas",
        "id": "mantas"
    },
    "precio": 1000
},
{
    "id": "manta-3",
    "titulo": "manta 3",
    "imagen": "./img/manta3.jpg",
    "categoria": {
        "nombre": "Mantas",
        "id": "mantas"
    },
    "precio": 1000
},
{
    "id": "manta-4",
    "titulo": "manta 4",
    "imagen": "./img/manta4.jpg",
    "categoria": {
        "nombre": "Mantas",
        "id": "mantas"
    },
    "precio": 1000
},
{
    "id": "manta-5",
    "titulo": "manta 5",
    "imagen": "./img/manta5.jpg",
    "categoria": {
        "nombre": "Mantas",
        "id": "mantas"
    },
    "precio": 1000
},
{
    "id": "manta-6",
    "titulo": "manta 6",
    "imagen": "./img/manta6.jpg",
    "categoria": {
        "nombre": "Mantas",
        "id": "mantas"
    },
    "precio": 1000
},
// Almohadones
{
    "id": "almohadon-1",
    "titulo": "almohadon 1",
    "imagen": "./img/almohadon1.jpg",
    "categoria": {
        "nombre": "Almohadon",
        "id": "almohadon"
    },
    "precio": 1000
},
{
    "id": "almohadon-2",
    "titulo": "almohadon 2",
    "imagen": "./img/almohadon2.jpg",
    "categoria": {
        "nombre": "Almohadon",
        "id": "almohadon"
    },
    "precio": 1000
},
{
    "id": "almohadon-3",
    "titulo": "almohadon 3",
    "imagen": "./img/almohadon3.jpg",
    "categoria": {
        "nombre": "Almohadon",
        "id": "almohadon"
    },
    "precio": 1000
},
{
    "id": "almohadon-4",
    "titulo": "almohadon 4",
    "imagen": "./img/almohadon4.jpg",
    "categoria": {
        "nombre": "Almohadon",
        "id": "almohadon"
    },
    "precio": 1000
},
{
    "id": "almohadon-5",
    "titulo": "almohadon 5",
    "imagen": "./img/almohadon5.jpg",
    "categoria": {
        "nombre": "Almohadon",
        "id": "almohadon"
    },
    "precio": 1000
},
{
    "id": "almohadon-6",
    "titulo": "almohadon 6",
    "imagen": "./img/almohadon6.jpg",
    "categoria": {
        "nombre": "Almohadon",
        "id": "almohadon"
    },
    "precio": 1000
},
{
    "id": "almohadon-7",
    "titulo": "almohadon 7",
    "imagen": "./img/almohadon7.jpg",
    "categoria": {
        "nombre": "Almohadon",
        "id": "almohadon"
    },
    "precio": 1000
},
// Alfombras
{
    "id": "alfombras1",
    "titulo": "alfombra 1",
    "imagen": "./img/alfombra1.jpg",
    "categoria": {
        "nombre": "Alfombra",
        "id": "alfombra"
    },
    "precio": 1000
},
{
    "id": "alfombras2",
    "titulo": "alfombra 2",
    "imagen": "./img/alfombra2.jpg",
    "categoria": {
        "nombre": "Alfombra",
        "id": "alfombra"
    },
    "precio": 1000 
},
{
    "id": "alfombras3",
    "titulo": "alfombra 3",
    "imagen": "./img/alfombra3.jpg",
    "categoria": {
        "nombre": "Alfombra",
        "id": "alfombra"
    },
    "precio": 1000
},
{
    "id": "alfombras4",
    "titulo": "alfombra 4",
    "imagen": "./img/alfombra4.jpg",
    "categoria": {
        "nombre": "Alfombra",
        "id": "alfombra"
    },
    "precio": 1000
},
{
    "id": "alfombras5",
    "titulo": "alfombra 5",
    "imagen": "./img/alfombra5.jpg",
    "categoria": {
        "nombre": "Alfombra",
        "id": "alfombra"
    },
    "precio": 1000
},
{
    "id": "alfombras6",
    "titulo": "alfombra 6",
    "imagen": "./img/alfombra6.jpg",
    "categoria": {
        "nombre": "Alfombra",
        "id": "alfombra"
    },
    "precio": 1000
},
// CORTINAS
{
    "id": "cortina1",
    "titulo": "cortina 1",
    "imagen": "./img/cortina1.jpg",
    "categoria": {
        "nombre": "Cortina",
        "id": "cortina"
    },
    "precio": 1000
},
{
    "id": "cortina2",
    "titulo": "cortina 2",
    "imagen": "./img/cortina2.jpg",
    "categoria": {
        "nombre": "Cortina",
        "id": "cortina"
    },
    "precio": 1000
},
{
    "id": "cortina3",
    "titulo": "cortina 3",
    "imagen": "./img/cortina3.jpg",
    "categoria": {
        "nombre": "Cortina",
        "id": "cortina"
    },
    "precio": 1000
}
];

const contenedorProductos = document.querySelector("#contenedorProducto");
const botonesCategoria = document.querySelectorAll(".boton-categoria");

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
}

agregarProductos(productos);

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => { 
        
        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            agregarProductos(productosBoton);
        } else {
            agregarProductos(productos);
        }
    })
})








































