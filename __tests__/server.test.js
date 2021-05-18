'use strict';

const { server } = require('../src/server.js');

const superTest = require('supertest');

const request = superTest(server);

describe('server anime', () => {

  let id;

  it('should create a new anime using POST', async () => {

    let anime = {
      name: 'Sword Art Online',
      character: 'Kazuto Kirigaya',
    };

    const response = await request.post('/api/favorite/anime').send(anime);

    expect(response.status).toEqual(201);
    expect(response.body.info.name).toEqual('Sword Art Online');
    expect(response.body.info.character).toEqual('Kazuto Kirigaya');
    expect(response.body.id.length).toBeGreaterThan(0);

    id = response.body.id;
  });

  it('should read a list of records using GET', async () => {

    const response = await request.get('/api/favorite/anime');

    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should read a record using GET', async () => {

    const response = await request.get(`/api/favorite/anime/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.info.name).toEqual('Sword Art Online');
    expect(response.body.info.character).toEqual('Kazuto Kirigaya');
  });

  it('should update an anime using PUT', async () => {

    let updateAnime = {
      name: 'Naruto',
      character: 'Itachi Uchiha',
    };

    const response = await request.put(`/api/favorite/anime/${id}`)
      .send(updateAnime);

    expect(response.status).toEqual(200);
    expect(response.body.info.name).toEqual('Naruto');
    expect(response.body.info.character).toEqual('Itachi Uchiha');
  });

  it('should destroy a record using DELETE', async () => {

    const response = await request.put(`/api/favorite/anime/${id}`);

    expect(response.status).toEqual(200);
  });


  
});


describe('server games', () => {

  let id;

  it('should create a new game using POST', async () => {

    let game = {
      name: 'Command & Conquer: Red Alert 3',
      genre: 'strategy',
    };

    const response = await request.post('/api/favorite/games').send(game);

    expect(response.status).toEqual(201);
    expect(response.body.info.name).toEqual('Command & Conquer: Red Alert 3');
    expect(response.body.info.genre).toEqual('strategy');
    expect(response.body.id.length).toBeGreaterThan(0);

    id = response.body.id;
  });

  it('should read a list of records using GET', async () => {

    const response = await request.get('/api/favorite/games');

    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should read a record using GET', async () => {

    const response = await request.get(`/api/favorite/games/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.info.name).toEqual('Command & Conquer: Red Alert 3');
    expect(response.body.info.genre).toEqual('strategy');
  });

  it('should update an game using PUT', async () => {

    let updateGame = {
      name: 'Grand Theft Auto IV',
      genre: 'action',
    };

    const response = await request.put(`/api/favorite/games/${id}`)
      .send(updateGame);

    expect(response.status).toEqual(200);
    expect(response.body.info.name).toEqual('Grand Theft Auto IV');
    expect(response.body.info.genre).toEqual('action');
  });

  it('should destroy a record using DELETE', async () => {

    const response = await request.put(`/api/favorite/games/${id}`);

    expect(response.status).toEqual(200);
  });


  
});

describe('server', ()=>{

  it('should get 404 status', async ()=>{
    const response = await request.get('/whereami');
    expect(response.status).toBe(404);
  });
  
});