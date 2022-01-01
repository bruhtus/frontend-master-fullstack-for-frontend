const http = require('http');

const PORT = 8080;

http.createServer(function (req, res) {
  res.write('Hello world');
  res.end()
}).listen(PORT);

console.log(`Server started! Listening on port ${PORT}`);
