import Vue from 'vue';

import './set-public-path';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/bus'; // 全局事件处理

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

if (process.env.NODE_ENV !== 'mfe') {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
}
