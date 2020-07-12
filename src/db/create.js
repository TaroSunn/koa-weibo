const {Blog, User} = require('./model')

!(async () => {
  // 创建用户
  const user1 = await User.create({
    userName: 'zhangsan',
    password: '123',
    nickName: '张三'
  })
  console.log(user1.dataValues)

  const user2 = await User.create({
    userName: 'lisi',
    password: '123',
    nickName: '李四'
  })

  console.log(user2.dataValues)

  // 创建博客

  const blog1 = await Blog.create({
    title: '标题一',
    content: '内容1',
    userId: user1.dataValues.id
  })

  const blog2 = await Blog.create({
    title: '标题2',
    content: '内容2',
    userId: user1.dataValues.id
  })

  const blog3 = await Blog.create({
    title: '标题3',
    content: '内容3',
    userId: user2.dataValues.id
  })

  const blog4 = await Blog.create({
    title: '标题4',
    content: '内容4',
    userId: user2.dataValues.id
  })

  console.log(blog1.dataValues)

})()