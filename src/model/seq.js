const Sequelize = require('sequelize')

const conf = {
  host: 'localhost',
  dialect: 'mysql'
}

// conf.poof = {
//   max: 5, // 连接池最大数量
//   min: 0, // 最小数量
//   idle: 10000, // 10s内不使用释法
// }

// 连接数据库配置
const seq = new Sequelize('koa_weibo_db', 'root', 'rootroot', conf)


// 测试连接
// seq.authenticate().then(() => {
//   console.log('ok')
// }).catch(() => {
//   console.log('err')
// })

module.exports = seq