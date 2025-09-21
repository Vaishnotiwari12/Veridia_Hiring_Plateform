const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const app = express();
const port = 5000;

app.use(cors());

// Add these two lines to accept JSON data and use our new routes
app.use(express.json());
app.use('/api/candidates', require('./routes/candidateRoutes'));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Veridia Hiring API! 👋' });
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});