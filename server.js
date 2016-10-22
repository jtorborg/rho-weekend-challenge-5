const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const favoriteroute = require('./routes/favoriteroute.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

//add route with pg stuff to facilitate the post; actual query
app.use('/favoriteroute', favoriteroute);



app.listen(3000);
