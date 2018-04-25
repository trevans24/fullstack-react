const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;
const passport = require('passport');
const Google = require('passport-google-oauth20').Strategy;

// Body Parser for use on response
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Public Views
app.use(express.static(__dirname + 'public'));

// PASSPORT
passport.use(new Google());

//////// API ROUTES ////////
// DB ROUTE
const db = require('./models');

app.get('/api', (req, res) => {
  db.Car.find()
  .exec((err, cars) => {
    if(err) {
      console.log("get error: ", err);
    }
    res.json(cars);
  });
});


// SERVING BACKEND ON 3000
app.listen(PORT, () => {
  console.log('listening on 3000');
});