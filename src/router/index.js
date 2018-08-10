import store from "../store/index"
import Vue from 'vue'
import router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import detail from '@/components/detail'
import login from '@/components/login'
import loginAccount from '@/components/loginAccount'
import register from '@/components/register'
import mine from '@/components/mine/mine'
import mineChildRouter from './mine'
import index from '@/components/index'
import cate from '@/components/cate/cate'
import sell from '@/components/sell/sell'
import message from '@/components/message/message'
import help from '@/components/help/help'
import helpDetail from '@/components/help/detail'

Vue.use(router)



const Router = new router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/loginAccount',
      name: 'loginAccount',
      component: loginAccount
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/mine',

      name: 'mine',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: mine
    },
    ...mineChildRouter, //扩展运算符
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/cate',
      name: 'cate',
      component: cate
    },
    {
      path: '/sell',
      name: 'sell',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: sell
    },
    {
      path: '/message',
      name: 'message',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: message
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/help/detail',
      name: 'help/detail',
      component: helpDetail
    },

  ]
})

Router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    console.log('beforeEach获取当前的token是否存在  ' + store.state.login.token)
    if (store.state.login.token == 0) { // 通过vuex state获取当前的token是否存在
      next();
    } else if (store.state.login.token == 1) {
      store.commit("tip", {
        tipTxt: "请先登录",
        show: true
      })
      setTimeout(function () {
        store.commit("tip", {
          tipTxt: "请先登录",
          show: false
        })
      }, 1000);
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
});

export default Router;
