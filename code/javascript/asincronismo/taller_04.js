const saludar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hola ${nombre}.`)
            resolve(nombre)
        }, 1000) 
    })
}

console.log('Iniciando conversacion...')
saludar('Guillermo')
    .then( (dato) => console.log( dato ) )