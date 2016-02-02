var appEnv = require('cfenv').getAppEnv();

var localilator = require('./localilator');

var http = require('http');

var hostname = appEnv.bind;
var port = appEnv.port;
var visitor = 0; 
http.createServer(function(req, res) {
    var l = localilator(req);
  res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
  res.end('Today: ' + l.date({month:"long",year:"numeric",weekday:"long",day:"numeric"}).format(new Date()) + '\n'
      +'Visitor: ' + l.number({}).format(++visitor) + '\n'
      +l.languages+'\n'
      +'\n'
      +'\n'
      +'See: https://github.com/srl295/localilator\n');
}).listen(port, hostname, function() {
  console.log('Server running at ' + appEnv.url);
});
