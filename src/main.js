import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueAxios from './plugins/axios'
Vue.config.productionTip = false
Vue.use(VueAxios)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
