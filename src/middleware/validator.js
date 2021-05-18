'use strict';

module.exports = (req, res, next) => {
  if (req.query.name === undefined && req.path=='/person'){
    next('You do not enter a name ⛔');}
  else{
    next();}
};
