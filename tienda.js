const carroContenedor = document.querySelector(".mostrarCarrito")

let catalogo = [
    {id:"1" ,producto:"Jean Bruno", precio:6700, imagen: "./img/Bruno/pantalon jean.jpeg"},
    {id:"2" ,producto:"Remera Bruno", precio:3900, imagen: "./img/Bruno/Remera bruno.jfif"},
    {id:"3" ,producto:"Buzo Bruno", precio:11000, imagen: "./img/Bruno/Buzo bruno.jpeg"}
]
const coleccionBruno = document.querySelector(".productosBruno")

const objetosCarrito = document.querySelector("#objetosTotal")

const btnVaciarCarrito = document.querySelector(`#vaciarCarrito`)

const precioTotal = document.querySelector("#precioTotal")

let carrito = []

// document.addEventListener(`DOMContentLoaded`, () => {
//     if (localStorage.getItem(`carrito`)){
//         carrito = JSON.parse(localStorage.getItem(`carrito`))
//         actualizarCarrito()
//     }
// })


btnVaciarCarrito.addEventListener("click", () =>{
    carrito.length = 0
    actualizarCarrito()
})


catalogo.forEach((producto) => {
    let catalogoa = document.createElement("div")
    catalogoa.innerHTML = 
    `
    <div class="px-5">
                        <div class="carda">
                        <div><img class="card-image" src="${producto.imagen}" alt=""></div>
                        <div class="producto fs-bold"> ${producto.producto} </div>
                        <button id="agregar${producto.id}" class="cta btnAgregar">
                            <span class="hover-underline-animation"> Agregar </span>
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
    coleccionBruno.appendChild(catalogoa)
    // button to add an object to the cart
    const botonAgregar = document.getElementById(`agregar${producto.id}`)
    botonAgregar.addEventListener("click", () =>{
    agregarAlCarrito(producto.id)
})
})
// function to add to cart using the button
function agregarAlCarrito(productoId){
    // const existe = carrito.some (producto => producto.id === productoId)
    // if (existe){
    //     const producto = carrito.map (producto => {
    //         if (producto.id === productoId){
    //             producto.cantidad++
    //         } else {
                const prod = catalogo.find((producto) => producto.id === productoId)
                carrito.push(prod)
            // }
            actualizarCarrito()
        }

// With this function, every time we add a product, the cart will be updated and the objects in the cart will appear.
const actualizarCarrito = () => {
    // This serves so that the added products do not multiply
    carroContenedor.innerHTML= ""

    carrito.forEach((producto) =>{
        const carrito = document.createElement("carrito")
        carrito.innerHTML = 
        `
        <div class="px-5">
                            <div class="carda">
                            <div><img class="card-image" src="${producto.imagen}" alt=""></div>
                            <div class="producto fs-bold"> ${producto.producto} </div>
                            <h3 class="negro fs-1 pt-3">Precio: $${producto.precio}</h3>
                            <div class="heading">
                                <div class="author"> Colección <span class="name"> Bruno (${producto.id}) </span></div>
                            </div>
                            <button class="btnEliminar" id="eliminar${producto.id}">Eliminar</button>
                        </div>
                    </div>
`
carroContenedor.appendChild(carrito)
// localStorage.setItem(`carrito`, JSON.stringify(carrito))
    // button to remove an item from the cart
    const botonEliminar = document.getElementById(`eliminar${producto.id}`)
    botonEliminar.addEventListener("click", () =>{
    eliminardelCarrito(producto.id)
})
})
objetosCarrito.innerHTML = carrito.length
precioTotal.innerHTML = carrito.reduce((acc, producto) => acc + producto.precio, 0)
}


function eliminardelCarrito(productoId){
    const objeto = carrito.find((producto) => producto.id === productoId)
    const id = carrito.indexOf(objeto)
    carrito.splice(id, 1) 
    actualizarCarrito() 
}
