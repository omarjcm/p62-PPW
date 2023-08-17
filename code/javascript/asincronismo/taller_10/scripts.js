const API = 'https://rickandmortyapi.com/api/character/'

var xhttp = null

function personaje(texto) {
    let div = document.createElement('div')
    let h1_texto = document.createTextNode(texto.name)
    let h1 = document.createElement('h1')
    h1.appendChild(h1_texto)
    div.appendChild(h1)
    let img = document.createElement('img')
    img.src = texto.image
    div.appendChild(img)

    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild( div )
}

async function obtener_personaje(id) {
    try {
        let response = await fetch(`${API}${id}`)
        return personaje( await response.json() )
    } catch(error) {
        console.error(`[error]: ${error}`)
    }
}

obtener_personaje(1)
obtener_personaje(2)
obtener_personaje(3)
obtener_personaje(4)
obtener_personaje(5)
obtener_personaje(6)
