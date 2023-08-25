const Model = require('./model')

function agregarUsuario( dato ) {
    const resultado = new Model( dato )
    return resultado.save()
}

module.exports = {
    agregar:agregarUsuario,
}