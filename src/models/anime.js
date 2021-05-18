'use strict';

const uuid = require('uuid').v4;

class Anime {
  constructor() {
    this.db = [];
  }

  read(id) {
    if (id) {
      return this.db.find((anime) => anime.id === id);
    } else {
      return this.db;
    }
  }

  create(animeObject) {
    const anime = {
      id: uuid(),
      info: animeObject,
    };
    this.db.push(anime);
    return anime;
  }

  delete(id) {
    this.db = this.db.filter((anime) => anime.id !== id);
    return this.db;
  }

  update(id, animeObject) {
    for (let i = 0; i < this.db.length; i++) {
      let anime = this.db[i];
      if(anime.id === id) {
        this.db[i].info = animeObject;
        return this.db[i];
      } 
    }
  }
}

module.exports = Anime;