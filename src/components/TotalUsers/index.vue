<template>
  <div>
    <common-card title="累计用户数" value="1,870,30">
      <template>
        <div
          id="total_users_chart"
          :style="{ height: '100%', width: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <div class="total_users_footer">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase"></div>
          <span class="month">月同比</span>
          <span class="emphasis">7.33%</span>
          <div class="decrease"></div>
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
      const chartDom = document.getElementById('total_users_chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        xAxis: {
          type: 'value',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            data: [250],
            stack: '总量',
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            type: 'bar',
            data: [100],
            stack: '总量',
            itemStyle: {
              color: '#eee'
            }
          },
          {
            type: 'custom',
            data: [250],
            stack: '总量',
            renderItem: (params, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])
              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d:
                        'M524.096 753.088l342.912-395.584a16 16 0 0 0-12.032-26.496H169.024a16 16 0 0 0-12.032 26.496l343.04 395.52a16 16 0 0 0 24.064 0z',
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d:
                        'M499.904 270.912l-342.912 395.584a16 16 0 0 0 12.032 26.496H855.04a16 16 0 0 0 12.032-26.496l-342.912-395.52a16 16 0 0 0-24.192 0z',
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  }
                ]
              }
            }
          }
        ]
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.total_users_footer {
  display: flex;
  align-items: center;
}
.month {
  margin-left: 10px;
}
.increase {
  margin: 0 0 6px 5px;
  width: 0;
  height: 0;
  border-width: 6px;
  border-color: transparent transparent red transparent;
  border-style: solid;
}
.decrease {
  margin: 6px 0 0 5px;
  width: 0;
  height: 0;
  border-width: 6px;
  border-color: green transparent transparent transparent;
  border-style: solid;
}
</style>
