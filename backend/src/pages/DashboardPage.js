// src/pages/DashboardPage.js
import React from 'react';
import UsageDetails from '../components/Dashboard/UsageDetails';
import BillingInfo from '../components/Dashboard/BillingInfo';

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <UsageDetails />
      <BillingInfo />
    </div>
  );
}

export default DashboardPage;
