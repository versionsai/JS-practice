<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            关键词搜索
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart_title">搜索用户数</div>
                <div class="chart_data">93.634</div>
                <v-chart :options="searchUserOption"></v-chart>
              </div>
              <div class="chart">
                <div class="chart_title">搜索用户数</div>
                <div class="chart_data">193.434</div>
                <v-chart :options="searchUserOption"></v-chart>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column></el-table-column>
              </el-table>
              <el-pagination></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <v-chart :options="categoryOptions"></v-chart>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomView',
  data () {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 600
        },
        series: [
          {
            type: 'line',
            data: [
              100,
              200,
              400,
              200,
              310,
              203,
              530,
              100,
              200,
              400,
              200,
              310,
              210,
              100
            ],
            areaStyle: {
              color: 'rgba(95,187,255,.5)'
            },
            lineStyle: {
              color: 'rgb(95,187,255)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      searchNumOption: {},
      tableData: [],
      radioSelect: '品类',
      categoryOptions: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-view {
  margin-top: 20px;
  display: flex;
  .view {
    width: 50%;
    flex: 1;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
  }
  .title-wrapper {
    display: flex;
    align-items: center;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    font-weight: 500;
    padding: 0 0 0 20px;
    .radio-wrapper {
      padding-right: 20px;
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
  .chart-wrapper {
    display: flex;
    flex-direction: column;
    height: 452px;
    .chart-inner {
      margin-top: 20px;
      padding: 0 10px;
      display: flex;
      .chart {
        padding: 0 10px;
        flex: 1;
        &_title {
          font-size: 14px;
          color: #999;
        }
        &_data {
          letter-spacing: 2px;
          font-size: 22px;
          font-weight: 500;
          color: #333;
        }
        .echarts {
          height: 50px;
        }
      }
    }
  }
}
</style>
