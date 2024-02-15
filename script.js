// NOMBRE DEL SITIO : THE HOUSE OF MUSIC

// IF / ELSE
// Solo escribo estas líneas de codigo para practicar con el condicional  IF y  con el condicional ELSE

let Instrumento_japones = "Fender stratocaster japonesa"
let precio_de_instrumento = 450


let Instrumento_japonesA = "Fender telecaster japonesa"
let precio_de_instrumentoA = 470

let compra = ("¿Quiere comprar : " + Instrumento_japones + " y " + Instrumento_japonesA + " ? ")

if(compra. toUpperCase() == "SI"){
    let cantidadProducto = ("Ingrese que cantidad de " + Instrumento_japones + " desea comprar")
    let cantidadProductoA = ("Ingrese que cantidad de " + Instrumento_japonesA + " desea comprar")

    let precioTotal = cantidadProducto * precio_de_instrumento
    let precioTotalA = cantidadProductoA * precio_de_instrumentoA

    let precioTotalB = precioTotal + precioTotalA

    ("El precio total es: " + precioTotalB)
}
else{
     ("Gracias por visitar House Of Music")
}

//STORAGE: Guardo un Objeto a través de JSON
 //Uso en este caso  método stringify
//Lo guardo para ver si incoporo alguna vez este producto a mi portfolio.

 localStorage.setItem("unObjeto", JSON.stringify({nombre: "Guitarra criolla marca Breyer" , precio: 150}))


 // Utilizo array de objetos para almacenar productos(instrumentos) usando Storage
// y así analizo de incorporar dichos productos para vender en un futuro.

const pequeñosInstrumentosDeCuerda = [{ id: 1, producto: "Ukelele" , precio:15},
{ id: 2, producto: "charango" , precio: 20},
{ id: 3, producto: "cuatro", precio:10}];
const guardarLocal = (clave, valor) => { localStorage.setItem(clave,valor) };
// Almacenar producto por producto
for (const producto of pequeñosInstrumentosDeCuerda) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
//o almacenar array completo
guardarLocal("Instrum_Pequeños_De_Cuerda", JSON.stringify(pequeñosInstrumentosDeCuerda));    

// FUNCIONES DE ORDEN SUPERIOR : Metodo Map ->IMPORTANTE!!!
// guardo la información de estos productos y sus precios
// para ver si el día de mañana los puedo vender

const guitarrasCriollas = [
    {id:4,nombre_y_precio: "Garcia , precio: 300"},
    {id:5,nombre_y_precio: "yepesJX , precio: 330"},
    {id:6,nombre_y_precio: "Ibanez , precio: 330"},
    {id:7,nombre_y_precio: "Yamaha , precio: 400"},
]

const nombresYPrecios = guitarrasCriollas.map ((el) => el.nombre_y_precio)

for (const nombre_y_precio of guitarrasCriollas) {
    guardarLocal(nombre_y_precio.id, JSON.stringify(nombre_y_precio));
}

//DOM: CREACIÓN DE ELEMENTOS
// Crear nodo de tipo elemento, etiqueta p
let escritura = document.createElement ("p");
//Instertar HTML interno
escritura.innerHTML = "<h6>santicorbella@gmail.com</h6>";
//Añadir el nodo Element como hijo de body
document.body.append(escritura);
  
//DOM:MODIFICAR NODOS-> PROPIEDAD Inner Text
let enunciado = document.getElementById("enunciado")

enunciado.innerText = "¡BIENVENIDOS!"

//DOM: MODIFICAR NODOS
//Class Name

let segundoMensaje = document.getElementById("texto1")
// Cambio el codigo HTML interno
segundoMensaje.innerHTML = "<h4>¡SUPER PROMO!</h4><h5>En Todas Las Guitarras</h5>"

// cambio el atributo class
segundoMensaje.className = "container row"

//EVENTO SUBMIT

let miFormulario      =
document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
} 

