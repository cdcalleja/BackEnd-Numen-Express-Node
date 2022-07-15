const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect( process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('Conectado exitosamente a la base de datos');
    } catch  {

        throw new Error('Error al conectarse a la base de datos');
        
    }
}

module.exports = {dbConnection}