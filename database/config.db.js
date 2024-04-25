// Using Node.js `require()`
const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN)
            .then(() => console.log('DB Connected!'));
        
    } catch (error) {
        console.log(error);
        throw new Error('Error durante la coneccion a la base de datos');
    }

}

module.exports = {
    dbConnection
}