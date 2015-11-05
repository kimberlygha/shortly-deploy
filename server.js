var app = require('./server-config.js');
var http = require('http');


var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 4568;


app.listen(port, host);

console.log('Server now listening on port ' + port + host);
