// const server = require('./server')
const express = require('express')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
const apiRouter = require('./api')


server.use(cors())
server.use(express.json())
server.use(cookieParser())
server.use(helmet())

const port = process.env.PORT || 8000


server.listen(port, (err) => {

  console.log(`Listening on port: ${port}`)
})




server.use('/api', apiRouter)