export function renderCarrito() {
  const carritoContainer = document.getElementById("carrito__container");
  var carrito = JSON.parse(localStorage.getItem("carrito"));

    function showTotal() {
        const total = carrito.reduce((acc, carrito) => acc + (carrito.precio * carrito.cantidad), 0);
        swal({
            title: "Comprar",
            text: `Precio total: ${total}`,
            buttons: ["Cancelar", "Comprar"],
          })
    }

  function deleteFromCart(id) {
    let carritoActualizado = carrito.filter((e) => e.id !== id);
    carrito = carritoActualizado;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    swal({
      title: "Artículo borrado",
      text: "Se borró un artículo",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    }).then(() => {
      setTimeout(() => {
        location.reload();
      }, 1000);
    });
  }

  carrito.map((e) => {
    const item = document.createElement("div");
    item.classList.add("item");

    const img = document.createElement("img");
    img.src = e.img;
    item.appendChild(img);

    const name = document.createElement("p");
    name.textContent = "Producto: " + e.nombre;
    item.appendChild(name);

    const cantidad = document.createElement("p");
    cantidad.textContent = "Cantidad: " + e.cantidad;
    item.appendChild(cantidad);

    const precio = document.createElement("p");
    precio.textContent = "Precio: " + e.precio * Number(e.cantidad);
    item.appendChild(precio);

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.classList.add('button--primary')
    botonBorrar.addEventListener("click", (event) => {
      event.preventDefault();
      deleteFromCart(e.id);
    });
    item.appendChild(botonBorrar);

    carritoContainer.appendChild(item);
  });

  const comprar = document.createElement('button')
  comprar.textContent = 'comprar'
  comprar.classList.add('button--primary')

  comprar.addEventListener('click', showTotal)

  carritoContainer.appendChild(comprar)

}
if(document.getElementById("carrito__container")) {
  renderCarrito();
}
