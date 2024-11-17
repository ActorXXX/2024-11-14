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
        console.log(cafe)
        crearCafe(cafe)
    })
}



//async function mostrarCafes() {}
    


//Crea el DIV que contiene el cafecito
function crearCafe(cafe) {
    //obtenemos el DIV donde vamos a mostrar todos los cafecitos
    const cafecitos = document.getElementById('cafecitos')

    if(!cafecitos) return

//EMPEZAMOS CON LA CONSTRUCCION DE LA TARJETA
    const div = document.createElement('div')
    div.classList.add('cafe')
    

//CARDHEADER - cabecera de la tarjeta

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('cardHeader')

    //image
    const image = document.createElement('img')
    image.classList.add('image')
    image.src = cafe.image
    image.style.borderRadius = '10px'

    cardHeader.appendChild(image)
    
     //popular
     const popular = document.createElement('div')
     popular.classList.add('popular')
 
     if(cafe.popular == true
         ? (popular.textContent = 'Popular')
         : (popular.style.visibility = 'hidden')
     )
 
     cardHeader.appendChild(popular)
 
 
    
    

//CARDFOOTER - informacion de la tarjeta

    const cardFooter = document.createElement('div')
    cardFooter.classList.add('cardFooter')

    //card Description
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


    //card Rating
    const cardRating = document.createElement('div')
    cardRating.classList.add('cardRating')
    
    //star
    const star = document.createElement('img')
    
    //cabiando la imagen de la estrellita
    if(cafe.rating == null ?
        (star.src = star_blank) : (star.src = star_fill))

    cardRating.appendChild(star)

    //rating
    const rating = document.createElement('div')
    rating.classList.add('rating')
 
    if (cafe.rating == null
        ? (rating.textContent = '')
        : (rating.textContent = cafe.rating))

    cardRating.appendChild(rating)

    //votes
    const votes = document.createElement('div')
    votes.classList.add('votes')

    //validando si hay votos o no
    if (cafe.votes == 0
        ? (votes.textContent = 'No votes')
        : (votes.textContent = '(' + cafe.votes + ' votes)'))
    

    cardRating.appendChild(votes)

    //available
    const available = document.createElement('div')
    available.classList.add('available')

    if (cafe.available == false 
        ? (available.textContent = 'Sold out')
        : (available.textContent = '')
    )

    cardRating.appendChild(available)



    cardFooter.appendChild(cardDescription)
    cardFooter.appendChild(cardRating)



    //agregamos los hijos al contenedor padre
    div.appendChild(cardHeader)
    div.appendChild(cardFooter)

    cafecitos.appendChild(div)
}

mostrarCafes()

