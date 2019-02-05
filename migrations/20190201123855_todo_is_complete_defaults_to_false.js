exports.up = function (knex, Promise) {
  return knex.schema.alterTable('todos', function (t) {
    t.boolean('isComplete').notNull().defaultTo(false).alter()
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.alterTable('todos', function (t) {
    t.boolean('isComplete').notNull().alter()
  })

};