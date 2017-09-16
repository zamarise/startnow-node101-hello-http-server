// Importing code from http module (library)
const http = require('http');

// Create server
const server = http.createServer(function(req, res) {
  // Set the status and headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the body of the response
  res.end('Hello World');
});

// Make server listen on port 8080
// (if have multiple ip addresses then can write after comma;
// will always be localhost so this information is redundant)
server.listen(8080, '127.0.0.1');

// Show server running in terminal
// and as being reachable at 127.0.0.1 (localhost)
// (localhost is the ip address of 'this machine')
console.log('Server running at http://127.0.0.1:8080/');
