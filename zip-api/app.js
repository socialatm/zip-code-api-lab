const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
    // value of zipdb.byZip[req.params.zipcode] is undefined if invalid zip code is used as input
   /*
    const zipCodeData = zipdb.byZip[req.params.zipcode];
    if (zipCodeData) {
      res.send(zipCodeData);
    } else {
      res.send("Not Found");
    }
    */
  // fill in...
  const zipcode = req.params.zipcode
  res.json(zipdb.byZip[zipcode] ? zipdb.byZip[zipcode] : "Not Found");
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
    // value of zipdb.byCity[req.params.cityname] is undefined if invalid city name is used as input
    /*
    const cityNameData = zipdb.byCity[req.params.cityname];
    if (cityNameData) {
      res.send(cityNameData);
    } else {
      res.send("Not Found");
    }
    */
    const city = req.params.cityname.toUpperCase();
    res.json(zipdb.byCity[city] ? zipdb.byCity[city] : "Not Found");
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
