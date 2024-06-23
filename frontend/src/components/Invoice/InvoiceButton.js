// src/components/Invoice/InvoiceButton.js
import React from 'react';
import axios from 'axios';

const InvoiceButton = () => {
  const handleGenerateInvoice = async () => {
    await axios.post('/api/invoice');
    alert('Invoice generated!');
  };

  return (
    <button onClick={handleGenerateInvoice}>
      Generate Invoice
    </button>
  );
};

export default InvoiceButton;