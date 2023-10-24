const http = require('http');
const express = require('express');

const UsuarioController = require('./UsuarioController');
const User = require('./User');

const app = express();
const server = http.createServer(app);

app.use(express.static('public')); // Serve static files (HTML, CSS)

app.get('/', (req, res) => {
  // Render your login page here
});

// Define routes for handling login and user creation

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
