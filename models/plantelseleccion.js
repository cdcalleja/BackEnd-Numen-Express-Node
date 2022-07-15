const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema ({

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    posicion: {
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    cantPartSeleccion:{
        type: Number,
        required: true
    },
    goles: {
        type: Number,
        required: true
    }
})

const Player = mongoose.model('Player', storeSchema);

module.exports = {Player}