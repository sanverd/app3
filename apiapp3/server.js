import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
    res.json({ message: 'pong 🏓 from API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
