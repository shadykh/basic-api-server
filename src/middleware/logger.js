'use strict';

module.exports = (req, res, next) => {
  console.log('The Request information =>', req.method, req.path);
  next();
};