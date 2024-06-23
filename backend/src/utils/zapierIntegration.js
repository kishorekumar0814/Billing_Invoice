// src/services/zapierIntegration.js
const axios = require('axios');

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/your-zapier-webhook-id';

module.exports = {
  triggerBillingEvent: async (userId, usageMetrics) => {
    try {
      const payload = {
        userId,
        usageMetrics,
        timestamp: new Date().toISOString()
      };

      const response = await axios.post(ZAPIER_WEBHOOK_URL, payload);

      if (response.status !== 200) {
        throw new Error(`Failed to trigger Zapier webhook: ${response.statusText}`);
      }

      return response.data;
    } catch (error) {
      throw new Error(`Error in triggerBillingEvent: ${error.message}`);
    }
  }
};
