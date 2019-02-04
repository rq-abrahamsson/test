const Router = require('koa-router')
const router = new Router()
const databaseService = require('./databaseService')

router.get('/health', async ctx => {
  ctx.body = 'OK'
})

router.get('/api/todo/', async ctx => {
  ctx.body = await databaseService.getAllTodos()
})

router.get('/api/todo/:id', async ctx => {
  ctx.body = await databaseService.getTodo(ctx.params.id)
})

router.post('/api/todo', async ctx => {
  ctx.body = await databaseService.insertTodo(ctx.request.body)
})

router.put('/api/todo/:id', async ctx => {
  ctx.body = await databaseService.updateTodo(ctx.params.id, ctx.request.body)
})

router.delete('/api/todo/:id', async ctx => {
  ctx.body = await databaseService.deleteTodo(ctx.params.id)
})

module.exports = router