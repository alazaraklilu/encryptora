const express = require('express');
const path = require('path');
const app = express();

// Define the path to the frontend's dist folder
const frontendPath = path.join(__dirname, 'frontend', 'dist');

// Serve the Vite production build
app.use(express.static(frontendPath));

// Catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(frontendPath, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});