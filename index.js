const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
  res.json({message:'hey Faizn!'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
