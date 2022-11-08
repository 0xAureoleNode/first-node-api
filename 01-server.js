const http = require('http');

// choose which port our web should listen to for requests
// process is a global object with information about the currently running process
const port = process.env.PORT || 1337;

// create a HTTP server object
// accept a single argument : a request listener function
// res => send data back to the browser
const server = http.createServer((req, res) => res.end('hi'));

// allow server object to listen for requests on a particular port
server.listen(port);
console.log(`Server listening on port ${port}`);
