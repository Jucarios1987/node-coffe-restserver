const {response, request} = require('express'); 

const usuariosGet = (req = request, res = response) => {

    const {q = 'No Query', nombre = 'No name', apikey = 'No API Key', page = 10, limit = 'No Limit'} = req.query;


    res.json({
        // Este "ok" es opcional por que el esttus de la peticion me retorna esta informacion.
        ok: true,
        msg: 'get API - usuariosGet Controller',
        //query
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res) => {
    
    // Mapeamos el parametro "id" que se establecion en la ruta del "PUT" y se obtubo de la ruta del archivo "usuarios.js"
    const id = req.params.id;

    res.json({
        msg: 'put API - usuariosPut Controller',
        // Mostramos el "id" que obtubimos de la ruta de la peticion. 
        id
    });
}

const usuariosPost = (req, res) => {
    
    const {nombre, edad} = req.body;
    
    res.json({
        msg: 'post API - usuariosPost Controller',
        //body
        // A cotinuacion estraemos cada una de las propiedades que necesitamos del JSon
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - usuariosDelete Controller'
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - usuariosPatch Controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}