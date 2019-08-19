<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <!-- <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="发现" @click.native="changeState(0)">
          <tabbaricon
            :selectedImage="require('./../assets/icon/chosen_32px/wangyiyunyinlezizhi-copy.png') "
            :normalImage="require('./../assets/icon/normal_32px/wangyiyunyinlezizhi-copy.png')"
            :focused="currentIndex[0].isSelect"
          ></tabbaricon>发现
        </mt-tab-item>
        <mt-tab-item id="视频" @click.native="changeState(1)">
          <tabbaricon
            :selectedImage="require('./../assets/icon/chosen_32px/bofang.png') "
            :normalImage="require('./../assets/icon/normal_32px/bofang1.png')"
            :focused="currentIndex[1].isSelect"
          ></tabbaricon>视频
        </mt-tab-item>
        <mt-tab-item id="我的" @click.native="changeState(2)">
          <tabbaricon
            :selectedImage="require('./../assets/icon/chosen_32px/gedanshouluON.png') "
            :normalImage="require('./../assets/icon/normal_32px/gedanshouluON.png')"
            :focused="currentIndex[2].isSelect"
          ></tabbaricon>我的
        </mt-tab-item>
      </mt-tabbar> -->
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
      // active: "发现",
      // currentIndex: [
      //   { isSelect: true },
      //   { isSelect: false },
      //   { isSelect: false },
      // ]
    };
  },
  methods: {
    // changeState(n) {
    //   //函数功能:将当前参数下标
    //   //对应数组值修改true其它修改false
    //   //1:创建循环,循环数组中内容
    //   for (var i of this.currentIndex) {
    //     i.isSelect = false;
    //   }
    //   this.currentIndex[n].isSelect = true;
    // }
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
