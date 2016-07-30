var express = require('express');
var app = express();

app.use(express.static('build'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.ENV.port || 8080, function () {
  console.log('Example app listening on port 8080!');
});
