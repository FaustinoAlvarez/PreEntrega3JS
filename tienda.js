// function carritoDeCompras(){
//     let catalogo = {
//         '1': {id:"1", producto:"Short Bruno", precio:3100},
//         '2': {id:"2" ,producto:"Pantalon Bruno", precio:8900},
//         '3': {id:"3" ,producto:"Remera Bruno", precio:12},
//         '4': {id:"4" ,producto:"Buzo Bruno", precio:18}
//     };
//     let carrito = []; // array para objetos
    
//     while (true){
//         var opcion = prompt(`Catálogo de productos:
//         1. Short Bruno - $3100
//         2. Pantalón Bruno - $8900
//         3. Remera Bruno - $5600
//         4. Buzo Bruno - $14000
//         Ingrese el número del producto que desea agregar al carrito (o 'salir' para terminar):`)
    
//     // verifica si quiere salir del carrito
//     // .toLowerCase para que al verificar la variable opcion, esta se muestre en minusculas
//     if (opcion.toLowerCase() === "salir") {
//         break;
//     }

//     // verifica si opcion existe en catalogo, si existe el prompt pide la cantidad desea de ese producto
//     // si opcion no existe en catalogo directamente salta al ultimo else
//     if (opcion in catalogo) {
//         var cantidad = parseInt(prompt("Ingrese la cantidad:"));

//         // confirma que cantidad sea un numero mayor a 0
//         if (!isNaN(cantidad) && cantidad > 0) {
//         var producto = catalogo[opcion];
//         producto.cantidad = cantidad;
        
//         // si esta todo bien se pushea al carrito
//         carrito.push(producto);
//         console.log("Producto agregado al carrito:", producto.nombre, "- Cantidad:", cantidad);
//         } else {
//         console.log("La cantidad ingresada no es válida.");
//         }
//     } else {
//         console.log("La opción ingresada no es válida.");
//     }
//     }

//     }

// carritoDeCompras()

// const añadirAlCarrito = document.createElement("div")
// añadirAlCarrito.innerHTML = 
// `<div>
//     <p>Remera Bruno</p>
// </div>`
// document.body.appendChild(añadirAlCarrito)


// {id:"1", producto:"Short Bruno", precio:3100, imagen: ""},
let carro = document.querySelector("#carrito")


let catalogo = [
    {id:"1" ,producto:"Jean Bruno", precio:6700, imagen: "./img/Bruno/pantalon jean.jpeg"},
    {id:"2" ,producto:"Remera Bruno", precio:3900, imagen: "./img/Bruno/Remera bruno.jfif"},
    {id:"3" ,producto:"Buzo Bruno", precio:11000, imagen: "./img/Bruno/Buzo bruno.jpeg"}
]
let carrito = []
let coleccionBruno = document.querySelector(".productosBruno")
for (let producto of catalogo){
    let catalogo = document.createElement("div")
    catalogo.innerHTML = 
    `
    <div class="px-5">
                        <div class="carda">
                        <div><img class="card-image" src="${producto.imagen}" alt=""></div>
                        <div class="producto fs-bold"> ${producto.producto} </div>
                        <button class="cta comprar">
                            <span id="btnComprar" class="hover-underline-animation"> Comprar </span>
                            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                            </svg>
                        </button>
                        <h3 class="negro fs-1 pt-3">Precio: $${producto.precio}</h3>
                        <div class="heading">
                            <div class="author"> Colección <span class="name"> Bruno (${producto.id}) </span></div>
                        </div>
                    </div>
                </div>
                
    `
    coleccionBruno.appendChild(catalogo)
}

const botonComprar = document.querySelector("#btnComprar")

carrito.push(catalogo)

    for (let productoComprado of carrito){
        let carrito = document.createElement("div")
        carrito.innerHTML = 
        `
        <div class="px-5">
                            <div class="carda">
                            <div><img class="card-image" src="${productoComprado.imagen}" alt=""></div>
                            <div class="producto fs-bold"> ${productoComprado.producto} </div>
                            <h3 class="negro fs-1 pt-3">Precio: $${productoComprado.precio}</h3>
                            <div class="heading">
                                <div class="author"> Colección <span class="name"> Bruno (${productoComprado.id}) </span></div>
                            </div>
                        </div>
                    </div>
                    
        `
        carro.appendChild(carrito)
    }


console.log(carrito)