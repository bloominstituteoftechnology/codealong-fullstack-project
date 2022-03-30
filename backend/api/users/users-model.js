const db = require('../../db/config')

async function insert(user) {
  const [id] = await db('users').insert(user)
  return db('users').where({ id }).first()
}

function getByUsername(username) {
  return db('users').where({ username }).first()
}

module.exports = {
  insert,
  getByUsername,
}
