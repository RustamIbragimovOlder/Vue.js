import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import myStore from './store'

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store(myStore);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
