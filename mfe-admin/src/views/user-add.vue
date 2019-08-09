<template>
  <div class="about">
    <h1>添加用户页面</h1>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">账户</label>
        <div class="col-sm-10">
          <input type="text" v-model='username' class="form-control" id="inputEmail3" placeholder="账户">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">邮箱</label>
        <div class="col-sm-10">
          <input type="email" v-model='email' class="form-control" id="inputPassword3" placeholder="邮箱">
        </div>
      </div>      
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" @click="addUser" class="btn btn-info">添加</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Message } from 'element-ui';
import Vue from 'vue';

Vue.use(Message);

export default {
  name: 'UserAdd',
  data: () => {
    return {
      username: '',
      email: '',
    }
  },
  methods: {
    addUser() {
      const params = {username: this.username, email: this.email, latestLogin: new Date().getUTCDate()};
      console.log('params', params)
      this.$store.commit('addUser', params);
      Message.success({message: '添加成功'});
    }
  }
}
</script>
