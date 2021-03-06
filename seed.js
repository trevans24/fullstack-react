'use strict';

// Require DB
const db = require('./models');

const carList = [
{
  year: 1963,
  make: "Aston Martin",
  model: "DB5",
  picture: "http://www.007james.com/i/articles/james-bond-cars/db5-skyfall.jpg",
  movie: ["Skyfall", "Goldeneye", "Tomorrow Never Dies"]
},
{
  year: 2006,
  make: "Aston Martin",
  model: "DBS V12",
  picture: "http://www.007james.com/i/articles/james-bond-cars/aston-martin-casino-royale.jpg",
  movie: ["Casion Royale", "Quantum of Solace"]
},
{
  year: 2002,
  make: "Aston Martin",
  model: "V12 Vanquish",
  picture: "http://www.007james.com/i/articles/james-bond-cars/aston-martin-vanquish.jpg",
  movie: ["Die Another Day"]
},
{
  year: 1957,
  make: "Ford",
  model: "Fairlane",
  picture: "http://www.007james.com/i/articles/james-bond-cars/ford-fairlane.jpg",
  movie: ["Die Another Day"]
},
{
  year: 1999,
  make: "BMW",
  model: "Z8",
  picture: "http://www.007james.com/i/articles/james-bond-cars/bmw-z8.jpg",
  movie: ["The World is Not Enough"]
},
];

// SEEDING THE DB
db.Car.remove({}, (err, cars) => {
  console.log('removed all cars');
  db.Car.create(carList, (err, cars) => {
    if(err) {
      console.log('DB creation err: ', err);
    }
    console.log('Created Cars DB!');
    process.exit();
  });
});
