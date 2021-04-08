import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
 
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://127.0.0.1:3000',
    withCredentials: true
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
