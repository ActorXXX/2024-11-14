const API ="https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"

let cafecitos = []

//Trae y muestra los cafecitos en la pagina
async function mostrarCafes() {
    const response = await fetch(API)
    const cafes = await response.json()
    cafecitos = cafes
    
    cafecitos.forEach(cafe => {
        crearCafe(cafe)
    })
}

//async function mostrarCafes() {}
    


//Crea el DIV que contiene el cafecito
function crearCafe(cafe) {
    //obtenemos el DIV donde vamos a mostrar todos los cafecitos
    const cafecitos = document.getElementById('cafecitos')
    cafecitos.style.display = 'flex'
    cafecitos.style.flexWrap = 'wrap'
    cafecitos.style.gap = '1em'

    //empezamos con la construccion del cafecito
    const div = document.createElement('div')
    


    const cardHeader = document.createElement('div')

    const image = document.createElement('img')
    image.src = cafe.image
    image.style.borderRadius = '10px'

    cardHeader.appendChild(image)


    const cardFooter = document.createElement('div')

    const title = document.createElement('h3')
    title.textContent = cafe.name

    const price = document.createElement('div')
    price.textContent = cafe.price
    price.style.backgroundColor = 'green'
    price.style.width = 'fit-content'
    price.style.color = 'white'

    cardFooter.appendChild(title)
    cardFooter.appendChild(price)


    //agregamos los hijos al contenedor padre
    div.appendChild(cardHeader)
    div.appendChild(cardFooter)

    cafecitos.appendChild(div)
}

mostrarCafes()

