const API ="https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"

const star_blank = '../assets/icons/Star.svg'

const star_fill = '../assets/icons/Star_Fill.svg'

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
    div.classList.add('cafe')
    


    const cardHeader = document.createElement('div')

    const image = document.createElement('img')
    image.src = cafe.image
    image.style.borderRadius = '10px'

    cardHeader.appendChild(image)

//CARDFOOTER

    const cardFooter = document.createElement('div')
    cardFooter.classList.add('cardFooter')

    //card description
    const cardDescription = document.createElement('div')
    cardDescription.classList.add('cardDescription')
    
    
    //title
    const title = document.createElement('h3')
    title.textContent = cafe.name
    title.style.margin = '0'

    //price
    const price = document.createElement('div')
    price.textContent = cafe.price
    price.classList.add('price')

    cardDescription.appendChild(title)
    cardDescription.appendChild(price)


    //rating
    const rating = document.createElement('div')
    rating.classList.add('rating')
    rating.style.marginTop = '.6em'
    
    //star
    const star = document.createElement('img')
    
    //cabiando la imagen de la estrellita
    if(cafe.rating == null || cafe.votes == 0 ?
        (star.src = star_blank) : (star.src = star_fill))

    rating.appendChild(star)

    //votes
    const votes = document.createElement('div')

    //validando si hay votos o no
    if (cafe.rating == null || cafe.votes == 0
        ? (votes.textContent = 'No rating')
        : (votes.textContent = cafe.rating))

    rating.appendChild(votes)








    cardFooter.appendChild(cardDescription)
    cardFooter.appendChild(rating)


    //agregamos los hijos al contenedor padre
    div.appendChild(cardHeader)
    div.appendChild(cardFooter)

    cafecitos.appendChild(div)
}

mostrarCafes()

