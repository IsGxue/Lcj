
import {
  login
} from '../../api/user'

const state = {
  token: '',
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
        commit('SET_TOKEN', data.response.result.token)
        console.log(response)
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
