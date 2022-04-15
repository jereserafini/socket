const express = requiere('express')
const { Server: HttpServer } = requiere('http');
const { Server: IOServer } = requiere('socket.io');

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const PORT = 8080

const connectedServer = httpServer.listen( PORT, function () {
    console.log(`Servidor Http con Websockets escuchando en el puerto ${connectedServer.address().port}`);
})

connectedServer.on('error', errpr => console.log(`Error en el servidor ${error}`))