'use strict';

const uuid = require('uuid').v4;

class Game {
  constructor() {
    this.db = [];
  }

  read(id) {
    if (id) {
      return this.db.find((game) => game.id === id);
    } else {
      return this.db;
    }
  }

  create(gameObject) {
    const game = {
      id: uuid(),
      info: gameObject,
    };
    this.db.push(game);
    return game;
  }

  delete(id) {
    this.db = this.db.filter((game) => game.id !== id);
    return this.db;
  }

  update(id, gameObject) {
    for (let i = 0; i < this.db.length; i++) {
      let game = this.db[i];
      if(game.id === id) {
        this.db[i].info = gameObject;
        return this.db[i];
      } 
    }
  }
}

module.exports = Game;