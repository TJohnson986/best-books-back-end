const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/booksdb', {useNewUrlParser: true, useUnifiedTopology: true});

//intentionally added AFTER mongoose.connect
const Book = require('./models/books.js');
const User = require('./models/users.js');

const myBook = new Book ({title: 'The First Book', author: 'Unknown', genre: 'Non-fiction'});
myBook.save(function (err) {
  if (err) console.err(err);
  else console.log('saved the book');
});

app.get('/', (req, res) => {
  res.send('hello!');
});

app.get('/books', (req, res) => {
  Book.find((err, databaseResults) => {
    res.send(databaseResults);
  });
});

app.get('/users', (req, res) => {
  Book.find((err, databaseResults) => {
    res.send(databaseResults);
  });
});

app.listen(3001, () => console.log('app listening on 3001'));
