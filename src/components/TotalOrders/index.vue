<template>
  <div>
    <common-card title="累计订单量" value="2157,212,21">
      <template>
        <div
          id="total_orders_chart"
          :style="{ height: '100%', width: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <div>
          <span>昨日订单量</span>
          <span class="emphasis">200,000,00</span>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  components: {},
  mixins: [commonCardMixin],
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {
    const that = this
    that.$nextTick(() => {
      const chartDom = document.getElementById('total_orders_chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            data: [
              10,
              100,
              320,
              400,
              500,
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              932,
              901,
              934,
              1290
            ],
            type: 'line',
            lineStyle: { width: '0' },
            itemStyle: { opacity: '0' },
            areaStyle: {
              color: 'purple'
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }
      })
    })
  }
}
</script>
<style lang="scss" scoped></style>
