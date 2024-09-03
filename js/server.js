const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

// Dummy data for tasks
const tasks = [
    { id: 1, title: 'Transcribe Audio', description: 'Listen to audio and convert it to text.', reward: '$0.50' },
    { id: 2, title: 'Label Images', description: 'Tag images with relevant keywords.', reward: '$0.30' },
    { id: 3, title: 'Collect Audio Samples', description: 'Record short audio samples.', reward: '$0.70' }
];

// API to get tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
