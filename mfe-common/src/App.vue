<template>
  <div id="app">
    <div id="nav">
      <router-link to="/mfe_log">日志管理</router-link> |
      <router-link to="/mfe_admin">系统管理</router-link> | 
      <!-- <router-link to="/mfe_user">用户管理</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
