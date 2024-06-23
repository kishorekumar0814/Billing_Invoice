const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Adjust path as per your structure
const billingRoutes = require('./routes/billingRoutes'); // Adjust path as per your structure
const usageRoutes = require('./routes/usageRoutes'); // Adjust path as per your structure
const { mongoURI, sessionSecret } = require('./config/config'); // Adjust path as per your structure

// MongoDB connection setup
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Middleware setup
app.use(bodyParser.json());

// Routes setup
app.use('/auth', authRoutes);
app.use('/billing', billingRoutes);
app.use('/usage', usageRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
