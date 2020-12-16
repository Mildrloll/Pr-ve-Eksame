var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/', function (req, res, next) {
    var sensordata = fs.readFileSync("./public/data/sensordata.json");
    var snesordataJson = JSON.parse(sensordata);
    res.send(snesordataJson);
});

module.exports = router;