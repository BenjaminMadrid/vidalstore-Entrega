const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify([
    { id: 1, titulo: "Colo-Colo 1991: La Copa Eterna", precio: 29990 },
    { id: 2, titulo: "Super Arturo Simulator", precio: 19990 }
  ]));
});

server.listen(3001, () => {
  console.log('Microservicio de Catálogo corriendo en http://localhost:3001');
});