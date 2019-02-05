require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'robin.abrahamsson',
      database: 'todo-api'
    }
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}${process.env.NODE_ENV === 'production' ? '?ssl=require' : ''}`,
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};