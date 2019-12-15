const user = {
  // 因为模块化了，所以解决刷新问题的代码需要改造一下
  // 全局 state 对象，用于保存所有组件的公共数据
  state: sessionStorage.getItem('userState') ? JSON.parse(sessionStorage.getItem('userState')) : {
    // 定义一个 user 对象
    // 在组件中是通过 this.$store.state.user 来获取
    user: {
      username: ''
    }
  },
  // 实时监听 state 值的最新状态，注意这里的 getters 可以理解为计算属性
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  // 定义改变 state 初始值的方法，这里是唯一可以改变 state 的地方，缺点是只能同步执行
  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  },
  // 定义触发 mutations 里函数的方法，可以异步执行 mutations 里的函数
  actions: {
    asyncUpdateUser(context, user) {
      context.commit('updateUser', user);
    }
  }
};
export default user;
