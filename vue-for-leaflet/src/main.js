import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'leaflet/dist/leaflet.css'
import 'leaflet'
import 'leaflet.chinatmsproviders'
import 'normalize.css'

Vue.config.productionTip = false
Vue.config.slient = true


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')