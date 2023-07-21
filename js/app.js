const shopContent = document.getElementById ("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
  `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      saveLocal();
    }
  });
});

// Función asincrónica para cargar el formulario y productos
async function cargarInformacion() {
  // Cargar productos
  document.addEventListener('DOMContentLoaded', () => 
  {const productosContainer = document.getElementById('productos-container');
   fetch('./js/servicios.json') 
   .then(response => response.json())
   .then(data => { // Ahora que tenemos los datos del archivo JSON en 'data', podemos mostrarlos en la página.      
    data.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.innerHTML = `<h3>${producto.nombre}</h3>
                             <p>Precio: $${producto.precio}</p>`;
    
    productosContainer.appendChild(productoDiv);
   });
  }) 
  .catch(error => console.error('Error al obtener los productos:', error));});

  // Lógica del formulario
  const arrayConsultas = [];
  const formulario = document.querySelector("#formulario");
  formulario.addEventListener("submit", validarFormulario);

  async function validarFormulario(e) {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const consulta = document.querySelector("#consulta").value;

    //const consulObjeto = {
      consulta = consulta,
      email = email,
   // }
    arrayConsultas.push(consultaObjeto);
    localStorage.setItem(`consultas`, JSON.stringify(arrayConsultas));
  }
  
  

    console.log("Correo electrónico:", email);
    console.log("Consulta:", consulta);

    // Mostrar mensaje de éxito de forma asíncrona
    await mostrarMensajeExito();

    resetForm();
  }

  function resetForm() {
    formulario.reset();
  }

  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click',() => 
      new Promise((resolve) => {
        // Simulamos una operación asíncrona utilizando setTimeout
        setTimeout(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Estaremos en contacto',
            showConfirmButton: true,
            timer: 5000
          });
  
          // Resolvemos la promesa después de 5 segundos
          resolve();
        }, 5000);
      
  

    const arrayConsultas = [];
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarFormulario);
  
    async function validarFormulario(e) {
      e.preventDefault();
  
      const email = document.querySelector("#email").value;
      const consulta = document.querySelector("#consulta").value;
  
      //const consulObjeto = {
        consulta = consulta,
        email = email,
     // }
      arrayConsultas.push(consultaObjeto);
      localStorage.setItem(`consultas`, JSON.stringify(arrayConsultas));
    }
      console.log("Correo electrónico:", email);
      console.log("Consulta:", consulta);
  
  
  
      resetForm();
    

  // Llamar a la función asincrónica para cargar la información al inicio
  cargarInformacion();  
 
        


// Llamar a la función asincrónica para cargar la información al inicio
cargarInformacion();

  })
  )

