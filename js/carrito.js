let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoAcciones = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminador = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

// Funcion que agrega los productos al carrito
function subirProductoCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        carritoVacio.classList.add("disabled");
        carritoProductos.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
        carritoComprado.classList.add("disabled");

        carritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `   <img class="carrito-producto-imagen" src=".${producto.imagen}" alt="${producto.titulo}">
                                <div class="carrito-producto-titulo">
                                    <small>Titutlo</small>
                                    <h3>${producto.titulo}</h3>
                                </div>
                                <div class="div-cantidad"> 
                                    <button class="boton-menos" id="botonMenos${producto.id}">
                                    -
                                    </button>
                                <div class="carrito-producto-cantidad">
                                    <small>Cantidad</small>
                                    <h3>${producto.cantidad}</h3>
                                </div>
                                    <button class="boton-mas" id="botonMas${producto.id}">
                                    +
                                    </button>
                                </div>
                                <div class="carrito-producto-precio">
                                    <small>Precio</small>
                                    <h3>$${producto.precio}</h3>
                                </div>
                                <div class="carrito-producto-subtotal">
                                    <small>Subtotal</small>
                                    <h3>$${producto.precio * producto.cantidad}</h3>
                                </div>
                                <button class="carrito-producto-eliminar" id="eliminar${producto.id}">
                                <i class="bi bi-trash-fill"></i></button>
                                `;

            carritoProductos.appendChild(div);

            let sumar = document.querySelectorAll(".boton-mas");
            sumar.forEach(boton => {
                boton.addEventListener("click", sumarFuncion);

                let restar = document.querySelectorAll(".boton-menos");
                restar.forEach(boton => {
                    boton.addEventListener("click", restarFuncion);
                })
            })
        })

        actualizarBotonesEliminar();
        actualizarTotal();

    } else {
        carritoVacio.classList.remove("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    }
}

subirProductoCarrito();

function actualizarBotonesEliminar() {
    botonesEliminador = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminador.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

// Funcion que suma los productos
function sumarFuncion(e) {
    console.log(e.target.id);
    const buttonId = e.target.id.substring(8) // esta l??nea es nueva
    let index = productosEnCarrito.findIndex(producto => producto.id == buttonId); // ac?? el final cambia

    productosEnCarrito[index].cantidad++;
    subirProductoCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

// // Funcion que resta los productos
function restarFuncion(e) {
    console.log(e.target.id);
    const idButton = e.target.id.substring(10)
    let index = productosEnCarrito.findIndex(producto => producto.id == idButton);

    productosEnCarrito[index].cantidad--;
    subirProductoCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Funcion que elimina los productos del carrito
function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    subirProductoCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito);

// funcion que vacia el carrito
function vaciarCarrito() {

    Swal.fire({
        title: '??Estas seguro?',
        text: "Se borraran los productos del carrito",
        icon: 'question',
        width: '350px',
        showCancelButton: true,
        focusConfirm: false,
        iconColor: '#9A9483',
        confirmButtonColor: '#9A9483',
        cancelButtonColor: '#E5DCC3',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {

            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            subirProductoCarrito();
        }
    })
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    carritoVacio.classList.add("disabled");
    carritoProductos.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
    carritoComprado.classList.remove("disabled");
}
