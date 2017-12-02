var express = require('express');
var router = express.Router();
var dashboardController = require('../../controllers/dashboard.controller');

// Map each API to the Controller FUnctions

router.get('/', dashboardController.getRecords);


// Export the Router

module.exports = router;