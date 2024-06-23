// src/controllers/usageController.js
const UsageService = require('../services/usageService');
const zapierIntegration = require('../services/zapierIntegration');

module.exports = {
  getUsageDetails: async (req, res) => {
    try {
      const userId = req.user.id;
      const usageDetails = await UsageService.getUsageDetails(userId);
      
      // Trigger Zapier webhook for usage metrics
      await zapierIntegration.triggerBillingEvent(userId, usageDetails);

      res.status(200).json(usageDetails);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching usage details' });
    }
  }
};