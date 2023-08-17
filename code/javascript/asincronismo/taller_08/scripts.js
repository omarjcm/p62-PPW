const API = 'https://rickandmortyapi.com/api/character/'

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

function cargar_datos(url_api) {
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = function(e) {
        if (xhttp && xhttp.readyState == 4 && xhttp.status == 200) {
            const objeto = JSON.parse( xhttp.responseText )
            personaje( objeto )
        } else {
            console.error(`[error]: ${url_api}`)
        }
    }
    xhttp.send()
}

for (let i=1; i<=30; i++) {
    cargar_datos( API + i )
}