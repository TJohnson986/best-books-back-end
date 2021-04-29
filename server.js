const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/booksdb', {useNewUrlParser: true, useUnifiedTopology: true});

//intentionally added AFTER mongoose.connect
const Book = require('./models/books.js');

app.get('/', (req, res) => {
  res.send('hello!');
});

app.get('/books', (req, res) => {
  res.send('hello!');
});

app.listen(3001, () => console.log('app listening on 3001'));
