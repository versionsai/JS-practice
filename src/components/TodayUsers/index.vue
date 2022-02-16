<template>
  <div>
    <common-card title="今日交易用户量" value="215,210,30">
      <template>
        <!-- <div
          id="today_users_chart"
          :style="{ height: '100%', width: '100%' }"
        ></div> -->
        <v-chart :options="getOptions()"></v-chart>
      </template>
      <template v-slot:footer>
        <div>
          <span>退货率</span>
          <span class="emphasis">4.13%</span>
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
  methods: {
    getOptions () {
      return {
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          data: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00'
          ],
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
            type: 'bar',
            areaStyle: {
              color: 'purple'
            },
            smooth: true,
            barWidth: '60%'
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }
      }
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped></style>
