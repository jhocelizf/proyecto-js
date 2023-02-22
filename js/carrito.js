let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
console.log(productosEnCarrito);

const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoAcciones = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminador = document.querySelectorAll(".carrito-producto-eliminar");

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
            div.innerHTML = ` <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Titutlo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <h3>${producto.cantidad}</h3>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <h3>$${producto.precio}</h3>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <h3>$${producto.precio * producto.cantidad}</h3>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            carritoProductos.append(div);
        })

        actualizarBotonesEliminar();
    
    } else {
        carritoVacio.classList.remove("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    }
}

subirProductoCarrito();

function actualizarBotonesEliminar(){
    botonesEliminador = document.querySelectorAll("carrito-producto-eliminar");

    botonesEliminador.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index,1);
    subirProductoCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}