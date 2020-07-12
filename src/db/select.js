const {Blog, User} = require('./model')

!(async () => {
  const user1 = await User.findOne({
    where: {
      userName: 'zhangsan'
    }
  })

  // console.log(user1.dataValues)

  const user1Name = await User.findOne({
    attributes: ['userName', 'nickName'],
    where: {
      userName: 'zhangsan'
    }
  })
  // console.log(user1Name.dataValues)

  const blogList = await Blog.findAll({
    where: {
      userId: 1
    },
    order: [
      ['id', 'desc']
    ]
  })
  // console.log(blogList.map(item => item.dataValues))

  // 分页
  const blogPageSize = await Blog.findAll({
    limit: 2, // 限制每次查询2条
    offset: 0, // 跳过多少条
    order: [
      ['id', 'desc']
    ]
  })
  // console.log(blogPageSize.map(item => item.dataValues))

  // 查询总数
  const blogListAndCount = await Blog.findAndCountAll({
    limit: 2,
    offset: 0,
    order: [
      ['id', 'desc']
    ]
  })

  // console.log(blogListAndCount.count, blogListAndCount.rows.map(item => item.dataValues))

  // 连表查询
  const blogListWithUser = await Blog.findAndCountAll({
    order: [
      ['id', 'desc']
    ],
    include: [
      {
        model: User,
        attributes: ['userName', 'nickName'],
        where: {
          userName: 'zhangsan'
        }
      }
    ]
  })
  // console.log(blogListWithUser.count, blogListWithUser.rows.map(item => {
  //   const blogVal = item.dataValues
  //   blogVal.user = blogVal.user.dataValues
  //   return blogVal
  // }))

  const userListWithBlog = await User.findAndCountAll({
    attributes: ['userName', 'nickName'],
    include: [
      {
        model: Blog
      }
    ]
  })
  console.log(userListWithBlog.count, userListWithBlog.rows.map(item => {
    const userVal = item.dataValues
    userVal.blogs = userVal.blogs.map(item => item.dataValues) 
    return userVal
  }))

})()