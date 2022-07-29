const res = require('express/lib/response');
const {
    Player
} = require("../models/plantelseleccion");
const {
    validationResult
} = require("express-validator");
const axios = require('axios');



const index = (req, res) => {
    res.render('index', {
        title: 'Proyecto BackEnd Numen'
    });
}


const verJugadores = async (req, res) => {
    const jugadores = await Player.find()
    res.json({
        jugadores
    })
}

const verJugadorId = async (req, res) => {
    const jugador = await Player.findById(req.params.id)
    res.json({jugador})
}

const agregarJugador = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const {
                nombre
            } = req.body;
            const {
                apellido
            } = req.body;
            const {
                edad
            } = req.body;
            const {
                posicion
            } = req.body;
            const {
                club
            } = req.body;
            const {
                cantPartSeleccion
            } = req.body;
            const {
                goles
            } = req.body;
            const jugador = new Player({
                nombre,
                apellido,
                edad,
                posicion,
                club,
                cantPartSeleccion,
                goles
            });
            await jugador.save();
            res.status(201).json({
                jugador,
                msg: 'Agregado al plantel'
            })
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({
            msg: "Error al intengar agregar el jugador al plantel",
            err
        })
    }
}

const editarJugador = async (req, res) => {
    const error = validationResult(req)
    if (error.isEmpty()) {
        const {id} = req.params
        const edicion = await Player.findByIdAndUpdate(id, req.body)
        res.status(202).json({name: req.body.name,edicion})
    } else {
        res.status(501).json(error)
    }

}

const borrarJugador = async (req, res) => {
    try {
        const jugador = await Player.findByIdAndDelete(req.params.id);
        res.json({
            msg: "Se eliminó de la lista a: ",
            jugador
        })
    } catch (error) {
        res.status(400).json({
            msg: "Problemas para procesar la información, intente mas tarde"
        })
    }
}


const consultaPeople = async(req, res) => {
    try {
        const respuesta = await axios.get("https://swapi.dev/api/people/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data})
    }
}

const consultaPlanets = async(req, res) => {
    try {
        const respuesta = await axios.get("https://swapi.dev/api/planets/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});        
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data})
    }
}

const consultaFilms = async(req, res) => {

    try {
        const respuesta = await axios.get("https://swapi.dev/api/films/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});        
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data})
    }
}

const consultaSpecies = async(req, res) => {

    try {
        const respuesta = await axios.get("https://swapi.dev/api/species/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});        
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data})
    }

}

const consultaVehicles = async(req, res) => {

    try {
        const respuesta = await axios.get("https://swapi.dev/api/vehicles/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});        
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data}) 
    }
}

const consultaStarShips = async(req, res) => {
    try {
        const respuesta = await axios.get("https://swapi.dev/api/starships/", {timeout: 10000})
        res.json({status: respuesta.status, data: respuesta.data});        
    } catch (error) {
        res.json({status: error.response.status, data: error.response.data}) 
    }

}

module.exports = {
    index,
    agregarJugador,
    verJugadores,
    verJugadorId,
    editarJugador,
    borrarJugador,
    consultaPeople,
    consultaPlanets,
    consultaFilms,
    consultaSpecies,
    consultaStarShips,
    consultaVehicles 
}