let categoria = localStorage.getItem('filtro')
export function readItem(url_img, nombre, precio, id) {

  const prods = document.querySelector("#prods");

  const nodo_Items = document.createElement("div");
  nodo_Items.classList.add("items");
  const nodo_img = document.createElement("img");
  const nodo_precio = document.createElement("p");
  nodo_precio.classList.add("precio");
  const nodo_nombre = document.createElement("p");
  nodo_nombre.classList.add("nombre");

  nodo_img.src = url_img;
  nodo_precio.textContent = "$" + precio;
  nodo_nombre.textContent = nombre;

  nodo_Items.appendChild(nodo_img);
  nodo_Items.appendChild(nodo_precio);
  nodo_Items.appendChild(nodo_nombre);
  
  const cantidad = document.createElement("input");
  cantidad.setAttribute("type", "number");
  cantidad.setAttribute("placeholder", "Cantidad");
  nodo_Items.appendChild(cantidad);
  const boton = document.createElement("button");
  boton.textContent = "Agregar al carrito";
  nodo_Items.appendChild(boton);
  boton.classList.add("button--primary");
  
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    carrito.push({
      img: url_img,
      nombre: nombre,
      precio: precio,
      cantidad: cantidad.value,
      id: id
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
  });
  prods.appendChild(nodo_Items);
}

// Hacer una solicitud AJAX para obtener los datos de PHP
if(document.querySelector('.main')) {
  fetch("./listar_producto.php?tipo=" +categoria)
  .then((response) => response.json())
  .then((data) => {
    // Recorrer los datos recibidos y llamar a readItem() con cada elemento
    data.forEach((item) => {
      readItem(item.img, item.nombre, item.precio, item.id);
    });
  })
  .catch((error) => {
    console.log("Error en la solicitud AJAX:", error);
  });

if(localStorage.getItem('carrito')) var carrito = JSON.parse(localStorage.getItem('carrito'));
else {
  localStorage.setItem('carrito', JSON.stringify([]))
  var carrito = [];  
}
}