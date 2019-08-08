import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import './set-public-path';
import App from './App.vue';
import router from './router';

import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
