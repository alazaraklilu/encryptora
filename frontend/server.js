const express = require('express');
const path = require('path');
const app = express();

const frontendPath = path.join(__dirname, 'dist');

app.use(express.static(frontendPath));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(frontendPath, 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});