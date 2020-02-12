import Vue from 'vue'
import App from './App.vue'
import router from './router'
import YmapPlugin from 'vue-yandex-maps'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'

Vue.use(YmapPlugin)
Vue.use(VueGoodTablePlugin);
Vue.use(VueGoogleMaps, {
  load: {
    // Google API key
    apiKey: 'your-google-api-key',
    // Enable more Google Maps libraries here
    libraries: ['places'],
    // Use new renderer
    useBetaRenderer: false,
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
