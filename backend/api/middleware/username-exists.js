const User = require('../users/users-model.js')

module.exports = async function (req, res, next) {
  const { username } = req.body
  const user = await User.getByUsername(username)

  if (!user) {
    res.status(400).json({ message: 'invalid credentials' })
  } else {
    req.user = user
    next()
  }
}
