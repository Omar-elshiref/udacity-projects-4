const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const fetch = require('node-fetch');

dotenv.config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});

app.post('/api', async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).send({ message: 'URL is required!' });
    }

    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${encodeURIComponent(url)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).send({ message: 'Failed to fetch data from the external API.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
