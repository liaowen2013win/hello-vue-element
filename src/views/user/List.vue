<template>
  <div>
    用户列表
  </div>
</template>

<script>
  export default {
    name: "List",
    beforeRouteEnter: (to, from, next) => {
      console.log("准备进入页面");
      next(vm => {
        vm.getData();
      });
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("准备离开页面");
      next();
    },

    methods: {
      getData: function () {
        this.axios({
          type: 'get',
          url: 'http://localhost:8080/static/data.json'
        }).then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped>

</style>
