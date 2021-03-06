import Vue from 'vue'
import App from './App.vue'
import style from './scss/style.scss';
import 'bootstrap'
import VueRouter from 'vue-router'
import {routes} from './router.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
  render: h => h(App),
  style,
  router
}).$mount('#app')
