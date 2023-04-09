 //crear y configurar el servidor y la conexión a los sockets
 
 
 //import el módulo Express , creando una instancia de la app
    const express = require('express')
    const app = express()

//settings 
  //import modulo http,creat servidor HTTP ,cn el argumento d la instancia de la aplicación Express.
    const http = require('http')
    const server = http.createServer(app)

  //import el obj Server de la biblio Socket.IO, new obj de Server utlzd el servidor http.
  //función io.on se ejecuta cada vez que un cliente se conecta al servidor.
  //events chatMs d client se acti cund el clint envia msj , cnd s recib el msj s utilz io.emit pr enviar a los clnt conect
    const {Server} = require("socket.io")
    const io = new Server(server)
      io.on('connection', (socket)=>{
      socket.on('chatMensaje', (msg)=>{
      io.emit('chatMensaje', msg)
      })
    })

//archivos stats enviados al navegador / ruta y devuelve el arciho index
    app.get('/', (req, res)=>{
      res.sendFile(`${__dirname}/cliente/index.html`)
    })

    //inicar el servidor
    server.listen(3002, ()=>{
      console.log('servidor corriendo en http://localhost:3002')
    })