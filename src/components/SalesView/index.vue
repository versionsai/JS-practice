<template>
  <v-chart :option="data" />
</template>

<script>
export default {
  name: 'SalesView',
  components: {},
  provide: {},
  data () {
    return {
      data: {
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            data: [100, 200, 300, 400]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  height: 400px;
}
</style>
