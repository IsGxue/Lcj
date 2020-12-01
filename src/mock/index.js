//引入mock模块
import Mock from 'mockjs';
import user from './modules/uesr'
import {
  Random,
  toJSONSchema
} from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）


const mocks = [...user]

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


fnCreate(user)
function fnCreate(){
  mocks.forEach(item=>{
    debugger
    if(item.open){
      Mock.mock(new RegExp(item.url), item.type.toLowerCase() || 'get', XHR2ExpressReqWrap(item.response))
    }
  })
}


function XHR2ExpressReqWrap(respond) {
  return function(options) {
    let result = null
    if (respond instanceof Function) {
      const { body, type, url } = options
      
      result = respond({
        method: type,
        body: JSON.parse(body),
        query: param2Obj(url)
      })
    } else {
      result = respond
    }
    return Mock.mock(result)
  }
}





Mock.mock(/.*login.*/, /post|get/i, getdata);
export default Mock.mock
