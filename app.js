const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // すべてのオリジンを許可
app.use(express.json());

app.get('/proxy', async (req, res) => {
  const target = req.query.url;
  const response = await fetch(target);
  const data = await response.text();
  res.send(data);
});

app.listen(3000, () => console.log('CORS proxy running on port 3000'));
