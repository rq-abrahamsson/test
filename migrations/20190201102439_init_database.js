exports.up = function (knex, Promise) {
  return knex.schema.createTable('todos', function (t) {
    t.increments('id').unsigned().primary()
    t.text('name').notNull()
    t.boolean('isComplete').notNull()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('todos')
}