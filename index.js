// const server = require('./server')
const express = require('express')
const server = express()

const apiRouter = require('./api')

server.use(express.json())

const port = process.env.PORT || 8000


server.listen(port, (err) => {

  console.log(`Listening on port: ${port}`)
})




server.use('/api', apiRouter)