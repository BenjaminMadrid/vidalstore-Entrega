const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    mensaje: "Microservicio de Licencias operativo",
    biblioteca: [{ licenciaId: "lic-001", juegoId: 1, estado: "activa" }]
  }));
});

server.listen(3002, () => {
  console.log('Microservicio de Licencias corriendo en http://localhost:3002');
});