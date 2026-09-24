// Este código está pensando para que lo modifiquen y lo mejoren tanto como gusten.
// El carrito está implementado sin código css
// Faltaría imprimir el precio total y agregar un botón que permita realizar la compra del carrito.
// El botón para comprar el carrito debería mostrar un mensaje al usuario confirmando la compra
// y vaciar el carrito

const productos = [
  {
    id: 1,
    nombre: "Pinza",
    descripcion: "pinza de fuerza, marca knipex",
    precio: 500,
    imagen: "./img/pinza.webp",
  },
  {
    id: 2,
    nombre: "Destornillador Plano",
    descripcion: "destornillador plano 20mm, knipex",
    precio: 250,
    imagen: "./img/destornilladorPlano.webp",
  },
  {
    id: 3,
    nombre: "Alicate",
    descripcion: "Alicate corte diagonal, knipex",
    precio: 600,
    imagen: "./img/alicateCorteDiag.webp",
  },
  {
    id: 4,
    nombre: "Destornillador Philips",
    descripcion: "destornillador punta philips, knipex",
    precio: 250,
    imagen: "./img/destornilladorPhilips.webp",
  },
  {
    id: 5,
    nombre: "Llaves Allen ",
    descripcion: "juego de llaves allen milimetricas 1mm a 13mm, Bremen",
    precio: 850,
    imagen: "./img/llavesAllen.webp",
  },
  {
    id: 6,
    nombre: "Soldador ",
    descripcion: "soldador de estaño 70w, Total",
    precio: 1200,
    imagen: "./img/soldador.webp",
  },
  {
    id: 7,
    nombre: "Multimetro",
    descripcion: "multimetro digital Mod.117, Fluke",
    precio: 5000,
    imagen: "./img/multimetroDigital.webp",
  },
  {
    id: 8,
    nombre: "kit electronica",
    descripcion: "kit de componentes electrónicos",
    precio: 1800,
    imagen: "./img/kitComponentes.webp",
  },
];

const carrito = [];


function imprimirElementosEnHTML(listaProductos) {
  const productosDOM = document.getElementById("productos");

  productosDOM.innerHTML = "";

  for (const producto of listaProductos) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p>$${producto.precio}</p>
    <button class="card-boton" id="comprar${producto.id}">Comprar</button>
    <button class="card-boton" id="eliminar${producto.id}">Eliminar</button>
    `;

    productosDOM.appendChild(card);

    const btnComprar = document.getElementById(`comprar${producto.id}`);

    btnComprar.addEventListener("click", () => {

      agregarProductoAlCarrito(producto);
   } );

   const btnEliminar = document.getElementById(`eliminar${producto.id}`);

btnEliminar.addEventListener("click", () => {
  productos.splice(productos.indexOf(producto), 1);

  imprimirElementosEnHTML(productos);

const mensajeCarrito = document.getElementById("mensaje-carrito");

 mensajeCarrito.textContent = `Producto "${producto.nombre}" eliminado correctamente`;

  setTimeout(() => { mensajeCarrito.textContent = ""; }, 2000);

});
  }
}

function agregarProductoAlCarrito(producto) {

  carrito.push(producto);
  const mensajeCarrito = document.getElementById("mensaje-carrito");
 
  mensajeCarrito.textContent = `Agregaste ${producto.nombre} al carrito`;

  setTimeout(() => {
    mensajeCarrito.textContent = ""
  }, 2000 )

  imprimirCarritoEnHTML();
}

function imprimirCarritoEnHTML() {
  const contenedorCarrito = document.getElementById("carrito");

  contenedorCarrito.innerHTML = "";

  const ul = document.createElement("ul");

  let total = 0;

  for (const producto of carrito) {
    ul.innerHTML += `
      <li>${producto.nombre}: $${producto.precio}</li>
    `;

     total += Number(producto.precio);
  }

  contenedorCarrito.appendChild(ul);

  const precioTotal = document.createElement("p");
  precioTotal.textContent = `Total: $${total}`;

  contenedorCarrito.appendChild(precioTotal);

  const botonComprarCarrito = document.createElement("button");

botonComprarCarrito.textContent = "Comprar carrito";

contenedorCarrito.appendChild(botonComprarCarrito);

botonComprarCarrito.addEventListener("click", () => {
  carrito.length = 0;
  imprimirCarritoEnHTML();

  const mensajeCarrito = document.getElementById("mensaje-carrito");

  mensajeCarrito.textContent = "Compra realizada correctamente";

  setTimeout(() => {
    mensajeCarrito.textContent = "";
  }, 2000);
});
}

imprimirElementosEnHTML(productos);

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", tomarDatosForm);

const inputBusqueda = document.querySelector("#formulario input[type='text']");

inputBusqueda.addEventListener("keyup", tomarDatosForm);

function tomarDatosForm(e) {
   e.preventDefault();
   
   let inputBuscar = document.querySelector("#formulario input[type='text']").value;
   
   let productosFiltrados = productos.filter((elemento) =>
     elemento.nombre.toLowerCase().includes(inputBuscar.toLowerCase()),
   ); 
   imprimirElementosEnHTML(productosFiltrados);
   }

function obtenerProductoDelForm() {
  const formParaProducto = document.getElementById("form-agregar-producto");
  formParaProducto.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputNombre = document.getElementById("input-nombre").value;

    const inputPrecio = document.getElementById("input-precio").value;

    const inputImagen = document.getElementById("input-imagen").value;

    const inputDescripcion = document.getElementById("input-descripcion").value;

    productos.push({id: productos.length +1, nombre: inputNombre, precio: inputPrecio, imagen: inputImagen, descripcion: inputDescripcion});

    imprimirElementosEnHTML(productos);

    const mensajeCarrito = document.getElementById("mensaje-carrito");
     mensajeCarrito.textContent = `Producto "${inputNombre}" agregado correctamente al stock`;
      setTimeout(() => { mensajeCarrito.textContent = "";
       },
        2000);

    formParaProducto.reset()
  });
}

obtenerProductoDelForm();