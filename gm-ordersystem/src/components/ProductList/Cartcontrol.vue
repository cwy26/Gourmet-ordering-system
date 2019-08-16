<template>
<!--按钮组件 -->
  <div class="cartcontrol">
    <!-- 减按钮 -->
    <transition name="roll">
      <div class="decrease" @click="decrease()" v-show="listItem.count">－</div>
    </transition>
    <!-- 添加购买的数量 -->
    <div class="count" v-show="listItem.count">{{listItem.count}}</div>
    <!-- 加按钮 -->
    <div class="add" @click.stop.prevent="add()">+</div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  //通过父元素传递数据过来
  props: {
    listItem: {
      type: Object
    }
  },
  //定义方法
  methods: {
    // 当点击减按钮时，数量减一
    decrease() {
      this.listItem.count--;
    },
    //如果数据库没有传来数量属性，就在全局定义一个count属性
    // 当点击加按钮时，数量自增
    add() {
      if (!this.listItem.count) {
        Vue.set(this.listItem, "count", 1);
      } else {
        this.listItem.count++;
      }
    }
  }
};
</script>
<style>

/* 添加商品的数量 */
.count {
  display: inline-block;
  font-size: 14px;
  margin: 0 4px;
}
/* 添加商品的按钮 */
.decrease,
.add {
  display: inline-block;
  border-radius: 50%;
  font-size: 14px;
  width: 20px;
  height:20px;
  text-align: center;
  line-height:19px;
  font-weight: bold;
}
.add{
  background:#FFC300;;
  color: #000;
}
.decrease{
  border: 1px solid #666666;
  color: #666666;
  box-sizing: border-box;
}
/* 点击添加商品数量时的过渡时间 */
.roll-enter-active,
.roll-leave-active {
  transition: 0.5s all linear;
}
/* 点击添加商品数量时的动画*/
.roll-enter,
.roll-leave-to {
  transform: translateX(20px) rotate(180deg);
}
</style>