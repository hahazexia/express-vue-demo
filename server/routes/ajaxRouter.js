const express = require('express');
const router = express.Router();

router.all('/*', (req, res, next) => {
    if (req.method === 'POST') {
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
