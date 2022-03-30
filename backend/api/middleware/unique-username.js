const User = require('../users/users-model.js')

module.exports = async function (req, res, next) {
  const { username } = req.body
  const user = await User.getByUsername(username)

  if (user) {
    next({ message: 'username taken', status: 400 })
  } else {
    next()
  }
}
