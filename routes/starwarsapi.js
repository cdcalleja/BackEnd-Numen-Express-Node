const express = require('express');
const { consultaPeople, consultaPlanets, consultaStarShips, consultaSpecies, consultaVehicles, consultaFilms } = require('../controller/controller');
const router = express.Router();

router.get('/people', consultaPeople)
router.get('/planets', consultaPlanets)
router.get('/starships', consultaStarShips)
router.get('/species', consultaSpecies)
router.get('/vehicles', consultaVehicles)
router.get('/films', consultaFilms)




module.exports = router;