const express = require('express');
const router = express.Router();
const genresController = require('../controllers/apis/apiGenresController')
const actorsController = require('../controllers/apis/apiActorsControllers')


//Generos
router.get('/gnres', genresController.getAllGenres)
router.get('/gnres/:id', genresController.getOneGenres)

//Actors
router.get('/actors', actorsController.getAllActors);
router.get('/actors/:id', actorsController.getOneActor);
router.post('/actors/create', actorsController.create);
router.put('/actors/update/:id', actorsController.update);
router.post('/ators/delete/:id', actorsController.delete);

module.exports = router 