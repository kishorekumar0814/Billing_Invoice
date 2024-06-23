// src/routes/usageRoutes.js
const express = require('express');
const usageController = require('../controllers/usageController');
const router = express.Router();

// Route to get usage details
router.get('/api/usage', usageController.getUsageDetails);

module.exports = router;
