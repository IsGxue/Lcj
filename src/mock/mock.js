//引入mock模块
import Mock from 'mockjs';
import {
  Random,
  toJSONSchema
} from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）



Mock.mock('/.*login.*/', 'get', { //输出数据
  loginName: 'test', //随机生成姓名
  password: 23, //随机生成姓名
  //还可以自定义其他数据
});

const getdata = function (option) { //定义请求数据方法
  let datalist = [];
  var template = {
    'key|1-10': '★'
  }
  for (let i = 0; i < 20; i += 1) {
    const o = { //mockjs模拟随机生成数据，生成20条
      recipeId: Random.guid(),
      billId: Random.string(10),
      orgId: Random.string('number', 8, 10),
      Date: Random.date('yyyy-MM-dd'),
      time: Random.time('A HH:mm:ss'),
      adress: Random.county(),
      viewName: Random.cword(4, 16), // 随机生成任意名称
      personName: toJSONSchema(template),
      reason: Random.csentence(10, 32),
    }
    datalist.push(o)
  }
  return {
    data: datalist
  }
}

Mock.mock('/login',/post|get/i,getdata);
// export default Mock
