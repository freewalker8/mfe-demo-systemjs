<template>
  <div id="app">
    <el-tabs v-model="activeName">
      <el-tab-pane name="logAccess">
        <span slot="label">          
          <router-link to="/log-access"><i class="el-icon-tickets"></i> 访问日志</router-link>
        </span>
      </el-tab-pane>
      <el-tab-pane name="logLogin">
        <span slot="label">          
          <router-link to="/log-login"><i class="el-icon-tickets"></i> 登录日志</router-link>
        </span>
      </el-tab-pane>
    </el-tabs>   
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Tabs, 
  TabPane, 
  Table, 
  TableColumn
} from 'element-ui';

Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Table);
Vue.use(TableColumn);

export default {
  name: 'MfeLog',
  data() {
    return {
      activeName: 'logAccess'
    }
  },
  mounted() {
    this.linkToPage();
  },
  methods: {
    linkToPage() {
      const name = this.$router.currentRoute.name;
      if (name) {
        this.activeName = name;
        this.$router.push({name: this.activeName});
      } else {
        setTimeout(this.linkToPage, 100);
      }
    }
  }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
