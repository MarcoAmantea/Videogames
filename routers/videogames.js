const express = require("express");
const router = express.Router();
const videogameController = require("../controllers/videogameController")

// index
router.get('/', videogameController.index);

// show
router.get('/:id', videogameController.show);

// create
router.post('/', videogameController.create);

// update
router.put('/:id', videogameController.update);

// modify
router.patch('/:id', videogameController.modify);

// destroy
router.delete('/:id', videogameController.destroy);



module.exports = router;