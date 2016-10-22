const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

//add route with pg stuff to facilitate the post; actual query

app.listen(3000);
