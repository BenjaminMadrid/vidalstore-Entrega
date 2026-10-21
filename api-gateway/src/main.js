const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Credentials': 'true'
  });
  res.end(JSON.stringify({ estado: "API Gateway de VidalStore operando correctamente" }));
});

server.listen(8080, () => {
  console.log('API Gateway corriendo en http://localhost:8080');
});