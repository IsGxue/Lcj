import {
  login
} from '../../api/user'

import {
  getToken,
  setToken,
  removeToken
} from '@/api/storage'
const state = {
  token: getToken(),
}

const mutations = {
  SET_TOKEN: (state, token) => state.token = token
}

const actions = {
  login({
    commit
  }, userInfo) {
    const {
      loginName,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
        loginName: loginName.trim(),
        password: password
      }).then(response => {
        const {
          data
        } = response
        setToken('TOKEN', data.response.result.token)
        setToken('REFRESHTOKEN', data.response.result.refreshToken);
        // console.log(response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
