var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('sernsorer');
    var obj = JSON.parse(sensordata.JSON);
    
});

module.exports = router;