//CARRITO
const portfolioDeInstrumentos = [
    {
        id: 1,
        nombre: "Fender Stratocaster Roja",
        precio: 510,
        stock: 3,
        garantia: "1 año"
    },
    {
        id: 2,
        nombre: "Fender Stratocaster Verde",
        precio: 490,
        stock: 4,
        garantia: "1 año"
    },
    {
        
        id: 3,
        nombre: "Fender Player Stratocaster Hss Negra",
        precio: 500,
        stock: 5,
        garantia: "1 año"    
    },
    {
        id: 4,
        nombre: "Fender Jaguar Near Roja",
        precio: 550,
        stock: 7,
        garantia: "1 año"   
    },
    {
        id: 5,
        nombre: "Fender-American-Vintage-ii-1972-Telecaster",
        precio: 700,
        stock: 3,
        garantia: "no tiene" 
    },
    {
        id: 6,
        nombre: "Fender Telecaster American Vintage 1952",
        precio: 800,
        stock: 3,
        garantia: "no tiene"  
    },           
    {
        id: 7,
        nombre: "Guitarra Electro Acústica Fender Sonoran",
        precio: 400,
        stock: 7,
        garantia: "1 año"   
    },
    {
        id: 8,
        nombre: "Guitarra Electro Acústica Fender Malibu Player Fishman",
        precio: 420,
        stock: 4,
        garantia: "1 año"   
    },
    {
        id: 9,
            nombre: "Guitarra Electro Acústica Fender California-newporter-suburst",
            precio: 430,
            stock: 5,
            garantia: "1 año"     
    },
    {
        id: 10,
        nombre: "Gibson Les Paul Standard 50s Heritahe Cherry Sunburst",
        precio: 700,
        stock: 2,
        garantia: "no tiene"
    },
    {
        id: 11,
        nombre: "Gibson Les Paul Standard 60s Bourbon Burst",
        precio: 690,
        stock: 3,
        garantia: "no tiene"
        },
    {
        id: 12,
        nombre: "Gibson-Sg-Instant",
        precio: 680,
        stock: 5,
        garantia: "1 año"      
    },    
    {
        id: 13,
        nombre: "Guitarra Electro Acústica Gibson HummingBird",
        precio: 400,
        stock: 6,
        garantia: "1 año"  
    },
    {
        id: 14,
        nombre: "Guitarra Electro Acústica Gibson SJ-200 studio walnut",
        precio: 420,
        stock: 4,
        garantia: "1 año"  
    },
    {
        id: 15,
        nombre: "Guitarra Electro Acústica Gibson-j-45",
        precio: 390,
        stock: 8,
        garantia: "1 año"      
    },
    {
        id: 16,
        nombre: "Guitarra eléctrica Texas",
        precio: 300,
        stock: 3,
        garantia: "1 año"     
    },
    {
        id: 17,
        nombre: "Guitarra Electro Acústica Washburn",
        precio: 400,
        stock: 4,
        garantia: "1 año"  
    },
    {
        id: 18,
        nombre: "Fender Jazz Bass American 69 Olimpique White",
        precio: 700,
        stock: 3,
        garantia: "no tiene"
    },
    {
        id: 19,
        nombre: "Fender American Vintage 74 Jazz Bass",
        precio: 690,
        stock: 4,
        garantia: "no tiene"
    },
    {
        id: 20,
        nombre: "Bajo Electrico Sterling by Music Man StingRay",
        precio: 400,
        stock: 7,
        garantia: "1 año"  
    },
    {
        id: 21,
        nombre: "Bajo Sterling-by-music-man-sub-ray-4-vintage-cream",
        precio: 400,
        stock: 5,
        garantia: "1 año"  
    },
    {
        id: 22,
        nombre: "Bajo Ibanez Ashula Sra 7",
        precio: 550,
        stock: 4,
        garantia: "1 año"  
    },
    {
        
        id: 23,
        nombre: "Bajo Ibanez Premium SRAS7-RSG FrettedFretless hybrid",
        precio: 550,
        stock: 5, 
        garantia: "1 año"     
    },
    {
        id: 24,
        nombre: "Bajo Ibanez Ashula Sra 7 Blue",
        precio: 550,
        stock: 4,
        garantia: "1 año"  
    },
    {
        id: 25,
        nombre: " Bajo Squier Jaguar",
        precio: 450,
        stock: 3,
        garantia: "1 año"  
    },
    {
        id: 26,
        nombre: "Batería Mapex Saturn V Exotic 4 Cps Bombo 20 Maple Burl",
        precio: 800,
        stock: 3, 
        garantia: "1 año"  
    },           
    {
        id: 27,
        nombre: "Bateria Mapex Mars Fusion 5 Cuerpos Bombo 20",
        precio: 880,
        stock: 4,
        garantia: "1 año"  
    },
    {
        id: 28,
        nombre: "Batería Pearl Export Blue Sea Bombo de 18",
        precio: 740,
        stock: 5,
        garantia: "1 año"  
    },
    {
        id: 29,
            nombre: "Bateria Pearl Decade Maple Bombo De 20 C Satin Brown Burst",
            precio: 780,
            stock: 5,
            garantia: "1 año"      
    },
    {
        id: 30,
        nombre: "Batería Pearl Master Maple Bombo De 20 Color Matte White",
        precio: 700,
        stock: 2,
        garantia: "1 año"      
    },
    {
        id: 31,
        nombre: "Congas Pearl Richie Flores",
        precio: 400,
        stock: 7,
        garantia: "1 año"     
        },
    {
        id: 32,
        nombre: "Latin Percussion Set De Congas City Vintage Sunburst",
        precio: 450,
        stock: 3,
        garantia: "1 año"   
    },    
    {
        id: 33,
        nombre: "Saxo alto Bellagio",
        precio: 450,
        stock: 3,
        garantia: "1 año"   
    },
    {
        id: 34,
        nombre: "Flauta Traversa Parquer Custom En Do Cerrada Mi Partido",
        precio: 380,
        stock: 4,
        garantia: "1 año"   
    },
    {
        id: 35,
        nombre: "Trompeta Yamaha",
        precio: 390,
        stock: 3, 
        garantia: "1 año"   
    },
    ]
    
    let catalog = document.getElementById("items")
    let cartList = document.getElementById("carrito")
    let buttonEmpty = document.getElementById("boton-vaciar")
    let totalValue = document.getElementById("total")
    let cart = []
    
    buttonEmpty.addEventListener("click",emptyButtonHandler)
    
    loadCartFromStorage()
    renderCart()
    
    
    portfolioDeInstrumentos.forEach((prod) => {
        let container = document.createElement("div")
        container.classList.add("card", "col-sm-4")
        //tarjetaInstrumento
        let tarjetaIntrumento = document.createElement("div")
        tarjetaIntrumento.classList.add("tarjeta-instrumento")
        //Title
        let cardTitle = document.createElement("h5")
        cardTitle.classList.add("card-title")
        cardTitle.innerText = prod.nombre
        //precio
        let cardPrice = document.createElement("p")
        cardPrice.classList.add("card-text")
        cardPrice.innerText = `Precio: ${prod.precio}`
        //stock
        let cardStock = document.createElement("p")
        cardStock.classList.add("card-text")
        cardStock.innerText = `Stock: ${prod.stock}`
        //garantia
        let cardGarantia = document.createElement("p")
        cardGarantia.classList.add("card-text")
        cardGarantia.innerText = `Garantia: ${prod.garantia}`
        //button
        let cardButton = document.createElement("button")
        cardButton.classList.add("btn","btn-primary")
        cardButton.innerText = `comprar`
        cardButton.setAttribute("mark", prod.id)
        cardButton.addEventListener("click", addProdToCart)
    
        tarjetaIntrumento.append(cardTitle)
        tarjetaIntrumento.append(cardPrice)
        tarjetaIntrumento.append(cardStock)
        tarjetaIntrumento.append(cardGarantia)
        tarjetaIntrumento.append(cardButton)
        container.append(tarjetaIntrumento)
        catalog.append(container)
    
    }) 
    function addProdToCart(event){
      cart.push(event.target.getAttribute("mark"))
      renderCart()  
    }
    
    function renderCart(){
    
       saveCartToStorage()    
    
        cartList.innerHTML = " "
    
       let cartWithoutRepeatedElements = [...new Set(cart)]
    
       cartWithoutRepeatedElements.forEach((itemId) => {
        let item = portfolioDeInstrumentos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })        
        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)
      
    
      let linea = document.createElement("li")
      linea.classList.add("list-group-item", "text-right", "mx-2")
      linea.innerText = `${quantity} x ${item[0].nombre} - ${item[0].precio}`
    
      let buttonDelete = document.createElement("button")
      buttonDelete.classList.add("btn", "btn-danger", "mx-5")
      buttonDelete.innerText = "X"
      buttonDelete.dataset.item = itemId
      buttonDelete.addEventListener("click", deleteProduct)
    
      linea.append(buttonDelete)
      cartList.append(linea)
      })
      
      totalValue.innerText = calculateTotalPrice()
    }
    
    function deleteProduct(event){
    //LIBRERIA SweetAlert2
    //PROMESAS, Método.then()    
     Swal.fire({
        title: "Estás seguro de querer eliminar este instrumento del carrito?",
        showDenyButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `Cancelar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
           let id = event.target.dataset.item
           cart = cart.filter((cartId) => {
            return cartId != id
           })
           renderCart()        
          Swal.fire("Eliminado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("No se eliminó el instrumento del carrito", "", "info");
        }
      })
    
    }
    
    function emptyButtonHandler(){
        cart = []
        cartList.innerHTML = " "
        totalValue.innerText = 0
    }
    
    function calculateTotalPrice(){
    return cart.reduce((total, itemId) => {
        let item = portfolioDeInstrumentos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        
        return total + item[0].precio
     }, 0)
    
    }
    //Storage
    function saveCartToStorage(){
        localStorage.setItem("cart",JSON.stringify(cart))
    }
    
    function loadCartFromStorage(){
        if(localStorage.getItem("cart") !== null){
            cart = JSON.parse(localStorage.getItem("cart"))
        }
    } 
    
    //LIBRERIA
//Sweet alert2

Swal.fire({
    title: '¡Bienvenido!',
    text: 'Deseas navegar IN THE HOUSE OF MUSIC?',
    icon: 'question',
    confirmButtonText: '¡ hacé click acá y seguí navegando en el sitio!'
  })

  //fetch
 
 fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then((response) => (response.json()))
 

 
//información que me traigo del archivo json
const instrumentos_De_Percusion = `[
    {
        "instrumento":"pandereta",
        "ear": 2024,
        "stock":3
    },
    {
        
        "instrumento":"cajon peruano",
        "ear": 2022,
        "stock":2
    },
    
    {
       "instrumento": "cajon flamenco",
       "ear": 2021,
       "stock": 1
    }    

]
`;



const jsonData = JSON.parse(instrumentos_De_Percusion);


   const instrumentNuevos = jsonData.filter(
  (instrument) => instrument.ear > 2023 && instrument.stock > 1
);



