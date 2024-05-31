//create web server
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

//set up server
app.use(express.static('public'));

//get request
app.get('/comments', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      console.log(err);
      res.send('error');
    }
    else {
      res.send(data);
    }
  });
});

//post request
app.post('/comments', (req, res) => {
  let newComment = {
    name: req.query.name,
    comment: req.query.comment
  };
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      console.log(err);
      res.send('error');
    }
    else {
      let comments = JSON.parse(data);
      comments.push(newComment);
      fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
        if (err) {
          console.log(err);
          res.send('error');
        }
        else {
          res.send('success');
        }
      });
    }
  });
});

//listen on port 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
});