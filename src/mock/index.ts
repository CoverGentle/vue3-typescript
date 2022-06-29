// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require('mockjs')
const Random = Mock.Random
Mock.mock(/\/test\/test/, 'get', {
  code: 200,
  message: '消息成功',
  data:
  {
    id: '@increment',
    timestamp: Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5,10)',
    content_short: '我是测试数据'
  }
})

export default Mock
