const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Express on Vercel!' });
});

app.get('/api/test', (req, res) => {
  res.json({ status: 'working', timestamp: new Date() });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
