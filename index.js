const mongoose = require('mongoose');
const dbUrl = "mongodb://localhost:27017/restaurants_db";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(dbUrl, (err, db) => {
  if(err) {
    console.log('unbale to connect: ', err);
  } 
  else {
    console.log('connecting to: ', dbUrl);
  } 
});

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

// SERVING BACKEND ON 3000
app.listen(PORT, () => {
  console.log('listening on 3000');
});