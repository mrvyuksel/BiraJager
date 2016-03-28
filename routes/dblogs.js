var express = require('express');
var router = express.Router();
var logger = require(process.cwd()+'/logger.js');

/* GET log collection names. */
router.get('/', function (req, res, next) {
    res.json({});
});

/* GET specific log listing. */
router.get('/:appName', function (req, res, next) {
    res.json({});
});

/*
 * POST to adduser.
 */
router.post('/addLog', function (req, res) {
    logger.info(req.body);
    res.send(
        {msg: 'logged to db'}
    );
});

module.exports = router;
