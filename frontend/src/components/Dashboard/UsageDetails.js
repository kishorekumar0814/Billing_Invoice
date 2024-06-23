// src/components/Dashboard/UsageDetails.js
import React from 'react';

const UsageDetails = ({ usage }) => (
  <div className="usage-details">
    <h2>Usage Details</h2>
    <p>{JSON.stringify(usage)}</p>
  </div>
);

export default UsageDetails;
