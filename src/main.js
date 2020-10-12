import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(ElementUI)
// Vue.use(VueAxios, axios)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
