<template>
  <div>
    <ul class="modify-password">
      <li><label>用户名</label><el-input v-model="username" readonly></el-input></li>
      <li><label>旧密码</label><el-input v-model="password" placeholder="请输入旧密码"></el-input></li>
      <li><label>新密码</label><el-input v-model="newPassword" placeholder="请输入新密码"></el-input></li>
      <li><label>新密码确认</label><el-input v-model="newPasswordConfirm" placeholder="两次密码输入需一致"></el-input></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

import Vue from 'vue';
import {Input} from 'element-ui';

Vue.use(Input);

export default {
  name: 'ModifyPassword',
  data: () => {
    return {
      username: 'stone',
      password: '',
      newPassword: '',
      newPasswordConfirm: '',
    }
  }
};
</script>
