const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema is like a constructor that defines properties & data types
// optional syntax: bookName: {type: dataType}, bookDescription: {type: String}
const bookSchema = new Schema({
  bookName: String,
  bookDescription: String,
  bookStatus: String
});

// userSchema includes the bookSchema above - we can add Schemas within Schemas
// user is an object that contains an array of book objects
const userSchema = new Schema({
  userName: String,
  favoriteBooks: [bookSchema],
  userEmail: String
});

// make a model from the schema
// bookSchema is added to userSchema, so need to compile a book model.
// fun fact: mongoose converts the 'User' to lowercase and plural
// run db.users.find() inside mongo shell inside terminal to see your user data
const User = mongoose.model('User', userSchema);

module.exports = {User};
