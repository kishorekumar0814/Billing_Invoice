// src/routes/billingRoutes.js
const express = require('express');
const billingController = require('../controllers/billingController');
const router = express.Router();

// Route to get billing information
router.get('/api/billing', billingController.getBillingInfo);

// Route to generate an invoice
router.post('/api/invoice', billingController.generateInvoice);

module.exports = router;
