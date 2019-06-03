import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dialog from './untils/dialog.js';

Vue.use(dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
