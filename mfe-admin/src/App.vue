<template>
  <div id="app">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="userMgt"></el-tab-pane>
      <el-tab-pane label="增加用户" name="userAdd"></el-tab-pane>
    </el-tabs>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import {Tabs, TabPane} from 'element-ui';

Vue.use(Tabs);
Vue.use(TabPane);

export default {
  name: 'MfeAdmin',
  data() {
    return {
      activeName: 'userMgt'
    }
  },
  mounted() {
    this.linkToPage();
    bus.$on('userMgtTabChange', (tabName) => {
      this.activeName = tabName;
    })
  },
  methods: {
    handleClick({name}) {
      this.$router.push({name});
    },
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
