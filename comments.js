// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create comments file if it doesn't exist
var commentsFile = 'comments.txt';
if (!fs.existsSync(commentsFile))
    fs.writeFileSync(commentsFile, "");

// Get all comments
app.get('/comments', (req, res) => {
    res.send(fs.readFileSync(commentsFile, 'utf8'));
});

// Add a comment
app.post('/comments', (req, res) => {
    var comment = req.body.comment;
    if (!comment) {
        res.send('No comment provided');
        return;
    }
    fs.appendFileSync(commentsFile, comment + '\n');
    res.send('Comment added');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});