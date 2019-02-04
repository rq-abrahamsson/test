const knex = require('knex')({
  client: 'pg',
  connectionString: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : 'postgresql://robin.abrahamsson:@127.0.0.1:5432/todo-api',
  ssl: true,
  searchPath: ['knex', 'public'],
})


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