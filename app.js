// import the expresss module and create an express application
var express = require('express');
var app = express();
//import path module to set up path as dynamic
var path = require('path');
var dataFile = require('./data.json')

//view ejs engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//route for root that passes the json object as dataVariable and passes it to views index file for rendering.
app.get('/', function (req, res) {
  res.render('index', { dataVariable: dataFile});
})
//route for rendering in json format
app.get('/json', function (req, res){
  res.json(dataFile)
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
