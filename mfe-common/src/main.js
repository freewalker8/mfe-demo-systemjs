import Vue from 'vue';

import './set-public-path';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

if (process.env.NODE_ENV !== 'mfe') {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
}
