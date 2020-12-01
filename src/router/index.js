import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/login/index.vue';
import layout from '@/layout/index.vue';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/home',
      name: 'home',
      meta: {
        hideInMenu: true,
        title: '首页',
        notCache: true,
        icon: 'iconhome',
        flag: true,
      },
      component: layout,
      children: [{
        path: '/home',
        component: () => import('@/views/home/index'),
        name: 'home',
        meta: {
          title: 'home',
          icon: 'home',
        }
      }]
    },
  ]
})
