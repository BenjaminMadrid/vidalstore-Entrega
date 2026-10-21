const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ mensaje: "BFF de VidalStore unificando datos para el frontend" }));
});

server.listen(3000, () => {
  console.log('BFF corriendo en http://localhost:3000');
});