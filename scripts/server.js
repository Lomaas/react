var express = require('express');
var app = express();
var port = process.ENV ? (process.ENV.port || 8080) : 8080;
app.use(express.static('build'));

app.get('/', function (req, res) {
  res.send('its working??');
});

var server = app.listen(port, function() {
  console.log('App listening on port %s', server.address().port);
});
