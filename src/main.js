import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
import ECharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.component('v-chart', ECharts)

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
