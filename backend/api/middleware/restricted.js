const jwt = require('jsonwebtoken')
const secret = process.env.SECRET || 'the secret'

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return next({ message: 'token required', status: 401 })
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      next({ message: `token invalid: ${err.message}`, status: 401 })
    } else {
      req.token = decoded
      next()
    }
  })
}
