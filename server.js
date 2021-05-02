'use strict';

// import the express server, then call the express(); method by saving to variable
// whenever we import these methods, we have to invoke/call them, which is why we save them to a variable and use (); at the end
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://localhost:27017/bookAPI', { useNewUrlParser: true, useUnifiedTopology: true });

// importing the .env file and setting default port to 3001
const PORT = process.env.PORT || 3001;

// importing the User.js file
const { User } = require('./models/User');

// creating a new instance of User from the userSchema constructor and inputting some data
const myUser = new User({
  userName: 'Tony',
  favoriteBooks: [{ bookName: 'first' }, { bookName: 'second' }, { bookName: 'third' }],
  userEmail: 'tregalado30@gmail.com'
});

// saving the myUser with save(); method to the database
myUser.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('user saved');
  }
});

// app.get defines the route and takes a callback function
// res.send(); sends data back to the frontend
app.get('/', (req, res) => {
  res.send('backend server is listening!');
});

// get favorite books data from database and send to front-end
// find(); pulls information from database for the let user = req.query.user
// res.send(); sends data back to the frontend- you can filter that array data with [0]
app.get('/book', (req, res) => {
  let user = req.query.user;
  console.log('user from the backend', user);
  User.find({userEmail: user}, (err, databaseResults) => {
    res.send(databaseResults[0]);
  });
});

// app.listen(); defines where the created server will be listening and takes a callback funtion
app.listen(3001, () => console.log(`app is listening on port ${PORT}`));
