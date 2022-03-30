const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './backend/db/migrations' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './backend/db/dev.db3' },
    seeds: { directory: './backend/db/seeds' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './backend/db/test.db3' },
  },
}
