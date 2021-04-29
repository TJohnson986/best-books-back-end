const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema ({
  author: String,
  genre: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
