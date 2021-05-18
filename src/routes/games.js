'use strict';


const express = require('express');

const Game = require('../models/games.js');

const game = new Game();

const router = express.Router();

router.get('/', allGame);

router.get('/:id', specificGame);

router.post('/', addGame);

router.put('/:id', updateGame);

router.delete('/:id', deleteGame);

function allGame(req, res) {
  const resObj = game.read();
  res.json(resObj);
}

function specificGame(req, res) {
  const resObj = game.read(req.params.id);
  res.json(resObj);
}

function addGame(req, res) {
  const gameObj = req.body;
  const resObj = game.create(gameObj);
  res.status(201).json(resObj);
}

function updateGame(req, res) {
  const gameObj = req.body;
  const resObj = game.update(req.params.id, gameObj);
  res.json(resObj);
}

function deleteGame(req, res) {
  const resObj = game.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;
