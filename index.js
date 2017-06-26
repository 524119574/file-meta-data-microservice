var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer();

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/upload/', upload.any(), function (req, res) {
  res.json(req.files[0]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});