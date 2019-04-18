const express = require("express");
const router = express.Router();
const swapi = require('../swapi.json');
const swapiFilms = require('../swapi-films.json');

router.get("/", (req, res, next) => {
  res.json(swapi);
});

router.get("/films", (req, res, next) => {
  res.json(swapiFilms);
});

module.exports = router;