const express = require('express')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
const apiRouter = require('./api')

const whitelist = [ "http://localhost:3000", "https://todo-list-frontend.vercel.app/"]

server.use(cors({
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1){
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}))
server.use(express.json())
server.use(cookieParser())
server.use(helmet())

const port = process.env.PORT || 8000


server.listen(port, (err) => {
  console.log(`Listening on port: ${port}`)
})


server.use('/api', apiRouter)