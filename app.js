const http = require('http');
const url = require('url');
const querystring = require('querystring');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/v1/hospital') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const postData = querystring.parse(body);
      const { name, dob, username } = postData;

      // Rest of the validation and processing logic
      // ...

      // Mock scenario: Generate unique ID and date of joining
      const id = Math.floor(Math.random() * 1000) + 1;
      const doj = new Date().toLocaleDateString('en-GB');

      // Create user object
      const newUser = { id, name, dob, doj, username };

      // Mock response
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
