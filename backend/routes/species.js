const express = require('express')
let router = express.Router()
let {speciesController} = require("../controllers")

//--------------------------------------------------------------Species

router.get("/fetchSpecies",speciesController.fetchSpecies);
router.put("/filterSpecies",speciesController.filterSpecies);