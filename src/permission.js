import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  const hasToken = store.getters.token;
  if (!hasToken && to.path != '/login') {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      } // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  } else {
    next();
  }

})
