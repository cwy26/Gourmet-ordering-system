<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <xds-tabbar></xds-tabbar>
    </div>
  </div>
</template>
<script>
import TabBarIcon from "../components/common/TabBarIcon.vue";
import Tabbar from "@/components/Tabbar"
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    tabbaricon: TabBarIcon,
    "xds-tabbar": Tabbar
  }
};
</script>
<style scoped>
/*最外层父元素index.vue*/
.page-tabbar {
  overflow: hidden; /*溢出隐藏*/
}
.page-wrap {
  width: 100%;
  height: 736px;
  background-color: var(--red); /* #d33a33 */
  overflow: auto; /*溢出显示轮动条*/
  box-sizing: border-box;
  padding-bottom: 60px;
}
/*修改 tabbar 默认文字颜色*/
.mint-tabbar > .mint-tab-item {
  color: #999999;
}
/*修改默认tab选中文字样式*/
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: var(--red);
}
</style>
