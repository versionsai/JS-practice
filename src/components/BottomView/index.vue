<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">
            关键词搜索
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart">
              <div class="chart_title">搜索用户数</div>
              <div class="chart_data">93.634</div>
              <v-chart :options="searchUserOption"></v-chart>
            </div>
            <div class="chart">
              <div class="chart_title">搜索用户数</div>
              <div class="chart_data">193.434</div>
              <v-chart :options="searchNumOption"></v-chart>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover"></el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomView',
  data () {
    return {
      searchUserOption: {},
      searchNumOption: {}
    }
  }
}
</script>
