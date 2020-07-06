const Sequelize = require('sequelize')

const seq = require('./seq')

// 创建 Users 模型

const User = seq.define('user', {
  // id 自动创建
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickNime: {
    type: Sequelize.STRING
  }
})

// 创建 Blog模型

const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})


module.exports = {
  User,
  Blog
}