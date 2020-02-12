import Vue from 'vue'
import App from './App.vue'
import router from './router'
import YmapPlugin from 'vue-yandex-maps'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(YmapPlugin)
Vue.use(VueGoodTablePlugin);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
