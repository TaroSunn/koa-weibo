/**
 * @description 链接redis
 */

const redis = require('redis')
const {REDIS_CONF: {port, host}} = require('./_redis')

// 创建客户端

const redisClient = redis.createClient(port, host)

redisClient.on('error', () => {
  console.error('redis error', err)
})

/**
 * redis set
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} timeout 过期时间 单位s
 */
const set = (key, val, timeout = 60 * 60) => {
  if(typeof val === 'object') {
    val = JSON.stringify(val)
  }
  redisClient.set(key, val)
  redisClient.expire(key, timeout)
}

/**
 * redis get
 * @param {string} key 键
 */
const get = (key) => {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if(err) {
        reject(err)
        return
      }
      if(val == null) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(val))
      } catch (error) {
        resolve(val)
      }

    })
  })
  return promise
}

module.exports = {
  set,
  get
}