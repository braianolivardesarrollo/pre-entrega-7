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


function imprimirElementosEnHTML(productos) {
  const productosDOM = document.getElementById("productos");

  productosDOM.innerHTML = "";

  for (const producto of productos) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p>${producto.precio}</p>
    <button class="card-boton" id="${producto.nombre}${producto.id}">Comprar</button>
    `;

    productosDOM.appendChild(card);

    const btnComprar = document.getElementById(
      `${producto.nombre}${producto.id}`,
    );

    btnComprar.addEventListener("click", () =>
      agregarProductoAlCarrito(producto),
    );
  }
}

function agregarProductoAlCarrito(producto) {
  carrito.push(producto);
  alert(`Agregaste ${producto.nombre} al carrito`);

  imprimirCarritoEnHTML();
}

function imprimirCarritoEnHTML() {
  const contenedorCarrito = document.getElementById("carrito");

  contenedorCarrito.innerHTML = "";

  const ul = document.createElement("ul");

  for (const producto of carrito) {
    ul.innerHTML += `
      <li>${producto.nombre}: $${producto.precio}</li>
    `;
  }

  contenedorCarrito.appendChild(ul);
}

imprimirElementosEnHTML(productos);

// Lógica para el input para filtrar productos
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", tomarDatosForm);

function tomarDatosForm(e) {
  e.preventDefault();

  let inputBuscar = e.target[0].value;

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

    const inputDescripcion = document.getElementById(input-descripcion).value;

    productos.push({nombre: inputNombre, precio: inputPrecio, imagen: inputImagen, descripcion: inputDescripcion});

    imprimirElementosEnHTML();
  });
}

obtenerProductoDelForm();