const {User} = require('./model')

!(async () => {
  const updateRes = await User.update({
    nickName: '张三',
  }, {
    where: {
      userName: 'zhangsan'
    }
  })
  console.log(updateRes[0] > 1)
})()