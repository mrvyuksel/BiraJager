var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/winstonLogs/:fileName', function(req, res, next) {
 var rs= fs.createReadStream('./winstonLogs/'+req.params.fileName);
  rs.on('error', function(){ res.json({result:'no file exist'});});
  rs.pipe(res);
});

router.get('/getList', function(req, res, next) {
  var db = req.db;
  var collection = db.get('dblogs');
  collection.distinct("appName", function (e, docs) {
    res.json(docs);
  });
});

module.exports = router;
