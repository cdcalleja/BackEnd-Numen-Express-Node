const res = require('express/lib/response');
const {
    Player
} = require("../models/plantelseleccion");
const {
    validationResult
} = require("express-validator");



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

// const buscarJugadorPorPosicion = async (req, res) => {
//     try {
//         const jugadores = await Player.findOne(req.params.posicion)
//     } catch (error) {

//     }
// }

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

// const editarJugador = async(req, res) => {
//     try {
//         const error = validationResult(req);
//         if(error.isEmpty()) {
//             const {id} = req.params;
//             const update = await Player.findByIdAndUpdate(id, req.body);
//             res.status(202).json({name: req.body.name, update})
//         }
//         res.status(501).json(error);
//     } catch (error) {
//         res.status(501).json({msg: "No se puede modificar la computadora por favor intente mas tarde", error});
//     }
// }

// const editarJugador = async (req, res) => {
//     const {id} = req.params
//     const edicion = await Player.findByIdAndUpdate(id, req.body)
//     res.status(202).json({name: req.body.name, edicion})
// }


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

module.exports = {
    index,
    agregarJugador,
    verJugadores,
    verJugadorId,
    editarJugador,
    borrarJugador
}