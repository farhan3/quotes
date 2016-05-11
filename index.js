var express = require('express');
var morgan = require('morgan');
var net = require('net');

var app = express();

app.use(morgan('combined'));

var quotesServer = {host: "nicksosinski.com", port: 17};

app.get('/', function(req,res) {
    var client = net.connect(quotesServer);

    client.on('data', function(data) {
       res.send(data.toString());
       client.end();
    });
});

var server = app.listen(30080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Serving quotes at http://%s:%s', host, port);
});
