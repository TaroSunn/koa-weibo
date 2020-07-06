const Sequelize = require('sequelize')

// 连接数据库配置
const seq = new Sequelize('koa_weibo_db', 'root', 'rootroot', {
  host: 'localhost',
  dialect: 'mysql'
})

// 测试连接
// seq.authenticate().then(() => {
//   console.log('ok')
// }).catch(() => {
//   console.log('err')
// })

module.exports = seq