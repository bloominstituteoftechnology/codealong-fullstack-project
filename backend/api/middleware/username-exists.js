const User = require('../users/users-model.js')

module.exports = async function (req, res, next) {
  const { username } = req.body
  const user = await User.getByUsername(username)

  if (!user) {
    next({ message: 'invalid credentials', status: 401 })
  } else {
    req.user = user
    next()
  }
}
