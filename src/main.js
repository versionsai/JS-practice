import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element'
import Echarts from 'echarts'
import VueECharts from 'vue-echarts'
import './plugins/vcharts'
import './style/index.min.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts

Vue.component('v-chart', VueECharts)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
