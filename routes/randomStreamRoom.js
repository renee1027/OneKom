var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('randomStreamRoom', { title: 'Random Stream Room' });
});

module.exports = router;
