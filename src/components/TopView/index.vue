<template>
  <div class="top_view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders></total-orders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users></today-users>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users></total-users>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales/index.vue'
import TodayUsers from '../TodayUsers/index.vue'
import TotalUsers from '../TotalUsers/index.vue'
import TotalOrders from '../TotalOrders/index.vue'
export default {
  name: 'TopView',
  components: {
    TotalSales,
    TodayUsers,
    TotalUsers,
    TotalOrders
  }
}
</script>
