const http = require('http');
const port = 3000;
const requestHandler = (req, res) => {
    res.end('🚀 Aplicación desplegada automáticamente con AWS Pipeline');
};
const server = http.createServer(requestHandler);
server.listen(port, '0.0.0.0',() => {
    console.log(`funciona Servidor corriendo en puerto '0.0.0.0' ${port}`);
});