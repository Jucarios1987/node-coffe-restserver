require('dotenv').config();
// Importamos el paquete que creamos con la clase
const Server = require('./models/server');

// Instanciamos la clase "Server"
const server = new Server();

// Inicializamos el metodo "listen" de la clase
server.listen();