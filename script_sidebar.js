export function readSide(msg) {
  if (document.querySelector("#side")) {
    const Sidebar = document.querySelector("#side");
    const nodo_categoria = document.createElement("a");
    nodo_categoria.textContent = msg;
    nodo_categoria.id = msg;
    nodo_categoria.classList.add("categorias");
    if (localStorage.getItem("filtro") === msg) {
      nodo_categoria.classList.add("active");
    }

    Sidebar.appendChild(nodo_categoria);
  }
}
readSide("Principal");
readSide("comestibles");
readSide("ropa");
readSide("celulares");
readSide("nuevo");
readSide("usado");
readSide("oferta");

if (document.querySelector("#side")) {
  let categoria;
  document.getElementById("Principal").addEventListener("click", () => {
    let categoria = "todo";
    localStorage.setItem("filtro", categoria);
    location.reload();
  });
  if (!localStorage.getItem("filtro")) {
    localStorage.setItem("filtro", "todo");
  }
  const comestibles = document.getElementById("comestibles");
  comestibles.addEventListener("click", () => {
    let categoria = "comestibles";
    localStorage.setItem("filtro", categoria);
    location.reload();
  });

  document.getElementById("ropa").addEventListener("click", () => {
    let categoria = "ropa";
    localStorage.setItem("filtro", categoria);
    location.reload();
  });
  document.getElementById("celulares").addEventListener("click", () => {
    let categoria = "celulares";
    localStorage.setItem("filtro", categoria);
    location.reload();
  });

  document.getElementById("nuevo").addEventListener("click", () => {
    let categoria = "nuevo";
    localStorage.setItem("filtro", categoria);
    location.reload();
  });

  document.getElementById("usado").addEventListener("click", () => {
    let categoria = "usado";
    localStorage.setItem("filtro", categoria);
    location.reload();
  });

  document.getElementById("oferta").addEventListener("click", () => {
    let categoria = "oferta";
    localStorage.setItem("filtro", categoria);
    location.reload();
  });
}
