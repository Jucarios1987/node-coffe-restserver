// Archivo en el que se configuran las rutas de la aplicacion
const {Router} = require('express');
const 
    {
        usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch
    } = require('../controllers/usuarios.controller');
const router = Router();

// Peticion GET
router.get('/', usuariosGet);

// Peticion PUT
// Establecemos que esta ruta contendra un parametro llamado "id"
router.put('/:id', usuariosPut);

// Peticion POST
router.post('/', usuariosPost);

// Peticion DELETE
router.delete('/', usuariosDelete);

// Peticion PATCH
router.patch('/', usuariosPatch);

module.exports = router;