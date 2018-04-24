const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

// Body Parser for use on response
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Public Views
app.use(express.static(__dirname + 'public'));

// HTML ENDPOINT
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

//////// API ROUTES ////////
// DB ROUTE
const db = require('./models');

app.get('/api', (req, res) => {
  db.Car.find()
  .exec((err, cars) => {
    if(err) => console.log("get error: ", err);
    res.json(cars);
  });
});


// SERVING BACKEND ON 3000
app.listen(PORT, () => {
  console.log('listening on 3000');
});