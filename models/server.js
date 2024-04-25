const express = require('express')
const cors = require('cors')
const {dbConnection} = require('../database/config.db')

class Server {

    constructor() {
         this.app = express();
         this.port = process.env.PORT || 3000;
         this.usuariosPath = '/restserver/usuarios';

         // Coneccion a base de datos
         this.conectarDB();

         // Middlewares: Son funciones que añaden otra funcionalidad al web server, es una funcion que siempre se ejecutara al lebantar el servidor.
         this.middlewares();

         // Rutas de la aplicacion
         this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    // Creo el metodo "middlewares" relacionado a la carpeta publica
    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y Parseo BODY
        this.app.use(express.json());

        // Directorio publico 
        // .use es la palabra clave que indica que esto es un middlewares
        this.app.use(express.static('public'));
    }

    // Creo un metodo con las rutas de mi aplicacion
    routes() {
        
        // Utilizamos las rutas que establesimos en el archivo "users"
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
        
    }

    // Creo un metodo para la parte que me indica el puerto que estoy utilizando
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;