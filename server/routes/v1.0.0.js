const express = require('express');
const router = express.Router();

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/app', function(req, res, next) {
    res.render('app');
});

module.exports = (app) => {
  app.use('/win/v100', router);
};
