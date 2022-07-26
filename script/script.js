//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, color, stock, ) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}

//Inicializo los arrays para las categorias de los productos
const remeras = [];
const buzos = [];
const pantalones = [];

//Cargo el stock de productos segun su categoria
//REMERAS
remeras.push(new Producto("Remera manga larga", 1, 2000, "Negro", 30));
remeras.push(new Producto("Remera térmica", 2, 1400, "Blanco", 10));
remeras.push(new Producto("Remera básica", 3, 1400, "Blanco", 20));
remeras.push(new Producto("Remera estampada", 4, 1400, "Blanco", 15));
//BUZOS
buzos.push(new Producto("Buzo polar", 5, 4000, "Negro", 20));
buzos.push(new Producto("Buzo Oversized", 6, 3800, "Negro", 40));
buzos.push(new Producto("Buzo Batik", 7, 3800, "Negro", 40));
//PANTALONES
pantalones.push(new Producto("Jogging doble frizz", 8, 2900, "Negro", 10));
pantalones.push(new Producto("Calza térmica", 9, 1000, "Negro", 10));


//DOM ----------------------------------------------------------------------------------------------------
//primero tomo control sobre la section previamente creada en el HTML
let sectionProductos = document.getElementById("section-productos");

//creo la funcion para crear el codigo HTML de las cards
function crearCard (producto) {
    //primero creo el div contenedor para cada card y aplico estilos de bootstrap
    let card = document.createElement("div");
    card.setAttribute("class", "card card-producto");
    card.style.width = "18rem";
    //le asigno las cards al elemento padre section
    sectionProductos.appendChild(card);
    //creo divs que contengan las imagenes de los productos y se los asigno como hijos a las cards
    let cardImg = document.createElement("div");
    cardImg.innerHTML = `<img src="./img/${producto.id}.jpg" class="card-img-top" alt="${producto.nombre}"></img>`;
    card.appendChild(cardImg);
    //creo divs que contengan los nombres de los productos y los botones, despues se los asigno como hijos a las cards
    let cardBody = document.createElement("div");
    cardBody.innerHTML = `<h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text"> Precio: $${producto.precio} </p>
                            <button class="btn btn-dark">Comprar</button>`;
    card.appendChild(cardBody);
    cardBody.setAttribute("class", "card-body");
}



//Recorro los arrays para mostrarle los productos al usuario
for (const remera of remeras) {
    crearCard(remera);
 }
 
 for (const pantalon of pantalones) {
     crearCard(pantalon);
 }
 
 for (const buzo of buzos) {
     crearCard(buzo);
 }