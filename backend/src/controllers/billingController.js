// src/controllers/billingController.js
const BillingService = require('../services/billingService');
const zapierIntegration = require('../services/zapierIntegration');

module.exports = {
  getBillingInfo: async (req, res) => {
    try {
      const userId = req.user.id;
      const billingInfo = await BillingService.getBillingInfo(userId);
      res.status(200).json(billingInfo);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching billing information' });
    }
  },

  generateInvoice: async (req, res) => {
    try {
      const userId = req.user.id;
      const invoice = await BillingService.generateInvoice(userId);
      
      // Trigger Zapier webhook for billing event
      const usageMetrics = invoice.details; // Adjust as needed based on your actual usage metrics structure
      await zapierIntegration.triggerBillingEvent(userId, usageMetrics);

      res.status(200).json(invoice);
    } catch (error) {
      res.status(500).json({ error: 'Error generating invoice' });
    }
  }
};
