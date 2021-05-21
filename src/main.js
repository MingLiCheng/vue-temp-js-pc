import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'
import directives from './directives'
Vue.config.productionTip = false
console.log('filters', filters, 'directives', directives)

Vue.use(filters)
Vue.use(directives)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
