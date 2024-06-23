// src/components/Dashboard/BillingInfo.js
import React from 'react';

const BillingInfo = ({ billing }) => (
  <div className="billing-info">
    <h2>Billing Information</h2>
    <p>{JSON.stringify(billing)}</p>
  </div>
);

export default BillingInfo;
