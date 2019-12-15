<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App',
    mounted() {
      window.addEventListener('unload', this.saveState);
    },
    methods: {
      saveState() {
        // sessionStorage.setItem('state', JSON.stringify(this.$store.state));
        // 模块化后，调用 state 的代码修改为 this.$store.state.user。将user对象转成JSON
        sessionStorage.setItem('userState', JSON.stringify(this.$store.state.user));
      }
    }
  }
</script>
