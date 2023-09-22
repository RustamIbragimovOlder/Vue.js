import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from '@/router'
import myStore from '@/store'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store(myStore);
const router = new VueRouter({ mode: 'history', routes })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
