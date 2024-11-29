const express = require('express');
const path = require('path');
const app = express();

// Serve the Vite production build
app.use(express.static(path.join(__dirname, 'dist')));

// API example (if needed)
app.get('/api', (req, res) => {
    res.json({ message: 'Server is running successfully!' });
});

// Catch-all route to serve the React app for any frontend route
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});