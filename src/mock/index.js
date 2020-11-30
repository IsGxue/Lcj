//引入mock模块
import Mock from 'mockjs';
import {
  Random,
  toJSONSchema
} from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）



// Mock.mock('/.*login.*/', 'get', { //输出数据
//   loginName: 'test', //随机生成姓名
//   password: 23, //随机生成姓名
//   //还可以自定义其他数据
// });

const getdata = function (option) { //定义请求数据方法
  let datalist = {
    "msg": "success",
    "error": null,
    "code": 200,
    "success": true,
    "result": {
      'token': '123',
      'refreshToken': '1232'
    }
  }

  return {
    response: datalist
  }
}

Mock.mock(/.*login.*/, /post|get/i, getdata);
export default Mock.mock
