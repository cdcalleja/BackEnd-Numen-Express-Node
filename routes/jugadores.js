const express = require('express');
const router = express.Router();
const { verJugadores, verJugadorId, agregarJugador, editarJugador, borrarJugador } = require('../controller/controller');
const {check, validationResult, body} = require("express-validator")
const { validarId } = require('../middleware/validarId');

router.get('/ver', verJugadores);
router.get('ver/:id',validarId, verJugadorId);
router.post('/crear', [
    check("nombre").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("apellido").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("edad").not().isEmpty().withMessage("campo vacio").isLength({max: 3, min: 1}),
    check("posicion").not().isEmpty().withMessage("campo vacio").isLength({max: 50, min: 4}),
    check("club").not().isEmpty().withMessage("campo vacio").isLength({max: 30, min: 4}),
    check("cantPartSeleccion").not().isEmpty().withMessage("campo vacio").isLength({max: 4, min: 1}),
    check("goles").not().isEmpty().withMessage("campo vacio").isLength({max: 3, min: 1}),
], agregarJugador);
router.put("/editar/:id", validarId,[
    check("nombre").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("apellido").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("edad").not().isEmpty().withMessage("campo vacio").isLength({max: 3, min: 1}),
    check("posicion").not().isEmpty().withMessage("campo vacio").isLength({max: 50, min: 4}),
    check("club").not().isEmpty().withMessage("campo vacio").isLength({max: 30, min: 4}),
    check("cantPartSeleccion").not().isEmpty().withMessage("campo vacio").isLength({max: 4, min: 1}),
    check("goles").not().isEmpty().withMessage("campo vacio").isLength({max: 3, min: 1}),
], editarJugador)
router.delete("/borrar/:id", borrarJugador)

module.exports = router;