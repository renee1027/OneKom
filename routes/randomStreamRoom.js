var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('randomStreamRoom', { 
    title: 'Random Stream Room',
    options: [{name: 'Twitter', icon: 'fa fa-twitter'}, 
              {name: 'Facebook', icon: 'fa fa-facebook'},
              {name: 'Polls', icon: 'fa fa-trophy'},
              {name: 'Instagram', icon: 'fa fa-instagram'},
              {name: 'Weibo', icon: 'fa fa-weibo'},
              {name: 'Live Stats', icon: 'fa fa-line-chart'}]
  });
});

module.exports = router;
