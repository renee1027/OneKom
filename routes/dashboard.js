var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function(req, res, next) {
    res.render('dashboard', {
        userName: "Vagram A",
        firstName: "Vagram"
    });
});

module.exports = router;
