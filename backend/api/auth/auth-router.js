const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()

const User = require('../users/users-model')

const uniqueUsername = require('../middleware/unique-username')
const usernameExists = require('../middleware/username-exists')

const secret = process.env.SECRET || 'the secret'

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  }
  const options = {
    expiresIn: '1d',
  }
  return jwt.sign(payload, secret, options)
}

router.post('/register', uniqueUsername, async (req, res, next) => {
  try {
    const { username, password } = req.body
    const newUser = await User.insert({
      username,
      password: bcrypt.hashSync(password, 8),
    })
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
})

router.post('/login', usernameExists, async (req, res, next) => {
  try {
    const { body: { password }, user } = req
    if (bcrypt.compareSync(password, user.password)) {
      res.json({ message: `welcome, ${user.username}`, token: generateToken(user) })
    } else {
      next({ status: 401, message: 'invalid credentials' })
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
