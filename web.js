var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World');
   
   var buf= new Buffer(256);
    buf = fs.readFileSync("index.html");
    response.send(buf.toString('utf8'));


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
