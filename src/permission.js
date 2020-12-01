import router from './router'
import store from './store'

import {
  getToken
} from '@/api/storage';
router.beforeEach((to, from, next) => {
  let hasToken = getToken();
  if (!hasToken && to.path != '/login') { //未登录，强制登录
    next({
      name: "login" // 将跳转的路由path作为参数，登录成功后跳转到该路由
    });
  } else {
    next();
  }
})
