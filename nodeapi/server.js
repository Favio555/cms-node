const http = require('http');
const app = require ('./app');

const puerto =process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(puerto);