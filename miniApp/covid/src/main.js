import Vue from 'vue'
import App from './App'
import QQMapWX from './utils/qqmap.min.js'

Vue.config.productionTip = false
Vue.prototype.$map =  new QQMapWX({
  key: 'B46BZ-TDXKW-Q5WRQ-OIKGT-UCW4K-6QBXD'
});

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
