<template>
  <div>
    <common-card title="累计销售额" value="¥ 334324324">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">7.33%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div>
          <span>昨日销售额</span>
          <span class="emphasis">&yen; 300000000</span>
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
  mounted () {}
}
</script>
<style lang="scss" scoped>
span {
  font-size: 12px;
}
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
}
</style>
