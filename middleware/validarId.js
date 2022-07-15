const {Player} = require("../models/plantelseleccion");

const validarId = async (req, res, next) => {
    const jugador = await Player.findById(req.params.id)
    if(jugador !== null) {
        next();
    } else {
        res.json({msg: "El id ingresado es erróneo"})
    }
}

module.exports = {validarId}