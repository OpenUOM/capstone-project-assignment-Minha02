const express = require('express');
const app = express();
const PORT1 = 4401;
const PORT2 = 3000;

app.get('/', (req, res) => {
  res.send('Test server is running!');
});

app.listen(PORT1, () => console.log(`Server running on http://localhost:${PORT1}`));


