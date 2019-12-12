import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login"
import Main from '../views/Main'
import UserAdd from '../views/user/Add'
import UserList from '../views/user/List'

Vue.use(Router);
export default new Router({
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          // 登录页
          path: '/user/add',
          name: 'UserAdd',
          component: UserAdd
        },
        {
          // 登录页
          path: '/user/list',
          name: 'UserList',
          component: UserList
        }
      ]
    }
  ]
});
