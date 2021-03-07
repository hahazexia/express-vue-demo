const express = require('express');
const router = express.Router();

router.get('/index', function(req, res, next) {
    global.loggerInfo.info('router /index')
    res.render('./win/v100/index');
});

router.get('/app', function(req, res, next) {
    global.loggerInfo.info('router /app')
    res.render('./win/v100/app');
});

module.exports = (app) => {
    app.use('/win/v100', router);
};
