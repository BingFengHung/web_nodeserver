const express = require('express');

const app = new express();

app.get('/', (req, res) => {
  res.write('hello world');
  res.end();
});

app.listen(3000, () => {
  console.log('hello');
});
