'use strict';

const express = require('express');

const cors = require('cors');

const morgan = require('morgan');

const app = express();

const error500Handler = require('./error-handlers/500');

const error404Handler = require('./error-handlers/404');

const animeRoutes = require('./routes/anime');

const gamesRoutes = require('./routes/games');

app.use(express.json());

app.use(morgan('dev'));

app.use(cors());

app.use('/api/favorite/anime', animeRoutes);

app.use('/api/favorite/games', gamesRoutes);

app.use('*', error404Handler);

app.use(error500Handler);

function start(port) {
  app.listen(port, () => {
    console.log(`🚀 ~ file: server.js ~ line 35nod ~ app.listen ~ we are launching 🔥 on port => ${port}`);
  });
}

module.exports = {
  server: app,
  start: start,
};