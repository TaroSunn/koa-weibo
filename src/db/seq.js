/**
 * @description sequelize连接数据库
 */
const Sequelize = require('sequelize')
const {MYSQL_CONF} = require('../conf/db')
const {isProd, isTest} = require('../utils/env')


const {host, user, password, database, dialect} = MYSQL_CONF

const conf = {
  host,
  dialect
}

if(isTest) {
  conf.logging = () => {}
}

if(isProd) {
  conf.poof = {
    max: 5, // 连接池最大数量
    min: 0, // 最小数量
    idle: 10000, // 10s内不使用释法
  }
}


// 连接数据库配置
const seq = new Sequelize(database, user, password, conf)


// 测试连接
// seq.authenticate().then(() => {
//   console.log('ok')
// }).catch(() => {
//   console.log('err')
// })

module.exports = seq