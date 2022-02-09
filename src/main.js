import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Echarts from 'echarts'
import VueECharts from 'vue-echarts'
import './plugins/vcharts'
import './style/index.min.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts

Vue.component('v-chart', VueECharts)

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
