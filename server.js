const express = require('express');
const app = express();
const port = 3000;
//include 'path' package
const path = require('path');
//include 'body-parser' package
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded (from expressjs.com)
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json (from expressjs.com)
app.use(bodyParser.json())

//create route point(s) - listen for http get requests (urls)
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation and Querying!')
})

//http request to and response from browser using url with additional name parameter
app.get('/hello/:name', (req, res) => {
  //confirmation request message to console
  console.log(req.params.name);
  //response for requested 'name' parameter
  res.send('Hello ' + req.params.name)
})
//http request to and response from browser using api url for movie data
app.get('/api/movies', (req, res) => {

  const mymovies = [
    {
      "Title": "Avengers: Infinity War",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    }
  ];

  res.json({ movies: mymovies });
});

app.get('/test', (req, res) => {
  //using 'path' package variable __dirname to determine path to current js file and add html file 
  res.sendFile(__dirname + '/index.html');
})
//make request with data as part of url (get)
app.get('/name',(req,res)=>{
  res.send('Hello '+ req.query.fname +' '+ req.query.lname);
})

app.post('/name',(req,res)=>{
  //using 'body-parser' package to make request with data as part of body of http request (post)
  res.send('Hello '+ req.body.fname +' '+ req.body.lname);
})

//sets up webserver listen port (localhost 3000 above)
app.listen(port, () => {
  //confirmation message to console
  console.log(`Example app listening at http://localhost:${port}`)
})