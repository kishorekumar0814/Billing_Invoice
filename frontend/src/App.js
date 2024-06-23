// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import InvoicePage from './pages/InvoicePage';
import './styles/main.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/invoice" component={InvoicePage} />
    </Switch>
  </Router>
);

export default App;