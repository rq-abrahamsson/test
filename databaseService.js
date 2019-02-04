const knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'robin.abrahamsson',
    database: 'todo-api'
  },
  searchPath: ['knex', 'public'],
});

const getAllTodos = () => {
  return knex.select().from('todos')
}

const getTodo = id => {
  return knex.select().from('todos').where({
    id
  })
}

const insertTodo = todo => {
  return knex('todos')
    .returning(['id', 'name', 'isComplete'])
    .insert(todo)
}

const updateTodo = (id, todo) => {
  return knex('todos')
    .returning(['id', 'name', 'isComplete'])
    .update(todo).where({
      id
    })
}

const deleteTodo = id => {
  return knex('todos')
    .returning(['id', 'name', 'isComplete'])
    .where({
      id
    }).del()
}

module.exports = {
  getAllTodos,
  getTodo,
  insertTodo,
  updateTodo,
  deleteTodo
}