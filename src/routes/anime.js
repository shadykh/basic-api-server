'use strict';

const express = require('express');

const Anime = require('../models/anime.js');

const anime = new Anime();

const router = express.Router();

router.get('/', allAnime);

router.get('/:id', specificAnime);

router.post('/', addAnime);

router.put('/:id', updateAnime);

router.delete('/:id', deleteAnime);

function allAnime(req, res) {
  const resObj = anime.read();
  res.json(resObj);
}

function specificAnime(req, res) {
  const resObj = anime.read(req.params.id);
  res.json(resObj);
}

function addAnime(req, res) {
  const animeObj = req.body;
  const resObj = anime.create(animeObj);
  res.status(201).json(resObj);
}

function updateAnime(req, res) {
  const animeObj = req.body;
  const resObj = anime.update(req.params.id, animeObj);
  res.json(resObj);
}

function deleteAnime(req, res) {
  const resObj = anime.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;
