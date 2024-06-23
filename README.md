# Billing Invoice Microservice

## Overview

This project consists of a backend microservice built with Node.js and a frontend application built with React. The system allows users to authenticate using Google OAuth, view their SaaS usage details, access billing information, and generate invoices based on cumulative usage. It also integrates with Zapier to automate billing processes.

## Features

### Backend (Node.js)
1. User authentication via Google OAuth
2. View SaaS usage details
3. Access billing information
4. Generate invoices
5. Zapier integration for automated billing

### Frontend (React)
1. Google OAuth login
2. Display usage details
3. Show billing information
4. Generate invoices

## Getting Started

### Prerequisites
- Node.js
- npm
- MongoDB
- Google Developer account for OAuth
- Zapier account

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kishorekumar0814/Billing_Invoice.git
   cd Billing_Invoice

2. **Backend Setup**:

   ```bash
   cd backend
   npm install


**Create a .env file in the backend directory**:

**.env**

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret


3. **Frontend Setup**:
   ```bash
   cd ../frontend
   npm install

**Create a .env file in the frontend directory**:

**.env**

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_KEY=your_google_client_key


**Start the backend server & frontend server**:
   ```bash
   npm start
