/**
 * @description json test
 */

const server = require('./server')

test('测试/json接口', async() => {
  const res = await server.get('/json')
  expect(res.body).toEqual({
    title: 'koa2 json'
  })
  expect(res.body.title).toBe('koa2 json')
})