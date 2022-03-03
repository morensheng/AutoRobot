import Vue from 'vue';
import App from './App.vue';
import { Button, Alert, Notification } from 'element-ui';
import '../theme/index.css';
Vue.config.productionTip = false;

Vue.component('el-button', Button);
Vue.component('el-alert', Alert);
Vue.prototype.Notification = Notification;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: h => h(App),
}).$mount('#app');
