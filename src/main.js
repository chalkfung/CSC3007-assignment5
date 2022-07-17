import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueAxios from './plugins/axios'
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false
Vue.use(VueAxios)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
