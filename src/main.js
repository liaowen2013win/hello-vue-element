import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App'
import store from './store'
// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入 Vuex，状态管理
import Vuex from 'vuex'
// 异步请求
import axios from 'axios'
// 原型链
Vue.prototype.axios = axios;

// 安装路由
Vue.use(VueRouter);
// 安装 ElementUI
Vue.use(ElementUI);
// 安装 Vuex
Vue.use(Vuex);

router.beforeEach((to, from, next) => {
  // 获取用户登录状态
  let isLogin = sessionStorage.getItem('isLogin');
  // 注销
  if (to.path == '/logout') {
    // 清空
    sessionStorage.clear();
    // 跳转到登录
    next({path: '/login'});
  }
  // 如果请求的是登录页
  else if (to.path == '/login') {
    if (isLogin != null) {
      // 跳转到首页
      next({path: '/main'});
    }
  }
  // 如果为非登录状态
  else if (isLogin == null) {
    // 跳转到登录页
    next({path: '/login'});
  }
  // 下一个路由
  next();
});

let vm = new Vue({
  el: '#app',
  // 启用路由
  router,
  // 启用 ElementUI
  render: h => h(App),
  // 启用vuex状态存储
  store
});
