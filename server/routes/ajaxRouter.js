const express = require('express');
const router = express.Router();
import httpRequest from '../util/httpRequest'

router.all('/*', (req, res, next) => {
    if (req.method === 'POST') {
        global.loggerInfo.info('router all * POST')

        // httpRequest.post(url, params, options);

        return res.json({
            code: 200,
            data: '请求后台接口',
            msg: '请求后台接口'
        })
    }
});

module.exports = (app) => {
    app.use('/ajax', router);
  };
