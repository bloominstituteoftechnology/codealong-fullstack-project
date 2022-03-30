const server = require('./backend/server')

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
