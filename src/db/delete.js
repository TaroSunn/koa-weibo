const {User, Blog} = require('./model')

!(async () => {
  const delBlogRes = await Blog.destroy({
    where: {
      id: 4
    }
  })
  console.log(delBlogRes)

  const delUserRes = await User.destroy({
    where: {
      id: 1
    }
  })
  console.log(delUserRes)
})()