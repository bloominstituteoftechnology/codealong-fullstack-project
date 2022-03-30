const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const validate = require('./api/middleware/validate-credentials.js')
const authRouter = require('./api/auth/auth-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', validate, authRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500 || err.status).json({
    message: err.message,
  })
})

module.exports = server
