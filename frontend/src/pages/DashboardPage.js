// src/pages/DashboardPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UsageDetails from '../components/Dashboard/UsageDetails';
import BillingInfo from '../components/Dashboard/BillingInfo';

const DashboardPage = () => {
  const [usage, setUsage] = useState({});
  const [billing, setBilling] = useState({});

  useEffect(() => {
    const fetchUsage = async () => {
      const response = await axios.get('/api/usage');
      setUsage(response.data);
    };

    const fetchBilling = async () => {
      const response = await axios.get('/api/billing');
      setBilling(response.data);
    };

    fetchUsage();
    fetchBilling();
  }, []);

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <UsageDetails usage={usage} />
      <BillingInfo billing={billing} />
    </div>
  );
};

export default DashboardPage;
