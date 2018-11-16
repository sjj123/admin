import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import error from '@/pages/error'
import main from '@/pages/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: login
    },
    {
      path: '/main',
      name: '主页',
      component: main
    },
    {
      path: '*',
      name: '404',
      component: error
    }
  ]
})
