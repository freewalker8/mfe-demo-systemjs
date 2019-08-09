<template>
  <div class="home">
    <h1>用户管理页面</h1>
    <div>
      <button @click="addUser()" type="button" class="btn btn-success">添加</button>
      <button type="button" class="btn btn-danger">删除</button>
    </div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th class="col-sm-2">#</th>
            <th class="col-sm-3">账户</th>
            <th class="col-sm-3">邮箱</th>
            <th class="col-sm-4">最后登录</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.username">
            <td scope="row" class="col-sm-2">{{index + 1}}</td>
            <td class="col-sm-3">{{user.username}}</td>
            <td class="col-sm-3">{{user.email}}</td>
            <td class="col-sm-4">{{user.latestLogin}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Router from 'vue-router';
import { mapGetters } from 'vuex';

export default {
  name: 'UserMgt',
  data: () => {
    return {
    }
  },
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    addUser: function () {
      console.log(this.getUser)
      this.$router.push('/user-add')
    }
  }
};
</script>

<style lang="less">
.table{
  th{
    text-align:left;
  }
  td{
    text-align: left;
  }
}
</style>
