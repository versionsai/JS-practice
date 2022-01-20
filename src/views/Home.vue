<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '../components/TopView/index.vue'
import SalesView from '../components/SalesView/index.vue'
import BottomView from '../components/BottomView/index.vue'
import MapView from '../components/MapView/index.vue'
export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
