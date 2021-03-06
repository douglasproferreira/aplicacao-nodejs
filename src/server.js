const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb://douglasp:douglas123@ds053778.mlab.com:53778/projetoweb', {
    useNewUrlParser: true
})

const server = require('http').Server(app)

const io = require('socket.io')(server)

app.use((req, res, next) => {
    req.io = io

    return next()
})

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
  
app.listen(port, () => console.log(`Listening on port ${port}`));