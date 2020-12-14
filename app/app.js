let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.post('/update-profile', function (req, res) {
  let userObj = req.body;

  // Send response
  res.send(userObj);
});

app.get('/get-profile', function (req, res) {
  res.send({})
});

app.listen(3000, function () {
  console.log("App docker9112 listening on port 3000!");
});
