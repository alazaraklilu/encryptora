const express = require('express');
const path = require('path');
// import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files (React build) if deployed
app.use(express.static(path.join(__dirname, 'build')));

// Example API route
app.get('/api', (req, res) => {
    res.json({ message: 'Server is running successfully!' });
});

// Catch-all for React frontend
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});