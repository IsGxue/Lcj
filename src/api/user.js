import request from './axios'

export function login(data) {
  return request({
    url: '/login',
    method: 'get',
    params:data
  })
}

export default login