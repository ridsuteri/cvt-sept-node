const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log('incoming request>>>', req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log('outgoing response>>>', res);
  res.end('Riddhi');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});