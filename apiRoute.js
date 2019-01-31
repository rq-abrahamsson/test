const Router = require('koa-router')
const router = new Router()

const todoItems = {}

router.get('/api/todo/', ctx => {
  ctx.body = Object.values(todoItems)
})

router.get('/api/todo/:id', ctx => {
  ctx.body = todoItems[ctx.params.id]
})

router.post('/api/todo', ctx => {
  const id = ctx.request.body.id
  todoItems[id] = ctx.request.body
  ctx.body = ctx.request.body
})

router.put('/api/todo/:id', ctx => {
  todoItems[ctx.params.id] = ctx.request.body
  ctx.body = ctx.request.body
})

router.delete('/api/todo/:id', ctx => {
  todoItems[ctx.params.id] = undefined
  ctx.body = ctx.request.body
})



module.exports = router