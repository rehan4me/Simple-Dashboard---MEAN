var express = require('express');
var router = express.Router();

var dashboard = require('./api/dashboard.route');

router.use('/dashboard',dashboard);

module.exports = router;