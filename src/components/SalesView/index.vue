<template>
  <div class="sales_view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template v-slot:header>
        <div class="menu_wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales_view_menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu_right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              :picker-options="pickerOptions"
              class="sales_view_date-picker"
            ></el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales_view_chart">
          <v-chart :options="chartOptions"></v-chart>
          <div class="sales_view_list">
            <div class="sales_view_list-title">排行榜</div>
            <div class="list_item_wrapper">
              <div class="list_item" v-for="item in rankList" :key="item.no">
                <div :class="['list_item-no', +item.no <= 3 ? 'top_no' : '']">
                  {{ item.no }}
                </div>
                <div class="list_item-name">
                  {{ item.name }}
                </div>
                <div class="list_item-money">
                  {{ item.money }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SalesView',
  components: {},
  provide: {},
  data () {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick: picker => {
              const start = new Date().setTime(
                new Date().getTime() - 3600 * 24 * 1000 * 7
              )
              const end = new Date()
              picker.$emit('pick', [start, end], true)
            }
          },
          {
            text: '最近一月',
            onClick: picker => {
              const end = new Date()
              const start = new Date().setTime(
                new Date().getTime() - 3600 * 24 * 1000 * 30
              )
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三月',
            onClick: picker => {
              const start = new Date().setTime(
                new Date().getTime() - 3600 * 24 * 1000 * 90
              )
              const end = new Date()
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      chartOptions: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20
        },
        xAxis: {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data: [200, 250, 300, 200, 400, 500, 200, 900, 800, 100, 120, 300]
          }
        ],
        color: ['#3398DB'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankList: [
        {
          no: 1,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 2,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 3,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 4,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 5,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 6,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 7,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 8,
          name: '麦当劳',
          money: '323,234'
        }
      ]
    }
  },
  methods: {
    onMenuSelect (idx) {
      this.activeIndex = idx
    }
  }
}
</script>

<style lang="scss" scoped>
.sales_view {
  margin-top: 20px;
  &_menu {
    padding-left: 20px;
    width: 100%;
  }
  &_date-picker {
    margin-left: 20px;
  }
  .menu_wrapper {
    position: relative;
    display: flex;
    .menu_right {
      position: absolute;
      right: 20px;
      top: 0;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .el-menu-item {
      margin: 0 20px;
      height: 50px;
      line-height: 50px;
    }
  }
  .sales_view_chart {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 76%;
      width: 76%;
      height: 100%;
    }
  }
  &_list {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &-title {
      margin: 20px 0 0 0;
      font-size: 14px;
      color: #333;
      font-weight: 500;
    }
    .list_item_wrapper {
      margin-top: 15px;

      .list_item {
        margin-top: 10px;
        padding-right: 20px;
        display: flex;
        align-items: center;
        &-no {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .top_no {
          border-radius: 50%;
          background-color: #000;
          color: #fff;
          font-weight: 500;
        }
        &-name {
          margin-left: 10px;
          color: #333;
        }
        &-money {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>
