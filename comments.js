//create web server
const express = require('express');
const app = express();
const port = 3000;

//create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//create a route
app.get('/comments', (req, res) => {
  res.send('Comments page');
});

//create a route
app.get('/about', (req, res) => {
  res.send('About page');
});

//create a route
app.get('/contact', (req, res) => {
  res.send('Contact page');
});

//listen to port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Path: server.js
//create web server
const express = require('express');
const app = express();
const port = 3000;

//create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//create a route
app.get('/comments', (req, res) => {
  res.send('Comments page');
});

//create a route
app.get('/about', (req, res) => {
  res.send('About page');
});

//create a route
app.get('/contact', (req, res) => {
  res.send('Contact page');
});

//listen to port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Path: about.js
//create web server
const express = require('express');
const app = express();
const port = 3000;

//create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//create a route
app.get('/comments', (req, res) => {
  res.send('Comments page');
});

//create a route
app.get('/about', (req, res) => {
  res.send('About page');
});

//create a route
app.get('/contact', (req, res) => {
  res.send('Contact page');
});

//listen to port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Path: contact.js
//create web server
const express = require('express');
const app = express();
const port = 3000;

//create a route
app.get('/', (req, res) => {