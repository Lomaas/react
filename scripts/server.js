var express = require('express');
var app = express();
var port = process.ENV ? (process.ENV.port || 8080) : 8080;
app.use(express.static('build'));

app.listen(port, function () {
  console.log('Example app listening on port 8080!');
});
