/**
 * @description 存储配置
 */

const {isProd} = require('../utils/env')

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
}

let MYSQL_CONF = {
  host: 'localhost',
  dialect: 'mysql',
  user: 'root',
  password: 'rootroot',
  port: '3306',
  database: 'koa_weibo_db'
}

// 线上配置
// if(isProd) {
//   REDIS_CONF = {
//     port: 6379,
//     host: '127.0.0.1'
//   }
//   MYSQL_CONF = {
//     host: 'localhost',
//     dialect: 'mysql',
//     user: 'root',
//     password: 'rootroot',
//     port: '3306',
//     database: 'koa_weibo_db'
//   }
// }


module.exports = {
  REDIS_CONF,
  MYSQL_CONF
}