export function readMenu()
{
    const menu = document.querySelector("#menu_sup");
    const liMarket = document.createElement("li");
    const aMarket = document.createElement("a");
    aMarket.href = "./index.php";    
    aMarket.textContent = "market";
    liMarket.appendChild(aMarket);
    menu.appendChild(liMarket);
   
    const liCarrito = document.createElement("li");
    const aCarrito = document.createElement("a");
    aCarrito.href = "./carrito.php";
    aCarrito.textContent = "carrito";
    liCarrito.appendChild(aCarrito);
    menu.appendChild(liCarrito);
}
readMenu();